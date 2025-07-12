"use client";

import Link from "next/link";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { Menu } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

function Dropdown({ label, items }: { label: string; items: { name: string; href: string }[] }) {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <Menu.Button className="inline-flex items-center gap-1 hover:text-emerald-600">
        {label}
        <ChevronDownIcon className="w-4 h-4" />
      </Menu.Button>
      <Menu.Items className="absolute z-50 mt-2 w-48 origin-top-right bg-white border border-gray-200 rounded-md shadow-lg focus:outline-none">
        <div className="py-1">
          {items.map((item, idx) => (
            <Menu.Item key={idx}>
              {({ active }) => (
                <Link
                  href={item.href}
                  className={`block px-4 py-2 text-sm ${active ? "bg-gray-100 text-gray-900" : "text-gray-700"}`}
                >
                  {item.name}
                </Link>
              )}
            </Menu.Item>
          ))}
        </div>
      </Menu.Items>
    </Menu>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-white shadow-md text-black w-full z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center">
        {/* Logo on left */}
        <Link href="/" className="text-xl font-bold">
          <span className="text-emerald-600">EcoCart</span>
        </Link>
        {/* Spacer pushes the right section */}
        <div className="hidden md:flex items-center gap-6 ml-auto">
          {/* Nav dropdowns */}
          <nav className="flex gap-6 text-sm font-medium items-center">
            <Link href="/" className="hover:text-emerald-600">Home</Link>
            <Link href="/shop" className="hover:text-emerald-600">Shop</Link>
            <Dropdown
              label="Categories"
              items={[
                { name: "All Categories", href: "/categories" },
                { name: "Electronics", href: "/categories/electronics" },
                { name: "Clothing", href: "/categories/clothing" },
                { name: "Home & Kitchen", href: "/categories/home-kitchen" },
              ]}
            />
            <Link href="/cart" className="hover:text-emerald-600">Cart</Link>
            <Link href="/about" className="hover:text-emerald-600">About</Link>
            <Link href="/contact" className="hover:text-emerald-600">Contact</Link>
          </nav>
          {/* Right buttons */}
          <Link href="/signin" className="hover:text-emerald-600 text-sm">Sign In</Link>
          <Link href="/signup">
            <button className="bg-emerald-600 text-white text-sm px-4 py-2 rounded hover:bg-emerald-700">
              Sign Up
            </button>
          </Link>
        </div>
        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="md:hidden ml-auto text-black">
          <FaBars size={20} />
        </button>
      </div>
      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white px-4 py-4 space-y-3 shadow-md text-sm">
          <Link href="/">Home</Link>
          <Link href="/shop">Shop</Link>
          <Link href="/categories">Categories</Link>
          <Link href="/cart">Cart</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/signin">Sign In</Link>
          <Link href="/signup">
            <button className="w-full bg-emerald-600 text-white py-2 rounded">Sign Up</button>
          </Link>
        </div>
      )}
    </header>
  );
} 