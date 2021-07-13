import React from 'react'
import { FaLongArrowAltLeft } from 'react-icons/fa'
import './index.scss'
import StepOne from './Step1'

const CreateCourse = () => {

    const handleSubmit = (e)=> {
        e.preverntDefault()
        console.log('submitted')
    }

    return (
        <div className="wrapper">
            <div className="create-course">
                <p className="create-course__txt "> <FaLongArrowAltLeft className="create-course__arrow-icon" /> back to dashboard</p>
                <h1 className="create-course__title ">Create New Course</h1>
                <form onSubmit={handleSubmit}>
                    <StepOne/>
                    <div className="create-course__btn-group">
                        <button type="submit" className="create-course__btn btn">Back</button>
                        <button type="submit" className="create-course__btn btn">Save</button>
                        <button type="submit" className="create-course__btn btn btn--active create-course__btn--continue">Save & Continue</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default CreateCourse
