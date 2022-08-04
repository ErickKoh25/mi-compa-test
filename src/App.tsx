import React from "react";
// import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { env } from "./config/config";
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
import { Provider } from "react-redux";
import store from "./redux/store";
import { RequireAuth } from "./AuthRoute";

const App = () => {
  if (typeof window !== "undefined") {
    injectStyle();
  }
  return (
    <BrowserRouter basename={env.basePath}>
      <Provider store={store}>
        <AppProvider>
          <ToastContainer />
          <NavBar />
          <Routes>
            <Route index element={<Home />} />
            <Route path="/contact" element={<Contact />} />
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
      </Provider>
    </BrowserRouter>
  );
};

export default App;
