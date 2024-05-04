import React, { useState } from "react";
import { AppBar, IconButton } from "@mui/material";
import { ReactComponent as Moon } from "../../icons/moon.svg";
import { ReactComponent as Sun } from "../../icons/sun.svg";

interface HeaderProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Header: React.FC<HeaderProps> = ({ darkMode, toggleDarkMode }) => {
  const handleClick = () => {
    toggleDarkMode();
  };

  return (
    <AppBar
      position="static"
      style={{
        backgroundColor: darkMode ? "purple" : "orangered",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1>Hey There!</h1>
      <IconButton
        onClick={handleClick}
        style={{ position: "absolute", right: 10 }}
      >
        {darkMode ? <Sun /> : <Moon />}
      </IconButton>
    </AppBar>
  );
};

export default Header;
