import React, { useState, useContext, useEffect } from 'react'
import { InputText } from '../../InputFields'
import { FormValues } from '../index';

const Step3 = () => {

    const [ formData, setFormData ] = useContext(FormValues)

    const initialState = {
        course__price: '',
        course__duration: '',
        course__language: '',
        course__resources: '',
        course__benefits1: '',
        course__benefits2: '',
        course__benefits3: '',
        course__benefits4: '',
        course__coverImg: ''
    }
    const [step3Data, setStep3Data] = useState(formData.step3Data || initialState)
    const handleChange = (e)=> {
        setStep3Data(prvsData=> (
            {...prvsData, [e.target.name]: e.target.value}
        ))
    }

    useEffect(() => {
        const newFromData = {...formData, ['step3Data']: step3Data}
        setFormData(newFromData)
    }, [step3Data])

    return (
        <>
            <div className="form__input-group" style={{width: '23%'}}>
                <label htmlFor="course__price">Course Price:</label>
                <InputText value={step3Data.course__price} holder="$999" type="number" onChange={handleChange} name="course__price" className="form-step3__price form__input" required />
            </div>
            <div className="form__input-group" style={{width: '23%'}}>
                <label htmlFor="course__duration">Course Duration:</label>
                <InputText value={step3Data.course__duration} holder="Estimated duration" onChange={handleChange} name="course__duration" className="form-step3__duration form__input" required />
            </div>
            <div className="form__input-group" style={{width: '23%'}}>
                <label htmlFor="course__language">Course language:</label>
                <InputText value={step3Data.course__language} holder="Course Language" onChange={handleChange} name="course__language" className="form-step3__language form__input" required />
            </div>
            <div className="form__input-group" style={{width: '23%'}}>
                <label htmlFor="course__resources">Downloadable Resources:</label>
                <InputText value={step3Data.course__resources} holder="No of Downloadable Resources" onChange={handleChange} name="course__resources" className="form-step3__resources form__input" required />
            </div>
            <div className="form__input-group" style={{width: '23%'}}>
                <label htmlFor="course__benefits1">Other Course Benefits:</label>
                <InputText value={step3Data.course__benefits1} holder="Course Benefits" onChange={handleChange} name="course__benefits1" className="form-step3__benefits form__input" required />
            </div>
            <div className="form__input-group" style={{width: '23%'}}>
                <label htmlFor="course__benefits2">:</label>
                <InputText value={step3Data.course__benefits2} holder="Course Benefits" onChange={handleChange} name="course__benefits2" className="form-step3__benefits form__input" />
            </div>
            <div className="form__input-group" style={{width: '23%'}}>
                <label htmlFor="course__benefits3">:</label>
                <InputText value={step3Data.course__benefits3} holder="Course Benefits" onChange={handleChange} name="course__benefits3" className="form-step3__benefits form__input" />
            </div>
            <div className="form__input-group" style={{width: '23%'}}>
                <label htmlFor="course__benefits4">:</label>
                <InputText value={step3Data.course__benefits4} holder="Course Benefits" onChange={handleChange} name="course__benefits4" className="form-step3__benefits form__input" />
            </div>
            <div className="form__input-group" style={{width: '23%'}}>
                <label htmlFor="course__coverImg">Cover Image:</label>
                <InputText value={step3Data.course__coverImg} holder="Course Benefits" onChange={handleChange} name="course__coverImg" className="form-step3__coverImg form__input" />
            </div>
        </>
    )
}

export default Step3
