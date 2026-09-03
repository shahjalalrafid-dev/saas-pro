import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import SubHeading from '../components/SubHeading'
import Image from '../components/Image'
import BannerImage from '../assets/banner.png'

const Banner = () => {
    return (
        <section className = 'bg-third pt-[160px] pb-[200px] relative'>
            <Container>
                <Flex>
                    <div className="w-1/2">
                        <h5 className='text-lg text-offwhite font-bold font-rale'>Business & Technologies</h5>
                        <h2 className='mt-3 text-[52px] font-bold text-offwhite font-rale w-[460px] leading-[61px] '>We help tech
                            companies deliver
                            great software</h2>
                            <SubHeading className = 'w-[536px] mt-11' text = 'Since 1999. For millions of users. We transform businesses with powerful and  '></SubHeading>
                            
                            <SubHeading text = "adaptable digital solutions that satisfy the needs of today and unlock the opportunities of tomorrow."></SubHeading>
                            <div className = 'w-[561px] relative mt-11'>
                                <input className='w-full py-4 px-4 rounded-[8px] text-base outline-none' type="text" />
                                <button className = 'bg-secondary rounded-r-[8px] absolute top-0 right-0 py-4 font-rale text-offwhite font-semibold text-base px-6 hover:bg-third hover:text-offwhite '>Request for Demo</button>

                            </div>
                        

                    </div>
                    <div className="w-1/2 absolute top-1/2 -translate-y-1/2 right-0">
                        <Image src={BannerImage} alt = "Banner Image" />
                    
                    </div>
                </Flex>

            </Container>

        </section>
    )
}

export default Banner