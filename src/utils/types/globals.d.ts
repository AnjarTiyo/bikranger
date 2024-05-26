export { };

export type Roles = "admin" | "branch" | "user";

declare global {
  interface CustomJwtSessionClaims {
    metadata: {
      role?: "admin" | "branch" | "user";
    };
  }
}