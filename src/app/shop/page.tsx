"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, ShoppingBag } from "lucide-react";

export default function ShopPage() {
  const products = [
    {
      name: "DMX Red Gaming Hoodie",
      price: "$49.99",
      category: "Apparel",
      image: "https://images.unsplash.com/photo-1556821552-5ff63b1d6b87?q=80&w=600&auto=format&fit=crop",
    },
    {
      name: "DMX Pro Gaming Headset Stand",
      price: "$29.99",
      category: "Accessories",
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=600&auto=format&fit=crop",
    },
    {
      name: "DMX Signature Mousepad XL",
      price: "$34.99",
      category: "Gaming Gear",
      image: "https://images.unsplash.com/photo-1527814050087-3796bba84a3d?q=80&w=600&auto=format&fit=crop",
    },
    {
      name: "DMX Gaming Chair Cushion",
      price: "$39.99",
      category: "Accessories",
      image: "https://images.unsplash.com/photo-1592078615290-033ee584e267?q=80&w=600&auto=format&fit=crop",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-slate-900 to-black">
      {/* Header */}
      <div className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur-xl">
        <div className="mx-auto max-w-7xl px-5 py-4 lg:px-8 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-gray-300 hover:text-white transition">
            <ArrowLeft size={20} />
            Back
          </Link>
          <h1 className="text-2xl font-black">DMX Merch Shop</h1>
          <div className="w-20" />
        </div>
      </div>

      <section className="px-5 py-24 pt-32 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-16 flex items-center gap-4"
          >
            <ShoppingBag className="text-red-500" size={40} />
            <div>
              <h2 className="text-5xl font-black">Shop</h2>
              <p className="text-lg text-gray-400">
                Get exclusive DMX branded merchandise
              </p>
            </div>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2">
            {products.map((product, index) => (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-3xl">
                  <div className="relative h-0 w-full pb-[100%] bg-black">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                    <div className="absolute inset-0 flex flex-col justify-end p-6">
                      <div className="mb-3 inline-block w-fit rounded-lg bg-red-600/90 px-3 py-1 text-sm font-bold">
                        {product.category}
                      </div>
                      <h3 className="mb-4 text-3xl font-black">{product.name}</h3>

                      <div className="flex items-center justify-between border-t border-white/20 pt-4">
                        <div className="text-3xl font-black text-red-400">
                          {product.price}
                        </div>
                        <button className="rounded-lg bg-white/20 px-4 py-2 font-bold backdrop-blur hover:bg-white/30 transition">
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
