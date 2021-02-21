import React from "react";
import firebase from "../config/Firebase";
import moment from "moment";

import { faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface listProps {
  list: {
    id: number;
    title: string;
    page: string;
    text: string;
    editing: boolean;
    createAt: number;
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
        <p>タイトル：{props.list.title}</p>
        <p>ページ:{props.list.page}</p>
        <p>感想：{props.list.text}</p>
      </div>
      <button onClick={handleEditChange}>
        <FontAwesomeIcon icon={faEdit} />
      </button>
      <button onClick={handleDelete}>
        <FontAwesomeIcon icon={faTrashAlt} />
      </button>
      <span>{moment(props.list.createAt).format("A HH:mm YYYY/MM/DD")}</span>
    </>
  );
};

export default List;
