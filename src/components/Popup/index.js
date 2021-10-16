import React from 'react'
import ReactDOM from 'react-dom'
import './Style.scss'


const Popup = ({children, height='400'}) => {


    return (
        ReactDOM.createPortal(
            <div className="popup__wrapper">
                <div className="popup__container" style={{ maxHeight: `${height}px`}}>
                    {children}
                </div>
            </div>,
            document.getElementById("popup")
        )  
    )
}

export default Popup
