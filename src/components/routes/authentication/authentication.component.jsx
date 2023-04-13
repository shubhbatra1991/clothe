import {
    signInWithGooglePopup,
    createUserDocumentFromAuth,
    signInWithGoogleRedirect,
    auth
  } from '../../../utils/firebase/firebase.utils.js';
import SignUpForm from '../../sign-up/sign-up-form.component.jsx';
import SignInForm from '../../sign-in-form/sign-in-form.component.jsx';

  
  const Authentication = () => { 
    return (
      <div>
        <h1>Sign In Page</h1>
        <SignInForm />
        <SignUpForm />
      </div>
    );
  };
  
  export default Authentication;