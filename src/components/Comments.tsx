import React, { useState, useEffect } from "react";
import firebase from "../config/Firebase";
import moment from "moment";

import { useSelector } from "react-redux";
import { selectUser } from "../stores/userSlice";

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

interface COMMENT {
  id: number;
  user: string;
  text: string;
  createAt: number;
}

const Comments: React.FC<PROPS> = (props) => {
  const [comment, setComment] = useState<string>("");
  const [comments, setComments] = useState<COMMENT[]>([]);
  const [openComments, setOpenComments] = useState(false);
  const user = useSelector(selectUser);
  const FS = firebase.firestore().collection("text");

  useEffect(() => {
    const unSub = FS.doc(`${props.list.id}`)
      .collection("comments")
      .orderBy("createAt", "asc")
      .onSnapshot((snapshot) => {
        const posts: any = snapshot.docs.map((doc) => {
          return doc.data();
        });
        setComments(posts);
      });
    return () => {
      unSub();
    };
  }, []);

  const newComment = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    FS.doc(`${props.list.id}`).collection("comments").add({
      user: user.displayName,
      text: comment,
      createAt: new Date().getTime(),
    });
    setComment("");
  };

  console.log(comment);

  return (
    <>
      <div>
        <div>
          <CommentFont onClick={() => setOpenComments(!openComments)}>
            コメント{openComments ? "非表示" : "表示"}
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
