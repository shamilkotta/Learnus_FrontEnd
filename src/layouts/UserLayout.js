import React from 'react'

import Footer from '../components/Footer'

const UserLayout = (props) => {
    
    return (
        <>
            {props.children}
            <div style={{height: '100vh'}}>hi</div>
            <Footer/>
        </>
    )
}

export default UserLayout
