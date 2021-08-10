import React, { useState } from 'react'
import { Redirect, useLocation } from 'react-router-dom'

import ForgotPassword from '../components/Authentication/ForgotPassword'
import LogIn from '../components/Authentication/LogIn'
import SignUp from '../components/Authentication/SignUp'
import Popup from '../components/Popup'
import useAuthorization from '../hooks/useAuthorization'

const AuthLayout = () => {

    const [popUpValue, setPopUpValue] = useState('logIn')
    const location = useLocation()
    const authorized = useAuthorization()
    if (authorized) {
        if (location.state?.to) {
            const pathTo = location.state.to.split('?')[0]
            return <Redirect to= {{
                pathname: pathTo
            }} />

        }else {
            return <Redirect to={{
                pathname:location.pathname
            }}/>
        }
    }

    return (
        <>
            {
                {
                    'logIn': <Popup height="420"><LogIn  setPopUp={(value) => {setPopUpValue(value)}} /></Popup>,
                    'signUp': <Popup height="520"><SignUp  setPopUp={(value) => {setPopUpValue(value)}} /></Popup>,
                    'forgotPasswrod': <Popup height="280"><ForgotPassword  setPopUp={(value) => {setPopUpValue(value)}}/></Popup>
                }[popUpValue]
            }
        </>
    )
}

export default AuthLayout
