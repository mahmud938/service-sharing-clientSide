import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import { auth } from '../../firebase/firebase.config';

const AuthProvider = ({children}) => {

    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null)

    // create user 
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    // Sign In user
    const signIn = (email,password) => {
        return signInWithEmailAndPassword(auth,email,password)
    }

    // update user 
    const updateUser = (updatedData) => {
        return updateProfile(auth.currentUser, updatedData )
    }
   
    // sign out User 
    const signOutUser = () => {
        setLoading(true);
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoading(false)
        })
        return () => {
            unsubscribe();
        }
    })

    const authInfo = {
        user,
        loading,
         createUser,
         signIn,
         signOutUser,
         updateUser,
    }
    return (
        <AuthContext value={authInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;