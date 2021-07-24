import React, { useState } from 'react'
import { InputText } from '../../InputFields'
import { FaPlus } from 'react-icons/fa'
import { MdDelete } from 'react-icons/md'

const Step2 = () => {

    const [step2Data, setStep2Data] = useState([{module: '', chapters: []}])
    const handleModuleChange = (e, indx)=> {
        const newData = [...step2Data]
        newData[indx].module = e.target.value
        setStep2Data(newData)
    }
    const handleChapterChange = (e, indx, chapterIndx)=> {
        const newData = [...step2Data]
        newData[indx].chapters[chapterIndx] = e.target.value
        setStep2Data(newData)
    }

    const addModule = ()=> {
        const newData = [...step2Data]
        newData.push({module: '', chapters: []})
        setStep2Data(newData)
    }
    const addChapter = (indx)=> {
        const newData = [...step2Data]
        newData[indx].chapters.push('')
        setStep2Data(newData)
    }

    const deleteModule = (indx)=> {
        const newData = [...step2Data]
        newData.splice(indx, 1)
        setStep2Data(newData)
    }
    const deleteChapter = (indx, chapterIndx)=> {
        const newData = [...step2Data]
        newData[indx].chapters.splice(chapterIndx, 1)
        setStep2Data(newData)
    }

    return (
        <>
            <div className="form__module" id="form-step2-modules">

                {
                    step2Data.map((modules, indx)=> (
                        <div className="form__input-group form__module-group" key={indx}>
                            <label htmlFor={`module${indx+1}`}>{`Module ${indx+1}`}</label>
                            <MdDelete className="form__module-dlt-btn dlt-btn hover" title="Delete module" onClick={()=>{deleteModule(indx)}} />
                            <InputText name={`module${indx+1}`} value={modules.module} className="form-step2__module-name form__input" placeholder="Module name" onChange={e=> {handleModuleChange(e, indx)}} required />

                            {
                                modules.chapters.map((chapter, chapterIndx)=> (
                                    <div className="form-module__chapter" id={`form-module-${indx+1}_chapter-${chapterIndx+1}`} key={chapterIndx}>
                                        <label htmlFor={`course__module-${indx+1}_chapter-${chapterIndx+1}`}>{`Chapter ${chapterIndx+1}:`}</label>
                                        <InputText name={`course__module-${indx+1}_chapter-${chapterIndx+1}`} value={chapter} className="form-step2-module__chapter-name form__input" placeholder="Chapter Name" onChange={e=> {handleChapterChange(e, indx ,chapterIndx)}} required />
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
