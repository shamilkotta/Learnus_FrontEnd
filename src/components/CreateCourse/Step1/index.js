import React from 'react'
import { InputText, InputTextArea } from '../../InputFields'

const StepOne = () => {
    return (
        <div className="create-course-step1">
            <InputTextArea/>
                <div class="step1__form-group">
                    <label for="course__title">Course Title</label>
                    <input type="text" name="course__title" id="step1-form__title" class="step1-form__title step1-form__input"/>
                </div>
                <div class="step1__form-group">
                    <label for="course__shortDescription">Course Short Description</label>
                    <input type="text" name="course__shortDescription" id="step1-form__short-desc" class="step1-form__short-desc step1-form__input"/>
                </div>
                <div class="step1__form-group">
                    <label for="course__benefits">Course Benefits</label>
                    <input type="text" name="course__benefits" id="step1-form__benefits" class="step1-form__benefits step1-form__input"/>
                </div>
                <div class="step1__form-group">
                    <label for="course__Description">Course  Description</label>
                    <input type="text" name="course__Description" id="step1-form__desc" class="step1-form__desc step1-form__input"/>
                </div>
                <div class="step1__form-group">
                    <label for="course__requirements">Requirements</label>
                    <input type="text" name="course__requirements" id="step1-form__requirements" class="step1-form__requirements step1-form__input"/>
                </div>
                <div class="step1__form-group">
                    <label for="course__target">Who this course is for?</label>
                    <input type="text" name="course__target" id="step1-form__target" class="step1-form__target step1-form__input"/>
                </div>
        </div>
    )
}

export default StepOne
