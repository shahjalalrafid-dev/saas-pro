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
        <section className="lg:pb-[90px] lg:pt-[114px] py-[30px] px-5">
            <div className="container mx-auto">
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

                        
                        <Flex className='lg:justify-between flex-col gap-y-5 lg:flex-row'>
                            <PricingCard planName="Free Plan" planPrice="$0" buttonText="Try for Free" timeFrame = "monthly" ></PricingCard>
                            <PricingCard planName="Premium Plan" planPrice="$100" buttonText="Try for Plan" timeFrame = "monthly"></PricingCard>
                            <PricingCard planName="Business Plan" planPrice="$1000" buttonText="Try for Plan" timeFrame = "monthly"></PricingCard>
                        </Flex>

                        :
                        <Flex className='lg:justify-between flex-col gap-y-5 lg:flex-row '>
                            <PricingCard planName="Free Plan" planPrice="$0" buttonText="Try for Free" timeFrame = "yearly"></PricingCard>
                            <PricingCard planName="Premium Plan" planPrice="$200" buttonText="Try for Plan" timeFrame = "yearly"></PricingCard>
                            <PricingCard planName="Business Plan" planPrice="$1200" buttonText="Try for Plan" timeFrame = "yearly"></PricingCard>
                        </Flex>
                        
                }





            </div>
        </section>
    )
}

export default Pricing