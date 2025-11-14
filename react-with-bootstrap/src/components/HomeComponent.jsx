import React from 'react'
import reactLogoImage from '../assets/react.svg'

const HomeComponent = () => {
  return (
    <div>
        <h1 className="my-4 text-center">Welcome to ract and bootstrap</h1>
        <div className="text-center">
            <img className="img-fluid w-25 h-25" src={reactLogoImage} alt="react logo image" />
        </div>
    </div>
  )
}

export default HomeComponent