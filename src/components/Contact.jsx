import React from 'react'
import about from '../assets/img/about.png'
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";

import { FaFacebookSquare } from "react-icons/fa";
export const Contact = () => {
  return (
    <>

      <div id='About' className="lg:px-56 px-10 lg:py-0   text-center   gap-5 lg:text-start  flex lg:flex-row  flex-col justify-between lg:gap-28 items-center ">
        <div className="   pt-2">



          <div className="flex justify-start text-start lg:flex">
            <span className='items-center flex ' >
              <FaLocationDot className='  text-2xl  text-blue-600' />


            </span>
            <span className=' pl-3 text-lg'>Abbaspur ,Distric Poonch </span>

          </div>

          <div className="flex justify-start pt-3 text-start lg:flex">
            <span className='items-center flex ' >
              <MdEmail className='  text-2xl text-orange-600' />



            </span>
            <span className='text-lg  pl-3'>mubashirali200512@gmail.com </span>

          </div>
          <div className="flex justify-start pt-3 text-start lg:flex">
            <span className='items-center flex ' >
              <BsFillTelephoneFill className='  text-2xl text-green-500' />



            </span>
            <span className='text-lg  pl-3 '>03444980396 </span>

          </div>


<div className=" pt-10  lg:flex flex-wrap  ">

  <span className='flex gap-10 justify-center  items-center text-start '>
  <FaFacebookSquare className='text-3xl text-blue-600 font-bold' />
  <FaInstagramSquare  className='text-3xl text-orange-600 font-bold' />
  <FaSquareTwitter  className='text-3xl text-blue-800 font-bold' />



  </span>
</div>




        </div>


        <div className="h-full  flex flex-col  justify-center  lg:items-start items-center text-black  text-center">

          <h1 data-aos="fade-right" className="text-[52px] font-semibold mb-8 ml-10  text-slate-800 leading-normal ">


            Contact Us
          </h1>
          <div className="lg:text-start">
            <section class=" dark:bg-gray-900">
              <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">

                <div class="w-[100%] bg-white lg:w-[600%] rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-white ">
                  <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                      Get In Touch
                    </h1>
                    <form class="space-y-4 md:space-y-6" action="#">
                      <div>
                        <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                        <input type="text" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required="" />
                      </div>
                      <div>
                        <label for="text" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                        <input type="email" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                      </div>
                      <textarea className='w-full my-3 rounded-lg  bg-white text-black  p-4  border-2  border-fuchsia-800 b_glow text-xl  ' placeholder='Write You Message..' name="" id="" cols="30" rows="10"></textarea>


                    </form>

                  </div>
                </div>
              </div>
              <button type="submit" className="w-full mt-10 text-black  bg-blue-400   rounded-lg  px-1 py-2.5 text-center text-lg font-bold ">Send Message</button>
            </section>
          </div>


          <div className='flex mt-8 gap-2 '>

          </div>

          <div className='flex items-center justify-center '>

          </div>



        </div>


      </div>



    </>
  )
}


