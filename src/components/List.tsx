import React from "react";

import firebase from "../config/Firebase";

interface listProps {
  list: {
    id: number;
    title: string;
    page: string;
    text: string;
    editing: boolean;
  };
  editChange: (id: number, editing: boolean) => void;
}

const List: React.FC<listProps> = (props) => {
  const FS = firebase.firestore().collection("text");

  // 編集切り替え ＝ editingを false から true へ
  const handleEditChange = () => {
    props.editChange(props.list.id, !props.list.editing);
  };

  // FireStoreのTextコレクションの各々の doc.id を取得し、削除
  const handleDelete = () => {
    FS.doc(`${props.list.id}`).delete();
  };
  console.log("list", props.list.id);
  return (
    <>
      <div>
        <p>読んだ本：{props.list.title}</p>
        <p>P:{props.list.page}</p>
        <p>感想：{props.list.text}</p>
      </div>
      <button onClick={handleEditChange}>編集</button>
      <button onClick={handleDelete}>削除</button>
    </>
  );
};

export default List;
