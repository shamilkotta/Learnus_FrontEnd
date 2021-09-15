import React from 'react'
import './Style.scss'

import { FaStar, FaRegClock, FaGlobe, FaCalendarAlt } from "react-icons/fa";

function CourseHead({data, isCardFixed=false}) {

    const image = 'https://img.freepik.com/free-vector/colorful-palm-silhouettes-background_23-2148541792.jpg?size=626&ext=jpg'
    const videoUrl = 'https://www.youtube.com/embed/9vF1jQBbTss'

    return (
        // 
        <div className="course-head">
            <div className="head__background" style={{background: `url(${image})`}}></div>
            <iframe className="head__video" src={videoUrl} title="YouTube video player"/>
            <div className="head__course-info">
                <h3 className="course__title h">{data.course__title}</h3>
                <p className="course__short-description p">{data.course__shortDescription}</p>
                <div className="course__tag-group">
                    <p className="course__tag p" title="Course Rating"><span className="icon-vertical-align"><FaStar/></span>4.5(8,858)</p>
                    <p className="course__tag p" title="Course Created"><span className="icon-vertical-align"><FaCalendarAlt/></span>Created 9/2020</p>
                    <p className="course__tag p" title="Course Language"><span className="icon-vertical-align"><FaGlobe/></span>{data.course__language}</p>
                    <p className="course__tag p" title="Course Duration"><span className="icon-vertical-align" style={{fontSize: '1.1em'}}><FaRegClock/></span>{data.course__duration}</p>
                </div>
            </div>
            <div className="head__price-card" id="head__price-card" style={isCardFixed ? {position: 'fixed', width: '26.7%', top: '125px', right: '3.3%'} : {position: 'relative', width: '80%'}}>
                <div className="course__sticky-card">
                    <h2 className="course__price">${data.course__price}</h2>
                    <button type="submit" className="course__btn course__btn--active btn btn--active">Buy now</button>
                </div>
                <button type="submit" className="course__btn btn">Add to cart</button>
                <p className="course__includes-title p">This course includes:</p>
                <p className="course__includes-text p">{data.course__resources}</p>
                <p className="course__includes-text p">{data.course__benefits1}</p>
                <p className="course__includes-text p">{data.course__benefits2}</p>
                <p className="course__includes-text p">{data.course__benefits3}</p>
                <p className="course__includes-text p">{data.course__benefits4}</p>
            </div>
        </div>
    )
}

export default CourseHead
