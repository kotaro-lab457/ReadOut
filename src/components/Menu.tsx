import React, { useContext } from "react";
import { AuthContext } from "../Auth/AuthService";
import { Link, withRouter } from "react-router-dom";
import firebase from "firebase";

import { HeaderButton } from "../ui/atoms/button";
import { LinkTag, IconLinkTag } from "../ui/atoms/Link";
import TableMenu from "../ui/molecules/TableMenu";
import {
  faHome,
  faUser,
  faBook,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Menu: React.FC = (props: any) => {
  const user = useContext(AuthContext);
  const GuestLogin = async () => {
    await firebase
      .auth()
      .signInAnonymously()
      .then(({ user }) => {
        user?.updateProfile({
          displayName: "ゲストユーザー",
        });
      });
  };

  const signOut = async () => {
    await firebase.auth().signOut();
    props.history.push("/");
  };

  return (
    <TableMenu>
      <LinkTag>
        <Link to="/" style={{ textDecoration: "none", color: "#36622b" }}>
          <IconLinkTag>
            <FontAwesomeIcon icon={faHome} />
          </IconLinkTag>
          Home
        </Link>
      </LinkTag>
      <LinkTag>
        <Link to="/books" style={{ textDecoration: "none", color: "#36622b" }}>
          <IconLinkTag>
            <FontAwesomeIcon icon={faBook} />
          </IconLinkTag>
          Books
        </Link>
      </LinkTag>
      {user && (
        <LinkTag>
          <Link
            to="/profile"
            style={{ textDecoration: "none", color: "#36622b" }}
          >
            <IconLinkTag>
              <FontAwesomeIcon icon={faUser} />
            </IconLinkTag>
            Profile
          </Link>
        </LinkTag>
      )}
      {!user && (
        <LinkTag>
          <Link
            to="/login"
            style={{ textDecoration: "none", color: "#36622b" }}
          >
            <IconLinkTag>
              <FontAwesomeIcon icon={faSignOutAlt} />
            </IconLinkTag>
            Login
          </Link>
        </LinkTag>
      )}
      {!user && (
        <HeaderButton
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
        </HeaderButton>
      )}
      {user && (
        <HeaderButton onClick={signOut}>
          <FontAwesomeIcon icon={faSignOutAlt} />
          Log out
        </HeaderButton>
      )}
    </TableMenu>
  );
};

export default withRouter(Menu);
