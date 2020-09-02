import React from "react";
import CarFine from "../Fine/CarFine";

import { render } from "@testing-library/react";

const stubbedFine = {
  finecode: "car008",
  description: "over speed",
  amount: "1000.00",
};

it("matches snapshot", () => {
  const { asFragment } = render(<CarFine fine={stubbedFine} />);

  expect(asFragment()).toMatchSnapshot();
});