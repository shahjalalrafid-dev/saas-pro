import React from 'react'
import { FaAngleDown } from "react-icons/fa6"
const NavList = ({text, icon, design}) => {
  return (
    <li  className={`text-base text-[#EEF4F9] font-medium font-inter cursor-pointer ${design}`}>{text} {
      icon && <FaAngleDown className='inline ml-1' />
    }</li>
  )
}

export default NavList