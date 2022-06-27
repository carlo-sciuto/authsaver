import React, { useState } from "react";
import { Auth } from "../reducers/account.reducer";
import Dropdown from "./Dropdown";

type Props = {
  key?: string;
  auth: Auth;
};

function AccountCard({ auth }: Props) {
  return (
    <div className="relative max-w-sm w-full md:w-1/2 lg:w-1/3 mb-12 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
      <Dropdown auth={auth} />
      <div className="flex flex-col items-center pb-10 pt-5 px-12">
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white pb-3">
          {auth.name}
        </h5>
        <hr className="w-full opacity-20" />
        <span className="text-sm text-gray-500 dark:text-gray-400 pt-3">
          {auth.user}
        </span>
        <span className="text-sm text-gray-500 dark:text-gray-400">
          <span>••••••••••</span>
        </span>
        <div className="flex mt-4 space-x-3 lg:mt-6">
          <a
            href={auth.site}
            target="_blank"
            className="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-gray-900 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700"
          >
            Go to {auth.name}
          </a>
        </div>
      </div>
    </div>
  );
}

export default AccountCard;
