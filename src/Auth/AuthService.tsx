import React, { useEffect } from "react";
import firebase from "../config/Firebase";
import { useSelector, useDispatch } from "react-redux";
import { selectUser, login, logout } from "../stores/userSlice";
import { userContext } from "@Modules"

const AuthContext = React.createContext<userContext>({
  displayName: "",
  uid: "",
});

// children は親コンポーネントのタグの間に入った要素を表示する
// つまり、<AuthService>というタグの間にブラウザに表示しているリンク

const AuthService: React.FC = ({ children }) => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const unSub = firebase.auth().onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(
          login({
            uid: authUser.uid,
            displayName: authUser.displayName,
          })
        );
      } else {
        dispatch(logout());
      }
    });
    return () => {
      unSub();
    };
  }, [dispatch]);
  return (
    <>
      <AuthContext.Provider value={user}>{children}</AuthContext.Provider>
    </>
  );
};

export { AuthService };
