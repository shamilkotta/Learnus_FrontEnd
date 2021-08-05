import React, { useState, createContext, useEffect } from 'react'
import './Style.scss'
import axios from 'axios'

import StepsProgress from './StepsProgress';
import Step1 from './Steps/Step1';
import Step2 from './Steps/Step2';
import Step3 from './Steps/Step3';
import { InputSubmit } from '../InputFields';

export const FormValues = createContext()

const CreateCourse = ({courseId}) => {

    const initialState = {
        id: null,
        course__code: '',
        course__title: '',
        course__shortDescription: '',
        course__description: '',
        course__benefits: '',
        course__requirements: '',
        course__target: '',
        course__content: [{module_id: '', module_name: '', chapters: []}],
        course__price: '',
        course__duration: '',
        course__language: '',
        course__resources: '',
        course__benefits1: '',
        course__benefits2: '',
        course__benefits3: '',
        course__benefits4: '',
        course__coverImg: '',
    }
    
    const [formData, setFormData] = useState(initialState)
    const [currentStep, setCurrentStep] = useState(1)
    const [completedStep, setCompletedStep] = useState(0)
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImdldGFkbWluYWNjZXNzIiwiaXNVc2VyIjpmYWxzZSwiaWF0IjoxNjI4MTUxNDUwLCJleHAiOjE2MjgxNTUwNTB9.jYFN4rcMmgMgMpZZCH5OEPdivjirqU2gkoSuw_tZqR4"
    const data = { ...formData}
    const handleSubmit = (e)=> {
        e.preventDefault()
        setCompletedStep(currentStep)
        if (currentStep === 3) {
            axios.post('http://localhost:5000/api/admin/new-course', data, {headers: {Authorization: 'Bearer '+token}}).then((response)=> {
                console.log(response?.data)
            }).catch((err)=> {
                console.log(err.response?.data)
            })
        }
        else {
            handleSave(e)
            setCurrentStep(currentStep+1)
        }
    }
    const handleSave = e=> {
        e.preventDefault()
        axios.post('http://localhost:5000/api/admin/save-new-course', data, {headers: {Authorization: 'Bearer '+token}}).then((response)=> {
            response.data.id && setFormData({...formData, ['id']: response.data.id})
        }).catch((err)=> {
            console.log(err.response?.data)
        })
    }
    const goBack = e=> {
        e.preventDefault()
        setCurrentStep(currentStep-1)
    }

    useEffect(() => {
        if (courseId) {
            axios.get(`http://localhost:5000/api/admin/edit-course/${courseId}`, {headers: {Authorization: 'Bearer '+token}}).then((response)=> {
                setFormData({...response.data.course, ['id']: courseId})
            }).catch((err)=> {
                console.log(err.response?.data)
            })
        }
    }, [])

    return (
        <div className="create-course__container">
            <h1 className="create-course__title ">Create New Course</h1>
            <div className="form__steps-progress">
                <StepsProgress text="1.Intro" completed={completedStep >=1 ? true: false} />
                <StepsProgress text="2.Content" completed={completedStep >=2 ? true: false} />
                <StepsProgress text="3.info" completed={completedStep >=3 ? true: false} />
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
                        currentStep !== 1 && <button className="create-course__btn btn" onClick={goBack}>Back</button>
                    }
                    {
                        currentStep !== 3 ?
                            <> 
                                <InputSubmit className="create-course__btn" onClick={handleSave} value="Save" />
                                <InputSubmit className="create-course__btn btn--active create-course__btn--continue" value="Continue" />
                            </>
                        :
                            <InputSubmit className="create-course__btn btn--active create-course__btn--finish" loading={false}  value="Finish" />
                    }
                </div>
            </form>
        </div>
    )
}

export default CreateCourse
