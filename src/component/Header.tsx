import React, { useContext } from "react";
import { Link, withRouter } from "react-router-dom";

import firebase from "../config/Firebase";

import { AuthContext } from "../AuthService";

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
    <header>
      <p>My Portfolio</p>
      {user && <Link to="/home">プロフィール</Link>}
      <Link to="/">ホーム</Link>
      <Link to="/books">検索</Link>
      {user && <Link to="/setup">作成</Link>}
      {!user && <Link to="/login">ログイン</Link>}
      {!user && <button onClick={handleGuestLogin}>ゲストログイン</button>}
      {user && <button onClick={handleSignOut}>Log out</button>}
    </header>
  );
};

export default withRouter(Header);
