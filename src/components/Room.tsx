import React, { useState, useEffect } from "react";
import firebase from "../config/Firebase";

import { TitleName } from "../ui/atoms/title";
import MainRoom from "../ui/organisms/MainRoom";
import { TableRoom, SubTableRoom } from "../ui/molecules/TableRoom";

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
      <MainRoom>
        <TableRoom>
          <TitleName>Home</TitleName>
          {postText.map((list, id) => (
            <SubTableRoom key={id}>
              <p>ユーザー：{list.user}</p>
              <p>タイトル：{list.title}</p>
              <p>ページ：{list.page}</p>
              <p>感想：{list.text}</p>
            </SubTableRoom>
          ))}
        </TableRoom>
      </MainRoom>
    </>
  );
};

export default Room;
