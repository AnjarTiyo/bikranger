import { badRequest, errRequest, unauthorized } from "@/lib/api-response";
import { motorSchema } from "@/types/motor";

import { prisma } from "@/utils/configs/db";
import { nullIfError } from "@/utils/helpers/other";
import { roleIs } from "@/utils/helpers/roles";
import { auth } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";

interface Params {
  params: {
    motor_id: string;
  };
}

interface DataToUpdate {
  name?: string;
  description?: string;
  price?: number;
  status?: "AVAILABLE" | "RENTED" | "EXPIRING";
  transmission?: "automatic" | "manual" | "semi_automatic";
  category?: "scooter" | "sports" | "electric";
  branch_id?: number;
  owner_id?: string;
}

export async function GET(request: Request, {params}: Params){
  const {motor_id} = await params;

  try {
    const data = await prisma.motor.findUnique({
      where: {
        id: motor_id,
      },
    });

    if (!data) {
      return NextResponse.json(
        {
          message: "Motor not found",
          data: [],
          reason: `Unable find motor with id ${motor_id}`,
        },
        { status: 404 }
      );
    }

    return NextResponse.json({
      message: "Get detail motor success",
      data,
    });
  } catch (error) {
    return errRequest("getDetailMotor", error as Error);
  }
}

export async function PUT(request: Request, { params }: Params) {
  const { sessionClaims } = await auth();

  if (!sessionClaims) {
    return unauthorized("You need to sign in to access this endpoint");
  }
  
  if (!roleIs("admin")) {
    return unauthorized("You don't have permission to access this endpoint");
  }

  try {
    const { motor_id } = params;
    const formData = await request.formData();

    const name = formData.get("name") as string;
    const description = formData.get("description") as string;
    const price = formData.get("price") as string;
    const status = formData.get("status") as
      | "AVAILABLE"
      | "RENTED"
      | "EXPIRING";
    const transmission = formData.get("transmission") as
      | "automatic"
      | "manual"
      | "semi_automatic";
    const category = formData.get("category") as
      | "scooter"
      | "sports"
      | "electric";
    const branch_id = formData.get("branch_id") as string;
    const image = formData.get("image") as File;
    const owner_id = sessionClaims?.sub as string;

    const validatedFields = motorSchema.safeParse({
      name,
      description,
      price: parseInt(price),
      status,
      transmission,
      category,
      branch_id: parseInt(branch_id),
      image: image ?? undefined,
      owner_id,
    });

    if (!validatedFields.success) {
      return badRequest(
        "updateMotor",
        validatedFields.error.flatten().fieldErrors
      );
    }

    let dataToUpdate: DataToUpdate = {
      name,
      description,
      price: parseInt(price),
      status,
      transmission,
      category,
      branch_id: parseInt(branch_id),
      owner_id
    };

    const data = await nullIfError(prisma.motor.update)({
      where: {
        id: motor_id,
      },
      data: dataToUpdate,
    });

    if (!data) {
      return NextResponse.json(
        {
          message: "Edit motor failed, data not found",
          reason:
            "The product you're trying to update might not have been created yet",
        },
        { status: 404 }
      );
    }

    return NextResponse.json(
      {
        message: "Update motor success",
        data,
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    return errRequest("updateMotor", error as Error);
  }
}
