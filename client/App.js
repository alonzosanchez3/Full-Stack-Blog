import React, {useContext} from 'react';
import {Context} from './context/Context.js'
import Nav from './NavBar/Nav.jsx'
import Home from './pages/home/Home.jsx';
import Login from './pages/Login/Login.jsx';
import Register from './pages/Register/Register.jsx'
import Create from './pages/Create/Create.jsx'
import SinglePost from './pages/SinglePost/SinglePost.jsx'
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

function App() {

  const {user} = useContext(Context)
  console.log(user);

  return (
    <Router className="App">
      <Nav/>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/login">{user ? <Home /> : <Login />}</Route>
        <Route path="/register">{user ? <Home /> : <Register />}</Route>
        <Route path="/create">{user ? <Create /> : <Register />}</Route>
        {/* <Route path="/post/:postId"><SinglePost/></Route> */}
      </Switch>
    </Router>
  );
}

export default App;
