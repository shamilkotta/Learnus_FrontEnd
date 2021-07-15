import React, {useState, useEffect } from 'react'
import './index.scss'

import CourseHead from '../../../components/Course Landing/CourseHead'
import CourseDescription from '../../../components/Course Landing/CourseDescription'
import CourseContent from '../../../components/Course Landing/CourseContent'
import useWindowScroll from '../../../hooks/useWindowScroll'
import useWindowResize from '../../../hooks/useWindowResize'

function CourseLanding() {

    const [isCardFixed, setIsCardFixed] = useState(false)
    const isScrolled = useWindowScroll(180)
    const isMatchMedia = useWindowResize('min-width: 992px')
    const handleFixedPriceCard = ()=> {
        isMatchMedia && isScrolled ? setIsCardFixed(true) : setIsCardFixed(false)
    }
    useEffect(() => {
        handleFixedPriceCard()

    }, [isScrolled, isMatchMedia])

    return (
    
        <div className="course-landing wrapper">
            <CourseHead isCardFixed={isCardFixed} />
            <div className="course-body" 
            style={
                isMatchMedia ? isCardFixed ? {margin: '0 15px'} : {margin: '-385px 15px 15px', boxSizing: 'border-box'} : {margin: '0 15px'}
            }>
                <CourseDescription/>
                <CourseContent/>
            </div>
        </div>
        
    )
}

export default CourseLanding

