import { createClient } from 'contentful';

export const contentful = createClient({
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  space: process.env.CONTENTFUL_SPACE_ID,
  host: process.env.CONTENTFUL_HOST,
});
