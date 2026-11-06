"use client";

import { motion } from "framer-motion";
import { ShoppingBag, ExternalLink } from "lucide-react";

interface MerchItem {
  id: string;
  name: string;
  image: string;
  price: string;
  category: string;
}

interface MerchStoreProps {
  items?: MerchItem[];
}

export function MerchStore({
  items = [
    {
      id: "1",
      name: "DMX Red Gaming Hoodie",
      image:
        "https://images.unsplash.com/photo-1556821552-5ff63b1d6b87?q=80&w=500&auto=format&fit=crop",
      price: "$49.99",
      category: "Apparel",
    },
    {
      id: "2",
      name: "DMX Pro Gaming Headset Stand",
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=500&auto=format&fit=crop",
      price: "$29.99",
      category: "Accessories",
    },
    {
      id: "3",
      name: "DMX Signature Mousepad XL",
      image:
        "https://images.unsplash.com/photo-1527814050087-3796bba84a3d?q=80&w=500&auto=format&fit=crop",
      price: "$34.99",
      category: "Gaming Gear",
    },
    {
      id: "4",
      name: "DMX Gaming Chair Cushion",
      image:
        "https://images.unsplash.com/photo-1592078615290-033ee584e267?q=80&w=500&auto=format&fit=crop",
      price: "$39.99",
      category: "Accessories",
    },
  ],
}: MerchStoreProps) {
  return (
    <section className="relative px-5 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <ShoppingBag className="text-red-500" size={32} />
            <h2 className="text-4xl font-black tracking-tight">DMX Merch Store</h2>
          </div>
          <a
            href="https://merch.devilmaxy.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-lg bg-red-600 px-4 py-2 text-sm font-black transition hover:bg-red-500"
          >
            View Store
            <ExternalLink size={16} />
          </a>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <motion.a
              key={item.id}
              href="#merch"
              className="group relative overflow-hidden rounded-2xl"
              whileHover={{ y: -5 }}
            >
              <div className="relative h-0 w-full overflow-hidden bg-black pb-[100%]">
                <img
                  src={item.image}
                  alt={item.name}
                  className="absolute inset-0 h-full w-full object-cover transition duration-300 group-hover:scale-110"
                  onError={(e) => {
                    const img = e.target as HTMLImageElement;
                    img.style.display = "none";
                  }}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                <div className="absolute inset-0 flex flex-col justify-end p-4">
                  <div className="mb-2 inline-block w-fit rounded-lg bg-red-600/90 px-2 py-1 text-xs font-bold">
                    {item.category}
                  </div>
                  <h3 className="text-lg font-black leading-tight">
                    {item.name}
                  </h3>
                  <div className="mt-3 flex items-center justify-between border-t border-white/10 pt-3">
                    <span className="text-xl font-black text-red-400">
                      {item.price}
                    </span>
                    <button className="flex items-center gap-1 rounded-lg bg-white/10 px-3 py-1 text-xs font-bold backdrop-blur transition hover:bg-white/20">
                      Add
                      <ExternalLink size={12} />
                    </button>
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
