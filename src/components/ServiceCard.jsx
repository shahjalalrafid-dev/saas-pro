import { MdKeyboardArrowRight } from "react-icons/md"
import Heading from "./Heading"



const ServiceCard = ({ src, text }) => {
    return (
        <div className="bg-white p-7 rounded-xl shadow-lg">
            <img src={src} alt="Service Image" className="mt-7" />
            <Heading text={text} className='text-[22px] my-5' />
            <p className='text-base text-[#495E6C] font-normal font-roboto leading-[27px]'>Psum dolor sit amet, consectetur adipiscing elit. Nisi, maecenas orci sit pellentesque eget.</p>
            <div className = 'flex items-center gap-1 mt-7'>
                <p className=" text-secondary cursor-pointer">See More</p>
                <MdKeyboardArrowRight className=" text-secondary text-base mt-[3px]" />
            </div>

        </div>
    )
}

export default ServiceCard