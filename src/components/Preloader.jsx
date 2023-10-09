import React from 'react'
import './Preloader.css'
import { CircleLoader } from 'react-spinners'

const Preloader = () => {
    return (
        <>
            <div className="preloader">
            <CircleLoader color="var(--main-color)" size={150}/>
            </div>
        </>
    )
}

export default Preloader
