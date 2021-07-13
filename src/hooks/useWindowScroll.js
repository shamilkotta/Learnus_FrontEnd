import { useState, useEffect } from 'react'

const useWindowScroll = (breakPoint) => {

    const [isScrolled, setIsScrolled] = useState(false)
    const handleScrollPosition = ()=> {
        window.pageYOffset >= breakPoint ? setIsScrolled(true) : setIsScrolled(false);
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScrollPosition)
        return () => {
            window.removeEventListener('scroll', handleScrollPosition)
        };
    }, [])

    return isScrolled
}

export default useWindowScroll
