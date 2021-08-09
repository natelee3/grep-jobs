import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
// import Profile from './components/Profile';
import Dashboard from "./components/Dashboard";
import Search from "./components/Search";
import Navigation from './components/Navigation';
import Login from './components/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useAuth0 } from '@auth0/auth0-react';


function App() {
  const { user } = useAuth0();

  console.log(user)
  return (
    <div className="App">
      <Router>
        <Navigation />
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
