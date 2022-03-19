import { signInWithGooglePopup } from "../../utils/firebase/firebase.utils";

const SignIn = () => {
  const user = async () => {
    const response = await signInWithGooglePopup();
    console.log(response.user.accessToken);
  };

  return (
    <div>
      <h1>Sign in Page</h1>
      <button onClick={user}>Sign in with Google</button>
    </div>
  );
};

export default SignIn;
