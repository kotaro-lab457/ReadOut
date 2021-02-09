import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Room from "./pages/Room";
import Login from "./pages/Login";
import firebase from "./config/Firebase";

const App: React.FC = () => {
  return (
    <div>
      <header>
        <p>My Portfolio</p>
        <button onClick={() => firebase.auth().signOut()}>Log out</button>
      </header>
      <main>
        <BrowserRouter>
          <Route exact path="/login" component={Login} />
          <Route exact path="/" component={Room} />
        </BrowserRouter>
      </main>
      <footer></footer>
    </div>
  );
};

export default App;
