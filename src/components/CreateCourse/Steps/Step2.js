import React, { useState, useContext } from 'react'
import { InputText } from '../../InputFields'
import { FaPlus } from 'react-icons/fa'
import { MdDelete } from 'react-icons/md'
import { FormValues } from '../index';

const Step2 = () => {
    const [ formData, setFormData ] = useContext(FormValues)

    const handleModuleChange = (e, indx)=> {
        const course__content = [...formData.course__content]
        course__content[indx].module_name = e.target.value
        course__content[indx].module_id = indx + 1
        setFormData({...formData, ['course__content']: course__content})
    }
    const handleChapterChange = (e, indx, chapterIndx)=> {
        const course__content = [...formData.course__content]
        course__content[indx].chapters[chapterIndx].chapter_name = e.target.value
        course__content[indx].chapters[chapterIndx].chapter_id = `${indx+1}_${chapterIndx+1}`
        setFormData({...formData, ['course__content']: course__content})
    }

    const addModule = ()=> {
        const course__content = [...formData.course__content]
        course__content.push({module_id: '', module_name: '', chapters: []})
        setFormData({...formData, ['course__content']: course__content})
    }
    const addChapter = (indx)=> {
        const course__content = [...formData.course__content]
        course__content[indx].chapters.push({chapter_id: '', chapter_name: ''})
        setFormData({...formData, ['course__content']: course__content})
    }

    const deleteModule = (indx)=> {
        const course__content = [...formData.course__content]
        course__content.splice(indx, 1)
        setFormData({...formData, ['course__content']: course__content})
    }
    const deleteChapter = (indx, chapterIndx)=> {
        const course__content = [...formData.course__content]
        course__content[indx].chapters.splice(chapterIndx, 1)
        setFormData({...formData, ['course__content']: course__content})
    }

    return (
        <>
            <div className="form__module ">

                {
                    formData.course__content.map((modules, indx)=> (
                        <div className="form__input-group form__module-group" key={indx}>
                            <label htmlFor={`module${indx+1}`}>{`Module ${indx+1}`}</label>
                            <MdDelete className="form__module-dlt-btn dlt-btn hover" title="Delete module" onClick={()=>{deleteModule(indx)}} />
                            <InputText name={`module${indx+1}`} value={modules.module_name} className="form-step2__module-name form__input" placeholder="Module name" onChange={e=> {handleModuleChange(e, indx)}} required />

                            {
                                modules.chapters.map((chapter, chapterIndx)=> (
                                    <div className="form-module__chapter" key={chapterIndx}>
                                        <label htmlFor={`course__module-${indx+1}_chapter-${chapterIndx+1}`}>{`Chapter ${chapterIndx+1}:`}</label>
                                        <InputText name={`course__module-${indx+1}_chapter-${chapterIndx+1}`} value={chapter.chapter_name} className="form-step2-module__chapter-name form__input" placeholder="Chapter Name" onChange={e=> {handleChapterChange(e, indx ,chapterIndx)}} required />
                                        <MdDelete className="form-module__chapter-dlt-btn dlt-btn hover" title="Delete chapter" onClick={()=>{deleteChapter(indx, chapterIndx)}} />
                                    </div>
                                ))
                            }
                            <button className="form-module__chapter-add-btn btn" onClick={()=>{addChapter(indx)}} type="button"><FaPlus className="icon-vertical-align" /> Add Chapters</button>
                        </div>
                    ))
                }
                
            </div>
            <button className="form__module-add-btn btn add-btn" type="button" onClick={addModule} ><FaPlus className="icon-vertical-align" /> Add Module</button>
        </>
    )
}

export default Step2
