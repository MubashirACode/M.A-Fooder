import React, { useState } from 'react'
import { IoMdClose } from "react-icons/io";
import { ItemsCards } from './ItemsCards';
import { useSelector } from 'react-redux';
import { FaCartShopping } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
export const AddCart = () => {
const navigate = useNavigate();


    const [activecart, setActiveCart] = useState(false);

    const cartItems = useSelector((state) => state.cart.cart);

const totalQty = cartItems.reduce((totalQty, item)=> totalQty + item.qty, 0 )


const totalprice = cartItems.reduce((total , item ) => total + item.qty * item.price, 0 );
     
    return (
        <>

            <div className={`    fixed right-0 top-0 bg-white w-full p-5 lg:w-[20vw] mb-3  h-full  ${activecart ? "translate-x-0" : "translate-x-full"}  transition-all  duration-500 z-50    `}>
                <div className="flex justify-between items-center my-3 ">
                    <span className='text-xl font-bold  text-gray-800'>My Orders</span>
                    <IoMdClose onClick={() => setActiveCart(!activecart)} className='border-2 border-gray-600 text-gray-600 font-bold p-1  text-xl rounded-md hover:text-red-400  hover:border-red-400 cursor-pointer' />
                </div>

                { cartItems.length >0 ?  cartItems.map((food) => {
                        return <ItemsCards key={food.id} id={food.id} name={food.name} price={food.price} img={food.img} qty={food.qty} />;
                    })

              : <h2 className='text-center text-xl font-bold text-gray-800 '>Your Cart is Empty</h2>  }




                <div className="absolute bottom-0">
                    <h3 className='font-semibold text-gray-800'>Items  :{totalQty}  </h3>
                    <h3 className='font-semibold text-gray-800'>Total Amount : {totalprice}</h3>
                    <hr className='w-[90vw] lg:w-[18vw] my-2 ' />
                    <button  onClick={()=>navigate("/sucess")}  className='bg-green-500 mb-5 font-bold px-3 text-white py-2 rounded-lg  w-[90vw] lg:w-[18vw] '>Checkout</button>
                </div>



            </div>
            <FaCartShopping onClick={() => setActiveCart(!activecart)} className={`  cursor-pointer  rounded-full bg-blue-600 text-white shadow-md text-5xl  p-3  fixed bottom-10 right-4   ${totalQty > 0 && "animate-bounce delay-500   transition-all  "}   `} />

        </>
    )
}
