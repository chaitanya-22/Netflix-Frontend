import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Homepage from "./Homepage";
import Signin from "./components/sign-in/sign-in";
import LandingPage from "./components/landing-page/Landingpage";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/sign-in" exact component={Signin} />
        <Route path="/Homepage" component={Homepage} />
        <Route path="/" exact component={LandingPage} />
      </Switch>
    </Router>
  );
}

export default App;
