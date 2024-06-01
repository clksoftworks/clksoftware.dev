import UserService from "@/app/services/user-service";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const userService: UserService = new UserService();

  const user = await userService.getUserById(params.id);

  if (user.length === 0) {
    return NextResponse.json({ message: "User not found" }, { status: 404 });
  }

  return NextResponse.json(user);
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const userService: UserService = new UserService();

  const user = await userService.getUserById(params.id);

  if (user.length === 0) {
    return NextResponse.json({ message: "User not found" }, { status: 404 });
  }

  await userService.deleteUserById(params.id);

  return NextResponse.json({ message: "User deleted" });
}

export async function PATCH(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const userService: UserService = new UserService();

  const user = await userService.getUserById(params.id);

  if (user.length === 0) {
    return NextResponse.json({ message: "User not found" }, { status: 404 });
  }

  const formData = await request.formData();

  const name = formData.get("name");

  if (typeof name !== "string") {
    return NextResponse.json(
      { message: "Full name is required" },
      { status: 400 }
    );
  }

  await userService.updateUserById(params.id, name);

  return NextResponse.json({ message: "User updated" });
}

export const runtime = "edge";
