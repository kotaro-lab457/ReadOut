import React, { useState, useContext, useEffect } from "react";
import Editing from "./Editing";
import List from "./List";
import firebase from "../config/Firebase";
import { AuthContext } from "../AuthService";

import { PostText } from "../module.TS/Post.module";

const Home: React.FC = () => {
  const [homeText, setHomeText] = useState<PostText[]>([]);

  // 編集用のStateを作る
  // firebase updateを作る
  const user = useContext(AuthContext);
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

  const textUpdate = (
    id: number,
    title: string,
    page: string,
    text: string
  ) => {
    setHomeText(
      homeText.map((texts) => {
        if (texts.id === id) {
          return {
            ...texts,
            title,
            page,
            text,
            editing: false,
          };
        }
        return texts;
      })
    );
  };

  return (
    <>
      <h1>プロフィール</h1>
      <p>※ゲストログインの場合は、投稿の履歴が残りません</p>
      <div>
        <p>ユーザー名：{userName?.displayName}</p>
        <ul>
          {homeText.map((list, id) => (
            <li key={id}>
              {list.uid === user.uid && (
                // ドキュメントのuser.uidとuserのuidを
                // 編集（Edit）タグで囲んであげる
                <>
                  {list.editing ? (
                    <Editing key={id} list={list} textUpdate={textUpdate} />
                  ) : (
                    <List list={list} key={id} />
                  )}
                </>
              )}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Home;
