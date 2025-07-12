"use client";

import { FaUser, FaShoppingCart, FaHeart, FaExchangeAlt, FaBars } from "react-icons/fa";
import { useState } from "react";
import Footer from "../components/Footer";

export default function Home() {
  const [lang, setLang] = useState("English");
  const [currency, setCurrency] = useState("US Dollar");

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
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
            <div className="flex flex-col items-center cursor-pointer"><FaUser /><span className="text-xs">Account</span></div>
            <div className="flex flex-col items-center cursor-pointer"><FaShoppingCart /><span className="text-xs">Cart</span></div>
            <div className="flex flex-col items-center cursor-pointer"><FaHeart /><span className="text-xs">Wishlist</span></div>
            <div className="flex flex-col items-center cursor-pointer"><FaExchangeAlt /><span className="text-xs">Compare</span></div>
          </div>
        </div>
      </header>

      {/* Navigation Row */}
      <nav className="w-full border-b border-gray-100 bg-white">
        <div className="max-w-[1600px] mx-auto px-4 flex items-center gap-4 py-3">
          <button className="bg-[#7bbf3a] text-white font-semibold px-6 py-3 rounded shadow hover:bg-[#6aa82e] transition-colors text-sm flex items-center gap-2">
            <FaBars />
            BROWSE CATEGORIES
          </button>
          <div className="flex gap-6 ml-4 text-sm font-medium">
            <a href="#" className="hover:text-[#7bbf3a]">Home</a>
            <a href="#" className="hover:text-[#7bbf3a]">Shop</a>
            <a href="#" className="hover:text-[#7bbf3a]">Elements</a>
            <a href="#" className="hover:text-[#7bbf3a]">Pages</a>
            <a href="#" className="hover:text-[#7bbf3a]">Vendors</a>
          </div>
        </div>
      </nav>

      {/* Hero Banner - Screenshot Style */}
      <section className="w-full max-w-[1600px] mx-auto flex flex-col md:flex-row gap-6 px-4 py-8 items-stretch bg-white">
        {/* Left: Image */}
        <div className="flex-1 flex items-center justify-center rounded-2xl overflow-hidden bg-white min-h-[350px]">
          <img
            src="https://www.pngmart.com/files/3/Vegetable-PNG-Photos.png"
            alt="Groceries"
            className="object-cover w-full h-full max-h-[400px]"
          />
        </div>
        {/* Center: Headline and CTA */}
        <div className="flex-1 flex flex-col justify-center items-center md:items-start bg-white rounded-2xl px-8 py-12 text-center md:text-left min-h-[350px]">
          <h1 className="text-4xl font-bold mb-4">
            Farm Fresh <span className="text-[#7bbf3a]">Vegetables & Food</span> <span className="text-black">100% Organics</span>
          </h1>
          <p className="text-gray-500 mb-8 text-lg">Alway fresh organic products for you</p>
          <button className="bg-[#7bbf3a] text-white px-8 py-3 rounded font-semibold shadow hover:bg-[#6aa82e] transition-colors text-base">Shop now</button>
        </div>
        {/* Right: Sale Card */}
        <div className="w-full md:w-[350px] bg-[#e6f9e6] rounded-2xl flex flex-col justify-start items-start p-10 text-left min-h-[350px] relative overflow-hidden">
          <h2 className="text-2xl font-bold mb-1">
            <span className="text-[#7bbf3a]">30%</span> <span className="text-gray-900">SALE OFF</span>
          </h2>
          <p className="text-gray-800 mb-1 text-sm">Spring Fresh Fruit<br/>Special Offer.</p>
          <img
            src="https://www.pngarts.com/files/3/Vegetable-PNG-Picture.png"
            alt="Oranges"
            className="absolute right-0 bottom-0 w-[90%] h-[70%] object-contain select-none pointer-events-none"
            style={{ zIndex: 1 }}
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full max-w-[1600px] mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Feature 1 */}
          <div className="flex items-center gap-6">
            <div className="w-24 h-24 rounded-full bg-white flex items-center justify-center border-2 border-dotted border-gray-200">
              <span className="text-5xl">🥬</span>
            </div>
            <div>
              <h3 className="font-bold text-xl mb-1">Always Fresh</h3>
              <p className="text-gray-500 text-sm">Lorem ipsum dolor sit amet, consecteturer adipiscing elit</p>
            </div>
          </div>
          {/* Feature 2 */}
          <div className="flex items-center gap-6">
            <div className="w-24 h-24 rounded-full bg-white flex items-center justify-center border-2 border-dotted border-gray-200">
              <span className="text-5xl">🌱</span>
            </div>
            <div>
              <h3 className="font-bold text-xl mb-1">100% Organic</h3>
              <p className="text-gray-500 text-sm">Lorem ipsum dolor sit amet, consecteturer adipiscing elit</p>
            </div>
          </div>
          {/* Feature 3 */}
          <div className="flex items-center gap-6">
            <div className="w-24 h-24 rounded-full bg-white flex items-center justify-center border-2 border-dotted border-gray-200">
              <span className="text-5xl">🍃</span>
            </div>
            <div>
              <h3 className="font-bold text-xl mb-1">Premium Quality</h3>
              <p className="text-gray-500 text-sm">Lorem ipsum dolor sit amet, consecteturer adipiscing elit</p>
            </div>
          </div>
          {/* Feature 4 */}
          <div className="flex items-center gap-6">
            <div className="w-24 h-24 rounded-full bg-white flex items-center justify-center border-2 border-dotted border-gray-200">
              <span className="text-5xl">🥗</span>
            </div>
            <div>
              <h3 className="font-bold text-xl mb-1">Natural</h3>
              <p className="text-gray-500 text-sm">Lorem ipsum dolor sit amet, consecteturer adipiscing elit</p>
            </div>
          </div>
        </div>
      </section>

      {/* Recommendations Section */}
      <Recommendations />

      {/* Latest Blog Section */}
      <section className="w-full max-w-[1600px] mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-2">Latest blog</h2>
        <p className="text-center text-gray-400 mb-10">The freshest and most excitings news</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Blog Card 1 */}
          <div>
            <img src="https://images.pexels.com/photos/8845420/pexels-photo-8845420.jpeg" alt="Organic vs Non Organic Food Facts" className="w-full h-56 object-cover rounded-2xl mb-4" />
            <div className="text-xs text-gray-400 tracking-widest mb-2">ORGANIC</div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Organic vs Non Organic Food Facts</h3>
            <div className="flex items-center text-xs text-gray-400 gap-2">
              <span className="material-icons text-base">event</span> 08 September
              <span className="mx-1">|</span> NasaTheme
            </div>
          </div>
          {/* Blog Card 2 */}
          <div>
            <img src="https://img.freepik.com/free-photo/healthy-snack-box-with-crackers-olives_144627-16525.jpg" alt="Your Gateway to a Holistic Lifestyle" className="w-full h-56 object-cover rounded-2xl mb-4" />
            <div className="text-xs text-gray-400 tracking-widest mb-2">ORGANIC</div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Your Gateway to a Holistic Lifestyle</h3>
            <div className="flex items-center text-xs text-gray-400 gap-2">
              <span className="material-icons text-base">event</span> 08 September
              <span className="mx-1">|</span> NasaTheme
            </div>
          </div>
          {/* Blog Card 3 */}
          <div>
            <img src="https://img.freepik.com/free-photo/nachos-with-avocado-beer_144627-16526.jpg" alt="Organic Food — Kickstart Your Healthy Lifestyle" className="w-full h-56 object-cover rounded-2xl mb-4" />
            <div className="text-xs text-gray-400 tracking-widest mb-2">ORGANIC</div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Organic Food — Kickstart Your Healthy Lifestyle</h3>
            <div className="flex items-center text-xs text-gray-400 gap-2">
              <span className="material-icons text-base">event</span> 08 September
              <span className="mx-1">|</span> NasaTheme
            </div>
          </div>
          {/* Blog Card 4 */}
          <div>
            <img src="https://img.freepik.com/free-photo/green-tea-ginger-lemon_144627-16527.jpg" alt="Unfolding the Benefits of Organic Green Tea" className="w-full h-56 object-cover rounded-2xl mb-4" />
            <div className="text-xs text-gray-400 tracking-widest mb-2">ORGANIC</div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Unfolding the Benefits of Organic Green Tea</h3>
            <div className="flex items-center text-xs text-gray-400 gap-2">
              <span className="material-icons text-base">event</span> 08 September
              <span className="mx-1">|</span> NasaTheme
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

// Recommendations Section Component
function Recommendations() {
  const tabs = [
    "Featured",
    "Popular",
    "Best Selling",
    "Top Rate",
    "On Sale",
    "New Added",
  ];
  const [activeTab, setActiveTab] = useState("Featured");

  // Sample product data for each tab
  const products = {
    Featured: [
      { name: "Cherry Tomatoes", price: 9, img: "https://pngimg.com/uploads/tomato/tomato_PNG12588.png" },
      { name: "Red Onion", price: 10, img: "https://img.cdn4dd.com/cdn-cgi/image/fit=cover,width=672,height=672,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/5922c60a-f512-40fe-acf8-37085b77e000-retina-large.jpg" },
      { name: "Red Cabbage", price: 15, img: "https://www.freshpoint.com/wp-content/uploads/2020/02/Freshpoint-red-cabbage.jpg" },
      { name: "Organic Lemon", price: 20, oldPrice: 25, badge: "-20%", limited: true, img: "https://pngimg.com/uploads/lemon/lemon_PNG25204.png" },
      { name: "Organic Almaverde", price: 18, img: "https://pngimg.com/uploads/zucchini/zucchini_PNG1.png" },
      { name: "Orange Cauliflower", price: 10, img: "https://pngimg.com/uploads/cauliflower/cauliflower_PNG12933.png" },
      { name: "Plum Tomato", price: 11, img: "https://pngimg.com/uploads/tomato/tomato_PNG12588.png" },
      { name: "Fresh Bergamot", price: 7, img: "https://pngimg.com/uploads/lemon/lemon_PNG25204.png" },
      { name: "Chili Pepper", price: 10, img: "https://pngimg.com/uploads/chili_pepper/chili_pepper_PNG16.png" },
      { name: "Yellow Potatoes", price: 5, img: "https://pngimg.com/uploads/potato/potato_PNG10117.png" },
    ],
    Popular: [
      { name: "Green Pepper", price: 8, img: "https://pngimg.com/uploads/pepper/pepper_PNG3212.png" },
      { name: "Eggplant", price: 12, img: "https://pngimg.com/uploads/eggplant/eggplant_PNG13060.png" },
      { name: "Carrot", price: 6, img: "https://pngimg.com/uploads/carrot/carrot_PNG4980.png" },
      { name: "Broccoli", price: 14, img: "https://pngimg.com/uploads/broccoli/broccoli_PNG7288.png" },
    ],
    "Best Selling": [
      { name: "Cucumber", price: 7, img: "https://pngimg.com/uploads/cucumber/cucumber_PNG8546.png" },
      { name: "Pumpkin", price: 13, img: "https://pngimg.com/uploads/pumpkin/pumpkin_PNG13599.png" },
      { name: "Radish", price: 9, img: "https://pngimg.com/uploads/radish/radish_PNG14313.png" },
      { name: "Spinach", price: 11, img: "https://pngimg.com/uploads/spinach/spinach_PNG3.png" },
    ],
    "Top Rate": [
      { name: "Sweet Corn", price: 8, img: "https://pngimg.com/uploads/corn/corn_PNG5276.png" },
      { name: "Green Beans", price: 10, img: "https://pngimg.com/uploads/bean/bean_PNG2297.png" },
      { name: "Lettuce", price: 6, img: "https://pngimg.com/uploads/lettuce/lettuce_PNG10218.png" },
      { name: "Beetroot", price: 9, img: "https://pngimg.com/uploads/beet/beet_PNG16.png" },
    ],
    "On Sale": [
      { name: "Zucchini", price: 5, oldPrice: 8, badge: "-37%", img: "https://pngimg.com/uploads/zucchini/zucchini_PNG1.png" },
      { name: "Red Bell Pepper", price: 7, oldPrice: 10, badge: "-30%", img: "https://pngimg.com/uploads/pepper/pepper_PNG3212.png" },
    ],
    "New Added": [
      { name: "Purple Carrot", price: 12, img: "https://pngimg.com/uploads/carrot/carrot_PNG4980.png" },
      { name: "Romanesco", price: 15, img: "https://pngimg.com/uploads/cauliflower/cauliflower_PNG12933.png" },
    ],
  };

  const currentProducts = (products[activeTab] || []).slice(0, 8);

  return (
    <section className="w-full max-w-[1600px] mx-auto px-4 py-16">
      <h2 className="text-2xl font-bold mb-8">Recommendations</h2>
      <div className="flex flex-col md:flex-row gap-8">
        {/* Left Card */}
        <div className="relative rounded-lg min-w-[320px] max-w-[400px] w-full mb-4 md:mb-0 h-[600px] overflow-hidden flex flex-col justify-end">
          {/* Background Image */}
          <img
            src="https://images.pexels.com/photos/8845420/pexels-photo-8845420.jpeg"
            alt="Vegetables Basket"
            className="absolute inset-0 w-full h-full object-cover z-0 select-none pointer-events-none"
          />
          {/* Content at bottom */}
          <div className="relative z-10 p-8 pb-10 w-full flex flex-col items-start">
            <button className="bg-white text-black px-6 py-2 rounded-md font-semibold shadow hover:bg-gray-100 transition-colors text-sm">Shop now</button>
          </div>
        </div>
        {/* Right: Tabs and Product Grid */}
        <div className="flex-1">
          {/* Tabs */}
          <div className="flex gap-6 mb-6 border-b border-gray-100 text-sm font-medium">
            {tabs.map(tab => (
              <button
                key={tab}
                className={`pb-2 transition-colors ${activeTab === tab ? "border-b-2 border-gray-900 text-gray-900" : "text-gray-400 hover:text-gray-900"}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
          {/* Product Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {currentProducts.map((prod, idx) => (
              <div key={prod.name + idx} className="bg-white rounded-lg p-4 flex flex-col items-center text-center border border-gray-200 relative group transition-all">
                {/* Badges */}
                {prod.badge && (
                  <span className="absolute top-3 left-3 bg-[#7bbf3a] text-white text-xs font-bold px-2 py-1 rounded">{prod.badge}</span>
                )}
                {prod.limited && (
                  <span className="absolute top-3 right-3 bg-yellow-400 text-white text-xs font-bold px-2 py-1 rounded">LIMITED</span>
                )}
                {/* Product Image */}
                <img src={prod.img} alt={prod.name} className="w-24 h-24 object-contain mb-4" />
                {/* Product Name */}
                <h4 className="font-semibold text-gray-900 mb-1 text-base">{prod.name}</h4>
                {/* Price */}
                <div className="flex items-center justify-center gap-2 mb-2">
                  {prod.oldPrice && (
                    <span className="text-gray-400 line-through text-sm">${prod.oldPrice.toFixed(2)}</span>
                  )}
                  <span className="text-gray-900 font-bold text-lg">${prod.price.toFixed(2)}</span>
                </div>
                {/* Wishlist Icon */}
                <button className="absolute top-3 right-3 text-gray-300 hover:text-[#7bbf3a] text-lg">
                  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 21C12 21 4 13.5 4 8.5C4 5.5 6.5 3 9.5 3C11.04 3 12.5 3.99 13.07 5.36C13.64 3.99 15.1 3 16.65 3C19.65 3 22.15 5.5 22.15 8.5C22.15 13.5 12 21 12 21Z"/></svg>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
