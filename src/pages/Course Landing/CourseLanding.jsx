import React, {useState, useEffect} from 'react'
import './CourseLanding.scss'

import CourseHead from '../../components/Course Landing/CourseHead/CourseHead'
import CourseDescription from '../../components/Course Landing/CourseDescription/CourseDescription'
import CourseContent from '../../components/Course Landing/CourseContent/CourseContent'
import GuestLayout from '../../layouts/GuestLayout'

function CourseLanding() {

    const [isCardFixed, setIsCardFixed] = useState(false)
    const [isMatchMedia, setIsMatchMedia] = useState(false)
    const mediaQuery = window.matchMedia('(min-width: 992px)');
    const handleFixedPriceCard = ()=> {
        if (mediaQuery.matches) {
            window.pageYOffset >= 120 ? setIsCardFixed(true) : setIsCardFixed(false);
        } else {
            setIsCardFixed(false)
        }
    }
    const handleMediaQuery = ()=> {
        mediaQuery.matches ? setIsMatchMedia(true) : setIsMatchMedia(false)
    }
    useEffect(() => {
        mediaQuery.matches ? setIsMatchMedia(true) : setIsMatchMedia(false)
        window.addEventListener('scroll', handleFixedPriceCard)
        window.addEventListener('resize', handleMediaQuery)
    }, [])

    return (
        <GuestLayout>
            <div className="course-landing wrapper">
                <CourseHead isCardFixed={isCardFixed}/>
                <div className="course-body" 
                style={
                    isMatchMedia ? isCardFixed ? {margin: '0 15px'} : {margin: '-385px 15px'} : {margin: '0 15px'}
                }>
                    <CourseDescription/>
                    <CourseContent/>
                </div>
            </div>
        </GuestLayout>
    )
}

export default CourseLanding

