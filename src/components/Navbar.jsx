import * as React from "react";
import { styled } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

const Logo = styled("img")(({ theme }) => ({
  height: theme.spacing(8),
}));

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  justifyContent: "space-between",
  alignItems: "center",
}));

export default function Navbar({ theme, setTheme }) {
  return (
    <AppBar position="sticky" top="0">
      <StyledToolbar>
        <Logo
          src="https://uploads-ssl.webflow.com/5f47d61d9692937743bdd54b/6073ae277d7f7c1990ebb13c_floe_1.png"
          alt="Fleo logo"
        />
        <IconButton
          onClick={(e) => setTheme(theme === "dark" ? "light" : "dark")}
        >
          {theme === "dark" ? <LightModeIcon /> : <DarkModeIcon />}
        </IconButton>
      </StyledToolbar>
    </AppBar>
  );
}
