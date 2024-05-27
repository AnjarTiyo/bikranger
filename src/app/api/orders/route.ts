import { badRequest, errRequest } from "@/lib/api-response";
import { orderSchema } from "@/types/order";
import { prisma } from "@/utils/configs/db";
import { durationCounter } from "@/utils/helpers/duration-counter";
import { auth } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const { sessionClaims } = await auth();

  const formData = await request.formData();

  try {
    const start_date = formData.get("start_date") as string;
    const end_date = formData.get("end_date") as string;
    const email = formData.get("email") as string;
    const phone_number = formData.get("phone_number") as string;
    const motor_id = formData.get("motor_id") as string;
    const duration = (await durationCounter(start_date, end_date)) as number;

    let user_id;
    if (!sessionClaims) {
      user_id = email;
    } else {
      user_id = sessionClaims?.sub;
    }

    const validatedFields = orderSchema.safeParse({
      user_id,
      motor_id,
      duration,
      start_date,
      end_date,
      phone_number,
      email,
    })

    if(!validatedFields.success) {
        return badRequest("createOrder", validatedFields.error.flatten().fieldErrors)
    }

    const data = await prisma.order.create({
      data: {
        user_id,
        motor_id,
        duration,
        start_date,
        end_date,
        phone_number,
        email,
      },
    });

    return NextResponse.json(
      {
        message: "Create an order success",
        data,
      },
      {
        status: 201,
      }
    );
  } catch (error) {
    return errRequest("createOrder", error as Error);
  }
}
