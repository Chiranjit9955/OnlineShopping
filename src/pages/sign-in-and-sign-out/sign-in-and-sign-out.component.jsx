import React from "react";
import SignIn from "../../components/sign-in/sign-in.component";
import SignUp from "../../components/sign-up/sign-up.cpmponent";

import "./sign-in-and-sign-out.styles.scss";

const SignInAndSignOut = () => (
  <div className="signinandsignout">
    <SignIn />
    <SignUp />
  </div>
);

export default SignInAndSignOut;
