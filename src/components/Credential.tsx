import React, { useState } from "react";
import firebase from "firebase";

const Credential: React.FC = (props: any) => {
  //const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleAuthSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    firebase.auth.EmailAuthProvider.credential(email, password);
    // .then(({user})) => {
    //     user.updateProfile({
    //         displayName: name,
    //     })
    //     props.history.push("/")
    // }
  };
  return (
    <>
      <div>
        <h2>本登録</h2>
        <form onSubmit={handleAuthSubmit}>
          {/* <input
            type="text"
            name="Name"
            value={name}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setName(e.target.value)
            }
          /> */}
          <input
            type="email"
            name="Email"
            value={email}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setEmail(e.target.value)
            }
          />
          <input
            type="password"
            name="Password"
            value={password}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setPassword(e.target.value)
            }
          />
          <button>送信</button>
        </form>
      </div>
    </>
  );
};

export default Credential;
