import React from 'react'
import Container from '../components/Container'
import EngageImage from '../assets/Engage.png'
import SubHeading from '../components/SubHeading'
import Heading from '../components/Heading'
import Button from '../components/Button'

const Engage = () => {
  return (
    <section className='lg:pt-[110px] lg:pb-[70px] py-[30px] px-5'>
        <div className='container mx-auto'>
            <div className='grid lg:grid-cols-2 grid-cols-1'>
                <div>
                    <img src= {EngageImage} alt="Engage Image" />
                </div>
                <div>
                    <Heading text= "Don’t just engage, make it engaging." className= 'lg:mt-9 text-center lg:text-left mt-10' />
                    <SubHeading className = 'lg:w-[536px] w-auto mt-11 !text-[#495E6C] text-center lg:text-left' text = 'Since 1999. For millions of users. We transform businesses with powerful and  '></SubHeading>
                    <SubHeading text = "adaptable digital solutions that satisfy the needs of today and unlock the opportunities of tomorrow." className= '!text-[#495E6C] mt-7 lg:text-left text-center'></SubHeading>
                    <div className='flex justify-center'>
                        <Button text= "Read More" className= 'mt-10 px-[50px] py-[20px]' ></Button>
                    </div>
                    
                </div>

            </div>
        </div>
    </section>
  )
}

export default Engage