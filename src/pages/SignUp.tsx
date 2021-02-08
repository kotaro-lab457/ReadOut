import React, { useState, useEffect } from "react";
import firebase from "../config/Firebase";

const SignUp: React.FC = (props) => {
  const [password, setPassword] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [name, setName] = useState<string>("");

  useEffect(() => {}, []);

  const handleSubmit = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    firebase.auth().createUserWithEmailAndPassword(email, password);
  };

  return (
    <>
      <h1>Sign Up</h1>
      <input
        placeholder="name"
        value={name}
        type="name"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setName(e.target.value);
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
      <br />
      <input
        placeholder="email"
        value={email}
        type="email"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setEmail(e.target.value);
        }}
      />
    </>
  );
};

export default SignUp;
