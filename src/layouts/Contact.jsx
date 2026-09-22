import React from 'react'
import Container from '../components/Container'
import Heading from '../components/Heading'
import SubHeading from '../components/SubHeading'
import { FaRegEnvelope } from "react-icons/fa";
import Button from '../components/Button';
import ContactImage from '../assets/contact.png'

const Contact = () => {
    return (
        <section className='lg:py-[120px] py-[30px] px-5'>
            <div className='container mx-auto'>
                <div className='grid lg:grid-cols-2 gap-2 grid-cols-1'>
                    <div>
                        <h6 className='font-rale font-bold text-[14px] text-secondary mt-4 text-center lg:text-left'>OUR NEWSLETTER</h6>
                        <Heading text="Stay up to date" className='mt-4 mb-7 text-center lg:text-left' ></Heading>
                        <SubHeading text="With our weekly newsletter you will stay informed about important information in the HR world, new Corona work guidelines." className='!text-[#495E6C] text-center lg:text-left' />
                        <div className='mt-[50px] relative flex lg:flex-row flex-col'>
                            <input type="text" className='lg:w-[380px] w-auto h-[52px] relative border border-secondary outline-none text-2xl pl-[45px]' />
                            <FaRegEnvelope className=' text-secondary absolute top-4 left-4 text-2xl' />
                            <Button text="Subscribe" className='py-1 lg:px-[45px] rounded-lg lg:ml-8 mt-6 lg:mt-0' ></Button>

                        </div>
                    </div>
                    <div>
                        <img className='mt-5 lg:mt-0' src= {ContactImage} alt="Contact Image" />
                    </div>


                </div>

            </div>
        </section>
    )
}

export default Contact