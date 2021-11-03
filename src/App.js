import Home from "./components/home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserDashBoard from "./components/user dashboard/userDashboard";
import SignUpForm from "./components/signUpForm";
import LogInForm from "./components/logInForm";
import { API_URL_PROVIDER } from "./contexts/API_url_context";
import { USER_CONTEXT_PROVIDER } from "./contexts/USER_context";
const App = () => {
  return (
    <Router>
      <main className="flex items-center min-h-screen">
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <USER_CONTEXT_PROVIDER>
            <API_URL_PROVIDER>
              <Route path="/dashboard">
                <UserDashBoard></UserDashBoard>
              </Route>
              <Route path="/sign-up">
                <SignUpForm></SignUpForm>
              </Route>
              <Route path="/log-in">
                <LogInForm></LogInForm>
              </Route>
            </API_URL_PROVIDER>
          </USER_CONTEXT_PROVIDER>
        </Switch>
      </main>
    </Router>
  );
};

export default App;
