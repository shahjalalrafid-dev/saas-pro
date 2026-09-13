import React from 'react'
import { FaCheck } from "react-icons/fa6";
import SubHeading from './SubHeading';
import Flex from './Flex';
const PricingItem = ({text}) => {
  return (
    <Flex className='items-center gap-x-5 '>
            <FaCheck className= 'text-secondary' />
            <SubHeading text= {text} className= '!text-[#495E6C]'></SubHeading>
        </Flex>
  )
}

export default PricingItem