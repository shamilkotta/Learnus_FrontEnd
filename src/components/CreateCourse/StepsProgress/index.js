import React from 'react'

const StepsProgress = ({text, completed}) => {

    const progressBar = {
        height: '20px',
        width: '100%',
        margin: '0 3px',
        backgroundColor: 'rgb(255,255,255,)',
        border: '1px solid #3a0ca3',
        borderRadius: '5px',
        overFlow: 'hidden',
        position: 'relative'
    }
    const progressFill = {
        width: completed ? '100%' : 0,
        height: '100%',
        backgroundColor: '#3a0ca3',
        transition: 'width 0.3s linear'
    }
    const progressText = {
        color: completed ? 'white' : '#3a0ca3',
        fontWeight: 'bold',
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
        cursor: 'default'
    }

    return (
        <div className="progress__bar" style={progressBar}>
            <div className="progress__fill" style={progressFill} />
            <span className="progress__text" style={progressText}>{text}</span>
        </div>
    )
}

export default StepsProgress
