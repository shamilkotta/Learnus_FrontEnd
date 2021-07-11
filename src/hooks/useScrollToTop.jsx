import React, { useLayoutEffect } from 'react'
import { useLocation } from 'react-router-dom'

export const UseScrollToTopOnRoute = () => {
    const { pathname } = useLocation()
    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    }, [pathname])

    return (
        null
    )
}

export const UseScrollToTopOnMount = () => {
    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        null
    )
}

export default function useScrollToTop () {
    window.scrollTo(0, 0)
}
