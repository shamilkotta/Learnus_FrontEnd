import React from 'react'
import Accordion from '../../Accordion'
import './index.scss'

import data from '../../../utils/Course'

function CourseContent() {

    return (
        <div className="course-content">
            <p className="course-content__title">Course Content</p>
            <Accordion data={data} />
        </div>
    )
}

export default CourseContent
