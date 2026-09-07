import React from 'react'
import Flex from './Flex'
import Image from './Image'
const AboutCard = ({src, title, des}) => {
  return (
    <Flex className='items-center gap-x-5'>
                        <Image src = {src} alt = "Aboout Image" />
                        <div>
                            <h2 className='text-[30px] font-bold text-secondary font-inter'>{title}</h2>
                            <p className='text-base font-semibold text-[#495E6C] font-rale'>{des}</p>
                        </div>
                    </Flex>
  )
}

export default AboutCard