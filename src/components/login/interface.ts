import { createModule } from "typeless";
import { LoginSymbol } from "../login/symbol";

export const [useModule, LoginActions, getLoginState] = createModule(
  LoginSymbol
)
  .withActions({
    doLogin: (userName: String, password: String) => ({
      payload: { userName, password }
    })
  })
  .withState<LoginState>();

export interface LoginState {
  userName: String;
  password: String;
}
