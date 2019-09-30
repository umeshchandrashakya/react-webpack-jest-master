import * as React from "react";
import Game from "./TicTak/Game";
import PageInterface from "../PageInterface";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import LoginComponent from "./login/loginmodule";
import LoginModule from "./login/loginmodule";

class App extends React.Component<PageInterface, {}> {
  render() {
    return (
      <React.Fragment>
        <div>
          <Router>
            <div>
              <nav>
                <Link to="/">Game</Link>
                <br></br>
                <Link to="/login">Login</Link>
                <br></br>
                <br></br>
              </nav>
              <Switch>
                <Route exact path="/" component={Game} />
                <Route targe exact path="/login" component={LoginModule} />
              </Switch>
            </div>
          </Router>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
