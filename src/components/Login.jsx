import { useEffect } from "react";
// imported from firebase auth sdk
import { getAuth } from "firebase/auth";
// ensures compatibility with the older versions of firebase
import firebase from "firebase/compat/app";
// imports pre-built UI for firebase authentication
import * as firebaseui from "firebaseui";
// imports the firebaseui styles using the CDN
import "firebaseui/dist/firebaseui.css";
import { app } from "../firebase";
export default function Login() {
  useEffect(() => {
    const ui =
      firebaseui.auth.AuthUI.getInstance() ||
      // since Firebase v9 and above service are imported when needed instad of being a namespace
      new firebaseui.auth.AuthUI(getAuth(app));

    ui.start("#firebaseui-auth-container", {
      signInSuccessUrl: "/",
      signInOptions: [
        // Leave the lines as is for the providers you want to offer your users.
        {
          provider: firebase.auth.GoogleAuthProvider.PROVIDER_ID,
          clientId:
            "180903831823-iadohplt8o8bumrq85mqkmt5cbvd56jo.apps.googleusercontent.com",
        },
        {
          provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
        },
        // leave for ANOTHER video
        // firebaseui.auth.AnonymousAuthProvider.PROVIDER_ID,
      ],
      // required to enable one-tap sign-up credential helper
      credentialHelper: firebaseui.auth.CredentialHelper.GOOGLE_YOLO,
    });
  }, []);

  return (
    <div
      id="firebaseui-auth-container"
      className="flex flex-col justify-center items-center mt-[15rem]"
    >
      <p className="pb-7 font-code text-[1.5rem] text-purple-400">
        Sign In To Continue
      </p>
    </div>
  );
}
