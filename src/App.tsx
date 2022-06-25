import React from "react";
import "@fontsource/inter";
import Topbar from "./skeleton/TopBar";
import AccountContent from "./skeleton/AccountContent";

function App() {
  const [isDarkMode, setDarkMode] = React.useState(false);

  const toggleDarkMode = (checked: boolean) => {
    setDarkMode(checked);
  };
  return (
    <>
      <Topbar />
      <AccountContent />
    </>
  );
}

export default App;
