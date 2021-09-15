import React from 'react'
import './Style.scss'

function CourseDescription({data}) {

    return (
        <div className="course-description">
            <div>
                <p className="description__title">Description</p>
                <p className="description__body p">
                    {data.course__description}
                </p>
            </div>
            <div>
                <p className="description__title">What you'll learn</p>
                <p className="description__body p">
                    {data.course__benefits}
                </p>
            </div>
            <div>
                <p className="description__title">Requirements</p>
                <p className="description__body p">
                    {data.course__requirements}
                </p>
            </div>
            <div>
                <p className="description__title">Who this course is for:</p>
                <p className="description__body p">
                    {data.course__target}
                </p>
            </div>
        </div>
    )
}

export default CourseDescription
