import React from "react";
import { useSelector } from "react-redux";
import { selectAccounts } from "../selectors/account.selectors";
import { Auth } from "../reducers/account.reducer";
import AccountCard from "../components/AccountCard";
import { AppContainer } from "../styles/styles";

type Props = {};

const AccountContent = (props: Props) => {
  const accounts = useSelector(selectAccounts);

  return (
    <section className="bg-white border-gray-200 px-7 sm:px-10 py-4 dark:bg-gray-700">
      <div className={AppContainer}>
        {accounts && accounts.length > 0 ? (
          accounts.map((acc: Auth) => <AccountCard key={acc.id} auth={acc} />)
        ) : (
          <div className="bg-gray-500 dark:text-white text-gray-600 py-3 px-7 sm:px-10 rounded-md mx-auto mt-7">
            No accounts available
          </div>
        )}
      </div>
    </section>
  );
};

export default AccountContent;
