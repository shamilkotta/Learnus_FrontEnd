import React from 'react'
import './Style.scss'

function Hero() {
    return (
        <section className="hero-container">
            <div className="hero wrapper" id="hero" /*style={{backgroundImage: URL('s')}}*/>
                <p className="hero__text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, inventore.
                </p>
                <h1 className="hero__title">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis sit labore neque dolor?
                </h1>
                <div className="hero__btn-group">
                    <button className="hero__btn hero__btn--active">Start Now</button>
                    <button className="hero__btn">Courses</button>
                </div>
            </div>
        </section>
    )
}

export default Hero
