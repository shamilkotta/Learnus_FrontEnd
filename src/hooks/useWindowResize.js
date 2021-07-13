import { useState, useEffect } from 'react'

const useWindowResize = (breakPoint) => {

    const [isMatchMedia, setIsMatchMedia] = useState(false)

    const mediaQuery = window.matchMedia(`(${breakPoint})`);
    const handleMediaQuery = ()=> {
        mediaQuery.matches ? setIsMatchMedia(true) : setIsMatchMedia(false)
    }
    
    useEffect(() => {
        handleMediaQuery()
        window.addEventListener('resize', handleMediaQuery)
        return () => {
            window.removeEventListener('resize', handleMediaQuery)
        }
    }, [])

    return isMatchMedia
}

export default useWindowResize
