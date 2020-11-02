import React, {useState} from 'react';
import HeaderContainer from '../containers/header';
import FooterContainer from '../containers/footer';
import Form from '../components/form';

export default function SignIn() {
  const [emailAddress, setEmailAddress] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState('');


  /*
  * TODO
  * FINISH SIGNIN STYLE
  * FINISH SIGIN TEXT
  */



  const isInvalid = () => {};
  const handleSignin = () => {};
  return (
    <>
      <HeaderContainer>
        <Form>
          <Form.Title>Sign In</Form.Title>
          { error && <Form.Error></Form.Error>}
          <Form.Base onSubmit={handleSignin} method="POST">
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
            <Form.Submit disabled={isInvalid } type="submit">
              Sign In
            </Form.Submit>
          </Form.Base>

          <Form.Text>
            Temp
          </Form.Text>
          <Form.Text>
            Temp
          </Form.Text>
          <Form.TextSmall>
            Temp
          </Form.TextSmall>

        </Form>
      </HeaderContainer>

      <FooterContainer />
    </>
  )
}