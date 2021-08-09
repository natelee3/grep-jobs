import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
// import Profile from './components/Profile';
import Dashboard from "./components/Dashboard";
import { useState } from 'react';
import Search from "./components/Search";
import Navigation from './components/Navigation';
import Login from './components/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useAuth0 } from '@auth0/auth0-react';
import './App.css';


function App() {
  const { user } = useAuth0();
  const storedDarkMode = localStorage.getItem("DARK_MODE");
  const [darkMode, setDarkMode] = useState(storedDarkMode === 'false' ? false : true);
  const toggleDarkMode = () => setDarkMode(!darkMode);

  console.log(user)
  return (
    <div className={darkMode? "App dark" : "App"} data-theme={darkMode? 'dark' : 'light'}>
      <Router>
        <Navigation toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
        <Switch>
          <Route exact path='/'>
            <Search />
          </Route>
          <Route path='/dashboard'>
            <Dashboard />
          </Route>
          <Route path ='/login'>
            <Login />
          </Route>
          {/* <Route path='/profile'>
              <Profile />
          </Route> */}
          <Route path='*'>
            <Redirect to='/' />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
