import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const BASE_URL = import.meta.env.VITE_BASE_URL;

export const api = createApi({
  reducerPath: 'api',
  // refetchOnMountOrArgChange: true,
  baseQuery: fetchBaseQuery({ baseUrl: `${BASE_URL}/api` }),
  endpoints: () => ({}),
});
