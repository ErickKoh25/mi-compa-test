import React from "react";
import { SplitContainer } from "../Home/containers/SplitContainer";
import { FormContainer } from "./FormContainer";

const Login = () => {
  return (
    <div className="cont-login">
      <SplitContainer />
      <FormContainer />
    </div>
  );
};

export default Login;
