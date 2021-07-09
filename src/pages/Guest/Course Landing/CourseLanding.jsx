import React, {useState, useEffect} from 'react'
import './CourseLanding.scss'

import CourseHead from '../../../components/Course Landing/CourseHead/CourseHead'
import CourseDescription from '../../../components/Course Landing/CourseDescription/CourseDescription'
import CourseContent from '../../../components/Course Landing/CourseContent/CourseContent'

function CourseLanding() {

    const [isCardFixed, setIsCardFixed] = useState(false)
    const handleFixedPriceCard = ()=> {
        if (mediaQuery.matches) {
            window.pageYOffset >= 180 ? setIsCardFixed(true) : setIsCardFixed(false);
        } else {
            setIsCardFixed(false)
        }
    }

    const [isMatchMedia, setIsMatchMedia] = useState(false)
    const mediaQuery = window.matchMedia('(min-width: 992px)');
    const handleMediaQuery = ()=> {
        mediaQuery.matches ? setIsMatchMedia(true) : setIsMatchMedia(false)
    }
    useEffect(() => {
        handleMediaQuery()
        window.addEventListener('scroll', handleFixedPriceCard)
        window.addEventListener('resize', handleMediaQuery)

        return ()=> {
            window.removeEventListener('scroll', handleFixedPriceCard)
            window.removeEventListener('resize', handleMediaQuery)
        }
    }, [])

    return (
    
        <div className="course-landing wrapper">
            <CourseHead isCardFixed={isCardFixed}/>
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

