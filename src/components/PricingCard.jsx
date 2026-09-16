import React from 'react'
import PricingItem from './PricingItem'
import Flex from './Flex'
import Button from './Button'

const PricingCard = ({planName, planPrice, buttonText, timeFrame}) => {
    return (
        <div className='w-[366px] bg-[#F3F3F3] rounded-[10px] pt-[50px] px-[30px] pb-[40px]' >
            <h4 className='text-[22px] text-fourth font-rale font-bold'>{planName}</h4>
            <h2 className='text-fourth text-5xl font-inter font-bold pt-1.5 pb-9 border-b border-[rgba(44,131,187, 0.25)]'>{planPrice} <span className='text-base text-[#6E8393] font-roboto font-semibold'>/ {timeFrame}</span> </h2>
            <Flex className='flex-col gap-y-7 py-9'>
                <PricingItem text="Access to editing all blocks" />
                <PricingItem text="Editing blocks together" />
                <PricingItem text="Access to all premium icons" />
                <PricingItem text="A dedicated domain" />
            </Flex>

            <Button text = {buttonText} className= 'py-5 px-[50px]'></Button>





        </div>
    )
}

export default PricingCard