import React, { useState } from "react";
import NewAuth from "../components/NewAuth";
import { AppContainerBetween } from "../styles/styles";
import AuthModal from "../components/AuthModal";

type Props = {};

function TopBar({}: Props) {
  const [modalAuth, setModalAuth] = useState(false);

  return (
    <section className="bg-white border-gray-200 px-7 sm:px-10 py-4 dark:bg-gray-800">
      <div className={AppContainerBetween}>
        <a href="/" className="max-w-md flex items-center">
          <img
            src="logo.png"
            className="mr-3 h-6 sm:h-9"
            alt="authsaver logo"
          />
          <h1 className="text-white font-bold text-xl uppercase">AuthSaver</h1>
        </a>
        <NewAuth icon={true} onClick={() => setModalAuth(!modalAuth)}>
          <span>New Auth</span>
        </NewAuth>
      </div>
      <AuthModal type="new" modalOpen={modalAuth} setModalOpen={setModalAuth} />
    </section>
  );
}

export default TopBar;
