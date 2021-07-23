import React, { useState } from 'react'
import { InputText, InputTextArea } from '../../InputFields'
import { FaPlus } from 'react-icons/fa'
import { MdDelete } from 'react-icons/md'

const Step2 = () => {

    const [modules, setModules] = useState([{module: '', chapters: []}])

    const handleModuleChange = (e, indx)=> {
        setModules(prvsData=> {
            prvsData[indx].module = e.target.value
            return [...prvsData]
        })
    }
    const handleChapterChange = (e, indx, chapterIndx)=> {
        setModules(prvsData=> {
            prvsData[indx].chapters[chapterIndx] = e.target.value
            return [...prvsData]
        })
    }

    return (
        <>
            <div className="form__module" id="form-step2-modules">

                {
                    modules.map((modules, indx)=> (
                        <div className="form__input-group form__module-group" key={indx}>
                            <label htmlFor={`module${indx+1}`}>{`Module ${indx+1}`}</label>
                            <MdDelete className="form__module-dlt-btn dlt-btn hover" title="Delete module" />
                            <InputText name={`module${indx+1}`} value={modules.module} className="form-step2__module-name form__input" placeholder="Module name" onChange={e=> {handleModuleChange(e, indx)}} required />

                            {
                                modules.chapters.map((chapter, chapterIndx)=> (
                                    <div className="form-module__chapter" id={`form-module-${indx+1}_chapter-${chapterIndx+1}`} key={chapterIndx}>
                                        <label htmlFor={`course__module-${indx+1}_chapter-${chapterIndx+1}`}>{`Chapter ${chapterIndx+1}:`}</label>
                                        <InputText name={`course__module-${indx+1}_chapter-${chapterIndx+1}`} value={chapter} className="form-step2-module__chapter-name form__input" placeholder="Chapter Name" onChange={e=> {handleChapterChange(e, indx ,chapterIndx)}} required />
                                        <MdDelete className="form-module__chapter-dlt-btn dlt-btn hover" title="Delete chapter" />
                                    </div>
                                ))
                            }
                            <button className="form-module__chapter-add-btn btn" ><FaPlus className="icon-vertical-align" /> Add Chapters</button>
                        </div>
                    ))
                }
                
            </div>
            <button className="form__module-add-btn btn add-btn" type="button"><FaPlus className="icon-vertical-align" /> Add Module</button>
        </>
    )
}

export default Step2
