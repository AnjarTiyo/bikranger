// TODO Create webhook for a new user after signup from clerk and sync with db

import { prisma } from "@/utils/configs/db";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const { id, name, email, role } = await request.json();

  const user = await prisma.user.create({
    data: {
      id,
      name,
      email,
      role,
    },
  });

  return NextResponse.json(user);
}
