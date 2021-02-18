import React, { useState, useContext } from "react";
import firebase from "../config/Firebase";

import { AuthContext } from "../AuthService";

let createId = Math.random() * 10;
const SetUp: React.FC = () => {
  const [title, setTitle] = useState<string>("");
  const [text, setText] = useState<string>("");
  const [page, setPage] = useState<string>("");
  const [count, setCount] = useState<number>(createId);

  const user = useContext(AuthContext);

  const FS = firebase.firestore().collection("text");

  const handleComment = (e: React.FormEvent) => {
    e.preventDefault();
    FS.doc(`${count}`).set({
      user: user.displayName,
      title: title,
      text: text,
      page: page,
      date: new Date(),
      uid: user.uid,
      id: count,
      editing: false,
    });
    setText("");
    setTitle("");
    setPage("");
    setCount(count + createId);
    console.log(count);
  };
  return (
    <>
      <h1>アウトプット 作成ページ</h1>
      <form onSubmit={handleComment}>
        <div>
          <p>読んだ本は？</p>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <p>何ページ読んだか？</p>
          <label>
            P:
            <input
              id="page"
              type="text"
              value={page}
              onChange={(e) => setPage(e.target.value)}
            />
          </label>
          <p>感想＆要約</p>
          <textarea
            id="text"
            placeholder="コメント入力"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <button>投稿</button>
      </form>
    </>
  );
};

export default SetUp;
