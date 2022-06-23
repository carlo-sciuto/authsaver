import { createReducer } from "@reduxjs/toolkit";
import { ReducerWithInitialState } from "@reduxjs/toolkit/dist/createReducer";
import { addCredentials } from "../actions/account.actions";
import { RootState } from "../main";

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
    console.log(...state, action);
    return [...state, action];
  })
);
