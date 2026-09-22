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
    <section className='bg-[#F3F3F3] lg:pt-[120px] lg:pb-[150px] py-[30px] px-5'>
        <div className='container mx-auto'>
            <div className='grid lg:grid-cols-2 grid-cols-1'>
                <div>
                    <div>
                        <img className='mx-auto lg:mx-0' src= {FeedbackImageOne} alt="Feedback Image" />
                    </div>
                    <Heading text= "What our clients say about us" className= 'lg:w-[460px] w-auto my-[27px] text-center lg:text-left '></Heading>
                    <SubHeading text= "Nunc tortor vel tincidunt id massa congue. Varius risus lorem vestibulum velit." className= '!text-[#495E6C] lg:w-[433px] w-auto font-roboto text-base text-center lg:text-left' ></SubHeading>
                </div>
                <div>
                    <div className= 'grid lg:grid-cols-2 gap-5 grid-cols-1 mt-10 lg:mt-0 gap-y-10'>
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