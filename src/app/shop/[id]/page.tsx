"use client";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";

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

function slugify(name: string) {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

export default function ProductDetailPage() {
  const params = useParams();
  const slug = params?.id as string;
  const product = products.find(p => slugify(p.name) === slug);

  if (!product) {
    return <div className="max-w-2xl mx-auto py-20 text-center text-2xl text-gray-400">Product not found</div>;
  }

  return (
    <div className="bg-[#fafbfa] min-h-screen flex flex-col">
      <div className="max-w-[1200px] mx-auto w-full px-4 pt-8 pb-16">
        {/* Breadcrumb */}
        <div className="text-sm text-gray-500 mb-6 flex items-center gap-2">
          <Link href="/" className="hover:underline">Home</Link>
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
              <Image src={product.img} alt={product.name} width={320} height={320} className="w-80 h-80 object-contain rounded-xl bg-white border border-gray-100" />
              <div className="flex gap-2 mt-2">
                <Image src={product.img} alt="thumb" width={64} height={64} className="w-16 h-16 object-contain rounded border border-gray-200" />
                <Image src={product.img} alt="thumb2" width={64} height={64} className="w-16 h-16 object-contain rounded border border-gray-200 opacity-50" />
              </div>
            </div>
            <div className="flex gap-2 mt-4">
              <button className="p-2 rounded-full border border-gray-200 text-gray-400 hover:text-lime-600">♡</button>
              <button className="p-2 rounded-full border border-gray-200 text-gray-400 hover:text-lime-600">⇄</button>
            </div>
          </div>
          {/* Right: Info */}
          <div className="flex-1 flex flex-col gap-4">
            <div className="flex items-center gap-2 mb-2">
              {product.badge && (
                <span className="bg-lime-500 text-white text-xs font-bold px-2 py-1 rounded">{product.badge}</span>
              )}
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-yellow-400 text-lg">{'★★★★★'}</span>
              <span className="text-gray-500 text-sm">(8 customer reviews)</span>
            </div>
            <div className="flex items-center gap-4 mb-2">
              {product.oldPrice && <span className="text-gray-400 line-through text-lg">${product.oldPrice.toFixed(2)}</span>}
              <span className="text-2xl font-bold text-black">${product.price.toFixed(2)}</span>
            </div>
            <div className="text-sm text-gray-500 mb-2">6 sold in last 2 hours</div>
            <div className="text-gray-700 text-sm mb-4">Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s.</div>
            {/* Sale Timer */}
            <div className="mb-4">
              <div className="text-sm font-semibold text-gray-700 mb-1">Hurry up! Sale end in:</div>
              <div className="flex gap-2 text-center">
                <div className="bg-gray-100 rounded p-2 w-16">
                  <div className="text-lg font-bold text-black">170</div>
                  <div className="text-xs text-gray-800">DAYS</div>
                </div>
                <div className="bg-gray-100 rounded p-2 w-16">
                  <div className="text-lg font-bold text-black">19</div>
                  <div className="text-xs text-gray-800">HOURS</div>
                </div>
                <div className="bg-gray-100 rounded p-2 w-16">
                  <div className="text-lg font-bold text-black">14</div>
                  <div className="text-xs text-gray-800">MINS</div>
                </div>
                <div className="bg-gray-100 rounded p-2 w-16">
                  <div className="text-lg font-bold text-black">23</div>
                  <div className="text-xs text-gray-800">SECS</div>
                </div>
              </div>
            </div>
            {/* Stock */}
            <div className="mb-4 text-green-600 font-semibold text-sm">Only 78 item(s) left in stock.</div>
            {/* Quantity and Actions */}
            <div className="flex items-center gap-4 mb-4">
              <div className="flex items-center border border-gray-200 rounded">
                <button className="px-3 py-1 text-lg text-gray-900">-</button>
                <span className="px-4 text-black">1</span>
                <button className="px-3 py-1 text-lg text-gray-900">+</button>
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
              <Image src="https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png" alt="Visa" width={48} height={24} className="h-6" />
              <Image src="https://upload.wikimedia.org/wikipedia/commons/0/04/Mastercard-logo.png" alt="Mastercard" width={48} height={24} className="h-6" />
              <Image src="https://upload.wikimedia.org/wikipedia/commons/5/5e/PayPal_2014_logo.png" alt="PayPal" width={48} height={24} className="h-6" />
              <Image src="https://upload.wikimedia.org/wikipedia/commons/a/a6/Apple_Pay_logo.png" alt="Apple Pay" width={48} height={24} className="h-6" />
              <Image src="https://upload.wikimedia.org/wikipedia/commons/6/6b/Amazon_Pay_logo.svg" alt="Amazon Pay" width={48} height={24} className="h-6" />
              <Image src="https://upload.wikimedia.org/wikipedia/commons/6/6a/BitPay_logo.png" alt="BitPay" width={48} height={24} className="h-6" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 