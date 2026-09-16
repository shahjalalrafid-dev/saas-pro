import React from 'react'
import FeedBackImageTwo from'../assets/feedback2.png'

import Heading from './Heading'

const FeedBackCard = ({src, designation, text}) => {
    return (
        <div className='bg-white shadow-sm pl-[30px] pb-[30px] pt-[60px] pr-[30px] rounded-2xl relative'>
            <div className='w-[70px] h-[70px] bg-white rounded-full flex items-center justify-center absolute -top-8 left-1/2 -translate-x-1/2'>
                <img className='absolute' src={FeedBackImageTwo} alt="FeedBack Icon" />
            </div>
            <p className='w-[242px] leading-7'>Nullam non nisi est sit amet. Arcu vitae elementum curabitur vitae nunc. Ut tellus elementum sagittis vitae et leo duis. Accumsan sit amet nulla facilisi.</p>
            <div className='flex gap-4 items-center mt-6'>
                <div>
                    <img src={src} alt="Feedback Image" />
                </div>
                <div>
                    <Heading text={text} className='text-[18px] leading-6'>{text}</Heading>
                    <p className = 'text-base text-[#495E6C] font-normal font-roboto leading-[27px]'>{designation}</p>
                </div>

            </div>

        </div>
    )
}

export default FeedBackCard