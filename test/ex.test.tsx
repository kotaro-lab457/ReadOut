import React from "react";
import BooksSearch from "../src/pages/BooksSearch";
import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

test("イベント処理のレンダリング", () => {
  const { getByText, debug } = render(<BooksSearch />);
  debug();

  const submitButton = getByText(/submit/i);
  debug(submitButton);
});
