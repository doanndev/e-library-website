'use client';

import React, { useState } from 'react';
import images from '@/configs/images';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Navbar() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [activeLink, setActiveLink] = useState('Home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const user = {
    name: 'John Doe',
    avatar: images.avata,
    email: 'johndoe@example.com',
    phone: '+84 123 456 789'
  };

  const searchResults = [
    "The Great Gatsby",
    "To Kill a Mockingbird",
    "1984",
    "Moby Dick",
    "The Catcher in the Rye"
  ];

  const filteredResults = searchQuery
    ? searchResults.filter((item) => item.toLowerCase().includes(searchQuery.toLowerCase()))
    : [];

  return (
    <div className="flex items-center justify-between px-4 sm:px-6 md:px-8 lg:px-12 py-3 w-full bg-white shadow-md relative">
      <div className='flex items-center'>
        <button className="lg:hidden text-2xl mr-4" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
        <images.logo className="w-8 sm:w-10 md:w-12 lg:w-14" />
        <div className="text-[20px] sm:text-[22px] md:text-[24px] lg:text-[26px] ml-2 font-bold whitespace-nowrap">
          <span className="text-blue-600">Tee</span>
          <span className="text-orange-500">'s</span>
          <span className="text-blue-600"> Library</span>
        </div>
      </div>
      
      <ul className="hidden md:flex space-x-4 text-[#00000080] text-[16px] sm:text-[18px] md:text-[19px]">
        {["Home", "About", "Vision", "Contact Us"].map((item) => (
          <li
            key={item}
            className={`cursor-pointer ${activeLink === item ? "font-bold text-black" : "font-normal"}`}
            onClick={() => setActiveLink(item)}
          >
            {item}
          </li>
        ))}
      </ul>
      
      {isMobileMenuOpen && (
        <ul className="absolute top-16 left-0 w-full bg-white shadow-lg flex flex-col text-lg p-4 space-y-4 md:hidden">
          {["Home", "About", "Vision", "Contact Us"].map((item) => (
            <li
              key={item}
              className="cursor-pointer"
              onClick={() => {
                setActiveLink(item);
                setIsMobileMenuOpen(false);
              }}
            >
              {item}
            </li>
          ))}
        </ul>
      )}
      
      <div className="relative flex items-center ml-4">
        <images.search className="absolute left-3 w-4 sm:w-5 h-4 sm:h-5 text-gray-500 mt-1" />
        <input
          type="text"
          placeholder="Search"
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
            setIsSearchOpen(true);
          }}
          className="border-2 rounded-lg px-8 sm:px-10 py-1 focus:outline-none focus:ring-0 h-[35px] sm:h-[40px] md:h-[43px] w-[140px] sm:w-[200px] md:w-[280px] lg:w-[340px] text-[#6A6565]"
        />
        {isSearchOpen && filteredResults.length > 0 && (
          <div className="absolute top-12 left-0 w-full bg-white shadow-lg rounded-lg p-2">
            {filteredResults.map((item, index) => (
              <div
                key={index}
                className="px-4 py-2 cursor-pointer hover:bg-gray-200"
                onClick={() => {
                  setSearchQuery(item);
                  setIsSearchOpen(false);
                }}
              >
                {item}
              </div>
            ))}
          </div>
        )}
      </div>
      
      <div className="flex items-center space-x-4 cursor-pointer">
        <div className='hidden md:block'>
          <images.notification />
        </div>
      {isLoggedIn ? (
    <>
      <span className="hidden md:block text-gray-600 cursor-pointer pl-[37px] pr-9">🛒</span>
      <img
        src={user.avatar}
        alt="Avatar"
        className="w-6 sm:w-7 md:w-8 h-6 sm:h-7 md:h-8 rounded-full cursor-pointer "
        onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
      />
    </>
  ) : (
    <div className="flex space-x-2">
      <button className="text-[#5352EDB5] font-semibold">LOGIN</button>
      <button className="bg-[#FF7F56] text-white px-4 py-1 rounded-md">Sign Up</button>
    </div>
  )}
</div>


      {isUserMenuOpen && (
        <div className="absolute top-12 right-6 bg-white shadow-lg rounded-md p-4 w-48 z-50">
          <p className="font-semibold">{user.name}</p>
          <p className="text-sm text-gray-600">{user.email}</p>
          <p className="text-sm text-gray-600">{user.phone}</p>
          <button
            onClick={() => {
              setIsUserMenuOpen(false); // Đóng menu trước
              setTimeout(() => setIsLoggedIn(false), 100); // Đợi đóng menu rồi mới logout
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
