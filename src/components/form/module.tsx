import React from "react";
import { useActions } from "typeless";
import * as Rx from "typeless/rx";
import { handle } from "../form/interface";
import { FormInput } from "../form/forminput";

import {
  useMyForm,
  FormProvider,
  FormActions,
  getFormState
} from "../form/form";

handle.epic().on(FormActions.setSubmitSucceeded, () => {
  alert();
  return Rx.empty();
});

export default function LoginFormModule() {
  handle();
  useMyForm();
  const { submit } = useActions(FormActions);
  return (
    <FormProvider>
      <form
        onSubmit={e => {
          e.preventDefault();
          submit();
        }}
      >
        <FormInput name="name" />
        <FormInput name="password" />
        <button>submit</button>
      </form>
    </FormProvider>
  );
}
