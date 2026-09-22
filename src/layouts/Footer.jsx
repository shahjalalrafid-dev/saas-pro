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
    
        <footer className='bg-fourth lg:pt-[100px] lg:pb-[84px] pt-[40px] pb-[30px] px-5'>
        <div className='container mx-auto'>
            <div className='grid grid-cols-12'>
                <div className='justify-self-center col-span-12 lg:col-span-3'>
                    <Image src={LogoImage} className= 'mx-auto lg:mx-0' />
                    <SubHeading className= 'pb-8 pt-6 text-center lg:text-left' text= "Orem ipsum dolor sit amet, consectetur adipiscing elit. Dictumst augue amet, luctus quis gravida nulla netus ut platea." />
                    <ul className='text-offwhite flex gap-6 justify-center lg:justify-start'>
                        <li><FaFacebook className='cursor-pointer' /></li>
                        <li><FaTwitter className='cursor-pointer' /></li>
                        <li><FaInstagram className='cursor-pointer' /></li>
                    </ul>
                </div>
                <div className='lg:ml-[60px] col-span-6 lg:col-span-3 lg:mt-0 mt-5'>
                    <FooterItemTitle text = "Company" />
                    <ul className='flex flex-col gap-y-4 mt-7'>
                        <FooterList text= "About Us"  />
                        <FooterList text= "Services"  />
                        <FooterList text= "Blog"  />
                    </ul>
                </div>
                <div className='col-span-6 lg:col-span-3 lg:mt-0 mt-5'>
                    <FooterItemTitle text = "More Links" />
                    <ul className='flex flex-col gap-y-4 mt-7'>
                        <FooterList text= "Blog Details"  />
                        <FooterList text= "Service Details"  />
                        <FooterList text= "Contact"  />
                    </ul>
                </div>
                <div className='col-span-12 lg:col-span-3 mt-5 lg:mt-0'>
                    <FooterItemTitle text = "Contact Details" />
                    <ul className='flex flex-col gap-y-4 mt-7'>
                        <FooterList text= "Amsterdam Netherlands"  />
                        <FooterList text= "+1 62 19 22 705"  />
                        <FooterList text= "7 Days - 8am - 10pm"  />
                        <FooterList text= "info@stdev.com"  />
                    </ul>
                </div>

            </div>
        </div>
    </footer>
    <hr className="border-slate-600" />
    <footer className = "bg-fourth py-7" >
        <p className='text-center opacity-90 text-white'>© 2021 All Rights Reserved</p>

    </footer>
    
    
    
    
    </>

  )
}

export default Footer