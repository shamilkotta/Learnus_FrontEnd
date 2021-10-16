import React, { useContext } from 'react'
import { InputText } from '../../InputFields'
import { FormValues } from '../index';

const Step3 = () => {

    const [ formData, setFormData ] = useContext(FormValues)
    const handleChange = (e)=> {
        setFormData(prvsData=> (
            {...prvsData, [e.target.name]: e.target.value}
        ))
    }

    return (
        <>
            <div className="form__input-group" style={{width: '23%'}}>
                <label htmlFor="course__price">Course Price:</label>
                <InputText value={formData.course__price} holder="$999" type="number" onChange={handleChange} name="course__price" className="form-step3__price form__input" required />
            </div>
            <div className="form__input-group" style={{width: '23%'}}>
                <label htmlFor="course__duration">Course Duration:</label>
                <InputText value={formData.course__duration} holder="Estimated duration" onChange={handleChange} name="course__duration" className="form-step3__duration form__input" required />
            </div>
            <div className="form__input-group" style={{width: '23%'}}>
                <label htmlFor="course__noModules">Number of Modules:</label>
                <InputText value={formData.course__noModules} holder="Number of Modules" onChange={handleChange} name="course__noModules" className="form-step3__noModules form__input" required />
            </div>
            <div className="form__input-group" style={{width: '23%'}}>
                <label htmlFor="course__language">Course Language:</label>
                <InputText value={formData.course__language} holder="Course Language" onChange={handleChange} name="course__language" className="form-step3__language form__input" maxLength="25" required />
            </div>
            <div className="form__input-group" style={{width: '23%'}}>
                <label htmlFor="course__benefits1">Other Course Benefits 1:</label>
                <InputText value={formData.course__benefits1} holder="Course Benefits" onChange={handleChange} name="course__benefits1" className="form-step3__benefits form__input" maxLength="28" required />
            </div>
            <div className="form__input-group" style={{width: '23%'}}>
                <label htmlFor="course__benefits2">2:</label>
                <InputText value={formData.course__benefits2} holder="Course Benefits" onChange={handleChange} name="course__benefits2" className="form-step3__benefits form__input" maxLength="28" required />
            </div>
            <div className="form__input-group" style={{width: '23%'}}>
                <label htmlFor="course__benefits3">3:</label>
                <InputText value={formData.course__benefits3} holder="Course Benefits" onChange={handleChange} name="course__benefits3" className="form-step3__benefits form__input" maxLength="28" required />
            </div>
            <div className="form__input-group" style={{width: '23%'}}>
                <label htmlFor="course__benefits4">4:</label>
                <InputText value={formData.course__benefits4} holder="Course Benefits" onChange={handleChange} name="course__benefits4" className="form-step3__benefits form__input" maxLength="28" required />
            </div>
            <div className="form__input-group" style={{width: '23%'}}>
                <label htmlFor="course__benefits5">5:</label>
                <InputText value={formData.course__benefits5} holder="Course Benefits" onChange={handleChange} name="course__benefits5" className="form-step3__benefits form__input" maxLength="28" required />
            </div>
            <div className="form__input-group" style={{width: '23%'}}>
                <label htmlFor="course__coverImg">Cover Image:</label>
                <InputText value={formData.course__coverImg} holder="Enter url of cover image" onChange={handleChange} name="course__coverImg" className="form-step3__coverImg form__input" required />
            </div>
            <div className="form__input-group" style={{width: '23%'}}>
                <label htmlFor="course__coverVideo">Cover Video:</label>
                <InputText value={formData.course__coverVideo} holder="Enter youtube url of cover video" onChange={handleChange} name="course__coverVideo" className="form-step3__coverVideo form__input" required />
            </div>
        </>
    )
}

export default Step3
