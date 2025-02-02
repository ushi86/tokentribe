// src/utils/baseClient.ts
import { createClient } from '@base-org/base';

const client = createClient({
  baseUrl: 'https://base.org/api', 
  apiKey: process.env.BASE_API_KEY, 
});

export default client;
