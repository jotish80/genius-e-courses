import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";


export const AuthContext = createContext();


const UserContext = ({children}) => {
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();  
    const [loading, setLoading] = useState(true)

    const [user, setUser] = useState(null);
    
  
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    const providerLogin = (provider) => {
        return signInWithPopup(auth, provider);
    }

   
    useEffect(()=>{
      const unsubscribe =  onAuthStateChanged(auth, currentUser =>{
            console.log(currentUser);
            setUser(currentUser);
            setLoading(false);
        })

        return () => {
            unsubscribe()
        }

    },[])

    const authInfo = {user, providerLogin, logOut, createUser, signIn, loading};
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;