import UserService from "@/app/services/user-service";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest): Promise<NextResponse> {
  const formData = await request.formData();

  const name = formData.get("name");

  const sub = formData.get("sub");

  const email = formData.get("email");

  if (typeof name !== "string") {
    return NextResponse.json(
      { message: "Full name is required" },
      { status: 400 }
    );
  }

  if (typeof sub !== "string") {
    return NextResponse.json(
      { message: "Sub claim is required" },
      { status: 400 }
    );
  }

  if (typeof email !== "string") {
    return NextResponse.json({ message: "Email is required" }, { status: 400 });
  }

  const userService: UserService = new UserService();

  await userService.createUser(email, name, sub);

  return NextResponse.json({
    message: "User created",
  });
}

export const runtime = "edge";
