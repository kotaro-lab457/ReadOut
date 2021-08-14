import React, { useState } from "react";
import { Link } from "react-router-dom";
import firebase from "firebase";

import { ResetButton } from "../ui/atoms/button";
import { LoginFont, TextFont, ErrorFont, SuccessFont } from "../ui/atoms/font";
import { LoginInput } from "../ui/atoms/input";
import { TableReset, SubTableReset } from "../ui/molecules/TableReset";
import { MainImage } from "../ui/organisms/MainPages";

const ResetPassword: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [sendMessage, setSendMessage] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const handleResetPassword = (e: React.FormEvent) => {
    e.preventDefault();
    setSendMessage("");
    setErrorMessage("");
    firebase
      .auth()
      .sendPasswordResetEmail(email)
      .then(() => {
        setSendMessage("メールが送信されました！");
        setEmail("");
      })
      .catch(() => {
        setErrorMessage("※送信に失敗ました。メールアドレスをご確認し、再度入力してください。")
        setEmail("");
      })
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
            {errorMessage && <ErrorFont>{errorMessage}</ErrorFont>}
            {sendMessage && <SuccessFont>{sendMessage}</SuccessFont>}
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
