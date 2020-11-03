import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import * as Routes from './constants/routes';
import { Home, Browse, SignIn, SignUp }  from "./pages";
import { IsUserRedirect } from './helpers/routes';

export default function App() {
  const temp = {}

  return (
    <Router>
      <Route exact path={ Routes.BROWSE }>
        <Browse />
      </Route>
      <IsUserRedirect user={ temp } loggedInPath={ Routes.BROWSE } path={ Routes.SIGN_IN }>
        <SignIn />
      </IsUserRedirect>
      <IsUserRedirect user={ temp } loggedInPath={ Routes.BROWSE } path={ Routes.SIGN_UP }>
        <SignUp />
      </IsUserRedirect>
      <Route exact path={ Routes.HOME }>
        <Home />
      </Route>
    </Router>
  );
}