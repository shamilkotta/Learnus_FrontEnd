import React from 'react'

const ErrorPopup = ({children, height=100}) => {
    return (
        <div className="popup__wrapper">
            <div className="popup__container" style={{ maxHeight: `${height}px`}}>
                {children}
            </div>
        </div>
    )
}

export default ErrorPopup
