import React, { useState, FormEvent } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { types } from "sass";
import { v4 as uuidv4 } from "uuid";
import * as account from "../actions/account.actions";

type Props = {
  type: string;
  id?: string;
  modalOpen: boolean;
  setModalOpen: (value: boolean) => void;
};

function AuthModal({ type, id, modalOpen, setModalOpen }: Props) {
  const dispatch = useDispatch();
  const [user, setUser] = useState("");
  const [name, setName] = useState("");
  const [pwd, setPass] = useState("");
  const [site, setSite] = useState("");

  const resetFields = () => {
    setUser("");
    setName("");
    setPass("");
    setSite("");
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (user === "" || pwd === "" || site === "") {
      toast.error("All fields are required");
    } else if (type === "new") {
      dispatch(
        account.addCredentials({
          id: uuidv4(),
          name,
          user,
          pwd,
          site,
        })
      );
      toast.success("Credentials added successfully");
      setModalOpen(false);
      resetFields();
    } else if (type === "edit") {
      dispatch(
        account.editCredentials({
          id,
          name,
          user,
          pwd,
          site,
        })
      );
      toast.success("Credentials updated successfully");
      setModalOpen(false);
      resetFields();
    }
  };

  return (
    <>
      {modalOpen && (
        <div
          tabIndex={-1}
          aria-hidden={!modalOpen}
          className="min-h-screen overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full"
        >
          <div className="relative top-24 p-4 w-full max-w-md h-full md:h-auto mx-auto">
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-900">
              <button
                type="button"
                className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                onClick={() => setModalOpen(false)}
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
              <div className="py-6 px-6 lg:px-8">
                <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">
                  Add New Credentials
                </h3>
                <form className="space-y-6" onSubmit={(e) => handleSubmit(e)}>
                  {type === "edit" && (
                    <input type="hidden" name="id" value={id} />
                  )}
                  <div>
                    <label
                      htmlFor="name"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Website
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                      placeholder="Website Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      User / Email
                    </label>
                    <input
                      type="text"
                      name="user"
                      id="user"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                      placeholder="user or user@email.com"
                      value={user}
                      onChange={(e) => setUser(e.target.value)}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="password"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      placeholder="••••••••"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                      value={pwd}
                      onChange={(e) => setPass(e.target.value)}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="website"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Login Page URL
                    </label>
                    <input
                      type="text"
                      name="website"
                      id="website"
                      placeholder="https://"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                      value={site}
                      onChange={(e) => setSite(e.target.value)}
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Add Credentials
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default AuthModal;
