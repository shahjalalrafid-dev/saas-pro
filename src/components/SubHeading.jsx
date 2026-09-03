import React from 'react'

const SubHeading = ({text, className}) => {
  return (
    <p className = {`text-base text-offwhite font-normal font-roboto leading-[27px] ${className}`}>{text}</p>
  )
}

export default SubHeading