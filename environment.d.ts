/* eslint-disable @typescript-eslint/no-unused-vars */
import Next from 'next';

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      ENVIRONMENT: 'test' | 'local' | 'feature-dev' | 'qa' | 'preprod' | 'production';
      NEXT_PUBLIC_HOSTINGER_DOMAIN:string
      HOSTINGER_IMAGES_URL:string
      HOSTINGER_T_IMAGES_URL:string
    }
  }
}
