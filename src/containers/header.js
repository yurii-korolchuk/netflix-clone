import React from 'react';
import Header from '../components/header'
import * as Routes from '../constants/routes'
import logo from '../logo.svg';

export default function HeaderContainer({ children }) {
  return (
    <Header>
      <Header.Frame>
        <Header.Logo to={ Routes.HOME } src={ logo } alt='Netflix'/>
        <Header.ButtonLink to={ Routes.SIGN_IN }>Sign in</Header.ButtonLink>
      </Header.Frame>
      { children }
    </Header>
  )
}