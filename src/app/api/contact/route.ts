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

  const { error } = await resend.emails.send({
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
  });

  if (error) {
    console.error("Resend error:", error);
    return NextResponse.json(
      { message: "Failed to send message. Please try again or contact us directly." },
      { status: 500 }
    );
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
