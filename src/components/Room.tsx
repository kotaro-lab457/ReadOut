import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import firebase from "../config/Firebase";
import { AuthContext } from "../AuthService";

import { Title } from "../ui/atoms/title";
import { TimeFont } from "../ui/atoms/font";
import { SetUpButton } from "../ui/atoms/button";
import TablePage from "../ui/molecules/TablePages";
import { TableTagSetUp } from "../ui/molecules/TableSetUp";
import TableRoom from "../ui/molecules/TableRoom";
import { MainPage } from "../ui/organisms/MainPages";
import { PostText } from "../module.TS/Post.module";

import moment from "moment";

const Room: React.FC = () => {
  const [postText, setPostText] = useState<PostText[]>([]);
  const [value, setValue] = useState<string>("");
  const [isDone, setIsDone] = useState<boolean>(false);

  const FS = firebase.firestore().collection("text");
  const user = useContext(AuthContext);

  useEffect(() => {
    FS.orderBy("date", "desc").onSnapshot((snapshot) => {
      const posts: any = snapshot.docs.map((doc) => {
        return doc.data();
      });
      setPostText(posts); //collectionのデータを取得してる
    });
    console.log(postText);
  }, []);
  // setPostTextが受け取る配列の中身を絞り込みする

  const handleFilter = (e: React.FormEvent) => {
    e.preventDefault();
    setPostText(postText.filter((list) => list.title === value));
    setIsDone(!isDone);
    setValue("");
  };

  const handleRender = (e: React.FormEvent) => {
    e.preventDefault();
    FS.orderBy("date", "desc").onSnapshot((snapshot) => {
      const posts: any = snapshot.docs.map((doc) => {
        return doc.data();
      });
      setPostText(posts); //collectionのデータを取得してる
      setIsDone(!isDone);
    });
  };
  return (
    <>
      <MainPage>
        <TablePage>
          <Title>Home</Title>
          {isDone ? (
            <button onClick={handleRender}>再表示</button>
          ) : (
            <form onSubmit={handleFilter}>
              絞り込み検索
              <input
                type="text"
                value={value}
                onChange={(e) => setValue(e.target.value)}
              />
              <button>検索</button>
            </form>
          )}
          {postText.map((list, id) => (
            <TableRoom key={id}>
              <p>ユーザー：{list.user}</p>
              <p>タイトル：{list.title}</p>
              <p>ページ：{list.page}</p>
              <p>感想：{list.text}</p>
              <TimeFont>
                {moment(list.createAt).format("A HH:mm YYYY/MM/DD")}
              </TimeFont>
            </TableRoom>
          ))}
          {user && (
            <TableTagSetUp>
              <Link to="/setup">
                <SetUpButton></SetUpButton>
              </Link>
            </TableTagSetUp>
          )}
        </TablePage>
      </MainPage>
    </>
  );
};

export default Room;
