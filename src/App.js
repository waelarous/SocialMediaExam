import "./App.css";
import HomeScreen from "./screens/Home/HomeScreen";
import LoginScreen from "./screens/Login/LoginScreen";
import ProfileScreen from "./screens/Profile/ProfileScreen";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
function App() {
  return (
    <div>
      <Router>
        <Navbar />

        <Switch>
          <Route exact path="/">
            <HomeScreen />
          </Route>
          <Route exact path="/login">
            <LoginScreen />
          </Route>
          <Route exact path="/profile">
            <ProfileScreen />
          </Route>
          <Route exact path="*">
            <HomeScreen />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
