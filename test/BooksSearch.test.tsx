import React from "react";
import BooksSearch from "../src/pages/BooksSearch";
import { screen, render, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import axios from "axios";
import { rest } from "msw";
import { setupServer } from "msw/node";

const server = setupServer(
  rest.get("https://www.googleapis.com/books/v1/volumes",(res.ctx) => {
    return rest(ctx.status(200),ctx.json({}))
  })
)

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
    //mockedAxios.get.mockResolvedValueOnce(searchResult);
  });
});
