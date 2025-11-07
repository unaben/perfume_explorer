/* eslint-disable @typescript-eslint/no-unused-vars */
import Next from "next";

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_HOSTINGER_DOMAIN: string;
      PERFUME_IMAGES_URL: string;
      HOSTINGER_T_IMAGES_URL: string;
    }
  }
}
