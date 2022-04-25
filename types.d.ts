import { ContentfulHost } from '@/lib/contentful/contentful.types';

export declare global {
  namespace NodeJS {
    interface ProcessEnv {
      CONTENTFUL_SPACE_ID: string;
      CONTENTFUL_ACCESS_TOKEN: string;
      CONTENTFUL_HOST: ContentfulHost;
    }
  }
}
