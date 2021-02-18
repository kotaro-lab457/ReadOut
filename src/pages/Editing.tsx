import React, { useState } from "react";

import firebase from "../config/Firebase";

interface homeProps {
  list: { id: number; title: string; page: string; text: string };
  textUpdate: (id: number, title: string, page: string, text: string) => void;
}

const Editing: React.FC<homeProps> = (props) => {
  const [title, setTitle] = useState<string>("");
  const [text, setText] = useState<string>("");
  const [page, setPage] = useState<string>("");
  const FS = firebase.firestore().collection("text");

  const editTextChange = () => {
    props.textUpdate(props.list.id, title, page, text);
  };

  return (
    <>
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
      <button>キャンセル</button>
      <button onClick={editTextChange}>更新</button>
    </>
  );
};

export default Editing;
