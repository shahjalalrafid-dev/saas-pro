import Container from "../components/Container"
import Flex from "../components/Flex"
import Heading from "../components/Heading"
import Image from "../components/Image"
import SubHeading from "../components/SubHeading"
import ProductImageOne from "../assets/product-image-1.png"
import ProductImageTwo from "../assets/product-image-2.png"
import ProductImageThree from "../assets/product-image-3.png"

const Product = () => {
  return (
    <section className="lg:pt-[113px] lg:pb-[70px] pt-[30px] pb-[30px] bg-[#F3F3F3]">
        <div className="container mx-auto">
            <Heading text= "All product work with several devices." className= 'text-center lg:w-[370px] lg:mx-auto w-auto'></Heading>
            <SubHeading className= '!text-[#495E6C] lg:w-[455px] w-auto mx-auto text-center mt-[27px] mb-[34px]' text= "A great SaaS UI/UX design can make your product addictive and uncomfortable to give up." ></SubHeading>
            <Flex className= 'justify-center gap-4'>
                <Image src={ProductImageOne} alt= "Product Image One" ></Image>
                <Image src={ProductImageTwo} alt= "Product Image Two" ></Image>
            </Flex>
            <Image className= 'lg:mt-[55px] lg:w-full w-2/3 mt-5 mx-auto' src={ProductImageThree} alt= "Product Image Three"></Image>
        </div>
    </section>
  )
}

export default Product