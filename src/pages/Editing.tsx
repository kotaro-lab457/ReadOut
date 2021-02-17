import React, { useState, useEffect } from "react";

import firebase from "../config/Firebase";

const Editing: React.FC = () => {
  const [title, setTitle] = useState<string>("");
  const [comment, setComment] = useState<string>("");
  const [page, setPage] = useState<string>("");
  const FS = firebase.firestore().collection("text");

  // useEffect(() => {
  //     FS.orderBy("date", "desc").onSnapshot((snapshot) => {
  //       const homes: any = snapshot.docs.map((doc) => {
  //         // ドキュメント取得
  //         return doc.data();
  //       });
  //       setHomeText(homes);
  //     });
  //   }
  // }, []);

  return (
    <>
      <h1>編集画面</h1>
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
      <button>キャンセル</button>
      <button>更新</button>
    </>
  );
};

export default Editing;
