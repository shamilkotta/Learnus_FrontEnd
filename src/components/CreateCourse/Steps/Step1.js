import React, { useContext } from 'react'
import { InputText, InputTextArea } from '../../InputFields'
import { FormValues } from '../index';

const Step1 = () => {

    const [ formData, setFormData ] = useContext(FormValues)
    const handleChange = e=> {
        setFormData(prvsData=> (
            {...prvsData, [e.target.name]: e.target.value}
        ))
    }

    return (
        <>
            <div className="form__input-group" style={{width: '23%'}}>
                <label htmlFor="course__code">Unique Code:</label>
                <InputText value={formData.course__code} style={{textTransform: 'uppercase'}} holder="eg: M025K" onChange={handleChange} name="course__code" className="form-step1__code form__input" minLength="5" showCount maxLength="5" pattern="^[A-Za-z0-9]*$" title="(Space and special charecter is not allowed)" required />
            </div>
            <div className="form__input-group" style={{width: '75%'}}>
                <label htmlFor="course__title">Title:</label>
                <InputText value={formData.course__title} holder="Course Title" onChange={handleChange} name="course__title" className="form-step1__title form__input" minLength="75" showCount maxLength="110" required />
            </div>
            <div className="form__input-group">
                <label htmlFor="course__shortDescription">Short Description:</label>
                <InputText value={formData.course__shortDescription} holder="Short description about Course" onChange={handleChange} name="course__shortDescription" className="form-step1__short-desc form__input" showCount minLength="110" maxLength="200" required />
            </div>
            <div className="form__input-group">
                <label htmlFor="course__description">Description:</label>
                <InputTextArea value={formData.course__description} holder="Course description" onChange={handleChange} name="course__description" className="form-step1__desc form__input form__input--txt-area" showCount minLength="650" maxLength="1000" required />
            </div>
            <div className="form__input-group">
                <label htmlFor="course__benefits">Course Benefits:</label>
                <InputTextArea value={formData.course__benefits} holder="What student learn in this Course" onChange={handleChange} name="course__benefits" className="form-step1__benefits form__input form__input--txt-area" showCount minLength="10" maxLength="900" required />
            </div>
            <div className="form__input-group">
                <label htmlFor="course__requirements">Requirements:</label>
                <InputTextArea value={formData.course__requirements} holder="Pre requirements for Course" onChange={handleChange} name="course__requirements" className="form-step1__requirements form__input form__input--txt-area" showCount minLength="10" maxLength="750" required />
            </div>
            <div className="form__input-group">
                <label htmlFor="course__target">Who this course is for:</label>
                <InputTextArea value={formData.course__target} holder="Who can enroll this Course and Course level" onChange={handleChange} name="course__target" className="form-step1__target form__input form__input--txt-area" showCount minLength="10" maxLength="750" required />
            </div>
        </>
    )
}

export default Step1
