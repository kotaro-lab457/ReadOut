import React, { useContext } from "react";
import { Link } from "react-router-dom";

import firebase from "../config/Firebase";

import { AuthContext } from "../AuthService";

const Header: React.FC = () => {
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
  };
  return (
    <header>
      <p>My Portfolio</p>
      {user && <Link to="/home">ホーム</Link>}
      <Link to="/">Room</Link>
      <Link to="/books">検索</Link>
      <Link to="/make">作成</Link>
      <Link to="/login">ログイン</Link>
      <button onClick={handleSignOut}>Log out</button>
      <button onClick={handleGuestLogin}>ゲストログイン</button>
    </header>
  );
};

export default Header;
