import { getRequestContext } from "@cloudflare/next-on-pages";
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "edge";

export async function POST(request: NextRequest): Promise<NextResponse> {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ message: "Invalid request body" }, { status: 400 });
  }

  const { name, email, message, _honeypot } = body as Record<string, string>;

  // Honeypot: bots fill this hidden field; humans leave it blank
  if (_honeypot) {
    // Return 200 to not reveal the trap to bots
    return NextResponse.json({ message: "Message received" }, { status: 200 });
  }

  if (typeof name !== "string" || name.trim().length === 0) {
    return NextResponse.json({ message: "Name is required" }, { status: 400 });
  }

  if (typeof email !== "string" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ message: "A valid email address is required" }, { status: 400 });
  }

  if (typeof message !== "string" || message.trim().length === 0) {
    return NextResponse.json({ message: "Message is required" }, { status: 400 });
  }

  const { env } = getRequestContext();
  const resend = new Resend(env.RESEND_API_KEY);

  // Send notification email to info@clksoftware.dev and auto-responder to user in parallel
  const [notificationError, responderError] = await Promise.all([
    resend.emails
      .send({
        from: "CLK Software Website <contact@clksoftware.dev>",
        to: ["info@clksoftware.dev"],
        replyTo: email,
        subject: `New inquiry from ${name.trim()}`,
        text: `Name: ${name.trim()}\nEmail: ${email.trim()}\n\n${message.trim()}`,
        html: `
          <p><strong>Name:</strong> ${escapeHtml(name.trim())}</p>
          <p><strong>Email:</strong> <a href="mailto:${escapeHtml(email.trim())}">${escapeHtml(email.trim())}</a></p>
          <hr />
          <p>${escapeHtml(message.trim()).replace(/\n/g, "<br />")}</p>
        `,
      })
      .then((res) => res.error ?? null),
    resend.emails
      .send({
        from: "CLK Software <info@clksoftware.dev>",
        to: [email],
        subject: "Thanks for reaching out — CLK Software",
        html: `
          <p>Hi ${escapeHtml(name.trim())},</p>
          <p>Thanks for getting in touch. We received your message and we're looking forward to connecting with you.</p>
          <p>We typically respond within 24 business hours. In the meantime, feel free to check out <a href="https://clksoftware.dev/blog">our blog</a> for technical insights and project strategy articles.</p>
          <p>Talk soon,</p>
          <p style="font-family: cursive; font-size: 1.2em;">Chris</p>
          <p style="font-size: 0.85em; color: #999;">CLK Software<br />info@clksoftware.dev<br />316 665 7496</p>
        `,
      })
      .then((res) => res.error ?? null),
  ]);

  if (notificationError) {
    console.error("Resend notification error:", notificationError);
    return NextResponse.json(
      { message: "Failed to send message. Please try again or contact us directly." },
      { status: 500 }
    );
  }

  // Log auto-responder errors but don't fail the request — the notification was sent successfully
  if (responderError) {
    console.error("Resend auto-responder error:", responderError);
  }

  return NextResponse.json({ message: "Message sent successfully" }, { status: 200 });
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
