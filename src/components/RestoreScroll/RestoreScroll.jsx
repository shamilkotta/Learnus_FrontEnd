import React, { useLayoutEffect } from 'react'
import { useLocation } from 'react-router-dom'

export const ScrollToTopOnRoute = () => {
    const { pathname } = useLocation()
    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    }, [pathname])

    return (
        null
    )
}

export const ScrollToTopOnMount = () => {
    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        null
    )
}

export default function ScrollToTop () {
    window.scrollTo(0, 0)
}
