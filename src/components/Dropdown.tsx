import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import useOnClickOutside from "../hooks/useOnClickOutside";
import * as account from "../actions/account.actions";
import { Auth } from "../reducers/account.reducer";

type Props = {
  key?: string;
  auth: Auth;
};

function Dropdown({ auth }: Props) {
  const dispatch = useDispatch();
  const [dropdown, setDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const clickOutsidehandler = () => {
    setDropdown(false);
  };

  useOnClickOutside(dropdownRef, clickOutsidehandler);

  return (
    <div className="flex justify-end pt-4">
      <button
        className="dotsDropdown absolute right-3 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5"
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
        ref={dropdownRef}
      >
        <ul className="py-1">
          <li>
            <a
              href="#"
              className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-500 dark:text-gray-200 dark:hover:text-white"
              onClick={() =>
                dispatch(account.editCredentials(auth.id as string))
              }
            >
              Edit
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block py-2 px-4 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-500 dark:text-gray-200 dark:hover:text-white"
              onClick={() =>
                dispatch(account.deleteCredentials(auth.id as string))
              }
            >
              Delete
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Dropdown;
