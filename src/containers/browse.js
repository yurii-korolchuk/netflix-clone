import React, { useContext, useState, useEffect } from 'react';
import SelectProfileContainer from './profiles';
import { FirebaseContext } from '../context/firebase';
import Loading from '../components/loading';
import Header from '../components/header';
import * as Routes from '../constants/routes';
import logo from '../logo.svg';

export default function BrowseContainer({ slides }) {
  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState(true);
  const { firebase } = useContext(FirebaseContext);
  const user = firebase.auth().currentUser || {};

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 3000);
  }, [profile.displayName]);

  return profile.displayName
    ? ( <>
      { loading ? <Loading src={ user.photoURL } /> : <Loading.ReleaseBody /> }
      <Header src={'joker1'} >
        <Header.Frame>
          <Header.Group>
            <Header.Logo to={ Routes.HOME } src={ logo } alt='Netflix'/>
            <Header.TextLink>Series</Header.TextLink>
            <Header.TextLink>Films</Header.TextLink>
          </Header.Group>
          <Header.Group>
            <Header.Profile>
              <Header.Picture src={ user.photoURL }/>
              <Header.Dropdown>
                <Header.Group>
                  <Header.Picture src={ user.photoURL }/>
                  <Header.TextLink>{ user.displayName }</Header.TextLink>
                </Header.Group>
              </Header.Dropdown>
            </Header.Profile>
          </Header.Group>
        </Header.Frame>
        <Header.Feature>
          <Header.FeatureCallOut>Watch Joker Now</Header.FeatureCallOut>
          <Header.Text> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit maiores numquam rem sapiente.
            Atque deserunt facere fugiat, impedit inventore laboriosam laborum odio, pariatur quis reprehenderit rerum
            tempora ut velit voluptas.
          </Header.Text>
        </Header.Feature>
      </Header>
    </> )
    : <SelectProfileContainer user={user} setProfile={setProfile}/>;
}