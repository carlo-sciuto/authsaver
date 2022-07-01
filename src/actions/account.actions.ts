import { createAction } from "@reduxjs/toolkit";
import { Auth } from "../reducers/account.reducer";

export const addCredentials = createAction<object>("account/addCredentials");
export const deleteCredentials = createAction<string>(
  "account/deleteCredentials"
);
export const editCredentials = createAction<Auth>("account/editCredentials");
export const resetCredentials = createAction("note/resetNote");
