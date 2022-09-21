import axios from 'axios';
import { setupCache } from 'axios-cache-interceptor';

const instance = axios.create({
  baseURL: 'https://formulae.brew.sh/api'
});

export const brewAxios = setupCache(instance, { ttl: 1000 * 60 * 60 });
