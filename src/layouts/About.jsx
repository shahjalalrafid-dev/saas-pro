import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Heading from '../components/Heading'
import { FaStar } from "react-icons/fa";

const About = () => {
    return (
        <section>
            <Container>
                <Flex className= 'bg-white p-[50px] rounded-lg shadow-2xl my-10 justify-between'>
                    <div>
                        <h5 className='text-sm text-secondary font-rale font-bold'>Who we are </h5>
                        <Heading className= 'leading-[48px] w-[749px]' text="More than 5,000 users around the world are already using STDEV actively" />
                        

                    </div>
                    <div className='w-[177px] h-[186px] bg-[#CFDDDB] flex flex-col items-center justify-center gap-y-2'>
                        <h2 className='text-[50px] font-bold text-fourth'>4.8</h2>
                        <ul className='flex gap-x-1'>
                            <li className='text-[#FF7282]'><FaStar /></li>
                            <li className='text-[#FF7282]'><FaStar /></li>
                            <li className='text-[#FF7282]'><FaStar /></li>
                            <li className='text-[#FF7282]'><FaStar /></li>
                            <li className='text-[#FF7282]'><FaStar /></li>
                        </ul>
                        
                        
                        <p className='text-base text-[#495E6C] font-roboto font-normal'>35 Reviews</p>
                    </div>
                </Flex>
            </Container>
        </section>
    )
}

export default About