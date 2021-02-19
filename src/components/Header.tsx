import React, { useContext } from "react";
import { Link, withRouter } from "react-router-dom";

import firebase from "../config/Firebase";
import { AuthContext } from "../AuthService";

import { Title } from "../ui/atoms/title";
import Button from "../ui/atoms/button";
import LinkTag from "../ui/atoms/Link";
import TableHeader from "../ui/molecules/TableHeader";
import MainHeader from "../ui/organisms/MainHeader";

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
    <MainHeader>
      <Title>Reading Output</Title>
      <TableHeader>
        <LinkTag>
          <Link to="/">
            <FontAwesomeIcon icon={faHome} />
            Home
          </Link>
        </LinkTag>
        {user && (
          <LinkTag>
            <Link to="/home">
              <FontAwesomeIcon icon={faUser} />
              Profile
            </Link>
          </LinkTag>
        )}
        <LinkTag>
          <Link to="/books">
            <FontAwesomeIcon icon={faSearch} />
            Search
          </Link>
        </LinkTag>
        {user && (
          <LinkTag>
            <Link to="/setup">作成</Link>
          </LinkTag>
        )}
        {!user && (
          <LinkTag>
            <Link to="/login">Login</Link>
          </LinkTag>
        )}
        {!user && <Button onClick={handleGuestLogin}>ゲストログイン</Button>}
        {user && (
          <Button onClick={handleSignOut}>
            <FontAwesomeIcon icon={faSignOutAlt} />
            Log out
          </Button>
        )}
      </TableHeader>
    </MainHeader>
  );
};

export default withRouter(Header);
