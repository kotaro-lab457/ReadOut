import React from "react";
import { Switch, Route, BrowserRouter, Link } from "react-router-dom";
import Make from "./pages/Make";
import Login from "./pages/Login";
import Room from "./pages/Room";
import BooksSearch from "./pages/BooksSearch";

import Header from "./component/Header";

import { AuthService } from "./AuthService";

const App: React.FC = () => {
  return (
    <div>
      <AuthService>
        <BrowserRouter>
          <main>
            <Header />
            <Switch>
              <Route exact path="/login" component={Login} />
              <Route exact path="/make" component={Make} />
              <Route exact path="/books" component={BooksSearch} />
              <Route exact path="/" component={Room} />
            </Switch>
          </main>
          <footer></footer>
        </BrowserRouter>
      </AuthService>
    </div>
  );
};

export default App;
