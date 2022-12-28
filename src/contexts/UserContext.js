import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebase/firebase.init';
import { GoogleAuthProvider } from "firebase/auth";
import { toast } from 'react-toastify';

const provider = new GoogleAuthProvider();
export const AuthContext = createContext();
const auth = getAuth(app);

const UserContext = ({ children }) => {
    const [user, setUser] = useState(null);

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const logIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const googleLogin = () => {
        return signInWithPopup(auth, provider);
    }
    const logOut = () => {
        signOut(auth)
            .then(() => {
                toast.success('Logged Out.')
            }).catch((error) => {
                // An error happened.
            });
    }


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (loggedUser) => {
            setUser(loggedUser);
        })

        return () => {
            unsubscribe();
        }
    }, [])

    const userInfo = {
        user,
        createUser,
        googleLogin,
        logIn,
        logOut
    }
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;