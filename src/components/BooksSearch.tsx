import React, { useState } from "react";
import axios from "axios";

import { Font } from "../ui/atoms/font";
import Img from "../ui/atoms/image";
import { Title } from "../ui/atoms/title";
import { SearchInput } from "../ui/atoms/input";
import { SearchButton } from "../ui/atoms/button";
import TablePage from "../ui/molecules/TablePages";
import {
  TableSearch,
  ItemSearch,
  TextSearch,
  ImageSearch,
  ListSearch,
} from "../ui/molecules/TableSearch";
import { MainPage } from "../ui/organisms/MainPages";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const BooksSearch: React.FC = () => {
  const [searchString, setSearchString] = useState("");
  const [searchResult, setSearchResult] = useState<any>(null);

  //async await（非同期処理）
  const searchGoogleBooks = async (searchString: string) => {
    const url = "https://www.googleapis.com/books/v1/volumes";
    // q: 全文文字列
    const params = { q: searchString, maxResults: 20 };
    console.log(params);
    // 例外が発生することを考慮（try〜catch構文）
    try {
      // axios.get()でHTTPリクエストを送ることができる。
      const response = await axios.get(url, { params });
      console.log(response);
      return { isSuccess: true, data: response.data, error: null };
    } catch (error) {
      return { isSuccess: false, date: null, error };
    }
  };

  const handleSearchSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const result = await searchGoogleBooks(searchString);
    if (result.isSuccess) {
      setSearchResult(result.data);
    } else {
      window.alert(String(result.error));
    }
  };
  return (
    <>
      <MainPage>
        <TablePage>
          <TableSearch>
            <Title>Books Search</Title>
            ※さまざまな書籍を検索できます。
            <form onSubmit={handleSearchSubmit}>
              <SearchInput
                type="text"
                placeholder="キーワードを入力"
                onChange={(e) => setSearchString(e.target.value)}
              />
              <SearchButton>
                <FontAwesomeIcon icon={faSearch} />
              </SearchButton>
            </form>
          </TableSearch>
          <ListSearch>
            {searchResult && (
              <>
                {searchResult.items.map((item: any) => {
                  return (
                    <ItemSearch key={item.id}>
                      <ImageSearch>
                        <Img
                          src={`http://books.google.com/books/content?id=${item.id}&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api`}
                          alt=""
                        />
                      </ImageSearch>
                      <TextSearch>
                        <Font>タイトル名：{item.volumeInfo.title}</Font>
                        <Font>著者名：{item.volumeInfo.authors}</Font>
                        <Font>発行日：{item.volumeInfo.publishedDate}</Font>
                        <Font>ページ数：{item.volumeInfo.pageCount}</Font>
                      </TextSearch>
                    </ItemSearch>
                  );
                })}
              </>
            )}
          </ListSearch>
        </TablePage>
      </MainPage>
    </>
  );
};

export default BooksSearch;
