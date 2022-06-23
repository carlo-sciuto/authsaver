import React, { useState, ChangeEvent, MouseEvent } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import * as accountActions from "../actions/account.actions";
import { RootState } from "../main";
import { v4 as uuidv4 } from "uuid";

type Props = {};

const AccountContent = (props: Props) => {
  const [noteContent, setNoteContent] = useState("");
  const dispatch = useDispatch();
  const accountSelect = useSelector((state: RootState) => state.accounts);

  const handleNoteContent = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setNoteContent(e.target.value);
  };

  return (
    <>
      <button
        onClick={() => {
          dispatch(
            accountActions.addCredentials({
              id: uuidv4(),
              user: "dwqdwq",
              pwd: "wqdd",
              site: "dwqdwq",
            })
          );
        }}
      >
        Add
      </button>
      <div></div>
    </>
  );
};

export default AccountContent;
