import React, { useState } from "react";
import firebase from "../config/Firebase";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { EditInput, TextArea } from "../ui/atoms/input";
import { UpdateButton, CancelButton, IconButton } from "../ui/atoms/button";
import { TableButton, TableIcon } from "../ui/molecules/TableProfile";

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

  const FS = firebase.firestore().collection("text");
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

  // FireStoreのTextコレクションの各々の doc.id を取得し、削除
  const handleDelete = () => {
    FS.doc(`${props.list.id}`).delete();
  };

  console.log("edit", props.list.id);
  return (
    <>
      <div>
        <p>
          タイトル：
          <EditInput
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </p>
        <p>
          ページ ：
          <EditInput
            id="page"
            type="text"
            value={page}
            onChange={(e) => setPage(e.target.value)}
          />
        </p>
        <p>感想</p>
        <TextArea
          id="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <TableIcon>
        <IconButton onClick={handleDelete}>
          <FontAwesomeIcon icon={faTrashAlt} />
        </IconButton>
      </TableIcon>
      <TableButton>
        <CancelButton onClick={editTextCancel}>キャンセル</CancelButton>
        <UpdateButton onClick={editTextChange}>更新</UpdateButton>
      </TableButton>
    </>
  );
};

export default Editing;
