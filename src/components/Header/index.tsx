import React from "react";
import {
  AppBar,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import { ReactComponent as Moon } from "../../icons/moon.svg";
import { ReactComponent as Sun } from "../../icons/sun.svg";
import { PageSection } from "../Navigation";
import MenuIcon from "@mui/icons-material/Menu";

interface HeaderProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Header: React.FC<HeaderProps> = ({ darkMode, toggleDarkMode }) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleClick = () => {
    toggleDarkMode();
  };
  const handleOpen = (event: React.MouseEvent<HTMLLIElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <AppBar
        position="static"
        style={{
          backgroundColor: darkMode ? "purple" : "#0AA",
          flexDirection: "row",
          padding: "10px",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h5"
          noWrap
          sx={{
            mr: 2,
            display: { xs: "none", sm: "flex" },
            fontFamily: "monospace",
            fontWeight: 700,
            letterSpacing: ".3rem",
            paddingLeft: "20px",
          }}
        >
          StephBorch
        </Typography>
        <div style={{ display: "flex" }}>
          <Box
            sx={{
              flexGrow: 1,
              justifyContent: "space-between",
              maxWidth: 260,
              display: { xs: "none", sm: "flex" },
              marginRight: "40px",
            }}
          >
            <MenuItem onClick={() => scrollToSection(PageSection.About)}>
              About
            </MenuItem>
            <MenuItem onClick={() => scrollToSection(PageSection.Skills)}>
              Skills
            </MenuItem>
            <MenuItem onClick={handleOpen}>Projects</MenuItem>
          </Box>
          <IconButton
            size="large"
            sx={{ display: { xs: "none", sm: "flex" } }}
            onClick={handleClick}
          >
            {darkMode ? <Sun /> : <Moon />}
          </IconButton>
        </div>
        <Box sx={{ flexGrow: 1, display: { xs: "flex", sm: "none" } }}>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="inherit"
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{
              display: { xs: "block", sm: "none" },
            }}
          >
            <MenuItem onClick={() => scrollToSection(PageSection.About)}>
              About
            </MenuItem>
            <MenuItem onClick={() => scrollToSection(PageSection.Skills)}>
              Skills
            </MenuItem>
            <MenuItem onClick={handleOpen}>Projects</MenuItem>
          </Menu>
        </Box>
        <Typography
          variant="h5"
          noWrap
          sx={{
            mr: 2,
            display: { xs: "flex", sm: "none" },
            flexGrow: 1,
            fontFamily: "monospace",
            fontWeight: 700,
            letterSpacing: ".3rem",
          }}
        >
          StephBorch
        </Typography>
        <IconButton
          size="large"
          sx={{ display: { xs: "flex", sm: "none" } }}
          onClick={handleClick}
        >
          {darkMode ? <Sun /> : <Moon />}
        </IconButton>
      </AppBar>
      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
        <MenuItem onClick={() => scrollToSection(PageSection.Software)}>
          Software
        </MenuItem>
        <MenuItem onClick={() => scrollToSection(PageSection.Built)}>
          Built Environment
        </MenuItem>
      </Menu>
    </>
  );
};

export default Header;
