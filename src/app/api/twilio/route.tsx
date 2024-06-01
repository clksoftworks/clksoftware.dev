import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  return new NextResponse(
    `<?xml version="1.0" encoding="UTF-8"?>
    <Response>
        <Dial>
            <Number>+13165559999</Number>
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

export const runtime = "edge";
