import React, { useState, useContext, useEffect } from "react";
import Editing from "./Editing";
import List from "./List";
import { Link } from "react-router-dom";
import firebase from "../config/Firebase";
import { AuthContext } from "../AuthService";
import { PostText } from "../module.TS/Post.module";

import { SubFont } from "../ui/atoms/font";
import { Input } from "../ui/atoms/input";
import { Title } from "../ui/atoms/title";
import {
  SetUpButton,
  RoomSearchButton,
  UpdateButton,
} from "../ui/atoms/button";
import TablePage from "../ui/molecules/TablePages";
import { TableTagSetUp } from "../ui/molecules/TableSetUp";
import { TableForm, TableList } from "../ui/molecules/TableRoom";
import {
  TableProfile,
  TableText,
  TableListProfile,
} from "../ui/molecules/TableProfile";
import { MainPage } from "../ui/organisms/MainPages";

import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Home: React.FC = () => {
  const [homeText, setHomeText] = useState<PostText[]>([]);
  const [isDone, setIsDone] = useState<boolean>(false);
  const [value, setValue] = useState<string>("");

  const user = useContext(AuthContext);
  // ユーザー名の取得
  const userName = firebase.auth().currentUser;
  const FS = firebase.firestore().collection("text");

  useEffect(() => {
    if (user) {
      let isMounted = true;
      FS.orderBy("date", "desc").onSnapshot((snapshot) => {
        const homes: any = snapshot.docs.map((doc) => {
          // ドキュメント取得
          return doc.data();
        });
        if (isMounted) {
          setHomeText(homes);
        }
      });
      return (): void => {
        isMounted = false;
      };
    }
  }, [user]);

  const handleFilter = (e: React.FormEvent) => {
    e.preventDefault();
    setHomeText(homeText.filter((list) => list.title === value));
    setIsDone(!isDone);
    setValue("");
  };

  const handleRender = (e: React.FormEvent) => {
    e.preventDefault();
    FS.orderBy("date", "desc").onSnapshot((snapshot) => {
      const posts: any = snapshot.docs.map((doc) => {
        return doc.data();
      });
      setHomeText(posts); //collectionのデータを取得してる
      setIsDone(!isDone);
      console.log("反転");
    });
  };
  // 配列で管理されたhomeTextのそれぞれのIDとEdit（編集）を結びつけ、LISTとEditを反転させる
  const editChange = (id: number, editing: boolean) => {
    setHomeText(
      homeText.map((texts) => {
        if (texts.id === id) {
          return {
            ...texts,
            editing,
          };
        }
        return texts;
      })
    );
  };

  return (
    <>
      <MainPage>
        <TablePage>
          <Title>Profile</Title>
          <TableText>
            <SubFont>
              ※ゲストユーザーの場合は、投稿の履歴が残りません
              <br />
              {/* 本登録する場合は、
            <Link to="/editProfile">こちらへ。</Link> */}
            </SubFont>
            <SubFont>ユーザー名：{userName?.displayName}</SubFont>
            {isDone ? (
              <UpdateButton onClick={handleRender}>再表示</UpdateButton>
            ) : (
              <TableForm onSubmit={handleFilter}>
                <SubFont>絞り込み</SubFont>
                <Input
                  type="text"
                  placeholder="タイトル名"
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                />
                <RoomSearchButton>
                  <FontAwesomeIcon icon={faSearch} />
                </RoomSearchButton>
              </TableForm>
            )}
          </TableText>
          <TableListProfile>
            {homeText.map((list, id) => (
              <div key={id}>
                {list.uid === user.uid && (
                  // ドキュメントのuser.uidとuserのuidを
                  // 編集（Edit）タグで囲んであげる
                  <TableProfile>
                    {list.editing ? (
                      <Editing key={id} list={list} editChange={editChange} />
                    ) : (
                      <List key={id} list={list} editChange={editChange} />
                    )}
                  </TableProfile>
                )}
              </div>
            ))}
          </TableListProfile>
          {user && (
            <TableTagSetUp>
              <Link to="/setup">
                <SetUpButton />
              </Link>
            </TableTagSetUp>
          )}
        </TablePage>
      </MainPage>
    </>
  );
};

export default Home;
