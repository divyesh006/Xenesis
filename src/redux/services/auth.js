import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { login } from "../reducers/auth";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_APIKEY,
  }),
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (body) => ({
        url: "/user/login",
        method: "POST",
        body,
      }),
      onQueryStarted: async (_, { dispatch, queryFulfilled }) => {
        try {
          const { data } = await queryFulfilled;
          if (data.code === 200) dispatch(login(data.data));
          throw data;
        } catch (error) {
          // eslint-disable-next-line no-console
          console.error(error);
        }
      },
    }),
  }),
});

export const { useLoginMutation } = authApi;
