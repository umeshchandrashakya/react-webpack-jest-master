import React from "react";
import * as Rx from "typeless/rx";
import { LoginActions, LoginState, useModule } from "../login/interface";
import { LoginComponent } from "./login";
import LoginFormModule from "../form/module";

const intialState: LoginState = {
  userName: "",
  password: ""
};

useModule
  .reducer(intialState)
  .on(LoginActions.doLogin, (state, { userName, password }) => {
    state.userName = userName;
    state.password = password;
  });

export default function LoginModule() {
  useModule();
  return <LoginFormModule />;
}
