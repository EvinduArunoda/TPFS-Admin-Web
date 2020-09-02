import React from "react";
import Policestation from "../User/Policestation";

import { render } from "@testing-library/react";

const stubbedStation = {
  station_id: "886684",
  region: "galle",
  email: "rajinthan@gmail.com",
};

it("matches snapshot", () => {
  const { asFragment } = render(<Policestation policestation={stubbedStation} />);

  expect(asFragment()).toMatchSnapshot();
});