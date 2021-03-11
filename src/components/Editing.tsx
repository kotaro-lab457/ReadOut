import React, { useState, useContext } from "react";
import firebase from "../config/Firebase";
import { AuthContext } from "../AuthService";

import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { SubFont, Font } from "../ui/atoms/font";
import { EditInput, TextArea } from "../ui/atoms/input";
import { UpdateButton, CancelButton, IconButton } from "../ui/atoms/button";
import { TableButton, TableDelete } from "../ui/molecules/TableProfile";

interface homeProps {
  list: {
    id: number;
    title: string;
    page: string;
    text: string;
    editing: boolean;
  };
  editChange: (id: number, editing: boolean) => void;
}

const Editing: React.FC<homeProps> = (props) => {
  const [title, setTitle] = useState<string>(props.list.title);
  const [text, setText] = useState<string>(props.list.text);
  const [page, setPage] = useState<string>(props.list.page);

  const user = useContext(AuthContext);
  const FS = firebase.firestore().collection("text");
  const db = firebase.firestore().collection("counters");

  // キャンセル = editing を true から false へ（Listへ切り替え）
  const editTextCancel = () => {
    props.editChange(props.list.id, !props.list.editing);
  };

  const editTextChange = () => {
    FS.doc(`${props.list.id}`).update({
      title: title,
      page: page,
      text: text,
    });
  };
  console.log(user.uid);

  // FireStoreのTextコレクションの各々の doc.id を取得し、削除
  const handleDelete = () => {
    FS.doc(`${props.list.id}`)
      .delete()
      .then(() => {
        console.log("成功");
        if (db.doc(`${user.uid}`).id === user.uid) {
          db.doc(`${user.uid}`).update({
            date: new Date(),
            count: firebase.firestore.FieldValue.increment(-1),
          });
        }
      });
  };

  console.log("edit", props.list.id);
  return (
    <>
      <Font>
        <SubFont>タイトル </SubFont>
        <EditInput
          id="title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </Font>
      <Font>
        <SubFont>ページ </SubFont>
        <EditInput
          id="page"
          type="text"
          value={page}
          onChange={(e) => setPage(e.target.value)}
        />
      </Font>
      <SubFont>感想</SubFont>
      <TextArea
        id="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <TableDelete>
        <IconButton onClick={handleDelete}>
          <FontAwesomeIcon icon={faTrashAlt} />
        </IconButton>
      </TableDelete>
      <TableButton>
        <CancelButton onClick={editTextCancel}>キャンセル</CancelButton>
        <UpdateButton onClick={editTextChange}>更新</UpdateButton>
      </TableButton>
    </>
  );
};

export default Editing;
