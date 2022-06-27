import React, { useState } from "react";
import { Auth } from "../reducers/account.reducer";

type Props = {
  key?: string;
  auth: Auth;
};

function AccountCard({ auth }: Props) {
  const [dropdown, setDropdown] = useState(false);

  return (
    <div className="relative max-w-sm w-full md:w-1/3 lg:w-1/3 mb-12 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
      <div className="flex justify-end pt-4">
        <button
          className="absolute right-3 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5"
          type="button"
          onClick={() => setDropdown(!dropdown)}
        >
          <svg
            className="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"></path>
          </svg>
        </button>
        <div
          className={
            dropdown
              ? "absolute top-16 right-0 z-10 w-44 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-600"
              : "hidden"
          }
        >
          <ul className="py-1">
            <li>
              <a
                href="#"
                className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-500 dark:text-gray-200 dark:hover:text-white"
              >
                Edit
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-4 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-500 dark:text-gray-200 dark:hover:text-white"
              >
                Delete
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col items-center pb-10 pt-5 px-12">
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
          {auth.user}
        </h5>
        <span className="text-sm text-gray-500 dark:text-gray-400">
          {auth.pwd}
        </span>
        <div className="flex mt-4 space-x-3 lg:mt-6">
          <a
            href={auth.site}
            target="_blank"
            className="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-gray-900 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700"
          >
            Login
          </a>
        </div>
      </div>
    </div>
  );
}

export default AccountCard;
