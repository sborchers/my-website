import React from "react";
import { AppBar, Button, IconButton, Menu, MenuItem } from "@mui/material";
import { ReactComponent as Moon } from "../../icons/moon.svg";
import { ReactComponent as Sun } from "../../icons/sun.svg";

interface HeaderProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const projectOptions = ["Software", "Built Environment"];

const Header: React.FC<HeaderProps> = ({ darkMode, toggleDarkMode }) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = () => {
    toggleDarkMode();
  };
  const handleOpen = (event: React.MouseEvent<HTMLLIElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <AppBar
        position="static"
        style={{
          backgroundColor: darkMode ? "purple" : "orangered",
          flexDirection: "row",
          padding: "0px 10px",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h1>Hey There!</h1>
        <MenuItem>About</MenuItem>
        <MenuItem>Skills</MenuItem>
        <MenuItem onClick={handleOpen}>Projects</MenuItem>
        <IconButton onClick={handleClick}>
          {darkMode ? <Sun /> : <Moon />}
        </IconButton>
      </AppBar>
      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
        {projectOptions.map((option) => (
          <MenuItem>{option}</MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default Header;
