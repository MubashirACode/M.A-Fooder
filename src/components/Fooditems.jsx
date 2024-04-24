import React from 'react'
import { Foodcards } from './Foodcards'
import Fooddata from '../fooddata/Fooddata.jsx'
import toast, { Toaster } from 'react-hot-toast';
import { useSelector } from 'react-redux';


export const Fooditems = () => {

  const handletoast = (name) => toast.success(`Added ${name}`);

  const category = useSelector((state) => state.category.category);
  const search = useSelector((state) => state.search.search);

  return (
    <>
      <Toaster
        position="top-center"
        reverseOrder={false}
      />



      <div className="flex flex-wrap  gap-3 justify-center lg:justify-start mx-6 my-10">
        {
          Fooddata.filter((food) => {
            if (category == "All") {
              return food.name.toLowerCase().includes(search.toLowerCase())

            } else {
              return category == food.category && food.name.toLowerCase().includes(search.toLowerCase());
            }
          }).map((food) => (

            <Foodcards
              key={food.id}
              id={food.id}
              name={food.name}
              price={food.price}
              desc={food.desc}
              rating={food.rating}
              img={food.img}
              handletoast={handletoast}


            />

          ))

        }

      </div>


    </>
  )
}
