/* eslint-disable @typescript-eslint/no-unused-vars */
import Next from "next";

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_PERFUME_DOMAIN: string;
      PERFUME_IMAGES_URL: string;
    }
  }
}
