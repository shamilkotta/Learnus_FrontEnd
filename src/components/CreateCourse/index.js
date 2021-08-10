import React, { useState, createContext, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import './Style.scss'

import StepsProgress from './StepsProgress';
import Step1 from './Steps/Step1';
import Step2 from './Steps/Step2';
import Step3 from './Steps/Step3';
import { InputSubmit } from '../InputFields';
import { courseAction } from '../../actions/courses';
import { saveCourse, submitCourse } from '../../api';
import { actionTypes } from '../../utils/constants'
import LoadingIcon from '../LoadingIcon';
const { ERROR } = actionTypes

export const FormValues = createContext()
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

const CreateCourse = ({courseId}) => {
    
    const [formData, setFormData] = useState(initialState)
    const [currentStep, setCurrentStep] = useState(1)
    const [completedStep, setCompletedStep] = useState(0)

    const dispatch = useDispatch()
    const { course, isCourseLoading } = useSelector(state => state.course)
    
    const handleSubmit = (e)=> {
        e.preventDefault() 
        setCompletedStep(currentStep)
        if (currentStep === 3) {
            submitCourse(formData).then((response)=> {
                console.log(response?.data)
            }).catch((err)=> {
                dispatch({
                    type: ERROR,
                    payload: err.response?.data?.message
                })
            })
        }
        else {
            handleSave(e)
            setCurrentStep(currentStep+1)
        }
    }
    const handleSave = e=> {
        e.preventDefault()
        saveCourse(formData).then((response)=> {
            response?.data?.id && setFormData({...formData, id: response.data.id})
        }).catch((err)=> {
            dispatch({
                type: ERROR,
                payload: err.response?.data?.message
            })
        })
    }
    const goBack = e=> {
        e.preventDefault()
        setCurrentStep(currentStep-1)
    }

    useEffect(() => {
        courseId && dispatch(courseAction(courseId))
    }, [])
    useEffect(() => {
        courseId && setFormData({...course, id: courseId})
    }, [course])

    if (isCourseLoading) {
        return <LoadingIcon/>
    }

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
