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
    <div className="min-h-screen bg-slate-700">
      <Topbar />
      <AccountContent />
    </div>
  );
}

export default App;
