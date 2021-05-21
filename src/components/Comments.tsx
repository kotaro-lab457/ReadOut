import React, { useState, useEffect } from "react";
import firebase from "../config/Firebase";

import { useSelector } from "react-redux";
import { selectUser } from "../stores/userSlice";

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

  const user = useSelector(selectUser);
  const FS = firebase.firestore().collection("text");

  useEffect(() => {
    const unSub = FS.doc(`${props.list.id}`)
      .collection("comments")
      .orderBy("createAt", "desc")
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

  return (
    <>
      <div>
        {comments.map((list, id) => (
          <div key={id}>
            <p>ユーザー名:{list.user}</p>
            <p>{list.text}</p>
          </div>
        ))}
      </div>
      <form onSubmit={newComment}>
        <input
          type="text"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <button>送信</button>
      </form>
    </>
  );
};

export default Comments;
