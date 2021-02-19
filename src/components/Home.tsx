import React, { useState, useContext, useEffect } from "react";
import Editing from "./Editing";
import List from "./List";
import firebase from "../config/Firebase";
import { AuthContext } from "../AuthService";

import { PostText } from "../module.TS/Post.module";

import { TitlePage } from "../ui/atoms/title";

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
      <TitlePage>プロフィール</TitlePage>
      <p>※ゲストログインの場合は、投稿の履歴が残りません</p>
      <div>
        <p>ユーザー名：{userName?.displayName}</p>
        <div>
          {homeText.map((list, id) => (
            <div key={id}>
              {list.uid === user.uid && (
                // ドキュメントのuser.uidとuserのuidを
                // 編集（Edit）タグで囲んであげる
                <>
                  {list.editing ? (
                    <Editing key={id} list={list} editChange={editChange} />
                  ) : (
                    <List key={id} list={list} editChange={editChange} />
                  )}
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
