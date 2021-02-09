import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Room from "./pages/Room";
import Login from "./pages/Login";

const App = () => {
  return (
    <div>
      <header></header>
      <main>
        <BrowserRouter>
          <Route exact path="/logins" component={Login} />
          <Route exact path="/" component={Room} />
        </BrowserRouter>
      </main>
      <footer></footer>
    </div>
  );
};

export default App;
