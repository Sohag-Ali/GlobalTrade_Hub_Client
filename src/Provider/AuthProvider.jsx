
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../Firebase/Firebase.config';


export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children }) => {

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  console.log(user);

  //google
  const googleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };
  const login = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const register = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };
  const updateUser = (updatedData) => {
    return updateProfile(auth.currentUser, updatedData);
  };

  const resetPassword = (email) => {
  return sendPasswordResetEmail(auth, email);
};

  //observer
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const authInfo = {
    user,
    setUser,
    googleSignIn,
    logOut,
    loading,
    setLoading,
    login,
    register,
    updateUser,
    resetPassword,
  
  };
  return <AuthContext value={authInfo}>{children}</AuthContext>;
};

export default AuthProvider;