export { };

declare global {
  interface CustomJwtSessionClaims {
    metadata: {
      role?: "admin" | "branch" | "user";
    };
  }
}