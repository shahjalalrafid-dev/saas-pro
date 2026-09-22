import React from 'react'
import Container from '../components/Container'
import Heading from '../components/Heading'
import SubHeading from '../components/SubHeading'
import FeedbackImageOne from '../assets/feedback1.png'
import FeedBackCard from '../components/FeedBackCard'
import FeedBackImageThree from '../assets/feedback3.png'
import FeedBackImageFour from '../assets/feedback4.png'

const Feedback = () => {
  return (
    <section className='bg-[#F3F3F3] pt-[120px] pb-[150px]'>
        <div className='container mx-auto'>
            <div className='grid lg:grid-cols-2 grid-cols-1'>
                <div>
                    <div>
                        <img src= {FeedbackImageOne} alt="Feedback Image" />
                    </div>
                    <Heading text= "What our clients say about us" className= 'lg:w-[460px] w-auto my-[27px] '></Heading>
                    <SubHeading text= "Nunc tortor vel tincidunt id massa congue. Varius risus lorem vestibulum velit." className= '!text-[#495E6C] lg:w-[433px] w-auto font-roboto text-base' ></SubHeading>
                </div>
                <div>
                    <div className= 'grid lg:grid-cols-2 gap-5 grid-cols-1'>
                        <FeedBackCard src={FeedBackImageThree} text= "Davis Lubin" designation= "CEO of Fashionon" ></FeedBackCard>
                        <FeedBackCard src={FeedBackImageFour} text= "Leslie Alexander" designation= "CEO of Fashionon"></FeedBackCard>
                        
                        
                    </div>
                    
                </div>

            </div>


        </div>
    </section>
  )
}

export default Feedback