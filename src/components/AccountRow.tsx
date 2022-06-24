import React from "react";
import { Auth } from "../reducers/account.reducer";

type Props = {
  key?: string;
  auth: Auth;
};

function AccountRow({ auth }: Props) {
  return <div>{auth.id}</div>;
}

export default AccountRow;
