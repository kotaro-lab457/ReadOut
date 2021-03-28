import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Chart from "../components/Chart";
import TotalPosts from "../components/Posts";
import { AuthContext } from "../Auth/AuthService";

import { SubFont } from "../ui/atoms/font";
import { Title } from "../ui/atoms/title";
import { ProfileSetUpButton } from "../ui/atoms/button";
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
          <SubFont>ユーザー名：{user?.displayName}</SubFont>
          <TablePosts>
            <Chart />
            <TableTotal>
              <TotalPosts />
            </TableTotal>
          </TablePosts>
          <SubFont>
            ・
            <Link to="/history" style={{ color: "#000" }}>
              投稿履歴
            </Link>
            へ
          </SubFont>
          {user && (
            <TableSetUpProfile>
              <Link
                to="/setup"
                style={{ textDecoration: "none", color: "#000" }}
              >
                <ProfileSetUpButton>投稿</ProfileSetUpButton>
              </Link>
            </TableSetUpProfile>
          )}
        </TablePage>
      </MainPage>
    </>
  );
};

export default Home;
