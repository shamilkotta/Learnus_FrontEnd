import React, {useState} from 'react'
import './Accordion.scss'


function Accordion({data, showContent=false}) {

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
                data.map((content, indx) => (
                    <li key={indx} className="accordion__dropdown">
                        <div className="dropdown__toggle" onClick={()=> {toggleDropdown(indx)}}>
                            <span className="dropdown__toggle-icon">{indx+1}</span>
                            <span className="dropdown__toggle-txt">{content.module}</span>
                        </div>
                        <div className={`dropdown__list ${activeDropdown===indx ? 'dropdown--active': ''}`}>
                            <ul className="dropdown__submenu" >
                                {
                                    content.chapters.map((chapter, idx)=> (
                                        <li key= {idx} className={showContent && submenuVisible(indx, idx) ? 'dropdown__submenu--active' : ''} onClick={()=>{showContent && setActiveSubmenu([indx, idx])}} >{chapter}</li>
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
