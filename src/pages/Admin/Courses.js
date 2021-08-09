import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CourseTable } from '../../components/CoursesTable'
import { adminCoursesAction } from '../../actions/courses'

const Courses = () => {
    const [allCourses, setAllCourses] = useState([])
    const dispatch = useDispatch()
    const { courses } = useSelector(state => state.courses)
    useEffect(() => {
        dispatch(adminCoursesAction())
    }, [])
    useEffect(() => {
        setAllCourses(courses)
    }, [courses])
    
    return (
        <>
            <h3>Courses</h3>
            <div className="courses-table">
                <CourseTable tData={allCourses} />
            </div>
        </>
    )
}

export default Courses
