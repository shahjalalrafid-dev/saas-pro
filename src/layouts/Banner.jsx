import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import SubHeading from '../components/SubHeading'
import Image from '../components/Image'
import BannerImage from '../assets/banner.png'

const Banner = () => {
    return (
        <section className = 'bg-third lg:pt-[160px] lg:px-7 lg:pb-[200px] pt-[30px] pb-[30px] lg:relative lg:block'>
            <div className='container mx-auto'>
                <Flex className= 'flex-col'>
                    <div className="lg:w-1/2 w-full">
                        <h5 className='text-lg text-offwhite font-bold font-rale lg:text-left text-center '>Business & Technologies</h5>
                        <h2 className='mt-3 lg:text-[52px] text-[30px] w-auto lg:text-left text-center font-bold text-offwhite font-rale lg:w-[460px] lg:leading-[61px] leading-11 '>We help tech
                            companies deliver
                            great software</h2>
                            <SubHeading className = 'lg:w-[536px] lg:mt-11 lg:text-left text-center mt-4' text = 'Since 1999. For millions of users. We transform businesses with powerful and  '></SubHeading>
                            
                            <SubHeading text = "adaptable digital solutions that satisfy the needs of today and unlock the opportunities of tomorrow." className= 'text-center lg:text-left'></SubHeading>
                            <div className = 'lg:w-[561px] lg:relative lg:mt-11 flex justify-center flex-col'>
                                <input className='lg:w-full w-2/3 lg:py-4 py-2 px-2 lg:px-4 rounded-[8px] text-base outline-none mx-auto mt-5 lg:mt-0' type="text" />
                                <button className = 'hidden lg:block lg:bg-secondary lg:rounded-r-[8px] lg:absolute lg:top-0 lg:right-0 lg:py-4 font-rale text-offwhite font-semibold lg:text-base lg:px-6 lg:hover:bg-[#cfdddb] lg:hover:text-green-600 lg:duration-500'>Request for Demo</button>
                                
                                <button className='lg:hidden px-6 py-3 text-black mt-5 w-1/2 mx-auto rounded-md bg-[#c9e4d0]'>Request for Demo</button>

                                
                                
                            </div>
                        

                    </div>
                    <div className="lg:w-1/2 lg:absolute lg:top-1/2 lg:-translate-y-1/2 lg:right-0 w-full lg:mt-0 mt-7 ">
                        <Image src={BannerImage} alt = "Banner Image" className= 'lg:pr-10 w-2/3 lg:w-full lg:mx-0 mx-auto' />
                    
                    </div>
                </Flex>

            </div>

        </section>
    )
}

export default Banner