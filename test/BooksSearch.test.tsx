import React from "react";
import BooksSearch from "../src/pages/BooksSearch";
import { screen, render, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import axios from "axios";
import { rest } from "msw";
import { setupServer } from "msw/node";
import { data } from "msw/lib/types/context";

// モックサーバーに擬似的にクエリを返す
// const server = setupServer(
//   rest.get("https://www.googleapis.com/books/v1/volumes", (req, res, ctx) => {
//     return res(
//       ctx.status(200),
//       ctx.json([
//         { id: "1", title: "Webの技術" },
//         { id: "2", title: "CSSの設計書" },
//       ])
//     );
//   })
// );

// beforeAll(() => server.listen());
// afterEach(() => {
//   server.resetHandlers();
//   cleanup();
// });
// afterAll(() => server.close());

// afterEach(() => server.close());

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
    render(<BooksSearch />);
    userEvent.click(screen.getByRole("button"));
    // const items = await screen.findAllByRole("img");

    //expect(items).toHaveValue(2);
  });
});
