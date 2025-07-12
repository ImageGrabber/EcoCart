'use client';

import { FaFacebookF, FaEnvelope, FaInstagram } from 'react-icons/fa';
import { FaCcVisa, FaCcMastercard, FaCcPaypal, FaCcDiscover } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-white text-gray-900 font-sans border-t border-gray-100">
      <div className="max-w-[1600px] mx-auto px-4 pt-12 pb-6 grid grid-cols-1 md:grid-cols-4 gap-10 items-start">
        {/* Left: Logo & Contact */}
        <div className="space-y-6 col-span-1 min-w-[220px]">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-3xl font-extrabold text-gray-900" style={{letterSpacing: '0.5px'}}>Elessi</span>
            <span className="text-2xl"><svg width="28" height="20" viewBox="0 0 28 20" fill="none" xmlns="http://www.w3.org/2000/svg"><ellipse cx="24.5" cy="3.5" rx="3.5" ry="3.5" fill="#8BC34A"/><ellipse cx="19.5" cy="7.5" rx="2.5" ry="2.5" fill="#8BC34A"/></svg></span>
          </div>
          <div className="text-sm leading-10 mb-2">
            Calista Wise 7292 Dictum Av. Antonio, Italy.<br />
            (+01)-800-3456-88<br />
            nasathemes@gmail.com<br />
            elessi.nasatheme.com
          </div>
          <div className="flex gap-5 text-xl mt-2">
            <a href="#" className="hover:text-gray-700"><svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H5v4h5v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3V2z"/></svg></a>
            <a href="#" className="hover:text-gray-700"><FaFacebookF /></a>
            <a href="#" className="hover:text-gray-700"><FaEnvelope /></a>
            <a href="#" className="hover:text-gray-700"><FaInstagram /></a>
          </div>
        </div>
        {/* Center Left: Links */}
        <div className="space-y-5 text-sm min-w-[180px]">
          <div>Delivery Information</div>
          <div>Privacy Policy</div>
          <div>Terms & Condition</div>
          <div>Search Terms</div>
          <div>Order & Return</div>
        </div>
        {/* Center Right: Links */}
        <div className="space-y-5 text-sm min-w-[180px]">
          <div>Customer Service</div>
          <div>Privacy Policy</div>
          <div>Terms & Condition</div>
          <div>Best Seller</div>
          <div>Manufactures</div>
        </div>
        {/* Right: Newsletter, Hours, Payments */}
        <div className="space-y-6 min-w-[320px]">
          <form className="flex gap-2 mb-4">
            <input type="email" placeholder="Enter your email here" className="flex-1 border border-gray-200 rounded px-4 py-2 outline-none" />
            <button type="submit" className="bg-[#8BC34A] text-white px-6 py-2 rounded font-semibold hover:bg-[#7bbf3a]">SUBSCRIBE</button>
          </form>
          <div className="text-sm space-y-3">
            <div className="flex justify-between"><span>Monday - Friday</span><span>08:00 - 20:00</span></div>
            <div className="flex justify-between"><span>Saturday</span><span>09:00 - 21:00</span></div>
            <div className="flex justify-between"><span>Sunday</span><span>13:00 - 22:00</span></div>
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
          © 2023 <span className="font-semibold text-gray-700">Nasatheme</span> — All Right reserved!
        </div>
        <div className="flex gap-14 mt-2 md:mt-0">
          <a href="#" className="hover:text-gray-700">Accessibility</a>
          <a href="#" className="hover:text-gray-700">Store Directory</a>
          <a href="#" className="hover:text-gray-700">About Us</a>
          <a href="#" className="hover:text-gray-700">Contact Us</a>
        </div>
      </div>
    </footer>
  );
} 