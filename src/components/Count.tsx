import React, { useEffect, useState } from "react";
import firebase from "../config/Firebase";
import { useSelector } from "react-redux";
import { selectUser } from "../stores/userSlice";

import { PostsFont, TotalFont } from "@Atoms/font";

const TotalDays = () => {
  const [count, setCount] = useState<number>(0);
  const user = useSelector(selectUser);
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
