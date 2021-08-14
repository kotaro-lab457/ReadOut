import React, { useState } from "react";
import { Link } from "react-router-dom";
import firebase from "firebase";

import { ResetButton } from "../ui/atoms/button";
import { LoginFont, TextFont } from "../ui/atoms/font";
import { LoginInput } from "../ui/atoms/input";
import { TableReset, SubTableReset } from "../ui/molecules/TableReset";
import { MainImage } from "../ui/organisms/MainPages";

const ResetPassword: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const handleResetPassword = (e: React.FormEvent) => {
    e.preventDefault();
    firebase
      .auth()
      .sendPasswordResetEmail(email)
      .then(() => {
        alert("メールが送信されました");
      });
    setEmail("");
  };
  return (
    <>
      <MainImage>
        <TableReset>
          <SubTableReset>
            <LoginFont>メールアドレスを入力してください</LoginFont>
            <form onSubmit={handleResetPassword}>
              <LoginInput
                type="text"
                name="E-mail"
                placeholder="メールアドレスを入力"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <br />
              <ResetButton>送信</ResetButton>
            </form>
            <br />
            <TextFont>
              <Link to="/login" style={{ color: "#ffd740", textDecoration: "underline" }}>
                Login
              </Link>
              へ
            </TextFont>
          </SubTableReset>
        </TableReset>
      </MainImage>
    </>
  );
};

export default ResetPassword;
