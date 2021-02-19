import React, { useState, useEffect } from "react";
import firebase from "../config/Firebase";

import { TitleName } from "../ui/atoms/title";
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
  console.log(postText);

  return (
    <>
      <div>
        <TitleName>Home</TitleName>
        <ul>
          {postText.map((list, id) => (
            <li key={id}>
              <div>
                <p>ユーザー：{list.user}</p>
                <p>タイトル：{list.title}</p>
                <p>ページ：{list.page}</p>
                <p>感想：{list.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Room;
