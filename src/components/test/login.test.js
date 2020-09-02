import React from "react";
import { render, fireEvent, act } from "@testing-library/react";
import AdminLogin from "../AdminLogin";

describe("AdminLogin component", () => {
  const mockChangeValue = jest.fn();
  const stubbedSearchValue = {
    email: "",
    password: "",
  };

  it("shows all required input fields with empty values", () => {
    const { getByTestId } = render(
      <AdminLogin
        searchValue={stubbedSearchValue}
        handleChangeValue={mockChangeValue}
      />
    );

    expect(getByTestId("email").value).toBe("");
    expect(getByTestId("password").value).toBe("");
    
  });
})