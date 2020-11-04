import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import * as Routes from './constants/routes';
import { Home, Browse, SignIn, SignUp }  from "./pages";
import { IsUserRedirect, ProtectedRoute } from './helpers/routes';

export default function App() {
  const temp = null

  return (
    <Router>
      <ProtectedRoute user={ temp } path={ Routes.BROWSE }>
        <Browse />
      </ProtectedRoute>
      <IsUserRedirect user={ temp } loggedInPath={ Routes.BROWSE } path={ Routes.SIGN_IN }>
        <SignIn />
      </IsUserRedirect>
      <IsUserRedirect user={ temp } loggedInPath={ Routes.BROWSE } path={ Routes.SIGN_UP }>
        <SignUp />
      </IsUserRedirect>
      <IsUserRedirect user={ temp } path={ Routes.HOME } loggedInPath={ Routes.BROWSE } exact>
        <Home />
      </IsUserRedirect>
    </Router>
  );
}