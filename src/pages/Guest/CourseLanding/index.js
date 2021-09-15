import React, {useState, useEffect } from 'react'
import { useParams, Redirect } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import './Style.scss'

import CourseHead from '../../../components/Course Landing/CourseHead'
import CourseDescription from '../../../components/Course Landing/CourseDescription'
import CourseContent from '../../../components/Course Landing/CourseContent'
import useWindowScroll from '../../../hooks/useWindowScroll'
import useWindowResize from '../../../hooks/useWindowResize'
import { courseAction } from '../../../actions/courses'
import LoadingIcon from '../../../components/LoadingIcon'

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

    const { course, isCourseFound } = useSelector(state => state.course)
    const {id} = useParams()
    const { isCourseLoading } = useSelector(state => state.course)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(courseAction(id))
    }, [])

    return (
    
        <div className="course-landing wrapper">
            {
                isCourseLoading && !course.course__code ? <div style={{position: 'fixed', width: '100%', height: '100%'}}>< LoadingIcon/></div> : 
                    !isCourseFound ? <Redirect to={{pathname: `/courses`}} /> :
                <>
                    <CourseHead data={course} isCardFixed={isCardFixed} />
                    <div className="course-body" 
                    style={
                        isMatchMedia ? isCardFixed ? {margin: '0 15px'} : {margin: '-350px 15px 15px', boxSizing: 'border-box'} : {margin: '0 15px'}
                    }>
                        <CourseDescription data={course} />
                        <CourseContent data={course.course__content} />
                    </div>
                </>
            }
            
        </div>
        
    )
}

export default CourseLanding

