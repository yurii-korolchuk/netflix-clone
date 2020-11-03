import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { FirebaseContext } from '../context/firebase';
import HeaderContainer from '../containers/header';
import FooterContainer from '../containers/footer';
import Form from '../components/form';
import * as ROUTES from '../constants/routes';

export default function SignUp() {
  const history = useHistory()
  const { firebase } = useContext(FirebaseContext)

  const [firstName, setFirstName] = useState('')
  const [emailAddress, setEmailAddress] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const isInvalid = firstName === '' || password === '' || emailAddress === '' || password.length < 8

  const handleSignUp = (event) => {
    event.preventDefault()

    // firebase
  }


  return (
    <>
      <HeaderContainer>
        <Form>
          <Form.Title>Sign Up</Form.Title>
          { error && <Form.Error>{ error }</Form.Error>}
          <Form.Base onSubmit={ handleSignUp } method="POST">
            <Form.Input placeholder="First Name"
                        value={firstName}
                        onChange={({ target }) => setFirstName(target.value)}
            />
            <Form.Input placeholder="Email address"
                        value={emailAddress}
                        onChange={({ target }) => setEmailAddress(target.value)}
            />
            <Form.Input placeholder="Password"
                        type="password"
                        autoComplete="off"
                        value={password}
                        onChange={({ target }) => setPassword(target.value)}
            />
            <Form.Submit disabled={ isInvalid } type="submit">
              Sign Up
            </Form.Submit>
          </Form.Base>

          <Form.TextContainer >
            <Form.Text>Already a User?</Form.Text>
            <Form.Link to='/signin'>Sign in now.</Form.Link>
          </Form.TextContainer>

          <Form.TextSmall>
            This page is protected by Google reCaptcha to ensure you're not a bot. Learn more.
          </Form.TextSmall>
        </Form>
      </HeaderContainer>
      <FooterContainer />
    </>
  )
}