import React from 'react'
import { InputText, InputTextArea } from '../../InputFields'
import { FaPlus } from 'react-icons/fa'
import { MdDelete } from 'react-icons/md'

const Step2 = () => {

    const handleChange = e=> {
        // let count = useCharecterCount(e.target.value)
    }

    return (
        <>
            <div class="form__modules" id="form-step2-modules">
                <div className="form__input-group">
                    <MdDelete class="form__module-dlt-btn dlt-btn hover" />
                    <label for="course-module-1">Module moduleNo</label>
                    <InputText name="course-module-1" class="form-step2__module-name form__input" placeholder="Module name" required />

                    <div class="form-module__chapters" id="form__module-${moduleNo}-chapters">
                        <label for="course__module-1_chapter-1">Chapter 1:</label>
                        <InputText name="course__module-1_chapter-1" class="form-step2-module__chapter-name form__input" placeholder="Chapter Name" required />
                        <MdDelete class="form-module__chapter-dlt-btn dlt-btn hover"/>
                    </div>
                    <button class="form__chapter-add-btn btn" onclick="addChapter(${moduleNo})"><FaPlus className="icon-vertical-align" /> Add Chapters</button>
                </div>
            </div>
            <button class="form__module-add-btn btn add-btn" type="button"><FaPlus className="icon-vertical-align" /> Add Module</button>
        </>
    )
}

export default Step2
