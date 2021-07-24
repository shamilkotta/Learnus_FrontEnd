import React, { useContext, useEffect, useState } from 'react'
import { InputText, InputTextArea } from '../../InputFields'
import { FormValues } from '../index';

const Step1 = () => {

    const [ formData, setFormData ] = useContext(FormValues)
    
    const initialState = {
        course__code: '',
        course__title: '',
        course__shortDescription: '',
        course__description: '',
        course__benefits: '',
        course__requirements: '',
        course__target: ''
    }
    const [step1Data, setStep1Data] = useState(formData.step1Data || initialState)
    const handleChange = e=> {
        setStep1Data(prvsData=> (
            {...prvsData, [e.target.name]: e.target.value}
        ))
        
    }
    useEffect(() => {
        const newFromData = {...formData, ['step1Data']: step1Data}
        setFormData(newFromData)
    }, [step1Data])

    return (
        <>
            <div className="form__input-group" style={{width: '23%'}}>
                <label htmlFor="course__code">Unique Code:</label>
                <InputText value={step1Data.course__code} holder="eg: M025K" onChange={handleChange} name="course__code" className="form-step1__code form__input" minLength="5" showCount maxLength="5" pattern="^[A-Za-z0-9]*$" title="(Space and special charecter is not allowed)" required />
            </div>
            <div className="form__input-group" style={{width: '75%'}}>
                <label htmlFor="course__title">Title:</label>
                <InputText value={step1Data.course__title} holder="Course Title" onChange={handleChange} name="course__title" className="form-step1__title form__input" minLength="8" showCount maxLength="10" required />
            </div>
            <div className="form__input-group">
                <label htmlFor="course__shortDescription">Short Description:</label>
                <InputText value={step1Data.course__shortDescription} holder="Short description about Course" onChange={handleChange} name="course__shortDescription" className="form-step1__short-desc form__input" minLength="8" maxLength="10" required />
            </div>
            <div className="form__input-group">
                <label htmlFor="course__description">Description:</label>
                <InputTextArea value={step1Data.course__description} holder="Course description" onChange={handleChange} name="course__description" className="form-step1__desc form__input form__input--txt-area" minLength="8" maxLength="10" required />
            </div>
            <div className="form__input-group">
                <label htmlFor="course__benefits">Course Benefits:</label>
                <InputTextArea value={step1Data.course__benefits} holder="What student learn in this Course" onChange={handleChange} name="course__benefits" className="form-step1__benefits form__input form__input--txt-area" minLength="8" maxLength="10" required />
            </div>
            <div className="form__input-group">
                <label htmlFor="course__requirements">Requirements:</label>
                <InputTextArea value={step1Data.course__requirements} holder="Pre requirements for Course" onChange={handleChange} name="course__requirements" className="form-step1__requirements form__input form__input--txt-area" minLength="8" maxLength="10" required />
            </div>
            <div className="form__input-group">
                <label htmlFor="course__target">Who this course is for:</label>
                <InputTextArea value={step1Data.course__target} holder="Who can enroll this Course and Course level" onChange={handleChange} name="course__target" className="form-step1__target form__input form__input--txt-area" minLength="8" maxLength="10" required />
            </div>
        </>
    )
}

export default Step1
