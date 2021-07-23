import React from 'react'
import './Style.scss'
import { BsArrowLeft } from 'react-icons/bs';

import StepsProgress from './StepsProgress';
import Step1 from './Steps/Step1';
import Step2 from './Steps/Step2';

const CreateCourse = () => {

    const handleSubmit = (e)=> {
        e.preventDefault()
        console.log('submitted')
    }

    return (
        <div className="wrapper create-course">
            <div className="create-course__container">
                <p className="create-course__txt "> <BsArrowLeft className="icon-vertical-align" /> back to dashboard</p>
                <h1 className="create-course__title ">Create New Course</h1>
                <div className="form__steps-progress">
                    <StepsProgress text="1" completed />
                    <StepsProgress text="2" />
                    <StepsProgress text="3" completed/>
                </div>
                <form onSubmit={handleSubmit} className="create-course__form">

                    <div className="form__steps">
                        {/* <Step1 /> */}
                        <Step2 />
                    </div>

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
