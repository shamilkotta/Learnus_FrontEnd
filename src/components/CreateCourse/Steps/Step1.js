import React, { useState } from 'react'
import { InputText, InputTextArea } from '../../InputFields'

const Step1 = () => {
    
    const handleChange = e=> {

    }

    return (
        <>
            <div className="form__input-group" style={{width: '23%'}}>
                <label htmlFor="course__code">Unique Code:</label>
                <InputText value={""} holder="eg: M025K" onChange={handleChange} name="course__code" className="form-step1__code form__input" minLength="5" showCount maxLength="5" pattern="^[A-Za-z0-9]*$" title="(Space and special charecter is not allowed)" required />
            </div>
            <div className="form__input-group" style={{width: '75%'}}>
                <label htmlFor="course__title">Title:</label>
                <InputText value={""} holder="Course Title" onChange={handleChange} name="course__title" className="form-step1__title form__input" minLength="8" showCount maxLength="10" required />
            </div>
            <div className="form__input-group">
                <label htmlFor="course__shortDescription">Short Description:</label>
                <InputText value={""} holder="Short description about Course" onChange={handleChange} name="course__shortDescription" className="form-step1__short-desc form__input" minLength="8" maxLength="10" required />
            </div>
            <div className="form__input-group">
                <label htmlFor="course__Description">Description:</label>
                <InputTextArea holder="Course description" onChange={handleChange} name="course__Description" className="form-step1__desc form__input form__input--txt-area" minLength="8" maxLength="10" required />
            </div>
            <div className="form__input-group">
                <label htmlFor="course__benefits">Course Benefits:</label>
                <InputTextArea value={""} holder="What student learn in this Course" onChange={handleChange} name="course__benefits" className="form-step1__benefits form__input form__input--txt-area" minLength="8" maxLength="10" required />
            </div>
            <div className="form__input-group">
                <label htmlFor="course__requirements">Requirements:</label>
                <InputTextArea value={""} holder="Pre requirements for Course" onChange={handleChange} name="course__requirements" className="form-step1__requirements form__input form__input--txt-area" minLength="8" maxLength="10" required />
            </div>
            <div className="form__input-group">
                <label htmlFor="course__target">Who this course is for:</label>
                <InputTextArea value={""} holder="Who can enroll this Course and Course level" onChange={handleChange} name="course__target" className="form-step1__target form__input form__input--txt-area" minLength="8" maxLength="10" required />
            </div>
        </>
    )
}

export default Step1
