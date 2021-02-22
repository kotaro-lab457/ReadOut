import React, { useState } from "react";
import axios from "axios";
import { TitleName } from "../ui/atoms/title";
import { SearchInput } from "../ui/atoms/input";
import { SearchButton } from "../ui/atoms/button";
import MainSearch from "../ui/organisms/MainSearch";
import {
  TableSearch,
  SubTableSearch,
  ItemSearch,
  TextSearch,
} from "../ui/molecules/TableSearch";

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

  const handleSearchSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const result = await searchGoogleBooks(searchString);
    if (result.isSuccess) {
      setSearchResult(result.data);
    } else {
      window.alert(String(result.error));
    }
  };
  return (
    <>
      <MainSearch>
        <TableSearch>
          <SubTableSearch>
            <TitleName>Books Search</TitleName>
            <form onSubmit={handleSearchSubmit}>
              <SearchInput
                type="text"
                placeholder="キーワードを入力"
                onChange={(event) => setSearchString(event.target.value)}
              />
              <SearchButton>
                <FontAwesomeIcon icon={faSearch} />
              </SearchButton>
            </form>
          </SubTableSearch>
          <div>
            {searchResult && (
              <div>
                {searchResult.items.map((item: any) => {
                  return (
                    <ItemSearch key={item.id}>
                      <img
                        src={`http://books.google.com/books/content?id=${item.id}&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api`}
                        alt=""
                      />
                      <TextSearch>
                        <p>タイトル名：{item.volumeInfo.title}</p>
                        <p>著者名：{item.volumeInfo.authors}</p>
                        <p>発行日：{item.volumeInfo.publishedDate}</p>
                        <p>ページ数：{item.volumeInfo.pageCount}</p>
                        <a href={`${item.saleInfo.buyLink}`}>リンク</a>
                      </TextSearch>
                    </ItemSearch>
                  );
                })}
              </div>
            )}
          </div>
        </TableSearch>
      </MainSearch>
    </>
  );
};

export default BooksSearch;
