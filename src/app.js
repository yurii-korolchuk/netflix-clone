import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import * as Routes from './constants/routes';
import { Home, Browse, SignIn, SignUp }  from "./pages";
import { IsUserRedirect, ProtectedRoute } from './helpers/routes';
import { useAuthListener } from './hooks';

export default function App() {
  const user = useAuthListener()

  return (
    <Router>
      <ProtectedRoute user={ user } path={ Routes.BROWSE }>
        <Browse />
      </ProtectedRoute>
      <IsUserRedirect user={ user } loggedInPath={ Routes.BROWSE } path={ Routes.SIGN_IN }>
        <SignIn />
      </IsUserRedirect>
      <IsUserRedirect user={ user } loggedInPath={ Routes.BROWSE } path={ Routes.SIGN_UP }>
        <SignUp />
      </IsUserRedirect>
      <IsUserRedirect user={ user } path={ Routes.HOME } loggedInPath={ Routes.BROWSE } exact>
        <Home />
      </IsUserRedirect>
    </Router>
  );
}