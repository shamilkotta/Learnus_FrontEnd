import React from 'react'
import Accordion from '../../Accordion'
import './Style.scss'

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
