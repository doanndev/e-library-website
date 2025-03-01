'use client';

import React from 'react';
import { useState } from 'react';
import Logo from "@/assets/logo.svg";
import Search from "@/assets/search.svg";
import Notification from "@/assets/notification.svg";

export default function Navbar() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const user = { name: 'John Doe', avatar: '/avatar.png' }; // Giả định user đăng nhập

  return (
    <div className="flex items-center px-6 py-3 w-[1440px]">
      {/* Logo */}
      <div className='flex ml-[50px]'>
       <Logo/>
       <div className="text-[26px] mt-2 ml-2 font-bold whitespace-nowrap">
  <span className="text-blue-600">Tee</span>
  <span className="text-orange-500">'s</span>
  <span className="text-blue-600"> Library</span>
</div>
      </div>
      
      <ul className="flex ml-[90px] space-x-4 text-gray-700 text-[19px] w-auto ">
        <li className="font-bold cursor-pointer ">Home</li>
        <li className="cursor-pointer pl-[26px]">About</li>
        <li className="cursor-pointer pl-[26px] ">Vision</li>
        <li className="cursor-pointer pl-[26px]">Contact Us</li>
      </ul>
      
      {/* Search Bar */}
      <div className="relative flex items-center ml-[14px]">
  <Search className="absolute left-3 w-5 h-5 text-gray-500 mt-1" />
  <input
  type="text"
  placeholder="Search"
  value={searchQuery}
  onChange={(e) => {
    setSearchQuery(e.target.value);
    setIsSearchOpen(true);
  }}
  className="border-2 rounded-lg px-10 py-1 focus:outline-none focus:ring-2 focus:ring-blue-400 h-[43px] w-[340px] text-[#6A6565] placeholder-[#6A6565]"
/>

</div>

      {/* Icons */}
      <div className="flex items-center space-x-4 cursor-pointer">
        <div className='ml-[27px]'>
            <Notification />
        </div>
        {isLoggedIn ? (
          <>
            <span className="text-gray-600 cursor-pointer">🛒</span>
            <img
              src={user.avatar}
              alt="Avatar"
              className="w-8 h-8 rounded-full cursor-pointer"
              onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
            />
          </>
        ) : (
          <div className="flex space-x-2  ml-[20px]">
            <button className="text-blue-500 font-semibold mr-[30px]">LOGIN</button>
            <button className="bg-orange-500 text-white px-4 py-1 rounded-md ml-[30px]">Sign Up</button>
          </div>
        )}
      </div>

      {/* Search Modal */}
      {isSearchOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <h2 className="text-lg font-bold">Search Results for "{searchQuery}"</h2>
            <button onClick={() => setIsSearchOpen(false)} className="mt-3 bg-gray-300 px-3 py-1 rounded">Close</button>
          </div>
        </div>
      )}
      
      {/* User Menu Modal */}
      {isUserMenuOpen && (
        <div className="absolute top-12 right-6 bg-white shadow-lg rounded-md p-4 w-48">
          <p className="font-semibold">{user.name}</p>
          <button
            onClick={() => {
              setIsLoggedIn(false);
              setIsUserMenuOpen(false);
            }}
            className="mt-2 w-full bg-red-500 text-white py-1 rounded"
          >
            Log Out
          </button>
        </div>
      )}
      
    </div>
  );
}
