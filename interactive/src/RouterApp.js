import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";

const PastTrials = () => <h1>Past Trials</h1>;
const HowItWorks = () => <h1>How it works</h1>;
const Login = () => <h1>Log in/Sign in</h1>;

const RouterApp = () => {
  return (
    <Router>
      <Switch>
        <Route path="/PastTrials" component={PastTrials} />
        <Route path="/HowItWorks" component={HowItWorks} />
        <Route path="/Login" component={Login} />
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
};

export default RouterApp;
