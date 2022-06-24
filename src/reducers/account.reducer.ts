import { createReducer } from "@reduxjs/toolkit";
import { ReducerWithInitialState } from "@reduxjs/toolkit/dist/createReducer";
import { addCredentials } from "../actions/account.actions";
import { RootState } from "../main";

export interface Auth {
  id?: string;
  user?: string;
  pwd?: string;
  site?: string;
}

const initialAuth: Array<object> = [
  {
    id: "Id",
    user: "User",
    pwd: "Password",
    site: "URL Sites",
  },
];

export const account = createReducer(initialAuth, (builder) =>
  builder.addCase(addCredentials, (state: Array<Object>, action) => {
    return [...state, action.payload];
  })
);
