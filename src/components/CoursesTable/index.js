import React from 'react'
import { useSelector } from 'react-redux'
import './Style.scss'
import { Link } from 'react-router-dom'
import { MdDelete, MdEdit } from 'react-icons/md'
import LoadingIcon from '../LoadingIcon'

export const CourseTable = ({tData}) => {

    const { isCoursesLoading } = useSelector(state => state.courses)
    const handleDelete = (id)=> {
        console.log(id)
        // axios.delete(`l/api/admin/course/${id}`)
    }

    if (!tData.length && isCoursesLoading) {
        return <LoadingIcon/>
    }

    return (
        <table className="courses__table">
            <thead>
                <tr>
                    <th>Code</th>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Status</th>
                    <th>Edit | Delete</th>
                </tr>
            </thead>
                <tbody>{
                    tData?.map((data, index)=> (
                        <tr key={index}>
                            <td>{data.course__code}</td>
                            <td>{data.course__title}</td>
                            <td>NO4SF</td>
                            <td>{data.status}</td>
                            <td>
                                <Link to={{pathname: '/admin/edit-course', state:{courseId: data._id}}}><MdEdit  className="courses__table-btn"/></Link>
                                <MdDelete className="courses__table-btn" onClick={()=>{handleDelete(data._id)}} />
                            </td>
                        </tr> 
                    ))
                }</tbody>
            </table>
    )
}
