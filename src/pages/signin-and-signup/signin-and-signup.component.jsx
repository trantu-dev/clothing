import React from 'react';
import SignIn from './../../components/signin/signin.component';
import SignUp from './../../components/signup/signup.component';

import './signin-and-signup.styles.scss';

const SignInAndSignUp = () => (
  <div className="sign-in-and-sign-up">
    <SignIn></SignIn>
    <SignUp></SignUp>
  </div>
);

export default SignInAndSignUp;
