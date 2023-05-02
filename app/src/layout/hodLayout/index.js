import React from "react";
import Navbar from "../../components/navbar";
import { Outlet } from "react-router-dom";

const HodLayout = () => {
  return (
    <>
      <Navbar />

      <Outlet />
    </>
  );
};

export default HodLayout;
