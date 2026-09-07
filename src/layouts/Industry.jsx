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
    <section className="pt-[100px] pb-[120px]">
        <Container>

            <Heading text = "Industries in Focus" className= 'text-center mb-[60px]'/>
            <Flex className= 'justify-between flex-wrap gap-y-[30px]'>
                <IndustryCard src={IndustryImageOne} heading= "FinTech" des = "Psum dolor sit amet, consectetur adipiscing elit. Nisi, maecenas orci sit pellentesque eget." />
                <IndustryCard src={IndustryImageTwo} heading= "Telecom" des = "Psum dolor sit amet, consectetur adipiscing elit. Nisi, maecenas orci sit pellentesque eget." />
                <IndustryCard src={IndustryImageThree} heading= "Retail" des = "Psum dolor sit amet, consectetur adipiscing elit. Nisi, maecenas orci sit pellentesque eget." />
                <IndustryCard src={IndustryImagefour} heading= "Transportation" des = "Psum dolor sit amet, consectetur adipiscing elit. Nisi, maecenas orci sit pellentesque eget." />
                <IndustryCard src={IndustryImageFive} heading= "eLearning" des = "Psum dolor sit amet, consectetur adipiscing elit. Nisi, maecenas orci sit pellentesque eget." />
                <IndustryCard src={IndustryImagesix} heading = "Artificial Intelligence" des = "Psum dolor sit amet, consectetur adipiscing elit. Nisi, maecenas orci sit pellentesque eget." />
                
            </Flex>
            
        </Container>

    </section>
  )
}

export default Industry