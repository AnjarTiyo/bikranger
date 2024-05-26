import { prisma } from "@/utils/configs/db";
import { branchSchema } from "../../../../types/branch";
import { NextRequest, NextResponse } from "next/server";
import { roleIs } from "@/utils/helpers/roles";
import { unauthorized } from "@/lib/api-response";

export const runtime = "edge"

export async function GET(request: NextRequest) {
  try {
    const data = await prisma.branch.findMany({
      cacheStrategy: { ttl: 60 },
    });

    const totalCount = data.length;
    const totalPages = Math.ceil(totalCount / 10);

    if (data.length < 1) {
      return NextResponse.json(
        {
          message: "List branches not found",
          metadata: {
            totalCount,
            totalPages,
          },
          data: [],
        },
        { status: 404 }
      );
    }

    return NextResponse.json({
      message: "Get list branches success",
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
        message: "Get list branches error",
        reason: (error as Error).message,
      },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  if(!roleIs("admin")){
    return unauthorized();
  }

  try {
    const formData = await request.formData();

    const name = formData.get("name") as string;
    const loc_map = formData.get("loc_map") as string;
    const abbreviation = formData.get("abbreviation") as string;

    const validatedField = branchSchema.safeParse({
      name,
      loc_map,
      abbreviation,
    });

    if (!validatedField.success) {
      return NextResponse.json(
        {
          message: "Create a branch error",
          data: [],
          reason: validatedField.error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    const data = await prisma.branch.create({
      data: {
        name,
        loc_map,
        abbreviation,
      },
    })

    return NextResponse.json(
      {
        message: "Create a branch success",
        data,
      },
      { status: 201 }
    );
  } catch (error) {
    console.log(error)
    return NextResponse.json(
      {
        message: "Create a branch error",
        reason: (error as Error).message,
      },
      { status: 500 }
    );
  }
}
