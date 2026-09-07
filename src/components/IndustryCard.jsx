import { MdKeyboardArrowRight } from "react-icons/md";
import Image from '../components/Image'
const IndustryCard = ({ src, alt, heading, des }) => {
  return (
    <div className='w-[366px] h-[465px] bg-white rounded-xl shadow-lg'>
      <div className='w-[346px] h-[220px] mx-auto pt-[10px]'>
        <Image className='w-full h-full ' src={src} alt={alt} />
      </div>
      <div className='p-[30px]'>
        <h4 className='font-rale, font-bold text-[22px] text-fourth'>{heading}</h4>
        <p className='text-base text-[#495E6C] font-roboto font-normal mt-5 leading-7 mb-6'>{des}</p>
        <a href="">See More</a>
        <MdKeyboardArrowRight className="inline-block"/>

      </div>


    </div>
  )
}

export default IndustryCard