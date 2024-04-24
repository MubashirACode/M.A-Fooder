import React from 'react'
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import toast from 'react-hot-toast';
import {useDispatch } from 'react-redux'
import { removeFromCart , incrementQty , decrementQty  } from '../redux/slices/CardsSlice'

export const ItemsCards = ({id, name ,price ,img , qty}) => {
    const dispatch = useDispatch();


   
    return (
        <>

            <div className="flex gap-2 shadow-md rounded-lg p-2  mb-3">
            <MdDelete   onClick={()=> {
            dispatch(removeFromCart({id, name , img, price, qty}))
        
            toast(`${name} Removed`, {
                icon: '🤚',
              });
        
        } } className='absolute right-7  text-gray-600  cursor-pointer ' />

                <img src={img} alt=""  className='w-[50px] h-[50px]' />


                <div className="">
                    <h2 className='font-bold text-gray-800'>{name}</h2>
                    <div className="flex justify-between items-center w-full">
                        <span className="  text-green-500 font-bold  ">₹{price}</span>
                   
                    <div className="flex  justify-center items-center absolute right-7 gap-2">
                    <AiOutlineMinus onClick={()=>  qty > 1 ?   dispatch(decrementQty({id}))  : (qty = 0)  } className='border-2 border-gray-600 hover-text-white  hover-bg-green-500 hover:border-none rounded-md  text-lg  transition-all ease-linear cursor-pointer  ' />
                        
                        <span>{qty}</span>
                        <AiOutlinePlus  onClick={()=> qty >=  1 ? dispatch(incrementQty({id})) : (qty = 0)  }  className='border-2 border-gray-600 hover-text-white  hover-bg-green-500 hover:border-none rounded-md - text-lg  transition-all ease-linear cursor-pointer '/>
                    </div>
                    </div>
                </div>
            </div>

        </>
    )
}
