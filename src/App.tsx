import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import SetUp from "./pages/SetUp";
import Login from "./pages/Login";
import Room from "./pages/Room";
import Home from "./pages/Home";
import BooksSearch from "./pages/BooksSearch";
import Editing from "./pages/Editing";

import Header from "./component/Header";

import { AuthService } from "./AuthService";

const App: React.FC = () => {
  return (
    <div>
      <BrowserRouter>
        <AuthService>
          <Header />
        </AuthService>
        <main>
          <Switch>
            <AuthService>
              <Route exact path="/login" component={Login} />
              <Route exact path="/setup" component={SetUp} />
              <Route exact path="/books" component={BooksSearch} />
              <Route exact path="/" component={Room} />
              <Route exact path="/home" component={Home} />
              <Route exact path="/edit" component={Editing} />
            </AuthService>
          </Switch>
        </main>
      </BrowserRouter>
      <footer></footer>
    </div>
  );
};

export default App;
