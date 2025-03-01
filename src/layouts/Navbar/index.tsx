'use client';

import React, { useState } from 'react';
import images from '@/configs/images';

export default function Navbar() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [activeLink, setActiveLink] = useState('Home');

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
    <div className="flex items-center px-6 py-3 w-full">
      <div className='flex ml-[50px]'>
        <images.logo />
        <div className="text-[26px] mt-2 ml-2 font-bold whitespace-nowrap">
          <span className="text-blue-600">Tee</span>
          <span className="text-orange-500">'s</span>
          <span className="text-blue-600"> Library</span>
        </div>
      </div>

      <ul className="flex ml-[90px] space-x-4 text-[#00000080] text-[19px] w-auto">
        {["Home", "About", "Vision", "Contact Us"].map((item) => (
          <li
            key={item}
            className={`cursor-pointer pl-[26px] ${activeLink === item ? "font-bold text-black" : "font-normal"}`}
            onClick={() => setActiveLink(item)}
          >
            {item}
          </li>
        ))}
      </ul>

      <div className="relative flex items-center ml-[14px]">
        <images.search className="absolute left-3 w-5 h-5 text-gray-500 mt-1" />
        <input
          type="text"
          placeholder="Search"
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
            setIsSearchOpen(true);
          }}
          className="border-2 rounded-lg px-10 py-1 focus:outline-none focus:ring-0 h-[43px] w-[340px] text-[#6A6565]"
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
        <div className='ml-[27px]'>
          <images.notification />
        </div>
        {isLoggedIn ? (
          <>
            <span className="text-gray-600 cursor-pointer ml-[30px]">🛒</span>
            <img
              src={user.avatar}
              alt="Avatar"
              className="w-8 h-8 rounded-full cursor-pointer"
              onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
            />
          </>
        ) : (
          <div className="flex space-x-2 ml-[20px]">
            <button className="text-[#5352EDB5] font-semibold mr-[30px]">LOGIN</button>
            <button className="bg-[#FF7F56] text-white px-4 py-1 rounded-md ml-[30px]">Sign Up</button>
          </div>
        )}
      </div>

      {isUserMenuOpen && (
        <div className="absolute top-12 right-6 bg-white shadow-lg rounded-md p-4 w-48">
          <p className="font-semibold">{user.name}</p>
          <p className="text-sm text-gray-600">{user.email}</p>
          <p className="text-sm text-gray-600">{user.phone}</p>
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