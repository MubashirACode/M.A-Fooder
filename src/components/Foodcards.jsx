import React from 'react';
import { FaStar } from "react-icons/fa";
import {useDispatch} from 'react-redux'
import { addToCart } from '../redux/slices/CardsSlice';




export const Foodcards = ({ id, name, price, desc, img, rating , handletoast }) => {
   

   const dispatch = useDispatch();
    return (
    

        <div className="font-bold w-[250px] bg-white p-5 flex flex-col rounded-lg gap-3">
            <img className='w-auto h-[130px] hover:scale-110 cursor-grab transition-all duration-500 ease-in-out' src={img} alt="" />

            <div className="text-sm flex justify-between">
                <h2>{name}</h2>
                <span className='text-green-500 '>₹ {price} </span>
            </div>

            <p className='text-sm font-normal'>{desc.slice(0, 50)}</p>

            <div className="flex justify-between">
                <span className="flex justify-center items-center">
                    <FaStar className='mr-1 text-yellow-500' />{rating}
                </span>

                <button 
                
                onClick={()=>{
                    dispatch(addToCart({id,img, name, price,rating , price , qty:1}))
                    handletoast(name);
                }}
                className="p-1 text-white bg-green-500 hover:bg-green-600 rounded-lg text-sm">
                    Add To Cart
                </button>
            </div>
        </div>
        
    );
};
