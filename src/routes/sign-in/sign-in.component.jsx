import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";

import {
  auth,
  signInWithGooglePopup,
  creatUserDocumentFromAuth,
  signInWithGoogleRedirect,
} from "../../utils/firebase/firebase.utils";
const SignIn = () => {
  useEffect(async () => {
    const response = await getRedirectResult(auth);
    // console.log(response);
    if (response){
      const userDocRef = await creatUserDocumentFromAuth(response.user);

    }
  }, []);

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await creatUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>sign in page</h1>
      <button onClick={logGoogleUser}>sign in with google popup</button>
      <button onClick={signInWithGoogleRedirect}>
        sign in with google redirect
      </button>
    </div>
  );
};

export default SignIn;
