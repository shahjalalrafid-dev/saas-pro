import { MdKeyboardArrowRight } from "react-icons/md"
import { FaRegCalendarAlt } from "react-icons/fa";


const ArticleCard = ({src, heading, writer, date, text, src2}) => {
  return (
    <div className=' bg-white rounded-xl shadow-lg'>
      <div>
        <img src= {src} alt="Article Image" className="mx-auto mt-3" />
      </div>
      <div className='px-[30px] pt-3 pb-[30px]'>
        <h4 className='font-rale, font-bold text-[18px] text-fourth'>{heading}</h4>
        <div className="flex mt-4 gap-4">
            <div className="flex items-center gap-2">
                <img src= {src2} alt="Writer Image" />
                <h6>{writer}</h6>
            </div>
            <div className="flex items-center gap-2">
                <FaRegCalendarAlt />
                <p>{date}</p>
                
            </div>
            
            

        </div>
        <p className='text-base text-[#495E6C] font-roboto font-normal mt-5 leading-7 mb-6'>{text}</p>
        <a href="" className="text-secondary">See More</a>
        <MdKeyboardArrowRight className="inline-block text-secondary"/>

      </div>


    </div>
  )
}

export default ArticleCard