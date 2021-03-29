import React, { useContext } from "react";
import { AuthContext } from "../Auth/AuthService";
import { Link, withRouter } from "react-router-dom";
import firebase from "firebase";

import { GuestButton, SubLoginButton } from "../ui/atoms/button";
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

  const signOut = () => {
    firebase.auth().signOut();
    props.history.push("/home");
  };

  return (
    <TableMenu>
      <LinkTag>
        <Link to="/home" style={{ textDecoration: "none", color: "#000" }}>
          <IconLinkTag>
            <FontAwesomeIcon icon={faHome} />
          </IconLinkTag>
          Home
        </Link>
      </LinkTag>
      <LinkTag>
        <Link to="/books" style={{ textDecoration: "none", color: "#000" }}>
          <IconLinkTag>
            <FontAwesomeIcon icon={faBook} />
          </IconLinkTag>
          Books
        </Link>
      </LinkTag>
      {user && (
        <LinkTag>
          <Link to="/profile" style={{ textDecoration: "none", color: "#000" }}>
            <IconLinkTag>
              <FontAwesomeIcon icon={faUser} />
            </IconLinkTag>
            Profile
          </Link>
        </LinkTag>
      )}
      {!user && (
        <LinkTag>
          <Link to="/login" style={{ textDecoration: "none", color: "#000" }}>
            <IconLinkTag>
              <FontAwesomeIcon icon={faSignOutAlt} />
            </IconLinkTag>
            Login
          </Link>
        </LinkTag>
      )}
      {!user && (
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
      )}
      {user && (
        <SubLoginButton onClick={signOut}>
          <FontAwesomeIcon icon={faSignOutAlt} />
          Log out
        </SubLoginButton>
      )}
    </TableMenu>
  );
};

export default withRouter(Menu);
