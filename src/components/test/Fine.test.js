import React from "react";
import { render, fireEvent, act } from "@testing-library/react";
import Fine from "../Fine/Fine";

describe("Fine component", () => {
  const mockChangeValue = jest.fn();
  const stubbedSearchValue = {
    finecode:"",
    type:"",
    description:"",
    amount:"",
  };

  it("shows all required input fields with empty values", () => {
    const { getByTestId } = render(
      <Fine
        searchValue={stubbedSearchValue}
        handleChangeValue={mockChangeValue}
      />
    );

    expect(getByTestId("finecode").value).toBe("");
    expect(getByTestId("type").value).toBe("");
    expect(getByTestId("description").value).toBe("");
    expect(getByTestId("amount").value).toBe("");
    
  });
})