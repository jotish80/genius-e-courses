import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";


export const AuthContext = createContext();


const UserContext = ({children}) => {
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();  

    const [user, setUser] = useState(null);
   
    // const [loading, setLoading] = useState(true);
  
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () => {
        return signOut(auth);
    }

    const providerLogin = (provider) => {
        return signInWithPopup(auth, provider);
    }

   
    useEffect(()=>{
      const unsubscribe =  onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser);
            // setLoading(false);
            console.log(currentUser);
        })

        return () => {
            unsubscribe()
        }

    },[])

    const authInfo = {user, providerLogin, logOut, createUser, signIn};
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;