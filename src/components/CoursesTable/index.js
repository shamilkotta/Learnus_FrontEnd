import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './Style.scss'
import Popup from '../Popup'

import { Link } from 'react-router-dom'
import { MdDelete, MdEdit } from 'react-icons/md'
import LoadingIcon from '../LoadingIcon'
import { deleteCourse } from '../../api'
import { adminCoursesAction } from '../../actions/courses'
import ConfrimPopup from '../Popup/ConfrimPopup'

export const CourseTable = ({tData}) => {

    const [isDelete, setIsDelete] = useState(false)
    const [code, setCode] = useState('')
    const [isDeleting, setIsDeleting] = useState(false)

    const dispatch = useDispatch()
    const { isCoursesLoading } = useSelector(state => state.courses)
    const handleDelete = (id)=> {
        setIsDeleting(true);
        deleteCourse(id).then((response)=> {
            console.log(response?.data?.message)
            dispatch(adminCoursesAction())
            setIsDeleting(false)
            setIsDelete(false)
        }).catch((err)=> {
            console.log(err.response?.data?.message);
            setIsDeleting(false)
            setIsDelete(false)
        })
    }

    if (!tData.length && isCoursesLoading) {
        return <LoadingIcon/>
    }

    return (
        <>

            {
                isDelete && <ConfrimPopup closePopup={()=> {setIsDelete(false)}} code={code} loading={isDeleting} deleteFun={handleDelete} />
            }

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
                            <td><Link to={data.status === 'Active' ? {pathname:`/course/${data.course__code}`}: {pathname:`/admin/courses`}}>{data.course__code}</Link></td>
                            <td>{data.course__title}</td>
                            <td>{data.status}</td>
                            <td>
                                <Link to={{pathname: '/admin/edit-course', state:{courseId: data._id}}}><MdEdit  className="courses__table-btn"/></Link>
                                <MdDelete className="courses__table-btn" onClick={()=>{setIsDelete(true); setCode(data.course__code)}} />
                            </td>
                        </tr> 
                    ))
                }</tbody>
            </table>
        </>
    )
}
