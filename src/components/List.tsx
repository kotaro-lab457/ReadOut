import React from "react";
import firebase from "../config/Firebase";
import moment from "moment";

import { faPen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { TimeFont, Font } from "../ui/atoms/font";
import { IconButton } from "../ui/atoms/button";
import { TableIcon } from "../ui/molecules/TableProfile";
import { TableList } from "../ui/molecules/TableRoom";

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
  return (
    <>
      <div>
        <Font>タイトル：{props.list.title}</Font>
        <Font>ページ：{props.list.page}</Font>
        <Font>感想：{props.list.text}</Font>
      </div>
      <TableIcon>
        <IconButton onClick={handleEditChange}>
          <FontAwesomeIcon icon={faPen} />
        </IconButton>
      </TableIcon>
      <TimeFont>
        {moment(props.list.createAt).format("A HH:mm YYYY/MM/DD")}
      </TimeFont>
    </>
  );
};

export default List;
