import React, { useState } from 'react'

import ForgotPassword from '../components/Authentication/ForgotPassword'
import LogIn from '../components/Authentication/LogIn'
import SignUp from '../components/Authentication/SignUp'
import Popup from '../components/Popup'

const AuthLayout = () => {

    const [popUpValue, setPopUpValue] = useState('logIn')

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
