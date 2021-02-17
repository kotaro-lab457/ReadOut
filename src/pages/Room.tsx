import React, { useState, useEffect } from "react";
import firebase from "../config/Firebase";

import { PostText } from "../module.TS/Post.module";

const Room: React.FC = () => {
  const [postText, setPostText] = useState<PostText[]>([]);

  const FS = firebase.firestore().collection("text");

  useEffect(() => {
    FS.orderBy("date", "desc").onSnapshot((snapshot) => {
      const posts: any = snapshot.docs.map((doc) => {
        return doc.data();
      });
      setPostText(posts);
    });
  }, []);

  return (
    <>
      <div>
        <h1>Home</h1>
        <ul>
          {postText.map((list, id) => (
            <li key={id}>
              <div>
                <p>ユーザー：{list.user}</p>
                <p>タイトル：{list.books}</p>
                <p>ページ：{list.pages}</p>
                <p>感想：{list.content}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Room;
