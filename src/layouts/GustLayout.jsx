import React, { Children } from 'react'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Menu/Navbar/Navbar'

function GustLayout(props) {
    return (
        <>
            <Navbar/>
                {props.children}
            <Footer/>
        </>
    )
}

export default GustLayout
