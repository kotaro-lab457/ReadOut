import React, { useState, useContext, useEffect } from "react";
import firebase from "../config/Firebase";

import { AuthContext } from "../AuthService";

import { Title } from "../ui/atoms/title";
import { Button } from "../ui/atoms/button";
import { SetUpFont } from "../ui/atoms/font";
import { SetUpInput, TextArea } from "../ui/atoms/input";
import TablePage from "../ui/molecules/TablePages";
import { TableSetUp } from "../ui/molecules/TableSetUp";
import { MainPage } from "../ui/organisms/MainPages";
import { Link } from "react-router-dom";
import shortid from "shortid";

const SetUp: React.FC = (props: any) => {
  const initialState = shortid.generate();

  const [title, setTitle] = useState<string>("");
  const [text, setText] = useState<string>("");
  const [page, setPage] = useState<string>("");
  const [textId, setTextId] = useState<string>(initialState);

  const user = useContext(AuthContext);

  const FS = firebase.firestore().collection("text");
  const db = firebase.firestore().collection("counters");
  const docId = db.doc().get();

  console.log(user?.uid);

  const handleComment = (e: React.FormEvent) => {
    e.preventDefault();
    FS.doc(`${textId}`)
      .set({
        user: user.displayName,
        title: title,
        text: text,
        page: page,
        date: new Date(),
        uid: user.uid,
        id: textId,
        editing: false,
        createAt: new Date().getTime(),
      })
      .then(() => {
        if (docId === undefined) {
          db.doc(`${user.uid}`).set({
            user: user.displayName,
            date: new Date(),
            count: 0,
            bool: false,
          });
        } else {
          db.doc(`${user.uid}`).update({
            date: new Date(),
            count: firebase.firestore.FieldValue.increment(1),
          });
        }
      });
    setText("");
    setTitle("");
    setPage("");
    setTextId(textId);
    props.history.push("/");
  };
  return (
    <>
      <MainPage>
        <TablePage>
          <Title>Set UP</Title>
          <TableSetUp>
            <form onSubmit={handleComment}>
              <div>
                <p>読んだ本は？</p>
                <SetUpInput
                  id="title"
                  type="text"
                  placeholder="タイトル名"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
                <p>何ページ読んだか？</p>
                <label>
                  <SetUpInput
                    id="page"
                    type="text"
                    placeholder="ページ数"
                    value={page}
                    onChange={(e) => setPage(e.target.value)}
                  />
                </label>
                <p>感想＆要約</p>
                <TextArea
                  id="text"
                  placeholder="コメント入力"
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                />
              </div>
              <SetUpFont>
                <Link
                  to="/profile"
                  style={{ textDecoration: "none", color: "#36622b" }}
                >
                  キャンセル
                </Link>
              </SetUpFont>
              <Button disabled={!text || !page || !title}>投稿</Button>
            </form>
          </TableSetUp>
        </TablePage>
      </MainPage>
    </>
  );
};

export default SetUp;
