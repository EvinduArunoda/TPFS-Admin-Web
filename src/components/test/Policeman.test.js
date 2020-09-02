import React from "react";
import Policeman from "../User/Policeman";

import { render } from "@testing-library/react";

const stubbedman = {
  employee_id:'124563',
  station_id:'521456',
  mail_id:'rajinthan@gmail.com',
};

it("matches snapshot", () => {
  const { asFragment } = render(<Policeman Policeman={stubbedman} />);

  expect(asFragment()).toMatchSnapshot();
});