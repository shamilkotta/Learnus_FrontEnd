import React, {useState} from 'react'
import './Style.scss'


function Accordion({data, showStyle=false}) {

    const [activeDropdown, setActiveDropdown] = useState(0)
    const [activeSubmenu, setActiveSubmenu] = useState([0,0])

    const toggleDropdown = (indx)=> {
        if (activeDropdown === indx) {
            setActiveDropdown()
        }else {
            setActiveDropdown(indx)
        }
    }

    const submenuVisible = (indx, idx)=>{
        if (activeSubmenu[0] === indx && activeSubmenu[1] === idx) {
            return true
        }else {
            return false
        }
    }

    return (
        <ul id="accordion" className="accordion">
            {
                data?.map((content, indx) => (
                    <li key={indx} className="accordion__dropdown">
                        <div className="dropdown__toggle" onClick={()=> {toggleDropdown(indx)}}>
                            <span className="dropdown__toggle-icon">{indx+1}</span>
                            <span className="dropdown__toggle-txt">{content.module_name}</span>
                        </div>
                        <div className={`dropdown__list ${activeDropdown===indx ? 'dropdown--active': ''}`}>
                            <ul className="dropdown__submenu" >
                                {
                                    content.chapters.map((chapter, idx)=> (
                                        <li key= {idx} className={showStyle && submenuVisible(indx, idx) ? 'dropdown__submenu--active' : ''} onClick={()=>{showStyle && setActiveSubmenu([indx, idx])}} >{chapter.chapter_name}</li>
                                    ))
                                }
                            </ul>
                        </div>
                    </li>
                ))
            }
        </ul>
    )
}

export default Accordion

