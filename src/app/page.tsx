"use client";

import { HiOutlineUser, HiOutlineShoppingCart, HiOutlineHeart, HiOutlineArrowsRightLeft, HiOutlineBars3 } from "react-icons/hi2";
import { useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

// Move products variable here so it is accessible globally
// Sample product data for each tab
const products = {
  Featured: [
    { name: "Cherry Tomatoes", badge: "-7%", price: 9, img: "https://pngimg.com/uploads/tomato/tomato_PNG12588.png" },
    { name: "Red Onion", price: 10, img: "https://img.cdn4dd.com/cdn-cgi/image/fit=cover,width=672,height=672,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/5922c60a-f512-40fe-acf8-37085b77e000-retina-large.jpg" },
    { name: "Red Cabbage", price: 15,  img: "https://www.veggycation.com.au/siteassets/veggycationvegetable/cabbage-red.jpg" },
    { name: "Organic Lemon", price: 20, oldPrice: 25, badge: "-20%", limited: true, img: "https://pngimg.com/uploads/lemon/lemon_PNG25204.png" },
    { name: "Organic Almaverde", price: 18, img: "https://onlineorganics.ca/cdn/shop/products/organic-almaverde-puree-passata-pile_700x700.jpg?v=1748123411" },
    { name: "Orange Cauliflower", price: 10, img: "https://www.seedway.com/app/uploads/2020/04/Clementine-1_Jan2021.png" },
    { name: "Plum Tomato", price: 11, badge: "-37%", img: "https://pngimg.com/uploads/tomato/tomato_PNG12588.png" },
    { name: "Fresh Bergamot", price: 7, img: "https://pngimg.com/uploads/lemon/lemon_PNG25204.png" },
    { name: "Cucumber", price: 7, img: "https://mucci-production-user-uploads-bucket.s3.amazonaws.com/images/Product-IMG_MiniCucumbers-rev2.original.png" },
  ],
  Popular: [
    { name: "Green Pepper", price: 8, img: "https://produits.bienmanger.com/38827-0w600h600_Organic_Fresh_Green_Peppers.jpg" },
    { name: "Eggplant", price: 12, img: "https://www.veggycation.com.au/siteassets/veggycationvegetable/eggplant.jpg" },
    { name: "Carrot", price: 6, img: "https://pngimg.com/uploads/carrot/carrot_PNG4980.png" },
    { name: "Broccoli", price: 14, img: "https://www.healthyfood.com/wp-content/uploads/2017/03/What_to_do_with_broccoli-1-500x375.jpg" },
    { name: "Cherry Tomatoes", price: 9, img: "https://pngimg.com/uploads/tomato/tomato_PNG12588.png" },
    { name: "Red Onion", price: 10, img: "https://img.cdn4dd.com/cdn-cgi/image/fit=cover,width=672,height=672,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/5922c60a-f512-40fe-acf8-37085b77e000-retina-large.jpg" },
    { name: "Red Cabbage", price: 15, img: "https://www.veggycation.com.au/siteassets/veggycationvegetable/cabbage-red.jpg" },
    { name: "Organic Lemon", price: 20, oldPrice: 25, badge: "-20%", limited: true, img: "https://pngimg.com/uploads/lemon/lemon_PNG25204.png" },
    { name: "Cucumber", price: 7, img: "https://www.freshpoint.com/wp-content/uploads/2020/02/freshpoint-english-cucumber-scaled.jpg" },
  ],
  "Best Selling": [
    { name: "Cucumber", price: 7, img: "https://www.freshpoint.com/wp-content/uploads/2020/02/freshpoint-english-cucumber-scaled.jpg" },
    { name: "Pumpkin", price: 13, img: "https://www.healthxchange.sg/adobe/dynamicmedia/deliver/dm-aid--7f272a4e-bae5-42d0-ad04-d96dea3764ee/pumpkin-health-benefits-nutrition-facts.jpg?preferwebp=true" },
    { name: "Radish", price: 9, img: "https://www.hometownseeds.com/cdn/shop/products/Radish_Crimson_Giant.jpg?v=1536955835" },
    { name: "Spinach", price: 11, img: "https://pngimg.com/uploads/spinach/spinach_PNG3.png" },
    { name: "Green Pepper", price: 8, img: "https://produits.bienmanger.com/38827-0w600h600_Organic_Fresh_Green_Peppers.jpg" },
    { name: "Eggplant", price: 12, img: "https://www.veggycation.com.au/siteassets/veggycationvegetable/eggplant.jpg" },
    { name: "Carrot", price: 6, img: "https://pngimg.com/uploads/carrot/carrot_PNG4980.png" },
    { name: "Broccoli", price: 14, img: "https://www.healthyfood.com/wp-content/uploads/2017/03/What_to_do_with_broccoli-1-500x375.jpg" },
  ],
  "Top Rate": [
    { name: "Sweet Corn", price: 8, img: "https://pngimg.com/uploads/corn/corn_PNG5276.png" },
    { name: "Green Beans", price: 10, img: "https://www.allthatgrows.in/cdn/shop/products/Beans-Green_f59ec75a-7aef-4bcb-8803-4c84dbdb57ee.jpg?v=1598078125&width=1080" },
    { name: "Lettuce", price: 6, img: "https://www.100daysofrealfood.com/wp-content/uploads/2023/11/vecteezy_lettuce-salad-leaf-isolated-on-white-background-with_5582269-scaled.jpg" },
    { name: "Beetroot", price: 9, img: "https://www.oifood.in/files/products/c401b43a628d3c11ef07a5ba08a766ab.jpg" },
    { name: "Cucumber", price: 7, img: "https://www.freshpoint.com/wp-content/uploads/2020/02/freshpoint-english-cucumber-scaled.jpg" },
    { name: "Pumpkin", price: 13, img: "https://www.healthxchange.sg/adobe/dynamicmedia/deliver/dm-aid--7f272a4e-bae5-42d0-ad04-d96dea3764ee/pumpkin-health-benefits-nutrition-facts.jpg?preferwebp=true" },
    { name: "Radish", price: 9, img: "https://www.hometownseeds.com/cdn/shop/products/Radish_Crimson_Giant.jpg?v=1536955835" },
    { name: "Spinach", price: 11, img: "https://pngimg.com/uploads/spinach/spinach_PNG3.png" },
  ],
  "On Sale": [
    { name: "Zucchini", price: 5, oldPrice: 8, badge: "-37%", img: "https://chefsmandala.com/wp-content/uploads/2018/03/Squash-Zucchini.jpg" },
    { name: "Red Bell Pepper", price: 7, oldPrice: 10, badge: "-30%", img: "https://www.producemarketguide.com/media/user_5q6Kv4eMkN/176/red-bell-peppers_variety-page.png" },
    { name: "Sweet Corn", price: 8, img: "https://pngimg.com/uploads/corn/corn_PNG5276.png" },
    { name: "Green Beans", price: 10, img: "https://www.allthatgrows.in/cdn/shop/products/Beans-Green_f59ec75a-7aef-4bcb-8803-4c84dbdb57ee.jpg?v=1598078125&width=1080" },
    { name: "Lettuce", price: 6, img: "https://www.100daysofrealfood.com/wp-content/uploads/2023/11/vecteezy_lettuce-salad-leaf-isolated-on-white-background-with_5582269-scaled.jpg" },
    { name: "Beetroot", price: 9, img: "https://www.oifood.in/files/products/c401b43a628d3c11ef07a5ba08a766ab.jpg" },
    { name: "Cucumber", price: 7, img: "https://www.freshpoint.com/wp-content/uploads/2020/02/freshpoint-english-cucumber-scaled.jpg" },
    { name: "Pumpkin", price: 13, img: "https://www.healthxchange.sg/adobe/dynamicmedia/deliver/dm-aid--7f272a4e-bae5-42d0-ad04-d96dea3764ee/pumpkin-health-benefits-nutrition-facts.jpg?preferwebp=true" },
  ],
  "New Added": [
    { name: "Purple Carrot", price: 12, img: "https://pngimg.com/uploads/carrot/carrot_PNG4980.png" },
    { name: "Romanesco", price: 15, img: "https://www.princedebretagne.com/sites/default/files/styles/540x350/public/2020-06/chou-romanesco.png?itok=4Vr8tzDf" },
    { name: "Zucchini", price: 5, oldPrice: 8, badge: "-37%", img: "https://chefsmandala.com/wp-content/uploads/2018/03/Squash-Zucchini.jpg" },
    { name: "Red Bell Pepper", price: 7, oldPrice: 10, badge: "-30%", img: "https://www.producemarketguide.com/media/user_5q6Kv4eMkN/176/red-bell-peppers_variety-page.png" },
    { name: "Sweet Corn", price: 8, img: "https://pngimg.com/uploads/corn/corn_PNG5276.png" },
    { name: "Green Beans", price: 10, img: "https://www.allthatgrows.in/cdn/shop/products/Beans-Green_f59ec75a-7aef-4bcb-8803-4c84dbdb57ee.jpg?v=1598078125&width=1080" },
    { name: "Lettuce", price: 6, img: "https://www.100daysofrealfood.com/wp-content/uploads/2023/11/vecteezy_lettuce-salad-leaf-isolated-on-white-background-with_5582269-scaled.jpg" },
    { name: "Beetroot", price: 9, img: "https://www.oifood.in/files/products/c401b43a628d3c11ef07a5ba08a766ab.jpg" },
    { name: "Cucumber", price: 7, img: "https://www.freshpoint.com/wp-content/uploads/2020/02/freshpoint-english-cucumber-scaled.jpg" },
  ],
};

export default function Home() {
  const [lang, setLang] = useState("English");
  const [currency, setCurrency] = useState("US Dollar");

  return (
    <div className="min-h-screen bg-white text-gray-900">
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
        {/* Right: Sale Card Slider */}
        <div className="w-full md:w-[350px] bg-[#e6f9e6] rounded-lg flex flex-col justify-start items-start p-0 text-left min-h-[350px] relative overflow-hidden">
          <Swiper
            spaceBetween={0}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            modules={[Pagination, Autoplay]}
            className="w-full h-full"
          >
            <SwiperSlide>
              <div className="p-8 h-[350px] flex flex-col justify-start items-start relative">
                <h2 className="text-2xl font-bold mb-1">
                  <span className="text-[#7bbf3a]">30%</span> <span className="text-gray-900">SALE OFF</span>
                </h2>
                <p className="text-gray-800 mb-1 text-sm">Spring Fresh Fruit<br/>Special Offer.</p>
                <img
                  src="https://www.pngarts.com/files/3/Vegetable-PNG-Picture.png"
                  alt="Oranges"
                  className="absolute right-0 bottom-0 w-[95%] h-[80%] object-contain select-none pointer-events-none"
                  style={{ zIndex: 1 }}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="p-8 h-[350px] flex flex-col justify-start items-start relative">
                <h2 className="text-2xl font-bold mb-1">
                  <span className="text-[#7bbf3a]">Buy 1 Get 1</span> <span className="text-gray-900">FREE</span>
                </h2>
                <p className="text-gray-800 mb-1 text-sm">Fresh Red Onions<br/>Today Only.</p>
                <img
                  src="https://www.freepnglogos.com/uploads/vegetables-png/vegetables-about-our-philosophy-super-healthy-kids-23.png"
                  alt="Fresh Vegetables"
                  className="absolute right-0 bottom-0 w-[85%] h-[65%] object-contain select-none pointer-events-none"
                  style={{ zIndex: 1 }}
                />
              </div>
            </SwiperSlide>
          </Swiper>
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

       {/* Promo Card Section */}
       <section className="w-full max-w-[1600px] mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 - Brick wall bg, bag image right, text left */}
          <div className="relative bg-white rounded-sm shadow-sm flex items-center p-8 h-full min-h-[100px] border border-gray-100 overflow-hidden" style={{backgroundImage: 'url(https://elessi.b-cdn.net/elementor/wp-content/uploads/2023/09/organic2-h-banner2.jpg)', backgroundSize: 'cover', backgroundPosition: 'center'}}>
            {/* Text Content */}
            <div className="flex-1 z-10">
              <h3 className="text-3xl md:text-2xl font-bold text-gray-900 mb-6">Farm Fresh<br/>Vegetables Everyday</h3>
              <div className="text-xl md:text-1xl font-medium mb-6">Sale off <span className="text-red-600 font-bold">25%</span></div>
              <button className="bg-lime-600 hover:bg-lime-700 text-white text-sm font-semibold px-8 py-3 rounded-lg shadow transition">Shop Now</button>
            </div>
            {/* Bag Image on Right */}
            
            {/* Overlay for rounded corners */}
            <div className="absolute inset-0 rounded-xl pointer-events-none" style={{background: 'rgba(255,255,255,0.01)'}}></div>
          </div>
          {/* Card 2 */}
          <div className="relative bg-white rounded-sm shadow-sm flex items-center p-8 h-full min-h-[100px] border border-gray-100 overflow-hidden" style={{backgroundImage: 'url(https://elessi.b-cdn.net/elementor/wp-content/uploads/2023/09/organic2-h-banner3.jpg)', backgroundSize: 'cover', backgroundPosition: 'center'}}>
            {/* Text Content */}
            <div className="flex-1 z-10">
              <h3 className="text-3xl md:text-2xl font-bold text-gray-900 mb-6">EcoCart<br/>Apple Oil</h3>
              <div className="text-xl md:text-1xl font-medium mb-6">Sale off <span className="text-red-600 font-bold">25%</span></div>
              
            </div>
            {/* Bag Image on Right */}
            
            {/* Overlay for rounded corners */}
            <div className="absolute inset-0 rounded-xl pointer-events-none" style={{background: 'rgba(255,255,255,0.01)'}}></div>
          </div>
          {/* Card 3 */}
          <div className="relative bg-white rounded-sm shadow-sm flex items-center p-8 h-full min-h-[100px] border border-gray-100 overflow-hidden" style={{backgroundImage: 'url(https://elessi.b-cdn.net/elementor/wp-content/uploads/2023/09/organic2-h-banner4.jpg)', backgroundSize: 'cover', backgroundPosition: 'center'}}>
            {/* Text Content */}
            <div className="flex-1 z-10">
              <h3 className="text-3xl md:text-2xl font-bold text-gray-900 mb-6">EcoCart<br/>Fresh Fruits</h3>
              <div className="text-xl md:text-1xl font-medium mb-6">Sale <span className="text-red-600 font-bold">10%</span></div>
              <button className="bg-lime-600 hover:bg-lime-700 text-white text-sm font-semibold px-8 py-3 rounded-lg shadow transition">Shop Now</button>
             
            </div>
            {/* Bag Image on Right */}
            
            {/* Overlay for rounded corners */}
            <div className="absolute inset-0 rounded-xl pointer-events-none" style={{background: 'rgba(255,255,255,0.01)'}}></div>
          </div>
        </div>
      </section>

      {/* Best Selling Section with new RecommendationsAlt */}
      <BestSellingRecommendations />

     

      {/* Latest Blog Section */}
      <section className="w-full max-w-[1600px] mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-2">Latest blog</h2>
        <p className="text-center text-gray-400 mb-10">The freshest and most excitings news</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Blog Card 1 */}
          <div>
            <img src="https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg" alt="Organic vs Non Organic Food Facts" className="w-full h-56 object-cover rounded-2xl mb-4" />
            <div className="text-xs text-gray-400 tracking-widest mb-2">ORGANIC</div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Organic vs Non Organic Food Facts</h3>
            <div className="flex items-center text-xs text-gray-400 gap-2">
              <span className="material-icons text-base">event</span> 08 September
              <span className="mx-1">|</span> NasaTheme
            </div>
          </div>
          {/* Blog Card 2 */}
          <div>
            <img src="https://images.pexels.com/photos/3872406/pexels-photo-3872406.jpeg" alt="Your Gateway to a Holistic Lifestyle" className="w-full h-56 object-cover rounded-2xl mb-4" />
            <div className="text-xs text-gray-400 tracking-widest mb-2">ORGANIC</div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Your Gateway to a Holistic Lifestyle</h3>
            <div className="flex items-center text-xs text-gray-400 gap-2">
              <span className="material-icons text-base">event</span> 08 September
              <span className="mx-1">|</span> NasaTheme
            </div>
          </div>
          {/* Blog Card 3 */}
          <div>
            <img src="https://images.pexels.com/photos/1640770/pexels-photo-1640770.jpeg" alt="Organic Food — Kickstart Your Healthy Lifestyle" className="w-full h-56 object-cover rounded-2xl mb-4" />
            <div className="text-xs text-gray-400 tracking-widest mb-2">ORGANIC</div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Organic Food — Kickstart Your Healthy Lifestyle</h3>
            <div className="flex items-center text-xs text-gray-400 gap-2">
              <span className="material-icons text-base">event</span> 08 September
              <span className="mx-1">|</span> NasaTheme
            </div>
          </div>
          {/* Blog Card 4 */}
          <div>
            <img src="https://images.pexels.com/photos/4552171/pexels-photo-4552171.jpeg" alt="Unfolding the Benefits of Organic Green Tea" className="w-full h-56 object-cover rounded-2xl mb-4" />
            <div className="text-xs text-gray-400 tracking-widest mb-2">ORGANIC</div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Unfolding the Benefits of Organic Green Tea</h3>
            <div className="flex items-center text-xs text-gray-400 gap-2">
              <span className="material-icons text-base">event</span> 08 September
              <span className="mx-1">|</span> NasaTheme
            </div>
          </div>
        </div>
      </section>
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

// New RecommendationsAlt component
function RecommendationsAlt() {
  const tabs = [
    "All",
    "Fruits & Vegetables",
    "Frozen Seafoods",
    "Raw Meats",
    "Coffees & Teas",
    "Pet Foods",
  ];
  const [activeTab, setActiveTab] = useState("All");

  // Sample product data for each tab
  const altProducts = {
    All: [
      { name: "Apple", price: 3, img: "https://pngimg.com/uploads/apple/apple_PNG12433.png" },
      { name: "Salmon Fillet", price: 12, img: "https://coasttocoastseafood.ca/cdn/shop/products/GO41005_800x_8a954d24-f900-424d-930b-40e45683a51e.webp?v=1667101786" },
      { name: "Chicken Breast", price: 8, img: "https://platform.relish.com/wp-content/uploads/2023/06/Boneless-Skinless-Chicken-Breast.png" },
      { name: "Coffee Beans", price: 5, img: "https://www.thesourcebulkfoods.ca/wp-content/uploads/2020/02/600001_UK-Coffee-Beans.jpg" },
      { name: "Dog Food", price: 10, img: "https://pngimg.com/uploads/dog_food/dog_food_PNG31.png" },
      { name: "Banana", price: 2, img: "https://pngimg.com/uploads/banana/banana_PNG842.png" },
      { name: "Tea Box", price: 4, img: "https://images.homedepot.ca/productimages/p_1001756596.jpg?product-images=l" },
      { name: "Shrimp", price: 14, img: "https://www.seafoodwatch.org/globalassets/sfw/images/fish/dynamic-tab/brown-shrimp-dynamic.png" },
    ],
    "Fruits & Vegetables": [
      { name: "Apple", price: 3, img: "https://pngimg.com/uploads/apple/apple_PNG12433.png" },
      { name: "Banana", price: 2, img: "https://pngimg.com/uploads/banana/banana_PNG842.png" },
      { name: "Carrot", price: 1, img: "https://pngimg.com/uploads/carrot/carrot_PNG4980.png" },
      { name: "Broccoli", price: 2, img: "https://pngimg.com/uploads/broccoli/broccoli_PNG7288.png" },
      { name: "Tomato", price: 2, img: "https://pngimg.com/uploads/tomato/tomato_PNG12588.png" },
      { name: "Lettuce", price: 2, img: "https://pngimg.com/uploads/lettuce/lettuce_PNG10218.png" },
      { name: "Orange", price: 3, img: "https://pngimg.com/uploads/orange/orange_PNG807.png" },
      { name: "Potato", price: 1, img: "https://pngimg.com/uploads/potato/potato_PNG10117.png" },
    ],
    "Frozen Seafoods": [
      { name: "Salmon Fillet", price: 12, img: "https://coasttocoastseafood.ca/cdn/shop/products/GO41005_800x_8a954d24-f900-424d-930b-40e45683a51e.webp?v=1667101786" },
      { name: "Shrimp", price: 14, img: "https://www.seafoodwatch.org/globalassets/sfw/images/fish/dynamic-tab/brown-shrimp-dynamic.png" },
      { name: "Crab", price: 16, img: "https://pngimg.com/uploads/crab/crab_PNG18708.png" },
      { name: "Lobster", price: 20, img: "https://pngimg.com/uploads/lobster/lobster_PNG18708.png" },
      { name: "Tuna Steak", price: 13, img: "https://pngimg.com/uploads/tuna/tuna_PNG9.png" },
      { name: "Squid", price: 11, img: "https://pngimg.com/uploads/squid/squid_PNG18708.png" },
      { name: "Mussels", price: 10, img: "https://pngimg.com/uploads/mussel/mussel_PNG18708.png" },
      { name: "Octopus", price: 15, img: "https://pngimg.com/uploads/octopus/octopus_PNG18708.png" },
    ],
    "Raw Meats": [
      { name: "Chicken Breast", price: 8, img: "https://platform.relish.com/wp-content/uploads/2023/06/Boneless-Skinless-Chicken-Breast.png" },
      { name: "Pork Chop", price: 9, img: "https://pngimg.com/uploads/pork/pork_PNG44.png" },
      { name: "Beef Steak", price: 15, img: "https://pngimg.com/uploads/beef/beef_PNG35.png" },
      { name: "Lamb Chop", price: 14, img: "https://pngimg.com/uploads/lamb/lamb_PNG18708.png" },
      { name: "Turkey Leg", price: 7, img: "https://pngimg.com/uploads/turkey/turkey_PNG18708.png" },
      { name: "Duck Breast", price: 10, img: "https://pngimg.com/uploads/duck/duck_PNG18708.png" },
      { name: "Sausage", price: 6, img: "https://pngimg.com/uploads/sausage/sausage_PNG18708.png" },
      { name: "Bacon", price: 5, img: "https://pngimg.com/uploads/bacon/bacon_PNG18708.png" },
    ],
    "Coffees & Teas": [
      { name: "Coffee Beans", price: 5, img: "https://www.thesourcebulkfoods.ca/wp-content/uploads/2020/02/600001_UK-Coffee-Beans.jpg" },
      { name: "Tea Box", price: 4, img: "https://images.homedepot.ca/productimages/p_1001756596.jpg?product-images=l" },
      { name: "Green Tea", price: 6, img: "https://pngimg.com/uploads/tea/tea_PNG9883.png" },
      { name: "Black Coffee", price: 5, img: "https://pngimg.com/uploads/coffee/coffee_PNG10404.png" },
      { name: "Herbal Tea", price: 7, img: "https://pngimg.com/uploads/tea/tea_PNG9884.png" },
      { name: "Espresso", price: 6, img: "https://pngimg.com/uploads/coffee/coffee_PNG10405.png" },
      { name: "Latte", price: 7, img: "https://pngimg.com/uploads/coffee/coffee_PNG10406.png" },
      { name: "Iced Tea", price: 4, img: "https://pngimg.com/uploads/tea/tea_PNG9885.png" },
    ],
    "Pet Foods": [
      { name: "Dog Food", price: 10, img: "https://pngimg.com/uploads/dog_food/dog_food_PNG31.png" },
      { name: "Cat Food", price: 9, img: "https://pngimg.com/uploads/cat_food/cat_food_PNG31.png" },
      { name: "Bird Seed", price: 6, img: "https://pngimg.com/uploads/bird_seed/bird_seed_PNG31.png" },
      { name: "Fish Flakes", price: 5, img: "https://pngimg.com/uploads/fish_flakes/fish_flakes_PNG31.png" },
      { name: "Rabbit Pellets", price: 7, img: "https://pngimg.com/uploads/rabbit_food/rabbit_food_PNG31.png" },
      { name: "Hamster Mix", price: 6, img: "https://pngimg.com/uploads/hamster_food/hamster_food_PNG31.png" },
      { name: "Turtle Food", price: 8, img: "https://pngimg.com/uploads/turtle_food/turtle_food_PNG31.png" },
      { name: "Horse Feed", price: 12, img: "https://pngimg.com/uploads/horse_feed/horse_feed_PNG31.png" },
    ],
  };

  const currentProducts = (altProducts[activeTab] || []).slice(0, 8);

  return (
    <section className="w-full max-w-[1600px] mx-auto px-4 py-16">
      <h2 className="text-2xl font-bold mb-8">Shop by Category</h2>
      <div className="flex gap-6 mb-6 border-b border-gray-100 text-sm font-medium overflow-x-auto">
        {tabs.map(tab => (
          <button
            key={tab}
            className={`pb-2 transition-colors whitespace-nowrap ${activeTab === tab ? "border-b-2 border-gray-900 text-gray-900" : "text-gray-400 hover:text-gray-900"}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {currentProducts.map((prod, idx) => (
          <div key={prod.name + idx} className="bg-white rounded-lg p-4 flex flex-col items-center text-center border border-gray-200 relative group transition-all">
            <img src={prod.img} alt={prod.name} className="w-24 h-24 object-contain mb-4" />
            <h4 className="font-semibold text-gray-900 mb-1 text-base">{prod.name}</h4>
            <div className="flex items-center justify-center gap-2 mb-2">
              <span className="text-gray-900 font-bold text-lg">${prod.price.toFixed(2)}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// BestSellingRecommendations: same layout as Recommendations, but with new categories and altProducts
function BestSellingRecommendations() {
  const tabs = [
    "All",
    "Fruits & Vegetables",
    "Frozen Seafoods",
    "Raw Meats",
    "Coffees & Teas",
    "Pet Foods",
  ];
  const [activeTab, setActiveTab] = useState("All");

  const altProducts = {
    All: [
      { name: "Apple", price: 3, img: "https://pngimg.com/uploads/apple/apple_PNG12433.png" },
      { name: "Salmon Fillet", price: 12, img: "https://coasttocoastseafood.ca/cdn/shop/products/GO41005_800x_8a954d24-f900-424d-930b-40e45683a51e.webp?v=1667101786" },
      { name: "Chicken Breast", price: 8, img: "https://platform.relish.com/wp-content/uploads/2023/06/Boneless-Skinless-Chicken-Breast.png" },
      { name: "Coffee Beans", price: 5, img: "https://www.thesourcebulkfoods.ca/wp-content/uploads/2020/02/600001_UK-Coffee-Beans.jpg" },
      { name: "Dog Food", price: 10, img: "https://pngimg.com/uploads/dog_food/dog_food_PNG31.png" },
      { name: "Banana", price: 2, img: "https://pngimg.com/uploads/banana/banana_PNG842.png" },
      { name: "Tea Box", price: 4, img: "https://images.homedepot.ca/productimages/p_1001756596.jpg?product-images=l" },
      { name: "Shrimp", price: 14, img: "https://www.seafoodwatch.org/globalassets/sfw/images/fish/dynamic-tab/brown-shrimp-dynamic.png" },
    ],
    "Fruits & Vegetables": [
      { name: "Apple", price: 3, img: "https://pngimg.com/uploads/apple/apple_PNG12433.png" },
      { name: "Banana", price: 2, img: "https://pngimg.com/uploads/banana/banana_PNG842.png" },
      { name: "Carrot", price: 1, img: "https://pngimg.com/uploads/carrot/carrot_PNG4980.png" },
      { name: "Broccoli", price: 2, img: "https://pngimg.com/uploads/broccoli/broccoli_PNG7288.png" },
      { name: "Tomato", price: 2, img: "https://pngimg.com/uploads/tomato/tomato_PNG12588.png" },
      { name: "Lettuce", price: 2, img: "https://pngimg.com/uploads/lettuce/lettuce_PNG10218.png" },
      { name: "Orange", price: 3, img: "https://pngimg.com/uploads/orange/orange_PNG807.png" },
      { name: "Potato", price: 1, img: "https://pngimg.com/uploads/potato/potato_PNG10117.png" },
    ],
    "Frozen Seafoods": [
      { name: "Salmon Fillet", price: 12, img: "https://coasttocoastseafood.ca/cdn/shop/products/GO41005_800x_8a954d24-f900-424d-930b-40e45683a51e.webp?v=1667101786" },
      { name: "Shrimp", price: 14, img: "https://www.seafoodwatch.org/globalassets/sfw/images/fish/dynamic-tab/brown-shrimp-dynamic.png" },
      { name: "Crab", price: 16, img: "https://pngimg.com/uploads/crab/crab_PNG18708.png" },
      { name: "Lobster", price: 20, img: "https://pngimg.com/uploads/lobster/lobster_PNG18708.png" },
      { name: "Tuna Steak", price: 13, img: "https://pngimg.com/uploads/tuna/tuna_PNG9.png" },
      { name: "Squid", price: 11, img: "https://pngimg.com/uploads/squid/squid_PNG18708.png" },
      { name: "Mussels", price: 10, img: "https://pngimg.com/uploads/mussel/mussel_PNG18708.png" },
      { name: "Octopus", price: 15, img: "https://pngimg.com/uploads/octopus/octopus_PNG18708.png" },
    ],
    "Raw Meats": [
      { name: "Chicken Breast", price: 8, img: "https://platform.relish.com/wp-content/uploads/2023/06/Boneless-Skinless-Chicken-Breast.png" },
      { name: "Pork Chop", price: 9, img: "https://pngimg.com/uploads/pork/pork_PNG44.png" },
      { name: "Beef Steak", price: 15, img: "https://pngimg.com/uploads/beef/beef_PNG35.png" },
      { name: "Lamb Chop", price: 14, img: "https://pngimg.com/uploads/lamb/lamb_PNG18708.png" },
      { name: "Turkey Leg", price: 7, img: "https://pngimg.com/uploads/turkey/turkey_PNG18708.png" },
      { name: "Duck Breast", price: 10, img: "https://pngimg.com/uploads/duck/duck_PNG18708.png" },
      { name: "Sausage", price: 6, img: "https://pngimg.com/uploads/sausage/sausage_PNG18708.png" },
      { name: "Bacon", price: 5, img: "https://pngimg.com/uploads/bacon/bacon_PNG18708.png" },
    ],
    "Coffees & Teas": [
      { name: "Coffee Beans", price: 5, img: "https://www.thesourcebulkfoods.ca/wp-content/uploads/2020/02/600001_UK-Coffee-Beans.jpg" },
      { name: "Tea Box", price: 4, img: "https://images.homedepot.ca/productimages/p_1001756596.jpg?product-images=l" },
      { name: "Green Tea", price: 6, img: "https://pngimg.com/uploads/tea/tea_PNG9883.png" },
      { name: "Black Coffee", price: 5, img: "https://pngimg.com/uploads/coffee/coffee_PNG10404.png" },
      { name: "Herbal Tea", price: 7, img: "https://pngimg.com/uploads/tea/tea_PNG9884.png" },
      { name: "Espresso", price: 6, img: "https://pngimg.com/uploads/coffee/coffee_PNG10405.png" },
      { name: "Latte", price: 7, img: "https://pngimg.com/uploads/coffee/coffee_PNG10406.png" },
      { name: "Iced Tea", price: 4, img: "https://pngimg.com/uploads/tea/tea_PNG9885.png" },
    ],
    "Pet Foods": [
      { name: "Dog Food", price: 10, img: "https://pngimg.com/uploads/dog_food/dog_food_PNG31.png" },
      { name: "Cat Food", price: 9, img: "https://pngimg.com/uploads/cat_food/cat_food_PNG31.png" },
      { name: "Bird Seed", price: 6, img: "https://pngimg.com/uploads/bird_seed/bird_seed_PNG31.png" },
      { name: "Fish Flakes", price: 5, img: "https://pngimg.com/uploads/fish_flakes/fish_flakes_PNG31.png" },
      { name: "Rabbit Pellets", price: 7, img: "https://pngimg.com/uploads/rabbit_food/rabbit_food_PNG31.png" },
      { name: "Hamster Mix", price: 6, img: "https://pngimg.com/uploads/hamster_food/hamster_food_PNG31.png" },
      { name: "Turtle Food", price: 8, img: "https://pngimg.com/uploads/turtle_food/turtle_food_PNG31.png" },
      { name: "Horse Feed", price: 12, img: "https://pngimg.com/uploads/horse_feed/horse_feed_PNG31.png" },
    ],
  };

  const currentProducts = (altProducts[activeTab] || []).slice(0, 8);

  return (
    <section className="w-full max-w-[1600px] mx-auto px-4 py-16">
      <h2 className="text-2xl font-bold mb-8">Best Selling</h2>
      <div className="flex flex-col md:flex-row gap-8">
        {/* Left Card */}
        <div className="relative rounded-lg min-w-[320px] max-w-[400px] w-full mb-4 md:mb-0 h-[600px] overflow-hidden flex flex-col justify-end">
          {/* Background Image */}
          <img
            src="https://images.pexels.com/photos/1633525/pexels-photo-1633525.jpeg"
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
                <img src={prod.img} alt={prod.name} className="w-24 h-24 object-contain mb-4" />
                <h4 className="font-semibold text-gray-900 mb-1 text-base">{prod.name}</h4>
                <div className="flex items-center justify-center gap-2 mb-2">
                  <span className="text-gray-900 font-bold text-lg">${prod.price.toFixed(2)}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
