import React from 'react'
import Container from '../components/Container'
import EngageImage from '../assets/Engage.png'
import SubHeading from '../components/SubHeading'
import Heading from '../components/Heading'
import Button from '../components/Button'

const Engage = () => {
  return (
    <section className='pt-[110px] pb-[70px]'>
        <Container>
            <div className='grid grid-cols-2'>
                <div>
                    <img src= {EngageImage} alt="Engage Image" />
                </div>
                <div>
                    <Heading text= "Don’t just engage, make it engaging." className= 'mt-9' />
                    <SubHeading className = 'w-[536px] mt-11 !text-[#495E6C]' text = 'Since 1999. For millions of users. We transform businesses with powerful and  '></SubHeading>
                    <SubHeading text = "adaptable digital solutions that satisfy the needs of today and unlock the opportunities of tomorrow." className= '!text-[#495E6C] mt-7'></SubHeading>
                    <Button text= "Read More" className= 'mt-10 px-[50px] py-[20px]' ></Button>
                </div>

            </div>
        </Container>
    </section>
  )
}

export default Engage