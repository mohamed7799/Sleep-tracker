import Home from "./components/home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserDashBoard from "./components/user dashboard/userDashboard";
import SignUpForm from "./components/signUpForm";
import LogInForm from "./components/logInForm";
const App = () => {
  return (
    <Router>
      <main className="flex items-center min-h-screen">
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/dashboard">
            <UserDashBoard></UserDashBoard>
          </Route>

          <Route path="/sign-up">
            <SignUpForm></SignUpForm>
          </Route>
          <Route path="/log-in">
            <LogInForm></LogInForm>
          </Route>
        </Switch>
      </main>
    </Router>
  );
};

export default App;
