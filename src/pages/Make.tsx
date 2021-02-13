import React, { useState, useContext } from "react";
import firebase from "../config/Firebase";

import { AuthContext } from "../AuthService";

const Make: React.FC = () => {
  const [title, setTitle] = useState<string>("");
  const [comment, setComment] = useState<string>("");
  const [page, setPage] = useState<string>("");

  const user = useContext(AuthContext);

  const handleComment = (e: React.FormEvent) => {
    e.preventDefault();
    firebase.firestore().collection("comments").add({
      user: user.displayName,
      books: title,
      content: comment,
      pages: page,
      date: new Date(),
    });
    setComment(comment);
    setTitle(title);
    setPage(page);
    console.log(title + comment);
  };
  return (
    <>
      <h1>アウトプット 作成ページ</h1>
      <form onSubmit={handleComment}>
        <div>
          <p>読んだ本は？</p>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <p>何ページ読んだか？</p>
          <label>
            P:
            <input
              type="text"
              value={page}
              onChange={(e) => setPage(e.target.value)}
            />
          </label>
          <p>感想＆要約</p>
          <textarea
            placeholder="コメント入力"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
        </div>
        <button>投稿</button>
      </form>
    </>
  );
};

export default Make;
