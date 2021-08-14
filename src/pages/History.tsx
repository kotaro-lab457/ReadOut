import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../stores/userSlice";
import Editing from "../components/Editing";
import List from "../components/List";
import firebase from "../config/Firebase";

import { Link } from "react-router-dom";
import { Text } from "../module/Text.module";

import { Title } from "../ui/atoms/title";
import { Input } from "../ui/atoms/input";
import { SubFont } from "../ui/atoms/font";
import { TableForm, TableList } from "../ui/molecules/TableHome";
import { HomeSearchButton, UpdateButton } from "../ui/atoms/button";
import { TableProfile, TableText } from "../ui/molecules/TableProfile";
import { MainPage, MainTablePages } from "../ui/organisms/MainPages";

import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const History: React.FC = () => {
  const [homeText, setHomeText] = useState<Text[]>([]);
  const [isDone, setIsDone] = useState<boolean>(false);
  const [value, setValue] = useState<string>("");

  const user = useSelector(selectUser);

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
      setHomeText(posts);
    });
  };
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
        <MainTablePages>
          <TableText>
            <Title>投稿履歴</Title>
            <SubFont>
              ・
              <Link to="/profile" style={{ textDecoration: "underline" }}>
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
                {list.user === user.displayName && (
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
        </MainTablePages>
      </MainPage>
    </>
  );
};

export default History;
