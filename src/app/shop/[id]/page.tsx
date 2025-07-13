"use client";
import { useParams } from "next/navigation";

const products = [
  {
    name: "Cherry Tomatoes",
    img: "https://pngimg.com/uploads/tomato/tomato_PNG12588.png",
  },
  {
    name: "Red Onion",
    img: "https://img.cdn4dd.com/cdn-cgi/image/fit=cover,width=672,height=672,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/5922c60a-f512-40fe-acf8-37085b77e000-retina-large.jpg",
  },
  {
    name: "Red Cabbage",
    img: "https://www.veggycation.com.au/siteassets/veggycationvegetable/cabbage-red.jpg",
  },
  {
    name: "Organic Lemon",
    img: "https://pngimg.com/uploads/lemon/lemon_PNG25204.png",
  },
  {
    name: "Organic Almaverde",
    img: "https://onlineorganics.ca/cdn/shop/products/organic-almaverde-puree-passata-pile_700x700.jpg?v=1748123411",
  },
  {
    name: "Orange Cauliflower",
    img: "https://www.seedway.com/app/uploads/2020/04/Clementine-1_Jan2021.png",
  },
  {
    name: "Plum Tomato",
    img: "https://pngimg.com/uploads/tomato/tomato_PNG12588.png",
  },
  {
    name: "Fresh Bergamot",
    img: "https://pngimg.com/uploads/lemon/lemon_PNG25204.png",
  },
  {
    name: "Cucumber",
    img: "https://mucci-production-user-uploads-bucket.s3.amazonaws.com/images/Product-IMG_MiniCucumbers-rev2.original.png",
  },
  {
    name: "Green Pepper",
    img: "https://produits.bienmanger.com/38827-0w600h600_Organic_Fresh_Green_Peppers.jpg",
  },
  {
    name: "Eggplant",
    img: "https://www.veggycation.com.au/siteassets/veggycationvegetable/eggplant.jpg",
  },
  {
    name: "Carrot",
    img: "https://pngimg.com/uploads/carrot/carrot_PNG4980.png",
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
    <div className="max-w-2xl mx-auto py-20 flex flex-col items-center">
      <img src={product.img} alt={product.name} className="w-80 h-80 object-contain mb-8 rounded-xl border border-gray-100 bg-white" />
      <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.name}</h1>
    </div>
  );
} 