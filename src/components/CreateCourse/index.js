import React, { useState } from 'react'
import './index.scss'
import { FaLongArrowAltLeft } from 'react-icons/fa'

import StepsProgress from './StepsProgress';
import Step1 from './Steps/Step1';
import Step2 from './Steps/Step2';

const CreateCourse = () => {

    // const [stepNo, setStepNo] = useState(1)
    // const [step1Data, setStep1Data] = useState({})
    // const [step2Data, setStep2Data] = useState({})
    // const [step3Data, setStep3Data] = useState({})


    const handleSubmit = (e)=> {
        e.preverntDefault()
        console.log('submitted')
    }

    return (
        <div className="wrapper">
            <div className="create-course">
                <h1 className="create-course__title ">Create New Course</h1>
                <p className="create-course__txt "> <FaLongArrowAltLeft className="icon-vertical-align" /> back to dashboard</p>
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
