import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import SideBar from "../components/SideBar/SideBar";

function Layout() {
  return (
    <Fragment>
      <Header />
      <Outlet />
      <SideBar />
      <Footer />
    </Fragment>
  );
}

export default Layout;
