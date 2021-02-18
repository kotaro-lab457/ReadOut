import React, { useState, useContext } from "react";
import firebase from "../config/Firebase";

import { AuthContext } from "../AuthService";

const SetUp: React.FC = () => {
  const [title, setTitle] = useState<string>("");
  const [text, setText] = useState<string>("");
  const [page, setPage] = useState<string>("");
  const [count, setCount] = useState<number>(0);

  const user = useContext(AuthContext);

  const FS = firebase.firestore().collection("text");

  let createId = Math.random() * 100;
  //let currentID = 0;
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
    setCount(count + createId); //ランダムにする
    console.log(count);
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
