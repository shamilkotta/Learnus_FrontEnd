import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './Style.scss'
import { Link } from 'react-router-dom'
import { MdDelete, MdEdit } from 'react-icons/md'
import LoadingIcon from '../LoadingIcon'
import { deleteCourse } from '../../api'
import { adminCoursesAction } from '../../actions/courses'

export const CourseTable = ({tData}) => {

    const dispatch = useDispatch()
    const { isCoursesLoading } = useSelector(state => state.courses)
    const handleDelete = (id)=> {
        deleteCourse(id).then((response)=> {
            console.log(response?.data?.message)
            dispatch(adminCoursesAction())
        }).catch((err)=> {
            console.log(err.response?.data?.message);
        })
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
                    <th>Status</th>
                    <th>Edit | Delete</th>
                </tr>
            </thead>
            <tbody>{
                tData?.map((data, index)=> (
                    <tr key={index}>
                        <td><Link to={`/course/${data.course__code}`}>{data.course__code}</Link></td>
                        <td>{data.course__title}</td>
                        <td>{data.status}</td>
                        <td>
                            <Link to={{pathname: '/admin/edit-course', state:{courseId: data._id}}}><MdEdit  className="courses__table-btn"/></Link>
                            <MdDelete className="courses__table-btn" onClick={()=>{handleDelete(data.course__code)}} />
                        </td>
                    </tr> 
                ))
            }</tbody>
        </table>
    )
}
