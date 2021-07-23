import React from 'react'
import { FaAngleDoubleUp } from "react-icons/fa";
import useScrollToTop from '../../hooks/useScrollToTop';
import useWindowScroll from '../../hooks/useWindowScroll';

const ScrollToTop = () => {

    const btnStyle = {
        width: '50px',
        height: '50px',
        borderRadius: '50%',
        boxShadow: '0px 0px 6px rgb(0, 0, 0)',
        position: 'fixed',
        bottom: '25px',
        right: '25px',
        zIndex: 200,
    }

    const isScrolled = useWindowScroll(200)

    return (
        isScrolled &&
        <button className="scroll-to-top__btn btn btn--active" style={btnStyle} onClick={useScrollToTop} >
            <FaAngleDoubleUp className="scroll-to-top__icon" />
        </button>
    )
}

export default ScrollToTop
