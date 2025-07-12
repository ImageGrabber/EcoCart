"use client";
import { HiOutlineUser, HiOutlineShoppingCart, HiOutlineHeart, HiOutlineArrowsRightLeft, HiOutlineBars3 } from "react-icons/hi2";
import { useState } from "react";

export default function HomeHeader() {
  const [lang, setLang] = useState("English");
  const [currency, setCurrency] = useState("US Dollar");
  return (
    <>
      {/* Top Bar */}
      <div className="w-full bg-gray-50 text-xs flex justify-between items-center px-6 py-2 border-b border-gray-100">
        <span className="text-gray-500">Add anything here or just remove it ...</span>
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <select value={lang} onChange={e => setLang(e.target.value)} className="bg-transparent text-gray-700 outline-none">
              <option>English</option>
              <option>Spanish</option>
            </select>
            <span>|</span>
            <select value={currency} onChange={e => setCurrency(e.target.value)} className="bg-transparent text-gray-700 outline-none">
              <option>US Dollar</option>
              <option>Euro</option>
            </select>
          </div>
          <span className="hidden sm:inline text-gray-500"><b> (+01)-800-3456-88</b></span>
        </div>
      </div>

      {/* Header */}
      <header className="w-full bg-white border-b border-gray-100">
        <div className="max-w-[1600px] mx-auto px-4 flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <span className="text-2xl font-extrabold text-[#7bbf3a]">EcoCart</span>
            <span className="text-2xl">🌱</span>
          </div>
          {/* Search Bar */}
          <div className="flex-1 mx-8 max-w-2xl">
            <input
              type="text"
              placeholder="I'm shopping for ..."
              className="w-full px-6 py-3 rounded-full border border-gray-200 focus:border-[#7bbf3a] outline-none text-base bg-gray-50"
            />
          </div>
          {/* Icons */}
          <div className="flex items-center gap-6 text-gray-700 text-lg">
            <div className="flex flex-col items-center cursor-pointer"><HiOutlineUser /><span className="text-xs">Account</span></div>
            <div className="flex flex-col items-center cursor-pointer"><HiOutlineShoppingCart /><span className="text-xs">Cart</span></div>
            <div className="flex flex-col items-center cursor-pointer"><HiOutlineHeart /><span className="text-xs">Wishlist</span></div>
            <div className="flex flex-col items-center cursor-pointer"><HiOutlineArrowsRightLeft /><span className="text-xs">Compare</span></div>
          </div>
        </div>
      </header>

      {/* Navigation Row */}
      <nav className="w-full border-b border-gray-100 bg-white">
        <div className="max-w-[1600px] mx-auto px-4 flex items-center gap-4 py-3">
          <button className="bg-[#7bbf3a] text-white font-semibold px-6 py-3 rounded shadow hover:bg-[#6aa82e] transition-colors text-sm flex items-center gap-2">
            <HiOutlineBars3 />
            BROWSE CATEGORIES
          </button>
          <div className="flex gap-6 ml-4 text-sm font-medium text-gray-900">
            <a href="#" className="hover:text-[#7bbf3a]">Home</a>
            <a href="#" className="hover:text-[#7bbf3a]">Shop</a>
            <a href="#" className="hover:text-[#7bbf3a]">Elements</a>
            <a href="#" className="hover:text-[#7bbf3a]">Pages</a>
            <a href="#" className="hover:text-[#7bbf3a]">Vendors</a>
          </div>
        </div>
      </nav>
    </>
  );
} 