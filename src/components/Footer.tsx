'use client';

import { FaFacebookF, FaTwitter, FaInstagram, FaEnvelope, FaCcVisa, FaCcMastercard, FaCcPaypal, FaCcDiscover } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-50 text-gray-800 font-sans border-t border-gray-100">
      <div className="max-w-[1600px] mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-4 gap-10 items-start">
        {/* Left: Logo & Contact */}
        <div className="space-y-6 col-span-1">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-3xl font-extrabold text-[#7bbf3a]">EcoCart</span>
            <span className="text-2xl">🌱</span>
          </div>
          <div className="text-sm leading-6">
            Calista Wise 7292 Dictum Av. Antonio, Italy.<br />
            (+01)-800-3456-88<br />
            ecocart@email.com<br />
            ecocart.com
          </div>
          <div className="flex gap-4 text-xl mt-2">
            <a href="#" className="hover:text-[#7bbf3a]"><FaFacebookF /></a>
            <a href="#" className="hover:text-[#7bbf3a]"><FaTwitter /></a>
            <a href="#" className="hover:text-[#7bbf3a]"><FaInstagram /></a>
            <a href="#" className="hover:text-[#7bbf3a]"><FaEnvelope /></a>
          </div>
        </div>
        {/* Center Left: Links */}
        <div className="space-y-2 text-sm">
          <div className="font-semibold mb-2">Delivery Information</div>
          <div>Privacy Policy</div>
          <div>Terms & Condition</div>
          <div>Search Terms</div>
          <div>Order & Return</div>
        </div>
        {/* Center Right: Links */}
        <div className="space-y-2 text-sm">
          <div className="font-semibold mb-2">Customer Service</div>
          <div>Privacy Policy</div>
          <div>Terms & Condition</div>
          <div>Best Seller</div>
          <div>Manufactures</div>
        </div>
        {/* Right: Newsletter, Hours, Payments */}
        <div className="space-y-6">
          <form className="flex gap-2 mb-4">
            <input type="email" placeholder="Enter your email here" className="flex-1 border border-gray-200 rounded px-4 py-2 outline-none" />
            <button type="submit" className="bg-[#7bbf3a] text-white px-6 py-2 rounded font-semibold hover:bg-[#6aa82e]">SUBSCRIBE</button>
          </form>
          <div className="text-sm">
            <div className="font-semibold mb-1">Monday - Friday <span className="float-right font-normal">08:00 - 20:00</span></div>
            <div className="font-semibold mb-1">Saturday <span className="float-right font-normal">09:00 - 21:00</span></div>
            <div className="font-semibold mb-1">Sunday <span className="float-right font-normal">13:00 - 22:00</span></div>
          </div>
          <div className="flex gap-3 mt-2 text-3xl text-gray-400">
            <FaCcVisa />
            <FaCcMastercard />
            <FaCcDiscover />
            <FaCcPaypal />
          </div>
        </div>
      </div>
      <div className="border-t border-gray-100 py-4 text-center text-sm text-gray-500 flex flex-col md:flex-row justify-between items-center max-w-[1600px] mx-auto px-4">
        <div>
          © 2025 <span className="font-semibold text-gray-700">EcoCart</span> — All Right reserved!
        </div>
        <div className="flex gap-6 mt-2 md:mt-0">
          <a href="#" className="hover:text-[#7bbf3a]">Accessibility</a>
          <a href="#" className="hover:text-[#7bbf3a]">Store Directory</a>
          <a href="#" className="hover:text-[#7bbf3a]">About Us</a>
          <a href="#" className="hover:text-[#7bbf3a]">Contact</a>
        </div>
      </div>
    </footer>
  );
} 