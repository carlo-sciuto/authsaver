import React from "react";
import styles from "../styles/app.module.scss";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import * as accountActions from "../actions/account.actions";
import NewAuth from "../components/NewAuth";

type Props = {};

function TopBar({}: Props) {
  const dispatch = useDispatch();
  return (
    <section className="bg-white border-gray-200 px-7 sm:px-10 py-4 dark:bg-gray-800">
      <div className="container max-w-7xl flex flex-wrap justify-between items-center mx-auto">
        <div className="max-w-md flex items-center">
          <img
            src="logo.png"
            className="mr-3 h-6 sm:h-9"
            alt="authsaver logo"
          />
          <h1 className="text-white font-bold text-xl uppercase">AuthSaver</h1>
        </div>
        <NewAuth />
      </div>
    </section>
  );
}

export default TopBar;
