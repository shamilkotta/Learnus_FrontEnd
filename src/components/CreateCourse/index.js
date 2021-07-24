import React, { useState, createContext } from 'react'
import './Style.scss'

import StepsProgress from './StepsProgress';
import Step1 from './Steps/Step1';
import Step2 from './Steps/Step2';
import Step3 from './Steps/Step3';

export const FormValues = createContext()

const CreateCourse = () => {
    
    const [formData, setFormData] = useState({})
    const [currentStep, setCurrentStep] = useState(1)
    const [completedStep, setCompletedStep] = useState(0)

    const handleSubmit = (e)=> {
        e.preventDefault()
        setCompletedStep(currentStep)
        currentStep === 3 ? console.log('submitted') : setCurrentStep(currentStep+1)
        console.log(formData)
    }
    const handleSave = e=> {
        e.preventDefault()
    }
    const goBack = e=> {
        e.preventDefault()
        setCurrentStep(currentStep-1)
    }

    return (
        <div className="create-course__container">
            <h1 className="create-course__title ">Create New Course</h1>
            <div className="form__steps-progress">
                <StepsProgress text="1" completed={completedStep >=1 ? true: false} />
                <StepsProgress text="2" completed={completedStep >=2 ? true: false} />
                <StepsProgress text="3" completed={completedStep >=3 ? true: false} />
            </div>
            <form onSubmit={handleSubmit} className="create-course__form">

                <div className="form__steps">
                    <FormValues.Provider value={[formData, setFormData]}>
                    {
                        {
                            1: <Step1/>,
                            2: <Step2/>,
                            3: <Step3/>
                        }[currentStep]
                    }
                    </FormValues.Provider>
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
    )
}

export default CreateCourse
