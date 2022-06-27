import { createReducer } from "@reduxjs/toolkit";
import { ReducerWithInitialState } from "@reduxjs/toolkit/dist/createReducer";
import { addCredentials, deleteCredentials } from "../actions/account.actions";
import { RootState } from "../main";

export interface Auth {
  id?: string;
  name?: string;
  user?: string;
  pwd?: string;
  site?: string;
}

const initialAuth: Array<object> = [];

export const account = createReducer(initialAuth, (builder) => {
  builder.addCase(addCredentials, (state: Array<Object>, action) => {
    return [...state, action.payload];
  }),
    builder.addCase(deleteCredentials, (state: Array<Object>, action) => {
      return state.filter((account: Auth) => account.id !== action.payload);
    });
});
