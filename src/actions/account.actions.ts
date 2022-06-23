import { createAction } from "@reduxjs/toolkit";

export const addCredentials = createAction<object>("account/addCredentials");
export const deleteCredentials = createAction<string>(
  "account/deleteCredentials"
);
export const editCredentials = createAction<string>("account/editCredentials");
export const resetCredentials = createAction("note/resetNote");
