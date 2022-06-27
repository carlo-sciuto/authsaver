import { createReducer } from "@reduxjs/toolkit";
import { addCredentials, deleteCredentials } from "../actions/account.actions";

export interface Auth {
  id?: string;
  name?: string;
  user?: string;
  pwd?: string;
  site?: string;
}

const initialAuth: Array<object> = [];

export const account = createReducer(initialAuth, (builder) => {
  builder.addCase(addCredentials, (state, action) => {
    return [...state, action.payload];
  }),
    builder.addCase(deleteCredentials, (state, action) => {
      return state.filter((account: Auth) => account.id !== action.payload);
    });
});
