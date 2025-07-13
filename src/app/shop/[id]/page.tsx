"use client";
import { HiOutlineHeart, HiOutlineArrowsRightLeft } from "react-icons/hi2";

export default function ProductDetailPage() {
  // Mock data for Violet Cauliflower
  const product = {
    name: "Violet Cauliflower",
    img: "https://www.vegetables.co.nz/assets/Uploads/_resampled/FillWyIxMjAwIiwiNjAwIl0/cauliflower-purple.jpg",
    price: 10,
    oldPrice: 15,
    badge: "-33%",
    stock: 78,
    sold: 6,
    reviews: 8,
    rating: 5,
    saleEnds: {
      days: 170,
      hours: 19,
      mins: 14,
      secs: 23,
    },
  };

  return (
    <div className="bg-[#fafbfa] min-h-screen flex flex-col">
      <div className="max-w-[1200px] mx-auto w-full px-4 pt-8 pb-16">
        {/* Breadcrumb */}
        <div className="text-sm text-gray-500 mb-6 flex items-center gap-2">
          <a href="/" className="hover:underline">Home</a>
          <span>/</span>
          <a href="#" className="hover:underline">Organics</a>
          <span>/</span>
          <a href="#" className="hover:underline">Vegetables</a>
          <span>/</span>
          <a href="#" className="hover:underline">Daily Vegetables</a>
          <span>/</span>
          <span className="text-gray-700 font-medium">Root Vegetables</span>
        </div>
        <div className="flex flex-col md:flex-row gap-12 bg-white rounded-2xl shadow p-8 relative">
          {/* Left: Images */}
          <div className="flex flex-col gap-4 items-center md:w-1/2">
            <div className="flex flex-col gap-4 items-center">
              <img src={product.img} alt={product.name} className="w-80 h-80 object-contain rounded-xl bg-white border border-gray-100" />
              <div className="flex gap-2 mt-2">
                <img src={product.img} alt="thumb" className="w-16 h-16 object-contain rounded border border-gray-200" />
                <img src={product.img} alt="thumb2" className="w-16 h-16 object-contain rounded border border-gray-200 opacity-50" />
              </div>
            </div>
            <div className="flex gap-2 mt-4">
              <button className="p-2 rounded-full border border-gray-200 text-gray-400 hover:text-lime-600"><HiOutlineHeart size={22} /></button>
              <button className="p-2 rounded-full border border-gray-200 text-gray-400 hover:text-lime-600"><HiOutlineArrowsRightLeft size={22} /></button>
            </div>
          </div>
          {/* Right: Info */}
          <div className="flex-1 flex flex-col gap-4">
            <div className="flex items-center gap-2 mb-2">
              <span className="bg-lime-500 text-white text-xs font-bold px-2 py-1 rounded">{product.badge}</span>
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-yellow-400 text-lg">{'★★★★★'}</span>
              <span className="text-gray-500 text-sm">({product.reviews} customer reviews)</span>
            </div>
            <div className="flex items-center gap-4 mb-2">
              <span className="text-gray-400 line-through text-lg">${product.oldPrice.toFixed(2)}</span>
              <span className="text-2xl font-bold text-gray-900">${product.price.toFixed(2)}</span>
            </div>
            <div className="text-sm text-gray-500 mb-2">{product.sold} sold in last 2 hours</div>
            <div className="text-gray-400 text-sm mb-4">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</div>
            {/* Sale Timer */}
            <div className="mb-4">
              <div className="text-sm font-semibold text-gray-700 mb-1">Hurry up! Sale end in:</div>
              <div className="flex gap-2 text-center">
                <div className="bg-gray-100 rounded p-2 w-16">
                  <div className="text-lg font-bold">{product.saleEnds.days}</div>
                  <div className="text-xs text-gray-500">DAYS</div>
                </div>
                <div className="bg-gray-100 rounded p-2 w-16">
                  <div className="text-lg font-bold">{product.saleEnds.hours}</div>
                  <div className="text-xs text-gray-500">HOURS</div>
                </div>
                <div className="bg-gray-100 rounded p-2 w-16">
                  <div className="text-lg font-bold">{product.saleEnds.mins}</div>
                  <div className="text-xs text-gray-500">MINS</div>
                </div>
                <div className="bg-gray-100 rounded p-2 w-16">
                  <div className="text-lg font-bold">{product.saleEnds.secs}</div>
                  <div className="text-xs text-gray-500">SECS</div>
                </div>
              </div>
            </div>
            {/* Stock */}
            <div className="mb-4 text-green-600 font-semibold text-sm">Only {product.stock} item(s) left in stock.</div>
            {/* Quantity and Actions */}
            <div className="flex items-center gap-4 mb-4">
              <div className="flex items-center border border-gray-200 rounded">
                <button className="px-3 py-1 text-lg">-</button>
                <span className="px-4">1</span>
                <button className="px-3 py-1 text-lg">+</button>
              </div>
              <button className="bg-lime-600 hover:bg-lime-700 text-white font-semibold px-8 py-3 rounded-lg shadow transition">ADD TO CART</button>
              <button className="bg-white border border-lime-600 text-lime-600 font-semibold px-8 py-3 rounded-lg shadow transition hover:bg-lime-50">BUY NOW</button>
            </div>
            {/* Delivery, Share, etc. */}
            <div className="flex flex-col gap-2 text-sm text-gray-600 mb-4">
              <div className="flex gap-4 items-center">
                <span>🚚 Delivery & Return</span>
                <span>•</span>
                <span>❓ Ask a Question</span>
              </div>
              <div>📅 Estimated Delivery: Wed, Jul 16 – Sun, Jul 20</div>
              <div>👀 55 people are viewing this right now</div>
            </div>
            {/* Share */}
            <div className="flex gap-4 items-center text-gray-400 text-xl">
              <span>Share</span>
              <span className="hover:text-gray-700 cursor-pointer">&#x25B6;</span>
              <span className="hover:text-gray-700 cursor-pointer">&#x25B6;</span>
              <span className="hover:text-gray-700 cursor-pointer">&#x25B6;</span>
            </div>
            {/* Payment Methods */}
            <div className="mt-6 flex gap-2 items-center">
              <img src="https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png" alt="Visa" className="h-6" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/0/04/Mastercard-logo.png" alt="Mastercard" className="h-6" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/PayPal_2014_logo.png" alt="PayPal" className="h-6" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/a/a6/Apple_Pay_logo.png" alt="Apple Pay" className="h-6" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/Amazon_Pay_logo.svg" alt="Amazon Pay" className="h-6" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/6/6a/BitPay_logo.png" alt="BitPay" className="h-6" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 