import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../../firebase/firebase.config";

export default function GoogleLogin() {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

  const handleGoogleLogin = () => {
    signInWithGoogle();
  };
  console.log(user, loading, error);

  return (
    <div className="flex justify-center">
      <button
        onClick={handleGoogleLogin}
        className="bg-orange-400 btn rounded-lg w-full px-5 py-3"
      >
        Login with Google
      </button>
    </div>
  );
}
