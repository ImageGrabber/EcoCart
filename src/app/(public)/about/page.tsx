"use client";
import Image from "next/image";
import { useState } from "react";

const faqs = [
  {
    title: "Best Quantity",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  { title: "Customer Care", content: "..." },
  { title: "Support 24/7", content: "..." },
  { title: "What we do?", content: "..." },
  { title: "FAQ", content: "..." },
  { title: "Our service", content: "..." },
];

export default function AboutPage() {
  const [open, setOpen] = useState(0);
  return (
    <main className="bg-white min-h-screen px-4 py-12">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row gap-12 mt-12 mb-16">
          <div className="flex-1">
            <h1 className="text-3xl font-bold mb-6 text-gray-900">Our Story</h1>
            <p className="mb-4 text-gray-900">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            <p className="text-gray-900">It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          </div>
          <div className="flex-1 flex items-center justify-center">
            <img
              src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=600&q=80"
              alt="Store interior"
              className="rounded-lg w-full h-[320px] object-cover"
            />
          </div>
        </div>
        {/* Add extra spacing after Our Story section */}
        <div className="mb-16" />
        <div className="flex flex-col md:flex-row gap-12">
          {/* Accordion */}
          <div className="flex-1">
            <h2 className="text-xl font-semibold mb-4 text-gray-900">What we do for you?</h2>
            <div className="border rounded overflow-hidden divide-y">
              {faqs.map((faq, idx) => (
                <div key={faq.title}>
                  <button
                    className="w-full text-left px-6 py-4 bg-white hover:bg-gray-50 focus:outline-none flex items-center justify-between text-gray-900"
                    onClick={() => setOpen(open === idx ? -1 : idx)}
                  >
                    <span className="font-medium">{faq.title}</span>
                    <span className="text-xl">{open === idx ? '–' : '+'}</span>
                  </button>
                  {open === idx && (
                    <div className="px-6 py-4 text-gray-900 bg-gray-50">{faq.content}</div>
                  )}
                </div>
              ))}
            </div>
          </div>
          {/* Hours & Career */}
          <div className="flex-1">
            <h2 className="text-xl font-semibold mb-4 text-gray-900">Hour Of Operation</h2>
            <div className="mb-8 text-gray-900">
              <div className="flex justify-between mb-1"><span>Monday:</span><span>12-6PM</span></div>
              <div className="flex justify-between mb-1"><span>Tuesday:</span><span>12-6PM</span></div>
              <div className="flex justify-between mb-1"><span>Wednesday:</span><span>12-6PM</span></div>
              <div className="flex justify-between mb-1"><span>Thursday:</span><span>12-6PM</span></div>
              <div className="flex justify-between mb-1"><span>Friday:</span><span>12-6PM</span></div>
              <div className="flex justify-between mb-1"><span>Saturday:</span><span>12-6PM</span></div>
              <div className="flex justify-between mb-1"><span>Sunday:</span><span>Closed</span></div>
            </div>
            <h2 className="text-xl font-semibold mb-2 text-gray-900">Career</h2>
            <p className="text-gray-900 text-sm">If you're interested in employment opportunities at Elessi, please email us:<br/>contact@yourstore.com</p>
          </div>
        </div>
      </div>
    </main>
  );
} 