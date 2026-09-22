
import Container from '../components/Container'
import Flex from '../components/Flex'
import Image from '../components/Image'
import Logo from '../assets/logo.png'
import NavList from '../components/NavList'
import Button from '../components/Button'

import { AiOutlineMenuUnfold } from "react-icons/ai";


const Navbar = () => {
    return (
        <>

            <nav className="bg-third py-6 hidden lg:block px-7">


                <div className='container mx-auto'>
                    <Flex className="justify-between items-center">
                        <Image src={Logo} alt="Logo Image" />
                        <Flex className='items-center gap-x-[35px]'>
                            <ul className='flex gap-x-[30px] items-center'>

                                <NavList icon={true} text="Home" />
                                <NavList icon={true} text="pages" />
                                <NavList text="About Us" />
                                <NavList text="Services" />
                                <NavList text="Blog" />
                                <NavList text="Contact" />

                            </ul>
                            <Button text="Let's Talk" className='hover:bg-white hover:text-green-600' />
                        </Flex>




                    </Flex>

                </div>


            </nav>
            <nav className="bg-third py-2 lg:hidden">
                <div className='container mx-auto'>

                    <div className='flex justify-between'>
                        <div>
                            <img src={Logo} alt="Logo Image" className='w-2/3' />
                        </div>
                        <div>
                            <AiOutlineMenuUnfold className='text-white text-xl' />
                        </div>


                    </div>

                </div>



            </nav>


        </>
    )
}

export default Navbar
