import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Chart from "./Chart";
import TotalPosts from "./Posts";
import { AuthContext } from "../Auth/AuthService";

import { SubFont } from "../ui/atoms/font";
import { Title } from "../ui/atoms/title";
import { SetUpButton } from "../ui/atoms/button";
import { TablePage } from "../ui/molecules/TablePages";
import { TableSetUpProfile } from "../ui/molecules/TableSetUp";

import { TableTotal, TablePosts } from "../ui/molecules/TableProfile";
import { MainPage } from "../ui/organisms/MainPages";

const Home: React.FC = () => {
  const user = useContext(AuthContext);

  return (
    <>
      <MainPage>
        <TablePage>
          <Title>Profile</Title>
          <SubFont>
            ※ゲストユーザーの場合は、投稿の履歴が残りません
            <br />
          </SubFont>
          <SubFont>ユーザー名：{user?.displayName}</SubFont>
          <TablePosts>
            <Chart />
            <TableTotal>
              <TotalPosts />
            </TableTotal>
          </TablePosts>
          <SubFont>
            <Link
              to="/history"
              style={{ textDecoration: "none", color: "#000" }}
            >
              投稿履歴
            </Link>
          </SubFont>
          {user && (
            <TableSetUpProfile>
              <Link
                to="/setup"
                style={{ textDecoration: "none", color: "#000" }}
              >
                <SetUpButton>投稿</SetUpButton>
              </Link>
            </TableSetUpProfile>
          )}
        </TablePage>
      </MainPage>
    </>
  );
};

export default Home;
