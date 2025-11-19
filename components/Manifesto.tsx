import React from 'react';
import { motion } from 'framer-motion';

const Manifesto: React.FC = () => {
  return (
    <section className="bg-white py-24 md:py-40 border-b border-gray-200">
      <div className="max-w-[1920px] mx-auto px-6 md:px-12">
        
        <div className="mb-20">
           <motion.span 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6 }}
             className="text-[#D9281C] text-xs font-bold tracking-widest uppercase"
           >
             (PRODUCTS)
           </motion.span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-7">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-[#D9281C] text-6xl md:text-8xl font-medium tracking-tight leading-none"
            >
              Wireless Speakers
            </motion.h2>
          </div>
          
          <div className="lg:col-span-5 flex flex-col gap-12 pt-4">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-[#D9281C] text-2xl md:text-3xl leading-tight font-normal"
            >
              Sencor speakers are designed to give you complete freedom of sound. No wires. No limits. Just pure, powerful, immersive audio — wherever you are.
            </motion.p>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-[#D9281C] text-2xl md:text-3xl leading-tight font-normal"
            >
              Each model has its own character and style: from ultra-portable speakers for travel to powerful sound systems for parties. What unites them all is exceptional quality and thoughtful engineering wrapped in minimalist design.
            </motion.p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Manifesto;