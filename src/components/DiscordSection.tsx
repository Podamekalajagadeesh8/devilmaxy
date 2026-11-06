"use client";

import { motion } from "framer-motion";
import { MessageCircle, Users, Link as LinkIcon } from "lucide-react";

export function DiscordSection() {
  return (
    <section className="relative px-5 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-600/20 via-purple-600/20 to-pink-600/20 p-12 backdrop-blur-xl">
          <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/10 via-transparent to-transparent" />

          <motion.div
            className="relative z-10 flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="mb-6 inline-block rounded-full bg-indigo-600/30 p-4 backdrop-blur-sm">
              <MessageCircle size={40} className="text-indigo-300" />
            </div>

            <h2 className="mb-4 text-4xl font-black tracking-tight md:text-5xl">
              Join the DMX Army
            </h2>

            <p className="mb-8 max-w-2xl text-lg text-gray-300">
              Connect with thousands of gamers, get early access to streams, exclusive clips, and hang out with the community!
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href="https://discord.gg/yourservercode"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-3 rounded-xl bg-indigo-600 px-8 py-4 font-black text-white transition hover:bg-indigo-500 hover:shadow-[0_0_30px_rgba(79,70,229,0.4)]"
              >
                <MessageCircle size={20} />
                JOIN DISCORD
              </a>

              <div className="flex gap-6 text-center sm:ml-auto">
                <div>
                  <div className="text-3xl font-black text-indigo-400">12.5K</div>
                  <div className="text-sm text-gray-400">Members</div>
                </div>
                <div>
                  <div className="text-3xl font-black text-purple-400">1.2K</div>
                  <div className="text-sm text-gray-400">Online</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
