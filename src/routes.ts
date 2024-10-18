// Routes available to unlogged users

export const publicRoutes = ["/"];

// Routes used for authentication
// These will redirect to /dashboard/chat

export const authRoutes = ["/login"];

// Always allowed
export const apiAuthPrefix = "/api";

// default redirect

export const DEFAULT_LOGIN_REDIRECT = "/dashboard";
