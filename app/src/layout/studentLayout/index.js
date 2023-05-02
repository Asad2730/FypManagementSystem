import React from "react";
import Studentnavbar from "../../components/studentnavbar";
import { Outlet } from "react-router-dom";

const StudentLayout = () => {
  return (
    <>
      <Studentnavbar />
      <Outlet />
    </>
  );
};

export default StudentLayout;
