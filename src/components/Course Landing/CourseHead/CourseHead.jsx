import React from 'react'
import './CourseHead.scss'

function CourseHead() {
    return (
        <div className="course-head">
            <div className="head__background">
                <img src="" alt="" srcset=""/>
            </div>
            <div className="head__video">
                <video src=""></video>
            </div>
            <div className="head__course-info">
                <h3 className="course__title h">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis, magnam sequi! Eius eveniet harum sunt!</h3>
                <p className="course__short-description p">Lorem ipsum dolor sit amet consectetur, adipisicing elit. A at id alias cupiditate? Ex consequuntur nulla eaque molestias asperiores inventore.</p>
                <div className="course__tag-group">
                    <p className="course__tag p">4.5(8,858)</p>
                    <p className="course__tag p">Created 9/2020</p>
                    <p className="course__tag p">English</p>
                </div>
            </div>
            <div className="head__price-card" id="head__price-card">
                <div class="course__sticky-card">
                    <h2 class="course__price">$00,000</h2>
                    <button type="submit" class="course__btn course__btn--active btn btn--active">Buy now</button>
                </div>
                <button type="submit" class="course__btn btn">Add to cart</button>
                <p class="course__includes-title  p">This course includes:</p>
                <p class="course__includes-text p">6.5 hours on-demand video</p>
                <p class="course__includes-text p">8 articles</p>
                <p class="course__includes-text p">51 downloadable resources</p>
                <p class="course__includes-text p">Full lifetime access</p>
                <p class="course__includes-text p">Certificate of completion</p>
                <p class="course__includes-text p">Certificate of completion</p>
            </div>
        </div>
    )
}

export default CourseHead
