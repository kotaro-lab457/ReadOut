import React, { useState, useEffect } from "react";
import firebase from "../config/Firebase";
import moment from "moment";

import { COMMENT } from "../module/Text.module";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Img, ImageTag } from "../ui/atoms/image";
import {
  Font,
  CommentFont,
  TimeFont,
  CommentUserFont,
  CommentsFont,
} from "../ui/atoms/font";
import { IconButton } from "../ui/atoms/button";
import {
  TableItem,
  TableTexts,
  TableCommentsText,
} from "../ui/molecules/TableHome";
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
  const [count, setCount] = useState<number>(0);
  const [comments, setComments] = useState<COMMENT[]>([]);
  const [openComments, setOpenComments] = useState<boolean>(false);

  const FS = firebase
    .firestore()
    .collection("text")
    .doc(`${props.list.id}`)
    .collection("comments");

  useEffect(() => {
    const unSub = FS.orderBy("createAt", "asc").onSnapshot((snapshot) => {
      const posts: any = snapshot.docs.map((doc) => {
        return doc.data();
      });
      setComments(posts);
    });

    FS.get().then((doc) => {
      setCount(doc.size);
    });
    return () => {
      unSub();
    };
  }, []);

  // 編集切り替え ＝ editingを false から true へ
  const handleEditChange = () => {
    props.editChange(props.list.id, !props.list.editing);
  };
  return (
    <>
      <ImageTag>
        <Img src={props.list.image} alt="" />
      </ImageTag>
      <TableTexts>
        <TableItem>
          <Font>タイトル：{props.list.title}</Font>
          <Font>読んだページ数：{props.list.page}</Font>
          <Font>感想：{props.list.text}</Font>
        </TableItem>
        <TimeFont>
          {moment(props.list.createAt).format("A HH:mm YYYY/MM/DD")}
        </TimeFont>
        <div>
          <CommentFont onClick={() => setOpenComments(!openComments)}>
            コメント（{count}）{openComments ? "非表示" : "表示"}
          </CommentFont>
        </div>
        {openComments && (
          <div>
            {comments.map((list, id) => (
              <TableCommentsText key={id}>
                <div>
                  <CommentUserFont>@{list.user}</CommentUserFont>
                  <TimeFont>{moment(list.createAt).fromNow()}</TimeFont>
                </div>
                <CommentsFont>{list.text}</CommentsFont>
              </TableCommentsText>
            ))}
          </div>
        )}
      </TableTexts>
      <TableIcon>
        <IconButton onClick={handleEditChange}>
          <FontAwesomeIcon icon={faPen} />
        </IconButton>
      </TableIcon>
    </>
  );
};

export default List;
