import './App.css';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import ProfileScreen from './screens/ProfileScreen'
import NavbarComponent from './components/NavbarComponent';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import FooterComponent from './components/FooterComponent';
function App() {
  return (
  <div>
    <Router>
          <NavbarComponent/>

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
          
        </Switch>
      
    </Router> 
    <FooterComponent/>
 
  </div> );
}
 


export default App;