import React from 'react'
import { Link } from 'react-router-dom'
import './Style.scss'

import { FaCartPlus, FaStar, FaRegClock } from "react-icons/fa";

function CoursePreview({data}) {

    const image = 'https://img.freepik.com/free-vector/colorful-palm-silhouettes-background_23-2148541792.jpg?size=626&ext=jpg'

    return (
        <div className="preview-card hover">
            <Link to="/course" className="card__head" style={{backgroundImage: `url(${image})`}}>
                <span className="card__code">M012</span>
            </Link>
            <div className="card__body">
                <div className="card__title-space">
                    <Link to="/course"><p className="card__title">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et, possimus? Lorem ipsum dolor sit amet.</p></Link>
                </div>
                <div className="card__tag-group">
                    <span className="card__tag card__tag--active">$00.000</span>
                    <span title="Course Rating" className="card__tag"><span className="icon-vertical-align"><FaStar/></span>5.0</span>
                    <span title="Course Duration" className="card__tag"><span className="icon-vertical-align"><FaRegClock/></span>10 hrs</span>
                </div>
                <div className="card__btn-group">
                    <button title="Add to Cart" className="card__btn card__btn--active"><FaCartPlus style={{verticalAlign: 'middle', margin: 'auto auto 0.1em -0.15em'}}/></button>
                    <Link to='/course'  className="card__btn btn" >Preview</Link>
                </div>
            </div>
        </div>
    )
}

export default CoursePreview
