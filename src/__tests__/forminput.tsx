import * as React from "react";
import { Component } from "react";
import { FormInput } from "../components/form/forminput";
import { shallow, mount } from "enzyme";

import { from } from "rxjs";

export interface inpout {
  name: string;
  password: string;
}

it("render without crashing", () => {
  const name: string = "umesh";

  shallow(<FormInput></FormInput>);
});
