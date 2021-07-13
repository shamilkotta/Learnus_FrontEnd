import { useLayoutEffect, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { animateScroll } from 'react-scroll'

export const useScrollToTopOnRoute = ()=> {
    const { pathname } = useLocation()
    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    }, [pathname])

}

export const useScrollToTopOnMount = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
}

export default function useScrollToTop () {
    animateScroll.scrollToTop()
}
