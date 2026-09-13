import { useState } from "react"
import Container from "../components/Container"
import Heading from "../components/Heading"
import Flex from "../components/Flex";
import PricingCard from "../components/PricingCard";


const Pricing = () => {

    const [change, setChange] = useState(false);

    const handleSwitch = () => {
        setChange(!change);
    }
    return (
        <section className="pb-[90px]">
            <Container>
                <Heading text="Affordable Pricing" className='text-center'></Heading>

                

                <Flex className="justify-center items-center gap-x-6 my-9">
                    <p>Monthly</p>
                    <div onClick={handleSwitch} className="h-[40px] w-[90px] bg-secondary rounded-[100px] flex items-center px-1 cursor-pointer">
                        <div className={`w-[30px] h-[30px] bg-white rounded-full  ${change ? 'ml-auto' : 'mr-auto'}`}></div>
                    </div>
                    <p>Annualy</p>
                </Flex>

                {
                    change ?

                        
                        <Flex className='justify-between'>
                            <PricingCard planName="Free Plan" planPrice="$0" buttonText="Try It" timeFrame = "monthly" ></PricingCard>
                            <PricingCard planName="Premium Plan" planPrice="$100" buttonText="Try" timeFrame = "monthly"></PricingCard>
                            <PricingCard planName="Business Plan" planPrice="$1000" buttonText="Buy" timeFrame = "monthly"></PricingCard>
                        </Flex>

                        :
                        <Flex className='justify-between'>
                            <PricingCard planName="Free Plan" planPrice="$0" buttonText="Try It" timeFrame = "yearly"></PricingCard>
                            <PricingCard planName="Premium Plan" planPrice="$200" buttonText="Try" timeFrame = "yearly"></PricingCard>
                            <PricingCard planName="Business Plan" planPrice="$1200" buttonText="Buy" timeFrame = "yearly"></PricingCard>
                        </Flex>
                        
                }





            </Container>
        </section>
    )
}

export default Pricing