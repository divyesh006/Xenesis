import { combineReducers } from "@reduxjs/toolkit";
import { authApi } from "../services/auth";
import { userApi } from "../services/user";
import auth from "./auth";

const rootReducer = combineReducers({
  auth,
  [authApi.reducerPath]: authApi.reducer,
  [userApi.reducerPath]: userApi.reducer,
});

export default rootReducer;
