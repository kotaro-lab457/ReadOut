import React from "react";
import BooksSearch from "../src/pages/BooksSearch";
import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("検索ページ", () => {
  it("should render all the elements タイピング", () => {
    render(<BooksSearch />);
    expect(screen.getByText("Books Search")).toBeTruthy();

    // expect(screen.getByPlaceholderText("キーワードを入力")).toBeTruthy();
    userEvent.type(screen.getByPlaceholderText("Enter"), "test");
    //expect(screen.getByPlaceholderText("Enter")).toHaveValue("test");
  });
});
