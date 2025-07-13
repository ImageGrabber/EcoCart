"use client";

import Footer from '@/components/Footer';
import { useState } from 'react';

const categories = [
  { name: 'Milks & Creams', img: 'https://elessi.b-cdn.net/elementor/wp-content/uploads/2016/06/organic-cat5.jpg' },
  { name: 'Fruits', img: 'https://elessi.b-cdn.net/elementor/wp-content/uploads/2016/06/organic-cat7.jpg' },
  { name: 'Vegetables', img: 'https://elessi.b-cdn.net/elementor/wp-content/uploads/2016/06/organic-cat6.jpg' },
  { name: 'Nut Gifts', img: 'https://elessi.b-cdn.net/elementor/wp-content/uploads/2016/06/organic-cat1.jpg' },
  { name: 'Nuts & Seeds', img: 'https://elessi.b-cdn.net/elementor/wp-content/uploads/2023/09/organic-cat10.jpg' },
  { name: 'Fresh Tomatoes', img: 'https://elessi.b-cdn.net/elementor/wp-content/uploads/2023/09/organic-cat9.jpg' },
];

const products = [
  {
    name: "Cherry Tomatoes",
    price: 9,
    img: "https://pngimg.com/uploads/tomato/tomato_PNG12588.png",
    weights: ['1 KG', '500 G'],
    badge: "-7%",
    wishlist: false,
  },
  {
    name: "Red Onion",
    price: 10,
    img: "https://img.cdn4dd.com/cdn-cgi/image/fit=cover,width=672,height=672,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/5922c60a-f512-40fe-acf8-37085b77e000-retina-large.jpg",
    weights: ['500 G', '250 G'],
    badge: null,
    wishlist: false,
  },
  {
    name: "Red Cabbage",
    price: 15,
    img: "https://www.veggycation.com.au/siteassets/veggycationvegetable/cabbage-red.jpg",
    weights: ['1 KG', '500 G'],
    badge: null,
    wishlist: false,
  },
  {
    name: "Organic Lemon",
    price: 20,
    oldPrice: 25,
    img: "https://pngimg.com/uploads/lemon/lemon_PNG25204.png",
    weights: ['1 KG', '500 G'],
    badge: "-20%",
    limited: true,
    wishlist: false,
  },
  {
    name: "Organic Almaverde",
    price: 18,
    img: "https://onlineorganics.ca/cdn/shop/products/organic-almaverde-puree-passata-pile_700x700.jpg?v=1748123411",
    weights: ['500 G', '250 G'],
    badge: null,
    wishlist: false,
  },
  {
    name: "Orange Cauliflower",
    price: 10,
    img: "https://www.seedway.com/app/uploads/2020/04/Clementine-1_Jan2021.png",
    weights: ['1 KG', '500 G'],
    badge: null,
    wishlist: false,
  },
  {
    name: "Plum Tomato",
    price: 11,
    img: "https://pngimg.com/uploads/tomato/tomato_PNG12588.png",
    weights: ['500 G', '250 G'],
    badge: "-37%",
    wishlist: false,
  },
  {
    name: "Fresh Bergamot",
    price: 7,
    img: "https://pngimg.com/uploads/lemon/lemon_PNG25204.png",
    weights: ['1 KG', '500 G'],
    badge: null,
    wishlist: false,
  },
  {
    name: "Cucumber",
    price: 7,
    img: "https://mucci-production-user-uploads-bucket.s3.amazonaws.com/images/Product-IMG_MiniCucumbers-rev2.original.png",
    weights: ['500 G', '250 G'],
    badge: null,
    wishlist: false,
  },
  {
    name: "Green Pepper",
    price: 8,
    img: "https://produits.bienmanger.com/38827-0w600h600_Organic_Fresh_Green_Peppers.jpg",
    weights: ['1 KG', '500 G'],
    badge: null,
    wishlist: false,
  },
  {
    name: "Eggplant",
    price: 12,
    img: "https://www.veggycation.com.au/siteassets/veggycationvegetable/eggplant.jpg",
    weights: ['500 G', '250 G'],
    badge: null,
    wishlist: false,
  },
  {
    name: "Carrot",
    price: 6,
    img: "https://pngimg.com/uploads/carrot/carrot_PNG4980.png",
    weights: ['1 KG', '500 G'],
    badge: null,
    wishlist: false,
  },
];

export default function ShopPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8;
  return (
    <div className="bg-white min-h-screen flex flex-col">
      {/* Hero/Banner */}
      <div className="w-full py-10 px-4 flex flex-col items-center relative bg-cover bg-center" style={{ backgroundImage: 'url(https://elessi.b-cdn.net/elementor/wp-content/uploads/2016/06/organic-breadcrumb-1.jpg)' }}>
        <div className="text-center">
          {/* Breadcrumb Navigation */}
          <div className="flex items-center justify-center gap-2 mb-4 text-sm">
            <a href="/" className="text-gray-600 hover:text-black transition-colors">Home</a>
            <span className="text-gray-400">/</span>
            <span className="text-black font-medium">Shop</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-2 text-black">Shop</h1>
          <div className="text-gray-700 text-sm">Discover fresh organic products</div>
        </div>
      </div>
      {/* Category Bar */}
      <div className="flex flex-row items-center justify-center gap-10 py-8 px-4 overflow-x-auto bg-white">
        {categories.map((cat) => (
          <div key={cat.name} className="flex flex-col items-center min-w-[140px] p-4 rounded-lg transition-all duration-300 hover:shadow-lg hover:bg-white cursor-pointer">
            <img src={cat.img} alt={cat.name} className="w-24 h-24 object-contain mb-3" />
            <span className="text-base font-medium text-gray-700 text-center">{cat.name}</span>
          </div>
        ))}
      </div>
      {/* Filter/Sort Bar */}
      <div className="flex flex-wrap items-center justify-between border-b border-gray-100 px-4 py-4 max-w-6xl mx-auto w-full mb-4">
        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
          <span>Filter by:</span>
          <button className="px-2 py-1 rounded border border-gray-200">Categories</button>
          <button className="px-2 py-1 rounded border border-gray-200">Price</button>
          <button className="px-2 py-1 rounded border border-gray-200">Status</button>
          <span className="ml-2">20 results</span>
        </div>
        <div className="flex items-center gap-4 text-sm text-gray-500 mt-2 md:mt-0">
          <span>Sort by</span>
          <button className="px-2 py-1 rounded border border-gray-200">Latest</button>
          {/* Grid/list icons (placeholders) */}
          <div className="flex gap-1 ml-2">
            <span className="w-5 h-5 bg-gray-200 rounded" />
            <span className="w-5 h-5 bg-gray-200 rounded" />
            <span className="w-5 h-5 bg-gray-200 rounded" />
            <span className="w-5 h-5 bg-gray-200 rounded" />
          </div>
        </div>
      </div>
      {/* Product Grid */}
      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-4 pb-8">
        {products
          .slice((currentPage - 1) * productsPerPage, currentPage * productsPerPage)
          .map((prod, idx) => (
          <div key={prod.name + idx} className="bg-white rounded-lg shadow-sm border border-gray-50 p-6 flex flex-col items-center relative group transition-all">
            {/* Wishlist icon */}
            <button className="absolute top-4 right-4 text-gray-300 hover:text-lime-600">
              <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 21C12 21 4 13.5 4 8.5C4 5.5 6.5 3 9.5 3C11.04 3 12.5 3.99 13.07 5.36C13.64 3.99 15.1 3 16.65 3C19.65 3 22.15 5.5 22.15 8.5C22.15 13.5 12 21 12 21Z"/></svg>
            </button>
            {/* Badge */}
            {prod.badge && (
              <span className="absolute top-4 left-4 text-xs font-bold px-2 py-1 rounded bg-lime-500 text-white">
                {prod.badge}
                {prod.limited && <span className="ml-1 bg-yellow-400 text-white px-1 rounded">LIMITED</span>}
              </span>
            )}
            {/* Product Image */}
            <img src={prod.img} alt={prod.name} className="w-28 h-28 object-contain mb-4" />
            {/* Name */}
            <div className="font-semibold text-lg text-gray-900 mb-2">{prod.name}</div>
            {/* Price */}
            <div className="flex items-center gap-2 mb-2">
              {prod.oldPrice && <span className="line-through text-gray-400">${prod.oldPrice.toFixed(2)}</span>}
              <span className="text-gray-900 font-bold text-lg">${prod.price.toFixed(2)}</span>
            </div>
            {/* Weights */}
            <div className="flex gap-2 mb-2">
              {prod.weights && prod.weights.map((w, i) => (
                <span key={i} className="border border-gray-200 rounded px-2 py-0.5 text-xs text-gray-500">{w}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
      
      {/* Pagination */}
      <div className="max-w-6xl mx-auto w-full px-4 pb-16 mt-8">
        <div className="flex justify-center items-center gap-2">
          <button
            onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
            disabled={currentPage === 1}
            className="px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Previous
          </button>
          
          {Array.from({ length: Math.ceil(products.length / productsPerPage) }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`px-3 py-2 text-sm font-medium rounded-md ${
                currentPage === page
                  ? 'bg-lime-600 text-white'
                  : 'text-gray-500 bg-white border border-gray-300 hover:bg-gray-50'
              }`}
            >
              {page}
            </button>
          ))}
          
          <button
            onClick={() => setCurrentPage(Math.min(Math.ceil(products.length / productsPerPage), currentPage + 1))}
            disabled={currentPage === Math.ceil(products.length / productsPerPage)}
            className="px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
} 