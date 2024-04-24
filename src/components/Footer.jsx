import React from 'react'
import { AiFillGithub } from 'react-icons/ai'
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import { Link } from 'react-router-dom'

import logo from "../assets/img/logo.png"

export const Footer = () => {
  return (
    <>
      <footer className='bg-slate-900 text-white  lg:px-48  px-4  py-20'>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4  gap-4  md-4  mg:mb-0">
          <div className="mb-10  -mt-0 md:-0   ">

            <img src={logo} width={70} className='rounded-full  ' alt="" />




          </div>

          <div className="">
            <h2 className="text-[22px] font-semibold text-fuchsia-800 py-2 uppercase">LINK</h2>
            <ul className='text-[16px] my-4'>
              <li className='my-2'>FAQ</li>
              <li className='my-2'>Careers</li>
              <li className='my-2'>Gift Card Balance</li>
              <li className='my-2'>Donation Request</li>

            </ul>
          </div>


          <div className="mb-4 md:mb-0">
            <h2 className="text-[22px] font-semibold text-fuchsia-800 py-2 uppercase">4 RIVERS </h2>
            <p className='text-[16px] my-2   flex  '>  4 Roots</p>
            <p className='text-[16px] my-2 flex '>  4 Roots Cafe </p>
            <p className='text-[16px] my-2 flex '>  The Coop </p>
            <p className='text-[16px] my-2 flex '>  4R Bakery and Speciality Cakes </p>

          </div>

          <div className="ml-4">
            <h2 className='text-[22px] font-semibold text-fuchsia-800 py-2  -pt-12 uppercase'>Follow Me</h2>

            <div className="flex space-x-5 mt-5  ">
              <a className='text-white hover:text-fuchsia-800 transition-all duration-150  ease-in-out  ' href="https://github.com/MubashirACode">
                <AiFillGithub />
              </a>
              <a className='text-white hover:text-blue-400 transition-all duration-150  ease-in-out  ' href="https://www.linkedin.com/in/mubashir-ali-968179274?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
                <FaLinkedinIn />
              </a>
              <a className='text-white hover:text-orange-400 transition-all duration-150  ease-in-out  ' href="https://www.instagram.com/xd_coding/">
                <FaInstagram />
              </a>
              <a className='text-white hover:text-blue-800 transition-all duration-150  ease-in-out  ' href="">
                <FaFacebookF />
              </a>
            </div>
          </div>
        </div>
      </footer>

    </>
  )
}
