import React, { useState, useEffect } from "react";
import firebase from "../config/Firebase";

const Login: React.FC = (props: any) => {
  const [password, setPassword] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [inLogin, setInLogin] = useState<boolean>(true);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      user && props.history.push("/");
    });
  }, [props.history]);

  return (
    <>
      <h1>{inLogin ? "SignUp" : "Login"}</h1>
      <input
        placeholder="name"
        value={name}
        type="name"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setName(e.target.value);
        }}
        style={{ display: inLogin ? "block" : "none" }}
      />
      <br />
      <input
        placeholder="email"
        value={email}
        type="email"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setEmail(e.target.value);
        }}
      />
      <br />
      <input
        placeholder="password"
        value={password}
        type="password"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setPassword(e.target.value);
        }}
      />
      <button
        type="submit"
        onClick={
          inLogin
            ? async () => {
                try {
                  await firebase
                    .auth()
                    .createUserWithEmailAndPassword(email, password);
                  props.history.push("/");
                } catch (error) {
                  alert(error.message);
                }
              }
            : async () => {
                try {
                  await firebase
                    .auth()
                    .signInWithEmailAndPassword(email, password);
                  props.history.push("/");
                } catch (error) {
                  alert(error.message);
                }
              }
        }
      >
        {inLogin ? "signUp" : "login"}
      </button>
      <br />
      <button>
        <span
          onClick={() => {
            setInLogin(!inLogin);
            props.history.push("/login");
          }}
        >
          {inLogin ? "Loginへ" : "SignUpへ"}
        </span>
      </button>
    </>
  );
};

export default Login;
