import React, { Fragment } from "react";
import Paper from "@mui/material/Paper";
import Navbar from "./../components/Navbar";
import Container from "@mui/material/Container";
import { styled } from "@mui/material/styles";

const Page = styled(Paper)(({ theme }) => ({
  minHeight: "100vh",
  padding: theme.spacing(6, 0),
}));

const Layout = ({ children, theme, setTheme }) => {
  return (
    <Fragment>
      <Navbar theme={theme} setTheme={setTheme} />
      <Page>
        <Container maxWidth="lg">{children}</Container>
      </Page>
    </Fragment>
  );
};

export default Layout;
