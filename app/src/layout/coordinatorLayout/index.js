import React from "react";
import Coordinatornavbar from "../../components/coordinatornavbar/";
import { Outlet } from "react-router-dom";
const Coordinatorlayout = () => {
  return (
    <>
      <Coordinatornavbar />
      <Outlet />
    </>
  );
};

export default Coordinatorlayout;
