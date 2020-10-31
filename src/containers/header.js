import React from "react";
import Header from '../components/header'
import * as Routes from '../constants/routes'
import logo from '../logo.svg';

export default function HeaderContainer() {
  return (
    <Header>
      <Header.Frame>
        <Header.Logo to={Routes.HOME} src={logo} alt='Netflix'/>
        <Header.ButtonLink to={Routes.SIGN_UP}>Sign up</Header.ButtonLink>
      </Header.Frame>
    </Header>
  )
}