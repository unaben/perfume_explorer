/* eslint-disable @typescript-eslint/no-unused-vars */

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      PERFUME_DOMAIN: string;
      PERFUME_IMAGES_URL: string;
      PERFUMES_DATA_URL: string;
    }
  }
}
