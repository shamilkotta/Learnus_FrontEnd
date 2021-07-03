import React from 'react'
import Join from '../components/Authentication/Join'
import ForgotPassword from '../components/ForgotPassword/ForgotPassword'
import ResetPassword from '../components/RestePassword/ResetPassword'

function Authentication() {

    const style = {    
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0,0,0, 0.9)',
        position: 'fixed',
        zIndex: '1000'
    }

    return (
        <div style={style}>
            <Join/>
            {/* <ResetPassword/> */}
            {/* <ForgotPassword/> */}
        </div>
    )
}

export default Authentication
