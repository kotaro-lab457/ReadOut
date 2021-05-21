import React from "react";
import Login from "../src/pages/Login";
import { screen, render, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { Provider } from "react-redux";
import { store } from "../src/stores/store";
import { MemoryRouter } from "react-router-dom";

afterEach(cleanup);

describe("Loginテスト", () => {
  it("サインインのレンダリング", () => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <Login />
        </Provider>
      </MemoryRouter>
    );
    userEvent.click(screen.getByText("Sign In"));
  });
});
