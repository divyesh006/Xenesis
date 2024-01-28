import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.REACT_APP_APIKEY}/`,
    prepareHeaders: (headers, { getState }) => {
      headers.set("authorization", getState().auth?.token);
      return headers;
    },
  }),
  tagTypes: ["userApi"],
  endpoints: (builder) => ({
    addUser: builder.mutation({
      query: ({ ...body }) => {
        return {
          url: `/user/signup-user`,
          method: "POST",
          body: body.editData,
        };
      },
    }),
  }),
});

export const { useAddUserMutation } = userApi;
