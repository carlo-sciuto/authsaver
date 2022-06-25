import React from "react";

type Props = {};

function NewAuth({}: Props) {
  return (
    <button
      role="button"
      className="flex items-center font-semibold text-white bg-blue-500 hover:bg-blue-800 focus:ring-2 focus:ring-blue-300 rounded-lg text-xs px-5 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
    >
      <svg
        className="w-5 h-5 mr-2"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"
        />
      </svg>
      New Auth
    </button>
  );
}

export default NewAuth;
