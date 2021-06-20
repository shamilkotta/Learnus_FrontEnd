import React from 'react'
import './CourseLanding.scss'
import CourseHead from '../../components/Course Landing/CourseHead/CourseHead'
import CourseDescription from '../../components/Course Landing/CourseDescription/CourseDescription'

function CourseLanding() {
    return (
        <div className="course-landing">
            <CourseHead/>
            <div className="course-body">
                <CourseDescription/>
            </div>
        </div>
    )
}

export default CourseLanding
