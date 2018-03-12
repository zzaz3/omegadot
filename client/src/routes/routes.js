import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '../components/Home';
import Accounts from '../components/Accounts';
import AddAccount from '../components/AddAccount'
import Journalize from '../components/Journalize'
import Post from '../components/Post';
import Balance from '../components/Balance';
import LoginContainer from '../components/Login/LoginContainer';
import Team from '../components/Team';
import Register from '../components/Register';

function Routes() {
  return (
    <Switch>
      <Route exact path="/" exact={true} component={Home} />
      <Route exact path="/accounts" component={Accounts} />
      <Route exact path="/accounts/add" component={AddAccount} />
      <Route exact path="/journalize" component={Journalize} />
      <Route exact path="/post" component={Post}/>
      <Route exact path="/balance" component={Balance} />
      <Route exact path="/login" component={LoginContainer} />
      <Route exact path="/team" component={Team} />
      <Route exact path="/register" component={Register} />
    </Switch>
  )
}

export default Routes;
