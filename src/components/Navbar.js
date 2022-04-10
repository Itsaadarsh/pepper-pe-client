import React from 'react';
import { MdNotifications, MdSearch } from 'react-icons/md';
import { FaUserCircle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

export const Navbar = () => {
  let navigate = useNavigate();

  return (
    <div className='flex justify-between bg-gray-200'>
      <button className='my-4 mx-14 text-3xl font-bold italic' onClick={() => navigate('/')}>
        Pepper Pe
      </button>
      <div className='flex'>
        <button className='h-0 flex m-5 text-xl font-bold'>
          <span className='mr-4'>
            <FaUserCircle size={30} />
          </span>
          Aadarsh S
        </button>
      </div>
    </div>
  );
};
