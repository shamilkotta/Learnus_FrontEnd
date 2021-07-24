import React from 'react'
import './Style.scss'


const Popup = ({children, height='400'}) => {


    return (
        <div className="popup__wrapper">
            <div className="popup__container" style={{ maxHeight: `${height}px`}}>
                {children}
            </div>
        </div>
    )
}

export default Popup
