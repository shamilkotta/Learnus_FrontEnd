import React from 'react'
import { BeatLoader } from 'react-spinners';

const LoadingIcon = () => {

    return (
        <div className="loading-icon">
            <BeatLoader color={'#3a0ca3'} loading={true} size={15} />
            {/* <h2>Loading...</h2> */}
        </div>
    )
}

export default LoadingIcon
