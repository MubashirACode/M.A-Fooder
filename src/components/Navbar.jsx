import React from 'react';
import { useDispatch } from 'react-redux';
import { setSearch } from '../redux/slices/SearchSlice.jsx';
import logo from '../assets/img/logo.png'
export const Navbar = () => {
  const dispatch = useDispatch();

  const handleSearchChange = (e) => {
    dispatch(setSearch(e.target.value));
  };

  return (
    <nav className='flex flex-col lg:flex-row justify-between py-3 mx-6 mb-10'>
      <div className='flex items-center space-x-2'>

        <div className="flex">
          
       <img className='w-auto h-[50px] ' src={logo} alt="" />
       </div>

       <div className="text-3xl font-bold text-slate-800">
        M.A Fooder
       </div>
      </div>
      <div>
        <input 
          type="search"
          onChange={handleSearchChange}
          className='p-3 mt-5 border border-gray-400 text-sm rounded-lg w-full lg:w-[25vw]'
          placeholder='Search here'
          autoComplete='off'
        />
      </div>
    </nav>
  );
};
