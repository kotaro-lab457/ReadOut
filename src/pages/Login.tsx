import React, { useState } from "react";
import { useForm } from "react-hook-form";
import firebase from "../config/Firebase";
import { useDispatch } from "react-redux";
import { updateUserProfile } from "../stores/userSlice";
import { Link } from "react-router-dom";

import { TextFont, LoginFont, LinkFont, ErrorFont } from "../ui/atoms/font";
import { LoginTitle } from "../ui/atoms/title";
import { LoginButton, GoogleButton, TwitterButton } from "../ui/atoms/button";
import { LoginInput } from "../ui/atoms/input";
import { TableLogin, SubTableLogin } from "../ui/molecules/TableLogin";
import { MainImage } from "../ui/organisms/MainPages";

type Post = {
  name: string;
  email: string;
  password: string;
};

const Login: React.FC = (props: any) => {
  const [password, setPassword] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [inLogin, setInLogin] = useState<boolean>(true);

  const { register, handleSubmit, errors } = useForm<Post>();
  const dispatch = useDispatch();

  const provider = new firebase.auth.GoogleAuthProvider();
  const twitterProvider = new firebase.auth.TwitterAuthProvider();

  const handleSignIn = async () => {
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
    } catch (err) {
      alert(err.message);
    }
    props.history.push("/home");
  };

  const handleCreateUser = async () => {
    try {
      await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(({ user }) => {
          user?.updateProfile({
            displayName: name,
          });
        });
      dispatch(
        updateUserProfile({
          displayName: name,
        })
      );
    } catch (err) {
      alert(err.message);
    }
    props.history.push("/home");
  };

  const signInGoogle = async () => {
    await firebase
      .auth()
      .signInWithPopup(provider)
      .then(() => {
        props.history.push("/home");
      })
      .catch((err) => alert(err.message));
  };

  const signInTwitter = async () => {
    await firebase
      .auth()
      .signInWithPopup(twitterProvider)
      .then(() => {
        props.history.push("/home");
      })
      .catch((err) => {
        err.message;
      });
  };

  return (
    <>
      <MainImage>
        <TableLogin>
          <SubTableLogin>
            <LoginTitle>{inLogin ? "Login" : "Sign In"}</LoginTitle>
            <form onSubmit={ inLogin ? handleSubmit(handleSignIn) : handleSubmit(handleCreateUser)}>
              <div style={{ display: inLogin ? "none" : "block" }}>
                <LoginFont>UserName</LoginFont>
                <LoginInput
                  name="name"
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
                placeholder="example@gmail.com"
                value={email}
                type="email"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  setEmail(e.target.value);
                }}
                ref={register({ required: true, minLength: 9 })}
                />
              {errors.email && <ErrorFont>※メールは必須です。</ErrorFont>}
              <LoginFont>Password</LoginFont>
            <LoginInput
              name="password"
              placeholder="８文字以上の入力"
              value={password}
              type="password"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setPassword(e.target.value);
              }}
              ref={register({ required: true, minLength: 8 })}
              />
            {errors.password && <ErrorFont>※パスワードは必須です。</ErrorFont>}
            <br />
            <LoginButton>
              {inLogin ? "Login" : "Sign Up"}
              </LoginButton>
              </form>
            <br />
            <GoogleButton onClick={signInGoogle}>
              Sign In with Google
            </GoogleButton>
            <TwitterButton onClick={signInTwitter}>
              Sign In with Twitter
            </TwitterButton>
            <TextFont>
              パスワードを忘れてしまった場合は
              <Link to="/reset" style={{ color: "#ffd740" }}>
                こちら
              </Link>
              へ
            </TextFont>
            <TextFont>
              <LinkFont
                onClick={() => {
                  setInLogin(!inLogin);
                }}
              >
                {inLogin ? "Sign In" : "Login"}
              </LinkFont>
              へ
            </TextFont>
          </SubTableLogin>
        </TableLogin>
      </MainImage>
    </>
  );
};

export default Login;
