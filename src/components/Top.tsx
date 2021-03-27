import React, { useContext, useEffect, useState } from "react";
import firebase from "../config/Firebase";
import { AuthContext } from "../Auth/AuthService";

const Top = () => {
  const FS = firebase.firestore().collection("text");

  return <div></div>;
};

export default Top;
