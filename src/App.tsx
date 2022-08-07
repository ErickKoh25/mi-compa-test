import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./modules/Home";
import { Contact } from "./modules/Contact";
import NavBar from "./components/NavBar";
import { Footer } from "./components/Footer";
import { HireHere } from "./modules/HireHere";
import { AppProvider } from "./context/AppProvider";
import { Panel } from "./modules/Panel";
import { Login } from "./modules/Login";
import { injectStyle } from "react-toastify/dist/inject-style";
import { ToastContainer } from "react-toastify";
import { RequireAuth } from "./AuthRoute";

const App = () => {
  if (typeof window !== "undefined") {
    injectStyle();
  }
  return (
    <BrowserRouter>
        <AppProvider>
          <ToastContainer />
          <NavBar />
          <Routes>
            <Route index element={<Home />} />
            <Route path="/hire-here" element={<HireHere />} />
            <Route
              path="/panel"
              element={
                <RequireAuth>
                  <Panel />
                </RequireAuth>
              }
            />
            <Route
              path="/panel/edit-address/:id_address"
              element={
                <RequireAuth>
                  <HireHere />
                </RequireAuth>
              }
            />
            <Route path="/login" element={<Login />} />
          </Routes>
          <Footer />
        </AppProvider>
    </BrowserRouter>
  );
};

export default App;
