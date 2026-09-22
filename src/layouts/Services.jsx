
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
    <section className='bg-[#F3F3F3] pt-[113px] pb-[150px]'>
        <div className='container mx-auto'>
            <Heading text= "The Product we work with." className= 'text-center mb-[60px]' />
            <div className='grid lg:grid-cols-3 lg:gap-7 grid-cols-1'>
                <ServiceCard src={ServiceImageOne} text= "Consulting" />
                <ServiceCard src={ServiceImageTwo} text= "Security" />
                <ServiceCard src={ServiceImageThree} text= "Management & support" />
                

            </div>
        </div>
    </section>
  )
}

export default Services