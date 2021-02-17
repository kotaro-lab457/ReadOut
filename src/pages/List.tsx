import React from "react";

import firebase from "../config/Firebase";

interface listProps {
  list: { id: number; title: string; page: string; text: string };
}

const List: React.FC<listProps> = (props) => {
  const FS = firebase.firestore().collection("text");

  return (
    <>
      <div>
        <p>読んだ本は？</p>
        <p>{props.list.title}</p>
        <p>何ページ読んだか？</p>
        <p>P:{props.list.page}</p>
        <p>感想＆要約</p>
        <p>{props.list.text}</p>
      </div>
      <button>編集</button>
      <button
        onClick={() => {
          FS.doc(`${props.list.id}`).delete();
        }}
      >
        削除
      </button>
    </>
  );
};

export default List;
