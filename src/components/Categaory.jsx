import React, { useEffect, useState } from 'react'
import FoodData from '../fooddata/Fooddata'
import { useDispatch , useSelector } from 'react-redux';
import { setCategory } from '../redux/slices/CategorySlice';
export const Categaory = () => {

  const [categoryies, setCategoryies] = useState([]);


  const listcategory = ()=>{
      const uniqueCategory = [
         ...new  Set(FoodData.map((food) => food.category))
      ]
      setCategoryies(uniqueCategory)
      console.log(uniqueCategory)
  }

  useEffect(() => {
  listcategory();
  }, [])

  const dispatch = useDispatch();


  const selectedCategory = useSelector((state) =>state.category.category)


  return (
    <>
    
    <div className="ml-6">
        <h3 className='text-xl  font-semibold '>Find your best food</h3>
        <div className="my-5 flex gap-3 overflow-x-scroll scroll-smooth  lg:overflow-x-hidden">
        <button 
                  onClick={()=> dispatch(setCategory("All"))}
              
       className={`px-3 py-2  bg-gray-200 font-bold rounded-lg
        hover:bg-green-500  hover:text-white
         ${selectedCategory == "All" && "bg-green-500  text-white" }   `}>All</button>
            

            {
              categoryies.map((category , index )=>{
                return(
                  <button 
                  onClick={()=> dispatch(setCategory(category))}
                   key={index}
                    className={` px-3 py-2  bg-gray-200 font-bold rounded-lg hover:bg-green-500 
                     hover:text-white   ${selectedCategory == category && "bg-green-500  text-white" }   `}>{category}</button>
                )
              })
            }
        </div>
    </div>
    
    </>
  )
}
