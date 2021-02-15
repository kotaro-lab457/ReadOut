import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Make from "./pages/Make";
import Login from "./pages/Login";
import Room from "./pages/Room";
import Home from "./pages/Home";
import BooksSearch from "./pages/BooksSearch";

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
              <Route exact path="/make" component={Make} />
              <Route exact path="/books" component={BooksSearch} />
              <Route exact path="/" component={Room} />
              <Route exact path="/home" component={Home} />
            </AuthService>
          </Switch>
        </main>
      </BrowserRouter>
      <footer></footer>
    </div>
  );
};

export default App;
