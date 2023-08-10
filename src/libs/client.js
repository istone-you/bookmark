import { createClient } from 'microcms-js-sdk';

export const client = createClient({
  serviceDomain: 'istoneyou-bookmark',
  apiKey: process.env.API_KEY,
});