import React from 'react'
import CreateCourse from '../../components/CreateCourse'
import { Redirect, useLocation } from 'react-router-dom';

const EditCourse = () => {

    const location = useLocation()
    const courseId = location?.state?.courseId
    if (!courseId) {
        return (
            <Redirect to='/admin/courses'/>
        )
    }
    return (
        <CreateCourse courseId={courseId} />
    )
}

export default EditCourse
