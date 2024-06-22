import React from 'react'
import { Link } from 'react-router-dom'

const Button = ({text, className, to}) => {
  return (
    <>
        <Link to={to} className={`uppercase ${className} px-5 py-3 duration-300 text-sm rounded-md text-center`}>{text}</Link>
    </>
  )
}

export default Button