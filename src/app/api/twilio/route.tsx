export const dynamic = "force-dynamic"; // defaults to auto
export const runtime = "edge";

export async function GET() {
  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>
    <Response>
        <Dial>
            <Number>+13165198180</Number>
        </Dial>
    </Response>
    `,
    {
      headers: {
        "Content-Type": "text/xml",
      },
    }
  );
}
