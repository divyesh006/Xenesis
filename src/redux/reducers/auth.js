import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLogin: null,
  loading: false,
  user: null,
  token: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setLoading(state, action) {
      state.loading = action.payload;
    },
    logout: (state) => {
      state.isLogin = false;
      state.loading = false;
      state.user = null;
      state.token = null;
    },
    login: (state, action) => {
      const { token, user } = action.payload;
      state.user = user;
      state.token = token;
      state.isLogin = true;
    },
  },
});

export const { setLoading, setLogin, logout, login } = authSlice.actions;
export default authSlice.reducer;
