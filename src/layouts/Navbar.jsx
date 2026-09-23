
import Container from '../components/Container'
import Flex from '../components/Flex'
import Image from '../components/Image'
import Logo from '../assets/logo.png'
import NavList from '../components/NavList'
import Button from '../components/Button'
import { MdCancel } from "react-icons/md";

import { AiOutlineMenuUnfold } from "react-icons/ai";
import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'


const Navbar = () => {

    const [click, setClick] = useState(false);

    const handleMenu = () => {
        setClick(!click);
    }


    return (
        <>

            <nav className="bg-third py-6 hidden lg:block px-7">


                <div className='container mx-auto'>
                    <Flex className="justify-between items-center">
                        <Image src={Logo} alt="Logo Image" />
                        <Flex className='items-center gap-x-[35px]'>
                            <ul className='flex gap-x-[30px] items-center'>

                                <Link to = "/"><NavList icon={true} text="Home" /></Link>        
                                <Link to= "/pages"><NavList icon={true} text="pages" /></Link> 
                                <Link to= "/about"><NavList text="About Us" /></Link> 
                                <Link to= "/services"><NavList text="Services" /></Link> 
                                <Link to= "/blogs"><NavList text="Blog" /></Link> 
                                <Link to= "/contact"><NavList text="Contact" /></Link> 

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
                            {
                                click ? <MdCancel onClick={handleMenu} className='text-white text-xl' />   : <AiOutlineMenuUnfold onClick={handleMenu} className='text-white text-xl' />
                            }
                            
                        </div>


                    </div>

                    {
                        click && <ul className='flex flex-col items-center bg-[#00A300] py-3 mt-3 text-[#E6FFE6] z-50 space-y-1'>
                        <li><Link to= "/" >Home</Link></li>
                        <li><Link to= "/pages" >Pages</Link></li>
                        <li><Link to= "/about" >About Us</Link></li>
                        <li><Link to= "/services" >Services</Link></li>
                        <li><Link to= "/blogs" >Blog</Link></li>
                        <li><Link to= "/contact" >Contact</Link></li>
                        
                    </ul>
                    }
                    

                </div>



            </nav>


        </>
    )
}

export default Navbar
