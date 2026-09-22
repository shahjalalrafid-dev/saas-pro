
import Container from '../components/Container'
import Heading from '../components/Heading'
import ServiceImageOne from '../assets/service-image-1.png'
import ServiceImageTwo from '../assets/service-image-2.png'
import ServiceImageThree from '../assets/service-image-3.png'
import SubHeading from '../components/SubHeading'
import { MdKeyboardArrowRight } from 'react-icons/md'
import ServiceCard from '../components/ServiceCard'


const Services = () => {
  return (
    <section className='bg-[#F3F3F3] lg:pt-[113px] lg:pb-[150px] pt-[30px] pb-[30px] px-5'>
        <div className='container mx-auto'>
            <Heading text= "The Product we work with." className= 'text-center lg:mb-[60px] mb-5' />
            <div className='grid lg:grid-cols-3 lg:gap-7 grid-cols-1 gap-y-5'>
                <ServiceCard src={ServiceImageOne} text= "Consulting" />
                <ServiceCard src={ServiceImageTwo} text= "Security" />
                <ServiceCard src={ServiceImageThree} text= "Management & support" />
                

            </div>
        </div>
    </section>
  )
}

export default Services