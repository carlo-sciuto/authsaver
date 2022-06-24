import React, { useState, ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as accountActions from "../actions/account.actions";
import { v4 as uuidv4 } from "uuid";
import { selectAccounts } from "../selectors/account.selectors";
import { Auth } from "../reducers/account.reducer";
import AccountRow from "../components/AccountRow";

type Props = {};

const AccountContent = (props: Props) => {
  const [accountName, setAccountName] = useState("");
  const dispatch = useDispatch();

  const handleNoteContent = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setAccountName(e.target.value);
  };

  const accounts = useSelector(selectAccounts);

  return (
    <>
      <button
        onClick={() => {
          dispatch(
            accountActions.addCredentials({
              id: uuidv4(),
              user: "",
              pwd: "",
              site: "",
            })
          );
        }}
      >
        Add
      </button>
      <div>
        {accounts && accounts.length > 0
          ? accounts.map((acc: Auth) => <AccountRow key={acc.id} auth={acc} />)
          : "No accounts available"}
      </div>
    </>
  );
};

export default AccountContent;
