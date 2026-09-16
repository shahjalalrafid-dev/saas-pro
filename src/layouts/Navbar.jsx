import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Image from '../components/Image'
import Logo from '../assets/logo.png'
import NavList from '../components/NavList'
import Button from '../components/Button'


const Navbar = () => {
    return (
    
        <nav className="bg-third py-6 hidden lg:block">


            <Container>
                <Flex className="justify-between items-center">
                    <Image src={Logo} alt="Logo Image" />
                    <Flex className = 'items-center gap-x-[35px]'>
                        <ul className='flex gap-x-[30px] items-center'>

                            <NavList icon={true} text="Home" />
                            <NavList icon = {true} text="pages" />
                            <NavList text="About Us" />
                            <NavList text="Services" />
                            <NavList text="Blog" />
                            <NavList text="Contact" />

                        </ul>
                        <Button text="Let's Talk" className= 'hover:bg-white hover:text-green-600' />
                    </Flex>
                        
                    


                </Flex>

            </Container>


        </nav>
    )
}

export default Navbar
