import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Heading from '../components/Heading'
import { FaStar } from "react-icons/fa";
import AboutImageOne from '../assets/about-1.png'
import Image from '../components/Image'
import AboutCard from '../components/AboutCard';

const About = () => {
    return (
        <section className='relative  overflow-hidden'>
            <div className='bg-[#0E554E] absolute -top-[2px] -left-[2px] -right-[2px] -bottom-[2px] [clip-path:polygon(0%_0%,100%_0%,100%_100%)]'>

            </div>
            <div className='container mx-auto'>

                <div className=' relative z-10 bg-white pt-[25px] lg:p-[50px] rounded-lg shadow-2xl lg:pt-10 '>
                    <Flex className=' border-b border-[rgba(17,47,66, 0.1)] lg:justify-between pb-10 mb-6 lg:flex-row flex-col'>
                        <div>
                            <h5 className='text-sm text-secondary font-rale font-bold text-center lg:text-left'>Who we are </h5>
                            <Heading className='lg:leading-[48px] lg:w-[749px] w-auto text-center lg:text-left text-xl lg:text-4xl  ' text="More than 5,000 users around the world are already using STDEV actively" />


                        </div>
                        <div className='w-[177px] h-[186px] bg-[#CFDDDB] flex flex-col items-center justify-center gap-y-2 mx-auto lg:mr-0 lg:mt-0 mt-5'>
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
                    <Flex className='lg:justify-between flex-col justify-center lg:flex-row gap-y-5'>
                        
                            <AboutCard src={AboutImageOne} title="70+" des="Professionals" />
                            <AboutCard src={AboutImageOne} title="22 Years" des="Years of Experience" />
                            <AboutCard src={AboutImageOne} title="$40+M" des="Fundraised by customers" />
                        


                    </Flex>
                </div>

            </div>
        </section>
    )
}

export default About