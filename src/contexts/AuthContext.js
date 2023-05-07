import { createContext, useContext, useEffect, useState } from "react";

import {
    // getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    // sendPasswordResetEmail,
    // updatePassword
} from "firebase/auth";
import {auth} from '../firebase'
import Loading from "../components/Loading/Loading";

const UserContext = createContext()

export const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email , password)
    }

    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logout = () => {
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            // console.log(currentUser)
            setUser(currentUser)
            setLoading(false)
        })
        return () => {
            unsubscribe();
        }
    }, [])

    if (loading)
        return <Loading/>

    return (
        <UserContext.Provider value={{
            createUser, 
            user, 
            logout, 
            signIn, 
            // resetPassword 
            }}>

            {children}
        </UserContext.Provider>
    )
}

export const UserAuth = () => {
    return useContext(UserContext)
}