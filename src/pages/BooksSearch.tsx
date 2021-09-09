import React, { useState } from "react";
import axios from "axios";

import { Font } from "@Atoms/font";
import { Img, ImageTag } from "@Atoms/image";
import { Title } from "@Atoms/title";
import { SearchInput } from "@Atoms/input";
import { SearchButton } from "@Atoms/button";
import {
  TableSearch,
  ItemSearch,
  TextSearch,
  ListSearch,
} from "@Molecules/TableSearch";
import { MainPage, MainTablePages } from "@Organisms/MainPages";

import { bookList } from "@Modules"
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const BooksSearch: React.FC = () => {
  const [searchString, setSearchString] = useState<string>("");
  const [searchResult, setSearchResult] = useState<any>(null);
  const [toggleMessage, setToggleMessage] = useState<string>("");

  //Google Books API通信
  const searchGoogleBooks = async (searchString: string) => {
    setToggleMessage("...loading")
    const url = "https://www.googleapis.com/books/v1/volumes";

    const params = { q: searchString, maxResults: 20 };
    // 例外が発生することを考慮（try〜catch構文）
    try {
      const response = await axios.get(url, { params });
      setToggleMessage("");
      return { isSuccess: true, data: response.data, error: null };
    } catch (error) {
      setToggleMessage("");
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
        <MainTablePages>
          <TableSearch>
            <Title>Books Search</Title>
            <span>※さまざまな書籍を検索できます。</span>
            <form onSubmit={handleSearchSubmit}>
              <SearchInput
                type="text"
                placeholder="キーワードを入力してください"
                onChange={(e) => setSearchString(e.target.value)}
                required
              />
              <SearchButton>
                <FontAwesomeIcon icon={faSearch} />
              </SearchButton>
            </form>
          </TableSearch>
          <Font>{toggleMessage}</Font>
          {searchResult && (
            <ListSearch>
              <>
                {searchResult.items.map((item: bookList) => {
                  return (
                    <ItemSearch key={item.id}>
                      <ImageTag>
                        <Img
                          src={`https://books.google.com/books/content?id=${item.id}&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api`}
                          alt=""
                        />
                      </ImageTag>
                      <TextSearch>
                        <Font>タイトル名：{item.volumeInfo.title}</Font>
                        <Font>著者名：{item.volumeInfo.authors}</Font>
                        <Font>発行日：{item.volumeInfo.publishedDate}</Font>
                      </TextSearch>
                    </ItemSearch>
                  );
                })}
              </>
            </ListSearch>
          )}
        </MainTablePages>
      </MainPage>
    </>
  );
};

export default BooksSearch;
