import React from 'react'
import cheaf1 from '../assets/img/1.png'
import cheaf2 from '../assets/img/2.png'
import cheaf3 from '../assets/img/3.png'
import cheaf4 from '../assets/img/4.png'
export const Cheaf = () => {
  return (
    <>
     <h1 className='  flex justify-center   text-3xl text-slate-800  font-semibold'>Chef</h1>
    <div className=" mt-10 mb-10 flex justify-center items-center  flex-wrap lg:flex">
       
        <div className="">
            <img  className='w-80' src={cheaf1} alt="" />
            <p className='flex justify-center '>Alain Ducasse</p>
        </div>
        <div className="">
        <img  className='w-60' src={cheaf2} alt="" />
        <p className='flex justify-center '>Gordon Ramsay</p>
        </div>

        <div className="">
        <img className='w-80' src={cheaf3} alt="" />
        <p className='flex justify-center '>Heston Blumenthal</p>

        </div>
        <div className="">
        <img className='w-60' src={cheaf4} alt="" />
        <p className='flex justify-center '>Gordon Ramsay</p>

        </div>
    </div>
    </>
  )
}
