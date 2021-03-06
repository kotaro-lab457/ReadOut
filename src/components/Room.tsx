import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import firebase from "../config/Firebase";
import { AuthContext } from "../AuthService";
import moment from "moment";

import { Title } from "../ui/atoms/title";
import { Font } from "../ui/atoms/font";
import { TimeFont, SubFont } from "../ui/atoms/font";
import {
  SetUpButton,
  RoomSearchButton,
  UpdateButton,
} from "../ui/atoms/button";
import { Input } from "../ui/atoms/input";
import TablePage from "../ui/molecules/TablePages";
import { TableTagSetUp } from "../ui/molecules/TableSetUp";
import { TableText } from "../ui/molecules/TableProfile";
import { TableRoom, TableRoomForm } from "../ui/molecules/TableRoom";
import { MainPage } from "../ui/organisms/MainPages";
import { PostText } from "../module.TS/Post.module";

import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Room: React.FC = () => {
  const [postText, setPostText] = useState<PostText[]>([]);
  const [value, setValue] = useState<string>("");
  const [isDone, setIsDone] = useState<boolean>(false);

  const FS = firebase.firestore().collection("text");
  const user = useContext(AuthContext);

  useEffect(() => {
    let isMounted = true;
    FS.orderBy("date", "desc").onSnapshot((snapshot) => {
      const posts: any = snapshot.docs.map((doc) => {
        return doc.data();
      });
      if (isMounted) {
        setPostText(posts); //collectionのデータを取得してる
      }
    });
    console.log(postText);
    return (): void => {
      isMounted = false;
    };
  }, []);
  // setPostTextが受け取る配列の中身を絞り込みする

  const handleFilter = (e: React.FormEvent) => {
    e.preventDefault();
    if (value === "") return;
    setPostText(
      postText.filter((list) => list.title === value || list.user === value)
    );
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
          <TableText>
            {isDone ? (
              <UpdateButton onClick={handleRender}>再表示</UpdateButton>
            ) : (
              <TableRoomForm onSubmit={handleFilter}>
                <SubFont>絞り込み：</SubFont>
                <Input
                  type="text"
                  placeholder="タイトル or ユーザー名"
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                />
                <RoomSearchButton>
                  <FontAwesomeIcon icon={faSearch} />
                </RoomSearchButton>
              </TableRoomForm>
            )}
          </TableText>
          <div style={{ overflowY: "scroll", height: "500px" }}>
            {postText.map((list, id) => (
              <TableRoom key={id}>
                <Font>ユーザー：{list.user}</Font>
                <Font>タイトル：{list.title}</Font>
                <Font>ページ：{list.page}</Font>
                <Font>感想：{list.text}</Font>
                <TimeFont>
                  {moment(list.createAt).format("A HH:mm YYYY/MM/DD")}
                </TimeFont>
              </TableRoom>
            ))}
          </div>
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
