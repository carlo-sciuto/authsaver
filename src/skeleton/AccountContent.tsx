import React from "react";
import { useSelector } from "react-redux";
import { selectAccounts } from "../selectors/account.selectors";
import { Auth } from "../reducers/account.reducer";
import AccountCard from "../components/AccountCard";

type Props = {};

const AccountContent = (props: Props) => {
  /*
  const handleNoteContent = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setAccountName(e.target.value);
  };
*/
  const accounts = useSelector(selectAccounts);

  return (
    <>
      <div>
        {accounts && accounts.length > 0
          ? accounts.map((acc: Auth) => <AccountCard key={acc.id} auth={acc} />)
          : "No accounts available"}
      </div>
    </>
  );
};

export default AccountContent;
