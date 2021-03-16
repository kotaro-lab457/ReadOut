import React from "react";
import firebase from "../config/Firebase";
import moment from "moment";

import { faPen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Img, ImageTag } from "../ui/atoms/image";
import { TimeFont, Font } from "../ui/atoms/font";
import { IconButton } from "../ui/atoms/button";
import { TablePagesText, TablePageList } from "../ui/molecules/TablePages";
import { TableIcon } from "../ui/molecules/TableProfile";

interface listProps {
  list: {
    id: number;
    title: string;
    page: string;
    text: string;
    editing: boolean;
    createAt: number;
    image: string;
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
      <ImageTag>
        <Img src={props.list.image} alt="" />
      </ImageTag>
      <TablePagesText>
        <TablePageList>
          <Font>タイトル：{props.list.title}</Font>
          <Font>ページ：{props.list.page}</Font>
          <Font>感想：{props.list.text}</Font>
        </TablePageList>
        <TimeFont>
          {moment(props.list.createAt).format("A HH:mm YYYY/MM/DD")}
        </TimeFont>
      </TablePagesText>
      <TableIcon>
        <IconButton onClick={handleEditChange}>
          <FontAwesomeIcon icon={faPen} />
        </IconButton>
      </TableIcon>
    </>
  );
};

export default List;
