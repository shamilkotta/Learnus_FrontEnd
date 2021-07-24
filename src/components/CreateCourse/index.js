import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Style.scss'
import { BsArrowLeft } from 'react-icons/bs';

import StepsProgress from './StepsProgress';
import Step1 from './Steps/Step1';
import Step2 from './Steps/Step2';
import Step3 from './Steps/Step3';

const CreateCourse = () => {
    
    const [currentStep, setCurrentStep] = useState(1)
    const [completedStep, setCompletedStep] = useState(0)

    const handleSubmit = (e)=> {
        e.preventDefault()
        setCompletedStep(currentStep)
        currentStep === 3 ? console.log('submitted') : setCurrentStep(currentStep+1)
    }
    const handleSave = e=> {
        e.preventDefault()
    }
    const goBack = e=> {
        e.preventDefault()
        setCurrentStep(currentStep-1)
    }

    return (
        <div className="wrapper create-course">
            <div className="create-course__container">
                <Link to='/admin'><p className="create-course__txt a" > <BsArrowLeft className="icon-vertical-align" /> back to dashboard</p></Link>
                <h1 className="create-course__title ">Create New Course</h1>
                <div className="form__steps-progress">
                    <StepsProgress text="1" completed={completedStep >=1 ? true: false} />
                    <StepsProgress text="2" completed={completedStep >=2 ? true: false} />
                    <StepsProgress text="3" completed={completedStep >=3 ? true: false} />
                </div>
                <form onSubmit={handleSubmit} className="create-course__form">

                    <div className="form__steps">
                        {
                            {
                                1: <Step1/>,
                                2: <Step2/>,
                                3: <Step3/>
                            }[currentStep]
                        }
                    </div>

                    <div className="create-course__btn-group">
                        {
                            currentStep != 1 && <button className="create-course__btn btn" onClick={goBack}>Back</button>
                        }
                        {
                            currentStep != 3 ?
                                <> 
                                    <button className="create-course__btn btn" onClick={handleSave}>Save</button>
                                    <button className="create-course__btn btn btn--active create-course__btn--continue" >Save & Continue</button>
                                </>
                            :
                                <button className="create-course__btn btn btn--active create-course__btn--finish" >Finish</button>
                        }
                    </div>
                </form>
            </div>
        </div>
    )
}

export default CreateCourse
