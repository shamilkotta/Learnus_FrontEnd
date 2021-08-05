import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { CourseTable } from '../../components/CoursesTable'

const Courses = () => {
    const [courses, setCourses] = useState([])
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImdldGFkbWluYWNjZXNzIiwiaXNVc2VyIjpmYWxzZSwiaWF0IjoxNjI4MTUyODQxLCJleHAiOjE2MjgxNTY0NDF9.RI8Xf0ItjI5SR8DkyKN4yHpERc1Dlc4l-ezHEIPfN_k'
    useEffect(() => {
        axios.get('http://localhost:5000/api/admin/courses', {headers: {Authorization: 'Bearer '+token}}).then((response)=> {
            console.log(response.data);
            response.data && setCourses(response.data.courses)
        }).catch((err)=> {
            console.log(err.response.data)
        })
    }, [])

    return (
        <>
            <h3>Courses</h3>
            <div className="courses-table">
                <CourseTable tData={courses} />
            </div>
        </>
    )
}

export default Courses
