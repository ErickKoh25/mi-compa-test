import React from "react";
import {Outlet} from "react-router-dom";
import NavBar from "./components/NavBar";
import { injectStyle } from "react-toastify/dist/inject-style";
import { ToastContainer } from "react-toastify";

const App = () => {
  if (typeof window !== "undefined") {
    injectStyle();
  }
  return (
    <>
      <NavBar />
      <ToastContainer />
      <Outlet />
    </>
  );
};

export default App;
