import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { coursesAction } from '../../../actions/courses'
import CoursePreview from '../../../components/Cards/CoursePreview'
import LoadingIcon from '../../../components/LoadingIcon'

const Courses = () => {
    const style = {
        position: 'relative',
        display: 'flex',
        flexFlow: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',

    }

    const dispatch = useDispatch() 
    const {courses, isCoursesLoading} = useSelector(state => state.courses)
    useEffect(() => {
        dispatch(coursesAction())
    }, [])

    return (
        <div style={style} className="courses-page">
            {
                isCoursesLoading ? <div style={{minHeight: '80vh', marginTop: '15px'}}>< LoadingIcon/></div> :
                courses?.map((course, indx)=> (
                    <CoursePreview key={indx} data={course} />
                ))
            }
        </div>
    )
}

export default Courses
