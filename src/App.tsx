import React from "react";
import AccountContent from "./pages/AccountContent";

function App() {
  console.log(import.meta.env.VITE_SALT);
  return (
    <>
      <AccountContent />
    </>
  );
}

export default App;
