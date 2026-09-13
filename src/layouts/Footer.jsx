import React from 'react'
import Container from '../components/Container'
import Image from '../components/Image'
import LogoImage from '../assets/logo.png'
import SubHeading from '../components/SubHeading'
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FooterList } from '../components/FooterList'
import FooterItemTitle from '../components/FooterItemTitle'

const Footer = () => {
  return (
    <>
    
        <footer className='bg-fourth border-b border-offwhite'>
        <Container>
            <div className='grid grid-cols-4'>
                <div>
                    <Image src={LogoImage} />
                    <SubHeading className= 'pb-8 pt-6' text= "Orem ipsum dolor sit amet, consectetur adipiscing elit. Dictumst augue amet, luctus quis gravida nulla netus ut platea." />
                    <ul className='text-white flex gap-6'>
                        <li><FaFacebook /></li>
                        <li><FaTwitter /></li>
                        <li><FaInstagram /></li>
                    </ul>
                </div>
                <div>
                    <FooterItemTitle text = "Company" />
                    <ul className='flex flex-col gap-y-4 mt-7'>
                        <FooterList text= "About Us"  />
                        <FooterList text= "Services"  />
                        <FooterList text= "Blog"  />
                    </ul>
                </div>
                <div>
                    <FooterItemTitle text = "More Links" />
                    <ul className='flex flex-col gap-y-4 mt-7'>
                        <FooterList text= "Blog Details"  />
                        <FooterList text= "Service Details"  />
                        <FooterList text= "Contact"  />
                    </ul>
                </div>
                <div>
                    <FooterItemTitle text = "Company" />
                    <ul className='flex flex-col gap-y-4 mt-7'>
                        <FooterList text= "Amsterdam Netherlands"  />
                        <FooterList text= "+1 62 19 22 705"  />
                        <FooterList text= "7 Days - 8am - 10pm"  />
                        <FooterList text= "info@stdev.com"  />
                    </ul>
                </div>

            </div>
        </Container>
    </footer>
    <footer className = "bg-fourth py-7" >
        <p className='text-center'>© 2021 All Rights Reserved</p>

    </footer>
    
    
    
    
    </>

  )
}

export default Footer