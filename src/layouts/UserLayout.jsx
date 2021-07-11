import React from 'react'

import Footer from '../components/Footer/Footer'

const UserLayout = (props) => {
    return (
        <>
            {props.children}
            <Footer/>
        </>
    )
}

export default UserLayout
