import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectUser, updateUserProfile } from "../stores/userSlice";
import { Link, withRouter } from "react-router-dom";
import firebase from "firebase";

import { GuestButton, SubLoginButton } from "../ui/atoms/button";
import { LinkTag, IconLinkTag } from "../ui/atoms/link";
import TableMenu from "../ui/molecules/TableMenu";
import {
  faHome,
  faUser,
  faBook,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Menu: React.FC = (props: any) => {
  const user = useSelector(selectUser);
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
  };

  const signOut = () => {
    firebase.auth().signOut();
    props.history.push("/home");
  };

  return (
    <TableMenu>
      <LinkTag>
        <Link to="/home">
          <IconLinkTag>
            <FontAwesomeIcon icon={faHome} />
          </IconLinkTag>
          Home
        </Link>
      </LinkTag>
      <LinkTag>
        <Link to="/books">
          <IconLinkTag>
            <FontAwesomeIcon icon={faBook} />
          </IconLinkTag>
          Books
        </Link>
      </LinkTag>
      {user.uid ? (
        <LinkTag>
          <Link to="/profile">
            <IconLinkTag>
              <FontAwesomeIcon icon={faUser} />
            </IconLinkTag>
            Profile
          </Link>
        </LinkTag>
      ) : (
        <LinkTag>
          <Link to="/login">
            <IconLinkTag>
              <FontAwesomeIcon icon={faSignOutAlt} />
            </IconLinkTag>
            Login
          </Link>
        </LinkTag>
      )}
      {user.uid ? (
        <SubLoginButton onClick={signOut}>
          <FontAwesomeIcon icon={faSignOutAlt} />
          Log out
        </SubLoginButton>
      ) : (
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
    </TableMenu>
  );
};

export default withRouter(Menu);
