import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../stores/userSlice";
import { Link } from "react-router-dom";
import Chart from "../components/Chart";
import TotalPosts from "../components/Count";

import { SubFont } from "../ui/atoms/font";
import { Title } from "../ui/atoms/title";
import { ProfileSetUpButton } from "../ui/atoms/button";
import { TableSetUpProfile } from "../ui/molecules/TableSetUp";

import { TableTotal, TablePosts } from "../ui/molecules/TableProfile";
import { MainPage, MainTablePages } from "../ui/organisms/MainPages";

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
