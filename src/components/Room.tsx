import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import firebase from "../config/Firebase";
import { AuthContext, AuthService } from "../AuthService";

import { TitleName } from "../ui/atoms/title";
import { LinkSetUp } from "../ui/atoms/Link";
import MainRoom from "../ui/organisms/MainRoom";
import { TableRoom, SubTableRoom } from "../ui/molecules/TableRoom";
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
      <MainRoom>
        <TableRoom>
          <TitleName>Home</TitleName>
          {postText.map((list, id) => (
            <SubTableRoom key={id}>
              <p>ユーザー：{list.user}</p>
              <p>タイトル：{list.title}</p>
              <p>ページ：{list.page}</p>
              <p>感想：{list.text}</p>
              <span>{moment(list.createAt).format("A HH:mm YYYY/MM/DD")}</span>
            </SubTableRoom>
          ))}
          {user && (
            <Link to="/setup">
              <LinkSetUp></LinkSetUp>
            </Link>
          )}
        </TableRoom>
      </MainRoom>
    </>
  );
};

export default Room;
