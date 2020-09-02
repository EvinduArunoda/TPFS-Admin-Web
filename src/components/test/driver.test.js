import React from "react";
import Driver from "../User/Driver";

import { render } from "@testing-library/react";

const stubbedDriver = {
  LicenseNumber: 'B1234567',
  NIC :'980200124v',
  emailaddress:'rajinthan@gmail.com',
};

it("matches snapshot", () => {
  const { asFragment } = render(<Driver driver={stubbedDriver} />);

  expect(asFragment()).toMatchSnapshot();
});