import React, { useContext, useState } from "react";
import firebase from "firebase";
import { AuthContext } from "../AuthService";

const EditProfile = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const user = firebase.auth().currentUser;

  const handleUpdate = (e: React.FormEvent) => {
    e.preventDefault();
    user
      ?.updateProfile({
        displayName: name,
      })
      .then(() => {
        user.updateEmail(email);
      })
      .then(() => {
        user.updatePassword(password);
      });
  };
  console.log(user?.uid);

  return (
    <div>
      <form onSubmit={handleUpdate}>
        <input
          type="name"
          value={name}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setName(e.target.value)
          }
        />
        <input
          type="email"
          value={email}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setEmail(e.target.value)
          }
        />
        <input
          type="password"
          value={password}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setPassword(e.target.value)
          }
        />
        <button>送信</button>
      </form>
    </div>
  );
};

export default EditProfile;
