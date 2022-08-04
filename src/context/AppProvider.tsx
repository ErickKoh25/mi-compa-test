import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Children, ObjectContext } from "../interfaces/AppContextProvider";

const AppContext = React.createContext<ObjectContext>({});

const useAppContext = () => {
  return useContext(AppContext);
};

let init = {
  states: [],
  login: {
    name: "",
    email: "",
    token: "",
  },
};

const AppProvider = ({ children }: Children) => {
  return (
    <AppContext.Provider value={{ navigate: useNavigate(), initState: init }}>
      {children}
    </AppContext.Provider>
  );
};

export { useAppContext, AppProvider };
