import React, { ReactNode, useEffect, useState } from "react";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  getAuth,
  GoogleAuthProvider,
  updateProfile,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { app } from "../../../firebase/firebase.config";

const auth = getAuth(app);

interface AuthProviderProps {
  children?: ReactNode;
}

export const AuthContext = React.createContext({});

const AuthProvider = ({ children }: AuthProviderProps): JSX.Element => {
  const [user, setUser] = useState<{} | null>(null);
  const [loading, setLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider();
  const [slot, setSlot] = useState<any>(null);
  const [slotPm, setSlotPm] = useState<any>(null);
  // Register User
  const RegisterUser = async (
    email: string,
    password: string,
    displayName: string
  ) => {
    setLoading(true);
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    const newUser = {
      email: email,
      displayName: displayName,
    };

    setUser(newUser);

    updateProfile(userCredential.user, {
      displayName: displayName,
    })
      .then(() => {})
      .catch((error) => {});
  };

  // google sign in
  const googleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  // log in user
  const logInUser = async (email: string, password: string) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // sign out
  const logOut = () => {
    setLoading(true);
    localStorage.removeItem("accessToken");
    return signOut(auth)
      .then(() => {})
      .catch((err) => {
        console.error(err);
      });
  };

  // user observer
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (current) => {
      setUser(current);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  // Reset password
  const resetPassword = (email: string) => {
    return sendPasswordResetEmail(auth, email);
  };

  const values = {
    user,
    auth,
    RegisterUser,
    logInUser,
    googleSignIn,
    logOut,
    resetPassword,
    loading,
    setLoading,
    slot,
    setSlot,
    slotPm,
    setSlotPm,
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
