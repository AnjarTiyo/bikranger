export { };

export type Roles = "admin" | "branch" | "user";

declare global {
  interface CustomJwtSessionClaims {
    metadata: {
      role?: Roles;
    };
  }
}