import React from 'react'
import Join from '../components/Authentication/Join'

function Authentication() {

    const style = {    
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0,0,0, 0.9)',
        position: 'fixed',
        zIndex: '1000'
    }

    return (
        <div style={style}>
            <Join/>
        </div>
    )
}

export default Authentication
