import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Make from "./pages/Make";
import Login from "./pages/Login";
import BooksSearch from "./pages/BooksSearch";

import firebase from "./config/Firebase";

import { AuthService } from "./AuthService";
import Room from "./pages/Room";

const App: React.FC = () => {
  const handleGuestLogin = () => {
    firebase.auth().signInAnonymously();
  };

  return (
    <div>
      <header>
        <p>My Portfolio</p>
        <button onClick={() => firebase.auth().signOut()}>Log out</button>
        <button onClick={handleGuestLogin}>ゲストログイン</button>
      </header>
      <main>
        <AuthService>
          <BrowserRouter>
            <Route exact path="/login" component={Login} />
            <Route exact path="/make" component={Make} />
            <Route exact path="/books" component={BooksSearch} />
            <Route exact path="/" component={Room} />
          </BrowserRouter>
        </AuthService>
      </main>
      <footer></footer>
    </div>
  );
};

export default App;
