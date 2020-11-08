import React from 'react';
import Header from '../components/header/index';
import { BrowserRouter } from 'react-router-dom';
import * as Routes from '../constants/routes';
import logo from '../logo.svg'
import Profiles from '../components/profiles';

export default function SelectProfileContainer({ user, setProfile }) {
  return (
    <>
      <Header bg={false} >
        <Header.Frame>
          <Header.Logo to={ Routes.HOME } src={logo} alt='Netflix' />
        </Header.Frame>
      </Header>

      <Profiles>
        <Profiles.Title> Who's watching ?</Profiles.Title>
        <Profiles.List>
          <Profiles.User onClick={() => setProfile({ displayName: user.displayName, photo: user.photoURL })}>
            <Profiles.Picture src={ user.photoURL }/>
            <Profiles.Name>{ user.displayName }</Profiles.Name>
          </Profiles.User>
        </Profiles.List>
      </Profiles>
    </>
  )
}