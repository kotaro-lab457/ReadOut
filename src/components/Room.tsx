import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import firebase from "../config/Firebase";
import { AuthContext } from "../AuthService";

import { Title } from "../ui/atoms/title";
import { SetUpButton } from "../ui/atoms/button";
import TablePage from "../ui/molecules/TablePages";
import TableRoom from "../ui/molecules/TableRoom";
import { MainPage } from "../ui/organisms/MainPages";
import { PostText } from "../module.TS/Post.module";

import moment from "moment";

const Room: React.FC = () => {
  const [postText, setPostText] = useState<PostText[]>([]);

  const FS = firebase.firestore().collection("text");
  const user = useContext(AuthContext);

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
      <MainPage>
        <TablePage>
          <Title>Home</Title>
          {postText.map((list, id) => (
            <TableRoom key={id}>
              <p>ユーザー：{list.user}</p>
              <p>タイトル：{list.title}</p>
              <p>ページ：{list.page}</p>
              <p>感想：{list.text}</p>
              <span>{moment(list.createAt).format("A HH:mm YYYY/MM/DD")}</span>
            </TableRoom>
          ))}
          {user && (
            <Link to="/setup">
              <SetUpButton></SetUpButton>
            </Link>
          )}
        </TablePage>
      </MainPage>
    </>
  );
};

export default Room;
