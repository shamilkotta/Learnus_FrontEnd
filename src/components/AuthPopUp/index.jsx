import React, { useEffect, useState } from 'react'

import { useLocation } from "react-router-dom";
export const useGetParameter = (queryId) => {

    const { search } = useLocation()
    const query = new URLSearchParams(search)

    return query.get(queryId)
}


let timeOut;
export const AuthPopUp = () => {
    const id = 'shamil'
    const popupName = useGetParameter(id)
    const [pop, setPop] = useState(popupName)

    useEffect(() => {
        if(!popupName) {
            timeOut && clearTimeout(timeOut)
            setPop(popupName)
        }else {
            timeOut = setTimeout(()=> setPop(null), 300)
        }
    }, [popupName])

    const isOpened = Boolean(popupName)

    return (
        {pop, isOpened}
    )
}


import Authentication from '../Authentication'
export const GetParameterPopups = () => {

    const { pop, isOpened } = AuthPopUp()
    let PopUpComponent;

    pop == 'authentication' ? PopUpComponent = Authentication : PopUpComponent = null

    if (!PopUpComponent) {
        return null
    }

    return (
        <PopUpComponent isOpened={isOpened}/>
    )
}

