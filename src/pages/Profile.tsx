import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../stores/userSlice";
import { Link } from "react-router-dom";
import Chart from "@Components/Chart";
import TotalPosts from "@Components/Count";

import { SubFont } from "@Atoms/font";
import { Title } from "@Atoms/title";
import { ProfileSetUpButton } from "@Atoms/button";
import { TableSetUpProfile } from "@Molecules/TableSetUp";

import { TableTotal, TablePosts } from "@Molecules/TableProfile";
import { MainPage, MainTablePages } from "@Organisms/MainPages";

const Profile: React.FC = () => {
  const user = useSelector(selectUser);

  return (
    <>
      <MainPage>
        <MainTablePages>
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
            <Link to="/history" style={{ textDecoration: "underline" }}>
              投稿履歴
            </Link>
            へ
          </SubFont>
          {user.uid && (
            <TableSetUpProfile>
              <Link to="/setup" >
                <ProfileSetUpButton>投稿</ProfileSetUpButton>
              </Link>
            </TableSetUpProfile>
          )}
        </MainTablePages>
      </MainPage>
    </>
  );
};

export default Profile;
