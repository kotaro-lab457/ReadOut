import React, { useState, useEffect } from "react";
import firebase from "../config/Firebase";
import moment from "moment";

import { useSelector } from "react-redux";
import { selectUser } from "../stores/userSlice";

import { COMMENT } from "../module/Text.module";
import {
  CommentFont,
  TimeFont,
  CommentUserFont,
  CommentsFont,
} from "../ui/atoms/font";
import { CancelButton, CommentButton } from "../ui/atoms/button";
import { CommentInput, CommentLine } from "../ui/atoms/input";
import { TableFormComment, TableCommentsText } from "../ui/molecules/TableHome";

interface PROPS {
  list: {
    id: number;
  };
}

const Comments: React.FC<PROPS> = (props) => {
  const [comment, setComment] = useState<string>("");
  const [comments, setComments] = useState<COMMENT[]>([]);
  const [openComments, setOpenComments] = useState(false);
  const [count, setCount] = useState<number>(0);

  const user = useSelector(selectUser);

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

  const newComment = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    FS.add({
      user: user.displayName,
      text: comment,
      createAt: new Date().getTime(),
    });
    setComment("");
    setCount(count + 1);
  };

  return (
    <>
      <div>
        <div>
          <CommentFont onClick={() => setOpenComments(!openComments)}>
            コメント（{count}）{openComments ? "非表示" : "表示"}
          </CommentFont>
        </div>
        <TableFormComment onSubmit={newComment}>
          <CommentInput
            type="text"
            placeholder="コメントの追加..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
          <CommentLine />
          <CancelButton onClick={() => setComment("")}>キャンセル</CancelButton>
          <CommentButton disabled={!comment}>送信</CommentButton>
        </TableFormComment>
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
      </div>
    </>
  );
};

export default Comments;
