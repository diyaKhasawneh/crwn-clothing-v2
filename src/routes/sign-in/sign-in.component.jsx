import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import {
  signInWithGooglePopup,
  creatUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await creatUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>sign in page</h1>
      <button onClick={logGoogleUser}>sign in with google popup</button>
      <SignUpForm/>
    </div>
  );
};

export default SignIn;
