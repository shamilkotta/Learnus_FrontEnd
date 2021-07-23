import React, { useState, useLayoutEffect } from 'react'
import { BsArrowBarRight, BsArrowBarLeft, BsArrowLeft } from 'react-icons/bs';
import useWindowResize from '../../../hooks/useWindowResize'
import './Style.scss'

import data from '../../../utils/Course';
import Accordion from '../../Accordion'

const AddContent = () => {

    const [isSideBar, setIsSideBar] = useState(true)
    const matchMedia = useWindowResize('min-width: 992px')
    const toggleSideBar= (e)=> {
        e.preventDefault()
        setIsSideBar(!isSideBar)
    }

    useLayoutEffect(() => {
        matchMedia ? setIsSideBar(true) : setIsSideBar(false)
    }, [matchMedia]) 

    return (
        <div className="wrapper add-content">
            <div className="add-content__sideBar" style={isSideBar ? {width: '320px'} : {width: 0}} >
                <Accordion data={data} showStyle />
            </div>
            <div className="add-content__container" style={matchMedia && isSideBar ? {marginLeft: '320px'} : {marginLeft: '0%'}} >
                { isSideBar ? <BsArrowBarLeft className="add-content__sideBar--icon" onClick={toggleSideBar} /> : <BsArrowBarRight className="add-content__sideBar--icon" onClick={toggleSideBar} /> }
                <p className="create-course__txt"> <BsArrowLeft className="icon-vertical-align" /> back to dashboard</p>
                hi
            </div>
        </div>
    )
}

export default AddContent
