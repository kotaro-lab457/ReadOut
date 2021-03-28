import React, { useContext, useEffect, useState } from "react";
import firebase from "../config/Firebase";
import { AuthContext } from "../Auth/AuthService";

import { PostsFont, TotalFont } from "../ui/atoms/font";

const TotalDays = () => {
  const [count, setCount] = useState<number>(0);
  const user = useContext(AuthContext);
  const FS = firebase.firestore().collection("text");

  useEffect(() => {
    if (user) {
      FS.where("user", "==", `${user.displayName}`)
        .get()
        .then((doc) => {
          setCount(doc.size);
        });
    } // ユーザー毎のユーザー投稿合計数
  }, [user]);
  return (
    <>
      <PostsFont>Total</PostsFont>
      <TotalFont>{count}</TotalFont>
    </>
  );
};

export default TotalDays;
