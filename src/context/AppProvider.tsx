import React, { useContext, useReducer } from "react";
import { useNavigate } from "react-router-dom";
import {
  Children,
  LoginProps,
  ObjectContext,
} from "../interfaces/context/AppContextProvider";
import { todoReducer } from "./reducer";

const AppContext = React.createContext<ObjectContext>({});

const useAppContext = () => {
  return useContext(AppContext);
};

let INIT_STATE = {
  states: [{}],
  login: {
    name: "",
    email: "",
    token: "",
  },
};

const AppProvider = ({ children }: Children) => {
  const [todoState, dispatch] = useReducer(todoReducer, INIT_STATE);

  const setLogin = (payload: LoginProps) => {
    dispatch({ type: "setLogin", payload });
  };
  const removeLogin = (payload: LoginProps) => {
    dispatch({ type: "removeLogin", payload });
  };
  const addStates = (payload: Array<{}>) => {
    dispatch({ type: "addStates", payload });
  };

  return (
    <AppContext.Provider
      value={{
        navigate: useNavigate(),
        initState: todoState,
        setLogin,
        removeLogin,
        addStates,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { useAppContext, AppProvider };
