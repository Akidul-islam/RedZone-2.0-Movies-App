import { auth, db } from "../../firebase";
import { useContext, createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";

const authContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const signUp = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    return signOut(auth);
  };

  // why this aapproch:[ I need initial data none an manual data]

  useEffect(() => {
    const unSubcribes = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      unSubcribes();
    };
  });

  return (
    <authContext.Provider value={{ user, signUp, login, logOut }}>
      {children}
    </authContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(authContext);
};
