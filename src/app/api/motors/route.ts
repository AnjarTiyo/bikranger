import { prisma } from "@/utils/configs/db";
import { motorSchema } from "@/utils/types/motor";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const data = await prisma.motor.findMany({
      cacheStrategy: { ttl: 60 },
    });

    const totalCount = await data.length;
    const totalPages = Math.ceil(totalCount / 10);

    if (data.length < 1) {
      return NextResponse.json(
        {
          message: "List motor not found",
          metadata: {
            totalCount,
            totalPages,
          },
          data: [],
        },
        { status: 404 }
      );
    }

    // return data
    return NextResponse.json({
      message: "Get list motors success",
      metadata: {
        totalCount,
        totalPages,
      },
      data,
    });
  } catch (error) {
    console.log(error);

    return NextResponse.json(
      {
        message: "Get list motors error",
        reason: (error as Error).message,
      },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();

    const name = formData.get("name") as string;
    const description = formData.get("description") as string;
    const price = formData.get("price") as string;
    const status = formData.get("status") as "AVAILABLE" | "RENTED" | "EXPIRING";
    const transmission = formData.get("transmission") as "automatic" | "manual" | "semi_automatic";
    const category = formData.get("category") as "scooter" | "sports" | "electric";
    const branch_id = formData.get("branch_id") as string;
    const owner_id = formData.get("owner_id") as string;
    const image = formData.get("image") as File;

    const validatedFields = motorSchema.safeParse({
      name,
      description,
      price,
      status,
      transmission,
      category,
      branch_id,
      owner_id,
      image: image ?? undefined,
    });

    if (!validatedFields.success) {
      return NextResponse.json(
        {
          message: "Add motor failed, please check your input again",
          data: null,
          reason: validatedFields.error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    // TODO handle image upload

    const data = await prisma.motor.create({
        data:{
            name,
            description,
            price: parseInt(price),
            status,
            transmission,
            category,
            branch_id: parseInt(branch_id),
            owner_id,
        }
    })

    return NextResponse.json({
      message: "Create a motor success",
    })
  } catch (error) {
    console.log(error);

    return NextResponse.json(
      {
        message: "Create a motor error",
        reason: (error as Error).message,
      },
      { status: 500 }
    );
  }
}
