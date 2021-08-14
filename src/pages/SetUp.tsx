import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../stores/userSlice";
import firebase from "../config/Firebase";
import { Link } from "react-router-dom";
import axios from "axios";
import shortid from "shortid";

import { Title } from "../ui/atoms/title";
import { Button } from "../ui/atoms/button";
import { SetUpFont } from "../ui/atoms/font";
import { SetUpInput, TextArea } from "../ui/atoms/input";
import { TableSetUp } from "../ui/molecules/TableSetUp";
import { MainPage, MainTablePages } from "../ui/organisms/MainPages";

const SetUp: React.FC = (props: any) => {
  const initialState:string = shortid.generate();

  const [title, setTitle] = useState<string>("");
  const [text, setText] = useState<string>("");
  const [page, setPage] = useState<string>("");
  const [dates, setDates] = useState(0);
  const [textId, setTextId] = useState<string>(initialState);

  const user = useSelector(selectUser);

  const FS = firebase.firestore().collection("text");
  useEffect(() => {
    let date = new Date();
    let dateMonth = date.getMonth() + 1;
    function getDate(dt: any) {
      return dt <= 1
        ? 30
        : dt <= 2
        ? 60
        : dt <= 3
        ? 87
        : dt <= 4
        ? 117
        : dt <= 5
        ? 146
        : dt <= 6
        ? 177
        : dt <= 7
        ? 206
        : dt <= 8
        ? 236
        : dt <= 9
        ? 266
        : dt <= 10
        ? 295
        : dt <= 11
        ? 325
        : 354;
    }
    const updateDay =
      date.getFullYear() + date.getMonth() + date.getDate() + getDate(dateMonth);
    setDates(updateDay);
  }, []);

  const handleComment = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const url = "https://www.googleapis.com/books/v1/volumes";
    const params = {
      q: title,
      maxResults: 1,
    };
    const response = await axios.get(url, { params: params });
    const item = response.data.items[0].id;
    const imageUrl = `http://books.google.com/books/content?id=${item}&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api`;

    FS.doc(`${textId}`).set({
      user: user.displayName,
      title: title,
      text: text,
      page: page,
      date: dates,
      uid: user.uid,
      id: textId,
      editing: false,
      createAt: new Date().getTime(),
      image: imageUrl,
    });

    setText("");
    setTitle("");
    setPage("");
    setTextId(textId);
    props.history.push("/home");
  };
  return (
    <>
      <MainPage>
        <MainTablePages>
          <Title>Set Up</Title>
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
                    placeholder="読んだページ数"
                    value={page}
                    onChange={(e) => setPage(e.target.value)}
                  />
                </label>
                <p>感想</p>
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
                  style={{ color: "#36622b" }}
                >
                  キャンセル
                </Link>
              </SetUpFont>
              <Button disabled={!text || !page || !title}>投稿</Button>
            </form>
          </TableSetUp>
        </MainTablePages>
      </MainPage>
    </>
  );
};

export default SetUp;
