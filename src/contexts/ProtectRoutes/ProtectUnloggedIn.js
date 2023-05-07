import React from 'react'
import { Navigate } from 'react-router-dom'
import { UserAuth } from '../AuthContext'

const ProtectUnloggedIn = ({children}) => {
    const {user} = UserAuth()
    // console.log(user)
    if (user == null) {
        return <Navigate to='/'/>
    }
    return children
}


export default ProtectUnloggedIn