const isDev = import.meta.env.DEV;

export const BASE_URL = isDev
  ? "/api/v2/"
  : "https://lms-backend-ed6k.vercel.app/api/v2/";

export const IMAGE_URL = "https://lms-backend-ed6k.vercel.app/";