import Container from "../components/Container"
import Flex from "../components/Flex"
import Heading from "../components/Heading"
import IndustryCard from "../components/IndustryCard"
import IndustryImageOne from "../assets/industry-image-1.png"
import IndustryImageTwo from "../assets/industry-image-2.png"
import IndustryImageThree from "../assets/industry-image-3.png"
import IndustryImagefour from "../assets/industry-image-4.png"
import IndustryImageFive from "../assets/industry-image-5.png"
import IndustryImagesix from "../assets/industry-image-6.png"

const Industry = () => {
  return (
    <section className="lg:pt-[100px] lg:pb-[120px] pt-[35px] pb-[30px]">
        <div className="container mx-auto">

            <Heading text = "Industries in Focus" className= 'text-center lg:mb-[60px] mb-[20px]'/>
            <Flex className= 'lg:justify-between lg:flex-wrap lg:gap-y-[30px] gap-y-[20px] lg:flex-row flex-col '>
                <IndustryCard src={IndustryImageOne} heading= "FinTech" des = "Psum dolor sit amet, consectetur adipiscing elit. Nisi, maecenas orci sit pellentesque eget." />
                <IndustryCard src={IndustryImageTwo} heading= "Telecom" des = "Psum dolor sit amet, consectetur adipiscing elit. Nisi, maecenas orci sit pellentesque eget." />
                <IndustryCard src={IndustryImageThree} heading= "Retail" des = "Psum dolor sit amet, consectetur adipiscing elit. Nisi, maecenas orci sit pellentesque eget." />
                <IndustryCard src={IndustryImagefour} heading= "Transportation" des = "Psum dolor sit amet, consectetur adipiscing elit. Nisi, maecenas orci sit pellentesque eget." />
                <IndustryCard src={IndustryImageFive} heading= "eLearning" des = "Psum dolor sit amet, consectetur adipiscing elit. Nisi, maecenas orci sit pellentesque eget." />
                <IndustryCard src={IndustryImagesix} heading = "Artificial Intelligence" des = "Psum dolor sit amet, consectetur adipiscing elit. Nisi, maecenas orci sit pellentesque eget." />
                
            </Flex>
            
        </div>

    </section>
  )
}

export default Industry