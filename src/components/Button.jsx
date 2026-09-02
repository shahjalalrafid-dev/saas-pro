import React from 'react'

const Button = ({text, className}) => {
  return (
    <button className= {`py-5 px-12 bg-secondary text-offwhite font-rale font-semibold rounded-lg border border-transparent hover:text-secondary hover:bg-transparent hover:border-secondary hover: duration-500 ${className}`}>{text}</button>
  )
}

export default Button