import React from 'react'
import about from '../assets/img/about.png'

export const About = () => {
  return (
    <>

      <div id='About' className="lg:px-56 px-10 lg:py-0   text-center   gap-5 lg:text-start  flex lg:flex-row  flex-col justify-between lg:gap-28 items-center ">
        <img data-aos="fade-down" src={about} width={290} height={290} alt="" className=" border-2 p-1  border-black rounded-lg  img_glow" />


        <div className="h-full lg:py-40 flex flex-col  justify-center  lg:items-start items-center text-black  text-center">

          <h1 data-aos="fade-right" className="text-[52px] font-semibold mb-8 lg:text-start  text-slate-800 leading-normal ">


            About Me
          </h1>
          <p data-aos="fade-left" className="lg:text-start  ">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic asperiores eos veritatis quis atque sit molestiae explicabo labore natus quam voluptas ipsa, consectetur quasi voluptate. Sunt modi consequatur aspernatur corporis. At distinctio culpa perferendis, sequi ipsa laboriosam minima, iste recusandae accusamus soluta sed enim tempora ipsam commodi necessitatibus vitae alias!</p>


          <div className='flex mt-8 gap-2 '>

          </div>

          <div className='flex items-center justify-center '>

          </div>

       

        </div>


      </div>



    </>
  )
}


