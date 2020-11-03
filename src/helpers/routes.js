import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export const IsUserRedirect = ({ user, loggedInPath, children, ...rest }) => {
  return (
    <Route
      { ...rest }
      render={() => {
        if (!user) {
          return children
        } else {
          return <Redirect to={{ pathname: loggedInPath }} />
        }
      }}
    />
  )
}