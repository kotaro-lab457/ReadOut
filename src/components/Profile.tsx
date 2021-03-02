import React, { useState, useContext, useEffect } from "react";
import Editing from "./Editing";
import List from "./List";
import { Link } from "react-router-dom";
import firebase from "../config/Firebase";
import { AuthContext } from "../AuthService";
import { PostText } from "../module.TS/Post.module";

import { Title } from "../ui/atoms/title";
import { SetUpButton } from "../ui/atoms/button";
import TablePage from "../ui/molecules/TablePages";
import { TableTagSetUp } from "../ui/molecules/TableSetUp";
import { TableProfile } from "../ui/molecules/TableProfile";
import { MainPage } from "../ui/organisms/MainPages";

const Home: React.FC = () => {
  const [homeText, setHomeText] = useState<PostText[]>([]);

  const user = useContext(AuthContext);
  // ユーザー名の取得
  const userName = firebase.auth().currentUser;

  const FS = firebase.firestore().collection("text");
  useEffect(() => {
    if (user) {
      FS.orderBy("date", "desc").onSnapshot((snapshot) => {
        const homes: any = snapshot.docs.map((doc) => {
          // ドキュメント取得
          return doc.data();
        });
        setHomeText(homes);
      });
    }
  }, [user]);

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
          <p>
            ※ゲストユーザーの場合は、投稿の履歴が残りません
            <br />
            {/* 本登録する場合は、
            <Link to="/editProfile">こちらへ。</Link> */}
          </p>
          <p>ユーザー名：{userName?.displayName}</p>
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

export default Home;
