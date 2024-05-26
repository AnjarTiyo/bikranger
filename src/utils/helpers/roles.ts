import { Roles } from "@/utils/types/globals";
import { auth } from "@clerk/nextjs/server";

export function roleIs(role: Roles) {
  const { sessionClaims } = auth();

//   console.log("sessionClaims", sessionClaims.metadata)

  return sessionClaims?.role === role;
}
