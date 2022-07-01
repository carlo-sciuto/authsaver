import { createReducer } from "@reduxjs/toolkit";
import {
  addCredentials,
  deleteCredentials,
  editCredentials,
} from "../actions/account.actions";

/* Defining the interface for the Auth object. */
export interface Auth {
  id?: string;
  name?: string;
  user?: string;
  pwd?: string;
  site?: string;
}

const initialAuth: Array<object> = [];

/* Creating a reducer. */
export const account = createReducer(initialAuth, (builder) => {
  builder.addCase(addCredentials, (state, action) => {
    return [...state, action.payload];
  });
  builder.addCase(deleteCredentials, (state, action) => {
    return state.filter((account: Auth) => account.id !== action.payload);
  });
  builder.addCase(editCredentials, (state, action) => {
    const editId = state.findIndex((todo: Auth) => {
      if (todo.id === action.payload.id) {
        return todo.id;
      }
    });
    console.log(action.payload.id, editId, state[editId]);
    state[editId] = action.payload;
    return state;
  });
});
