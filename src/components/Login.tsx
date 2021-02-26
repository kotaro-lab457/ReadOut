import React, { useState, useContext } from "react";
import firebase from "../config/Firebase";
import { Link, Redirect } from "react-router-dom";

import { LoginFont, LinkFont } from "../ui/atoms/font";
import { LoginTitle } from "../ui/atoms/title";
import { LoginButton } from "../ui/atoms/button";
import { LoginInput } from "../ui/atoms/input";
import { TableLogin, SubTableLogin } from "../ui/molecules/TableLogin";
import { MainLogin } from "../ui/organisms/MainPages";

import { AuthContext } from "../AuthService";

const Login: React.FC = (props: any) => {
  const [password, setPassword] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [inLogin, setInLogin] = useState<boolean>(true);

  const user = useContext(AuthContext);

  if (user) {
    return <Redirect to="/" />;
  }

  return (
    <>
      <MainLogin>
        <TableLogin>
          <SubTableLogin>
            <LoginTitle>{inLogin ? "Login" : "Sign In"}</LoginTitle>
            <div style={{ display: inLogin ? "none" : "block" }}>
              <LoginFont>UserName</LoginFont>
              <LoginInput
                placeholder="name"
                value={name}
                type="name"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  setName(e.target.value);
                }}
              />
            </div>
            <LoginFont>E-mail</LoginFont>
            <LoginInput
              name="email"
              placeholder="email"
              value={email}
              type="email"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setEmail(e.target.value);
              }}
            />
            <LoginFont>Password</LoginFont>
            <LoginInput
              placeholder="８文字以上の入力"
              value={password}
              type="password"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setPassword(e.target.value);
              }}
            />
            <br />
            <LoginButton
              onClick={
                inLogin
                  ? async () => {
                      try {
                        await firebase
                          .auth()
                          .signInWithEmailAndPassword(email, password);
                        props.history.push("/");
                      } catch (error) {
                        alert(error.message);
                      }
                    }
                  : async () => {
                      try {
                        await firebase
                          .auth()
                          .createUserWithEmailAndPassword(email, password)
                          .then(({ user }) => {
                            user?.updateProfile({
                              displayName: name,
                            });
                          });
                        props.history.push("/");
                      } catch (error) {
                        alert(error.message);
                      }
                    }
              }
            >
              {inLogin ? "Login" : "Sign In"}
            </LoginButton>
            <br />
            <span>
              パスワードを忘れてしまった場合は
              <Link
                to="/reset"
                style={{ textDecoration: "none", color: "#fbfad3" }}
              >
                こちら
              </Link>
              へ
            </span>
            <br />
            <LinkFont
              onClick={() => {
                setInLogin(!inLogin);
              }}
            >
              {inLogin ? "Sign In" : "Login"}
            </LinkFont>
            へ
          </SubTableLogin>
        </TableLogin>
      </MainLogin>
    </>
  );
};

export default Login;
