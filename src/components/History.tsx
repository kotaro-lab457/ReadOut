import React, { useState, useEffect, useContext } from "react";
import Editing from "./Editing";
import List from "./List";
import firebase from "../config/Firebase";
import { AuthContext } from "../Auth/AuthService";

import { Link } from "react-router-dom";
import { PostText } from "../module.TS/Post.module";

import { Title } from "../ui/atoms/title";
import { Input } from "../ui/atoms/input";
import { SubFont } from "../ui/atoms/font";
import { TableForm, TableList } from "../ui/molecules/TableHome";
import { HomeSearchButton, UpdateButton } from "../ui/atoms/button";
import { TableProfile, TableText } from "../ui/molecules/TableProfile";
import { TablePage } from "../ui/molecules/TablePages";
import { MainPage } from "../ui/organisms/MainPages";

import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const History: React.FC = () => {
  const [homeText, setHomeText] = useState<PostText[]>([]);
  const [isDone, setIsDone] = useState<boolean>(false);
  const [value, setValue] = useState<string>("");

  const user = useContext(AuthContext);

  const FS = firebase.firestore().collection("text");

  useEffect(() => {
    if (user) {
      let isMounted = true;
      FS.orderBy("createAt", "desc").onSnapshot((snapshot) => {
        const homes: any = snapshot.docs.map((doc) => {
          // ドキュメント取得
          return doc.data();
        });
        if (isMounted) {
          setHomeText(homes);
        }
      });
      return (): void => {
        isMounted = false;
      };
    }
  }, [user]);

  const handleFilter = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setHomeText(homeText.filter((list) => list.title === value));
    setIsDone(!isDone);
    setValue("");
  };

  const handleRender = (e: React.FormEvent) => {
    e.preventDefault();
    FS.orderBy("date", "desc").onSnapshot((snapshot) => {
      const posts: any = snapshot.docs.map((doc) => {
        return doc.data();
      });
      setHomeText(posts); //collectionのデータを取得してる
      setIsDone(!isDone);
      console.log("反転");
    });
  };
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
          <TableText>
            <Title>投稿履歴</Title>
            <SubFont>
              <Link
                to="/profile"
                style={{ textDecoration: "none", color: "#000" }}
              >
                Profile
              </Link>
              へ
            </SubFont>
            {isDone ? (
              <UpdateButton onClick={handleRender}>再表示</UpdateButton>
            ) : (
              <TableForm onSubmit={handleFilter}>
                <SubFont>検索</SubFont>
                <Input
                  type="text"
                  placeholder="タイトル名"
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                />
                <HomeSearchButton>
                  <FontAwesomeIcon icon={faSearch} />
                </HomeSearchButton>
              </TableForm>
            )}
          </TableText>
          <TableList>
            {homeText.map((list, id) => (
              <div key={id}>
                {list.uid === user.uid && (
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
          </TableList>
        </TablePage>
      </MainPage>
    </>
  );
};

export default History;
