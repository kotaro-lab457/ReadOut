import React from "react";
import Login from "../src/pages/Login";
import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("Login components", () => {
  test("render Login components", () => {
    render(<Login />);
    screen.debug();
  });
});
