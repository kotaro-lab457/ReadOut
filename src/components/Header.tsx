import React, { useContext } from "react";
import { Link, withRouter } from "react-router-dom";

import firebase from "../config/Firebase";
import { AuthContext } from "../AuthService";

import { HeaderTitle } from "../ui/atoms/title";
import { HeaderButton } from "../ui/atoms/button";
import { LinkTag } from "../ui/atoms/Link";
import TableHeader from "../ui/molecules/TableHeader";
import MainHeader from "../ui/organisms/MainHeader";

import {
  faHome,
  faUser,
  faBook,
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
      <HeaderTitle>Read Out</HeaderTitle>
      <TableHeader>
        <LinkTag>
          <Link to="/" style={{ textDecoration: "none", color: "#36622b" }}>
            <FontAwesomeIcon icon={faHome} />
            Home
          </Link>
        </LinkTag>
        {user && (
          <LinkTag>
            <Link
              to="/profile"
              style={{ textDecoration: "none", color: "#36622b" }}
            >
              <FontAwesomeIcon icon={faUser} />
              Profile
            </Link>
          </LinkTag>
        )}
        <LinkTag>
          <Link
            to="/books"
            style={{ textDecoration: "none", color: "#36622b" }}
          >
            <FontAwesomeIcon icon={faBook} />
            BooksSearch
          </Link>
        </LinkTag>
        {!user && (
          <LinkTag>
            <Link
              to="/login"
              style={{ textDecoration: "none", color: "#36622b" }}
            >
              <FontAwesomeIcon icon={faSignOutAlt} />
              Login
            </Link>
          </LinkTag>
        )}
        {!user && (
          <HeaderButton onClick={handleGuestLogin}>
            <FontAwesomeIcon icon={faUser} />
            Guest
          </HeaderButton>
        )}
        {user && (
          <HeaderButton onClick={handleSignOut}>
            <FontAwesomeIcon icon={faSignOutAlt} />
            Log out
          </HeaderButton>
        )}
      </TableHeader>
    </MainHeader>
  );
};

export default withRouter(Header);
