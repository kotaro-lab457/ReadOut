import React, { useState, useContext, useEffect } from "react";

import firebase from "../config/Firebase";
import { AuthContext } from "../AuthService";

import { PostText } from "./Post.module";

const Home: React.FC = () => {
  const [home, setHome] = useState<PostText[]>([]);
  const user = useContext(AuthContext);

  //console.log(user);
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
          setHome(homes);
          console.log(home);
        });
    }
  }, [user]);
  return (
    <>
      <h1>Home</h1>
      <div>
        <ul>
          {home.map((list, id) => (
            <li key={id}>
              {list.uid === user.uid && (
                <div>
                  <p>タイトル：{list.books}</p>
                  <p>ページ：{list.pages}</p>
                  <p>感想：{list.content}</p>
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
