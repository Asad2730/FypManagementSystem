import React from "react";
import { Outlet } from "react-router-dom";
import SupervisorNavbar from "../../components/supervisornavbar";

const SupervisorLayout = () => {
  return (
    <>
      <SupervisorNavbar />
      <Outlet />
    </>
  );
};

export default SupervisorLayout;
