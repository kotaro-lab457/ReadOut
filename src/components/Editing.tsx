import React, { useState } from "react";
import firebase from "../config/Firebase";
import axios from "axios";

import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { EditFont } from "../ui/atoms/font";
import { EditInput, TextArea } from "../ui/atoms/input";
import { UpdateButton, CancelButton, IconButton } from "../ui/atoms/button";
import {
  TableButton,
  TableDelete,
  TableEdit,
} from "../ui/molecules/TableProfile";

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

  const editTextChange = async () => {
    const url = "https://www.googleapis.com/books/v1/volumes";
    const params = {
      q: title,
      maxResults: 1,
    };
    try {
      const response = await axios.get(url, { params: params });
      const item = response.data.items[0].id;
      const imageUrl = `https://books.google.com/books/content?id=${item}&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api`;
      
      FS.doc(`${props.list.id}`).update({
        title: title,
        page: page,
        text: text,
        image: imageUrl,
      });
    } catch (err) {
      alert(err.message);
    }
  };

  // FireStoreのTextコレクションの各々の doc.id を取得し、削除
  const handleDelete = () => {
    FS.doc(`${props.list.id}`).delete();
  };

  return (
    <>
      <TableEdit>
        <div>
          <EditFont>タイトル</EditFont>
          <EditInput
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <EditFont>読んだページ</EditFont>
          <EditInput
            id="page"
            type="text"
            value={page}
            onChange={(e) => setPage(e.target.value)}
          />
        </div>
        <EditFont>感想</EditFont>
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
      </TableEdit>
    </>
  );
};

export default Editing;
