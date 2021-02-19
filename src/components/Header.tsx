import React, { useContext } from "react";
import { Link, withRouter } from "react-router-dom";

import firebase from "../config/Firebase";
import { AuthContext } from "../AuthService";

import Title from "../ui/atoms/title";
import Button from "../ui/atoms/button";
import HeaderTable from "../ui/organisms/header";

import {
  faHome,
  faUser,
  faSearch,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header: React.FC = (props: any) => {
  const user = useContext(AuthContext);
  const handleGuestLogin = () => {
    firebase
      .auth()
      .signInAnonymously()
      .then(({ user }) => {
        user?.updateProfile({
          displayName: "ゲストユーザー",
        });
      });
  };

  const handleSignOut = () => {
    firebase.auth().signOut();
    props.history.push("/");
  };
  return (
    <HeaderTable>
      <div style={{ display: "flex" }}>
        <Title>Reading Output</Title>
        <div style={{ display: "flex" }}>
          <p>
            <Link to="/">
              <FontAwesomeIcon icon={faHome} />
              ホーム
            </Link>
          </p>
          {user && (
            <p>
              <Link to="/home">
                <FontAwesomeIcon icon={faUser} />
                プロフィール
              </Link>
            </p>
          )}
          <p>
            <Link to="/books">
              <FontAwesomeIcon icon={faSearch} />
              検索
            </Link>
          </p>
          {user && (
            <p>
              <Link to="/setup">作成</Link>
            </p>
          )}
          {!user && (
            <p>
              <Link to="/login">ログイン</Link>
            </p>
          )}
          {!user && <button onClick={handleGuestLogin}>ゲストログイン</button>}
          {user && (
            <Button onClick={handleSignOut}>
              <FontAwesomeIcon icon={faSignOutAlt} />
              Log out
            </Button>
          )}
        </div>
      </div>
    </HeaderTable>
  );
};

export default withRouter(Header);
