import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import {
  auth,
  db,
  FacebookAuthProvider,
  provider,
  signInWithPopup,
  storage,
} from "./Firebase";

import {
  addDoc,
  collection,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import {
  GetjobPosts,
  postJobSuccess,
  SetProgress,
  SetUser,
} from "../Rtk/actions/Actions";
import {
  createUserWithEmailAndPassword,
 
} from "firebase/auth";

//  implement sign in with google function
export function SignnIn() {
  return (dispatch) => {
    signInWithPopup(auth, provider)
      .then((payload) => {
        dispatch(SetUser(payload.user)); // Make sure SetUser action creator correctly sets the user
      })
      .catch((error) => alert(error.message));
  };
}
//  implement sign in with facebook function
export function signInWithFacebook() {
  return (dispatch) => {
    const provider = new FacebookAuthProvider();
    signInWithPopup(auth, provider)
      .then((payload) => {
        dispatch(SetUser(payload.user)); // Make sure SetUser action creator correctly sets the user
      })
      .catch((error) => alert(error.message));
  };
}
// implement signin with email and password function
export const signInWithEmail = (email, password) => {
  return async (dispatch) => {
    try {
      const result = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
    } catch (error) {
      switch (error.code) {
        case "auth/email-already-in-use":
          alert("The email address is already in use.");
          break;
        case "auth/invalid-email":
          alert("The email address is not valid.");
          break;
        case "auth/user-disabled":
          alert("The user corresponding to the given email has been disabled.");
          break;
        case "auth/user-not-found":
          alert("There is no user corresponding to the given email.");
          break;
        case "auth/wrong-password":
          alert(
            "The password is invalid for the given email, or the account corresponding to the email does not have a password set."
          );
          break;
        case "auth/invalid-credential":
          alert(
            "The provided credentials are not valid. Please check your email and password."
          );
          break;
        default:
          alert("there is an error check verify your email and password .");
      }
    }
  };
};

// implement authuntication function
export function getAuth() {
  return (dispatch) => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        dispatch(SetUser(user));
      }
    });
  };
}
// implement function signout
export function SignOut() {
  return (dispatch) => {
    auth
      .signOut()
      .then(() => {
        dispatch(SetUser(null));
      })
      .catch((error) => alert(error.message));
  };
}

// implement post jop function
export const postJob = (payload) => {
  return (dispatch) => {
    if (payload.IMAGE) {
      const storageRef = ref(storage, `images/${payload.IMAGE.name}`);
      const uploadTask = uploadBytesResumable(storageRef, payload.IMAGE);
 
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );

          dispatch(SetProgress(progress));
        },
        (error) => {
          alert(error + " this an error on uploading");
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            const collectionRef = collection(db, "articles");
            addDoc(collectionRef, {
              actor: {
                Link: payload.LINK,
                Id: payload.ID,
                CompanyName: payload.COMPANY_NAME,
                Description: payload.DESCRIPTION,
                Location: payload.LOCATION,
                Position: payload.POSITION,
                MinSalary: payload.MINSALARY,
                JopType: payload.JOPType,
                MaxSalary: payload.MAXSALARY,
                DATE: payload.Date,
              },
              shareImg: downloadURL,
            })
              .then((docRef) => {
                dispatch(
                  postJobSuccess({
                    ...payload,
                    id: docRef.id,
                    shareImg: downloadURL,
                  })
                );
              })
              .catch((error) => {
                alert("Error adding document: ", error);
              });
          });
        }
      );
    }
    dispatch(SetProgress(0));
  };
};

export function ShowAllPosts() {
  return (dispatch) => {
    const collectionRef = collection(db, "articles");
    const orderRef = query(collectionRef, orderBy("actor.DATE", "desc"));
    let payload;
    // Set up snapshot listener
    onSnapshot(orderRef, (snapshot) => {
      payload = snapshot.docs.map((doc) => doc.data());

      dispatch(GetjobPosts(payload));
    });

    // Clean up listener when component unmounts
    return () => unsubscribe();
  };
}
