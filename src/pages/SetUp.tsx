import React, { useState, useContext } from "react";
import firebase from "../config/Firebase";

import { AuthContext } from "../AuthService";

const SetUp: React.FC = () => {
  const [title, setTitle] = useState<string>("");
  const [comment, setComment] = useState<string>("");
  const [page, setPage] = useState<string>("");

  const user = useContext(AuthContext);

  const handleComment = (e: React.FormEvent) => {
    e.preventDefault();
    firebase.firestore().collection("comments").doc().set({
      user: user.displayName,
      books: title,
      content: comment,
      pages: page,
      date: new Date(),
      uid: user.uid,
    });
    setComment("");
    setTitle("");
    setPage("");
    console.log(title + ":" + page + "." + comment);
  };
  return (
    <>
      <h1>アウトプット 作成ページ</h1>
      <form onSubmit={handleComment}>
        <div>
          <p>読んだ本は？</p>
          <input
            id="add"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <p>何ページ読んだか？</p>
          <label>
            P:
            <input
              id="add"
              type="text"
              value={page}
              onChange={(e) => setPage(e.target.value)}
            />
          </label>
          <p>感想＆要約</p>
          <textarea
            id="add"
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

export default SetUp;
