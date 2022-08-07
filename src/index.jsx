import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.css";
import "./assets/scss/styles.scss";
import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import { AppProvider } from "./context/AppProvider";
import { Home } from "./modules/Home";
import { HireHere } from "./modules/HireHere";
import { RequireAuth } from "./AuthRoute";
import { Panel } from "./modules/Panel";
import { Login } from "./modules/Login";
import { Footer } from "./components/Footer";

const element = document.getElementById("root");
const root = ReactDOM.createRoot(element);

root.render(
  <React.StrictMode>
    <HashRouter>
      <AppProvider>
        <Routes>
          <Route path={`/`} element={<App />}>
            <Route path={`/`} element={<Navigate to={`/home`} />} />
            <Route path={`/home`} element={<Home />} />
            <Route path={`/hire-here`} element={<HireHere />} />
            <Route
              path={`/panel`}
              element={
                <RequireAuth>
                  <Panel />
                </RequireAuth>
              }
            />
            <Route
              path={`/panel/edit-address/:id_address`}
              element={
                <RequireAuth>
                  <HireHere />
                </RequireAuth>
              }
            />
            <Route path={`/login`} element={<Login />} />
          </Route>
        </Routes>
        <Footer />
      </AppProvider>
    </HashRouter>
  </React.StrictMode>
);
