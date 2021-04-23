import React from "react";
import BooksSearch from "../src/pages/BooksSearch";
import { screen, render, wait, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import mockedAxios from "axios";

afterEach(cleanup);

describe("検索ページ", () => {
  it("検索フォームテスト", () => {
    render(<BooksSearch />);
    expect(screen.getByText("Books Search")).toBeTruthy();

    const inputValue = screen.getByPlaceholderText("Enter");

    // 書籍調べ
    userEvent.type(inputValue, "リーダブルコード");

    // 文字列の有無
    expect(screen.queryByText("リーダブルコード")).toBeNull();
  });
  it("非同期処理テスト", async () => {
    const searchResult = [{ isSuccess: true, data: "Webの技術" }];
    mockedAxios.get.mockResolvedValueOnce(searchResult);
  });
});
