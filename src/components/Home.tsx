import React, { useState, useContext, useEffect } from "react";
import Editing from "./Editing";
import List from "./List";
import firebase from "../config/Firebase";
import { AuthContext } from "../AuthService";

import { PostText } from "../module.TS/Post.module";

import { TitleName } from "../ui/atoms/title";
import { TableHome, SubTableHome } from "../ui/molecules/TableHome";
import MainHome from "../ui/organisms/MainHome";

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
      <MainHome>
        <TableHome>
          <TitleName>Profile</TitleName>
          <p>※ゲストログインの場合は、投稿の履歴が残りません</p>
          <p>ユーザー名：{userName?.displayName}</p>
          {homeText.map((list, id) => (
            <div key={id}>
              {list.uid === user.uid && (
                // ドキュメントのuser.uidとuserのuidを
                // 編集（Edit）タグで囲んであげる
                <SubTableHome>
                  {list.editing ? (
                    <Editing key={id} list={list} editChange={editChange} />
                  ) : (
                    <List key={id} list={list} editChange={editChange} />
                  )}
                </SubTableHome>
              )}
            </div>
          ))}
        </TableHome>
      </MainHome>
    </>
  );
};

export default Home;
