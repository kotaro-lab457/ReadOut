import React, { useState, useContext, useEffect } from "react";

import firebase from "../config/Firebase";
import { AuthContext } from "../AuthService";

import { PostText } from "../module.TS/Post.module";

const Home: React.FC = () => {
  const [homeText, setHomeText] = useState<PostText[]>([]);

  // 編集用のStateを作る
  // firebase updateを作る
  const user = useContext(AuthContext);
  const userName = firebase.auth().currentUser;

  useEffect(() => {
    if (user) {
      firebase
        .firestore()
        .collection("comments")
        .orderBy("date", "desc")
        .onSnapshot((snapshot) => {
          const homes: any = snapshot.docs.map((doc) => {
            return doc.data();
          });
          setHomeText(homes);
        });
    }
  }, [user]);

  // querySnapshot 複数のドキュメントのデータを持っている

  // add でドキュメントIDを自動生成
  const handleDelete = () => {
    firebase.firestore().collection("comments").doc().delete();
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
                // 編集（Edit）タグで囲んであげる
                <div>
                  <p>タイトル：{list.books}</p>
                  <p>ページ：{list.pages}</p>
                  <p>感想：{list.content}</p>
                  <button>編集</button>
                  <button onClick={handleDelete}>削除</button>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Home;
