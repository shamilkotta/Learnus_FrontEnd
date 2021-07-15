import React from 'react'
import './index.scss'

import { FaStar, FaRegClock, FaGlobe, FaCalendarAlt } from "react-icons/fa";

function CourseHead({data, isCardFixed=false}) {

    const image = 'https://img.freepik.com/free-vector/colorful-palm-silhouettes-background_23-2148541792.jpg?size=626&ext=jpg'

    return (
        <div className="course-head">
            <div className="head__background" style={{background: `url(${image})`}}></div>
            <iframe className="head__video" src="https://www.youtube.com/embed/9vF1jQBbTss" title="YouTube video player"/>
            <div className="head__course-info">
                <h3 className="course__title h">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis, magnam sequi! Eius eveniet harum sunt!</h3>
                <p className="course__short-description p">Lorem ipsum dolor sit amet consectetur, adipisicing elit. A at id alias cupiditate? Ex consequuntur nulla Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, quae? eaque molestias asperiores inventore.</p>
                <div className="course__tag-group">
                    <p className="course__tag p" title="Course Rating"><span className="icon-vertical-align"><FaStar/></span>4.5(8,858)</p>
                    <p className="course__tag p" title="Course Created"><span className="icon-vertical-align"><FaCalendarAlt/></span>Created 9/2020</p>
                    <p className="course__tag p" title="Course Language"><span className="icon-vertical-align"><FaGlobe/></span>English</p>
                    <p className="course__tag p" title="Course Duration"><span className="icon-vertical-align" style={{fontSize: '1.1em'}}><FaRegClock/></span>10 hrs</p>
                </div>
            </div>
            <div className="head__price-card" id="head__price-card" style={isCardFixed ? {position: 'fixed', width: '26.7%', top: '125px', right: '3.3%'} : {position: 'relative', width: '80%'}}>
                <div className="course__sticky-card">
                    <h2 className="course__price">$00,000</h2>
                    <button type="submit" className="course__btn course__btn--active btn btn--active">Buy now</button>
                </div>
                <button type="submit" className="course__btn btn">Add to cart</button>
                <p className="course__includes-title p">This course includes:</p>
                <p className="course__includes-text p">6.5 hours on-demand video</p>
                <p className="course__includes-text p">8 articles</p>
                <p className="course__includes-text p">51 downloadable resources</p>
                <p className="course__includes-text p">Full lifetime access</p>
                <p className="course__includes-text p">Certificate of completion</p>
                <p className="course__includes-text p">Certificate of completion</p>
            </div>
        </div>
    )
}

export default CourseHead
