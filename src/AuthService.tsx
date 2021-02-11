import React, { useState, useEffect, Children } from "react";
import firebase from "./config/Firebase";

interface userContext {
  user: any;
}

const AuthContext = React.createContext<userContext>({ user: "" });

const AuthService: React.FC = ({ children }) => {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setUser(user);
    });
  }, []);
  return (
    <>
      <AuthContext.Provider value={user}>{children}</AuthContext.Provider>
    </>
  );
};

export { AuthContext, AuthService };
