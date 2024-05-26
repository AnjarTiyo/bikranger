import { NextResponse } from "next/server";

export function unauthorized(
  customMessage: string = "You need to sign in to access this endpoint"
) {
  return NextResponse.json(
    {
      message: customMessage,
      data: [],
      reason: "Unauthorized",
    },
    {
      status: 401,
    }
  );
}

export function badRequest(
    endpoint: string,
    reason: object
){
    return NextResponse.json(
        {
            message: `${endpoint} failed, please check your input again`,
            data: [],
            reason
        },
        {
            status: 400
        }
    )
}