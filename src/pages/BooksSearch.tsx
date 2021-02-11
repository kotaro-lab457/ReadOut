import React, { useState } from "react";
import axios from "axios";

const BooksSearch: React.FC = () => {
  const [searchString, setSearchString] = useState("");
  const [searchResult, setSearchResult] = useState<any>(null);

  //async await（非同期処理）
  const searchGoogleBooks = async (searchString: string) => {
    const url = "https://www.googleapis.com/books/v1/volumes";
    const params = { q: searchString };
    try {
      const response = await axios.get(url, { params });
      console.log("url", url);
      return { isSuccess: true, data: response.data, error: null };
    } catch (error) {
      return { isSuccess: false, date: null, error };
    }
  };
  const handleSearchClick = async (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
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
      <h1>googleBooks</h1>
      <input
        type="text"
        onChange={(event) => setSearchString(event.target.value)}
      />
      <button
        disabled={!searchString}
        onClick={(event) => handleSearchClick(event)}
      >
        検索
      </button>
      <div>
        {searchResult && (
          <div>
            {searchResult.items.map((item: any) => {
              return <p key={item.id}>{item.volumeInfo.title}</p>;
            })}
          </div>
        )}
      </div>
    </>
  );
};

export default BooksSearch;
