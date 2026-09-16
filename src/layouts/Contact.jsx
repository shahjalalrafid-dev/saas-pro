import React from 'react'
import Container from '../components/Container'
import Heading from '../components/Heading'
import SubHeading from '../components/SubHeading'
import { FaRegEnvelope } from "react-icons/fa";
import Button from '../components/Button';
import ContactImage from '../assets/contact.png'

const Contact = () => {
    return (
        <section className='py-[120px]'>
            <Container>
                <div className='grid grid-cols-2 gap-2'>
                    <div>
                        <h6 className='font-rale font-bold text-[14px] text-secondary mt-4'>OUR NEWSLETTER</h6>
                        <Heading text="Stay up to date" className='mt-4 mb-7' ></Heading>
                        <SubHeading text="With our weekly newsletter you will stay informed about important information in the HR world, new Corona work guidelines." className='!text-[#495E6C]' />
                        <div className='mt-[50px] relative flex'>
                            <input type="text" className='w-[380px] h-[52px] relative border border-secondary outline-none text-2xl pl-[45px]' />
                            <FaRegEnvelope className=' text-secondary absolute top-4 left-4 text-2xl' />
                            <Button text="Subscribe" className='py-1 px-[45px] rounded-lg ml-8' ></Button>

                        </div>
                    </div>
                    <div>
                        <img src= {ContactImage} alt="Contact Image" />
                    </div>


                </div>

            </Container>
        </section>
    )
}

export default Contact