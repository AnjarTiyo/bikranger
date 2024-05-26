import { Roles } from "../../../types/globals";
import { auth } from "@clerk/nextjs/server";

export function roleIs(role: Roles) {
  const { sessionClaims } = auth();

  console.log("sessionClaims", sessionClaims?.metadata.role)

  return sessionClaims?.metadata.role === role;
}
