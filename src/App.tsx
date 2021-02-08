import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./pages/Login";
import Room from "./pages/Room";
import SignUp from "./pages/SignUp";

const App = () => {
  return (
    <div>
      <header></header>
      <Router>
        <Switch>
          <main>
            <Route exact path="/signUp" component={SignUp} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/room" component={Room} />
          </main>
        </Switch>
      </Router>
      <footer></footer>
    </div>
  );
};

export default App;
