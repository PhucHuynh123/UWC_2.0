import React from 'react'
import { Navigate } from 'react-router-dom'
import { UserAuth } from '../AuthContext'

function ProtectLoggedIn({children}) {
    const {user} = UserAuth()

    if (user != null) {
        // console.log('Logged In');
        return <Navigate to='/home'/>
    }

    return children
}

export default ProtectLoggedIn