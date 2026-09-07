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
    <section className="pt-[113px] pb-[70px] bg-[#F3F3F3]">
        <Container>
            <Heading text= "All product work with several devices." className= 'text-center w-[370px] mx-auto'></Heading>
            <SubHeading className= '!text-[#495E6C] w-[455px] mx-auto text-center mt-[27px] mb-[34px]' text= "A great SaaS UI/UX design can make your product addictive and uncomfortable to give up." ></SubHeading>
            <Flex className= 'justify-center gap-4'>
                <Image src={ProductImageOne} alt= "Product Image One" ></Image>
                <Image src={ProductImageTwo} alt= "Product Image Two" ></Image>
            </Flex>
            <Image className= 'mt-[55px]' src={ProductImageThree} alt= "Product Image Three"></Image>
        </Container>
    </section>
  )
}

export default Product