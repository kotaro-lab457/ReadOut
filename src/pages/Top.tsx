import React from "react";
import firebase from "../config/Firebase";
import { useDispatch } from "react-redux";
import { updateUserProfile } from "../stores/userSlice";

import profileImage from "../img/PR2_Img.png";
import homeImage from "../img/PR_Img.png";
import { TextFont } from "../ui/atoms/font";
import { ImageSp } from "../ui/atoms/image";
import { GuestButton, SubLoginButton } from "../ui/atoms/button";
import { MainTitle } from "../ui/atoms/title";
import {
  TableTop,
  SubTableTop,
  TableTopImages,
  TableTopImage,
  SubTableTopImage,
} from "../ui/molecules/TableTop";
import { MainImage } from "../ui/organisms/MainPages";

import { faUser, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Top: React.FC = (props: any) => {
  const dispatch = useDispatch();
  const GuestLogin = async () => {
    await firebase
      .auth()
      .signInAnonymously()
      .then(({ user }) => {
        user?.updateProfile({
          displayName: "ゲストユーザー",
        });
      });
    dispatch(
      updateUserProfile({
        displayName: "ゲストユーザー",
      })
    );
    props.history.push("/home");
  };

  const handleLogin = () => {
    props.history.push("/login");
  };

  return (
    <>
      <MainImage>
        <TableTop>
          <SubTableTop>
            <TextFont>読書アウトプットアプリ</TextFont>
            <MainTitle>Read Out</MainTitle>
            <p>読書しても読んだ内容、忘れてはいませんか？</p>
            <p>読んだ本をアウトプットすることで記憶の定着化に繋げよう！</p>
            <SubLoginButton onClick={handleLogin}>
              <FontAwesomeIcon icon={faSignOutAlt} />
              login
            </SubLoginButton>
            <GuestButton
              onClick={async () => {
                try {
                  await GuestLogin();
                } catch (err) {
                  alert(err.message);
                }
              }}
            >
              <FontAwesomeIcon icon={faUser} />
              Guest
            </GuestButton>
          </SubTableTop>
          <TableTopImages>
            <SubTableTopImage>
              <ImageSp src={`${homeImage}`} />
            </SubTableTopImage>
            <TableTopImage>
              <ImageSp src={`${profileImage}`} />
            </TableTopImage>
          </TableTopImages>
        </TableTop>
      </MainImage>
    </>
  );
};

export default Top;
