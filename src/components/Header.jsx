import React from "react";

const Header = ({ handleToggleDarkMode, darkMode }) => {
  return (
    <div className="header">
      <h1>Notes</h1>
      <button
        onClick={() =>
          handleToggleDarkMode((previousDarkMode) => !previousDarkMode)
        }
        className={`${darkMode ? "dark" : "light"}`}
      >
        Toggle Mode
      </button>
    </div>
  );
};

export default Header;
