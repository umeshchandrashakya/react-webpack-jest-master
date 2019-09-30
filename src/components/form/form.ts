import { createForm } from "typeless-form";
import { FormSymbol } from "../form/symbol";

interface MyForm {
  name: string;
  password: string;
}
export const [useMyForm, FormActions, getFormState, FormProvider] = createForm<
  MyForm
>({
  symbol: FormSymbol,
  validator(error, data) {
    if (!data.name) {
      error.name = "Please enter User Name";
    }
    if (!data.password) {
      error.password = "Please Enter Password";
    } else if (data.password.length < 3) {
      error.password = "Minimum 3 characters";
    }
  }
});
