import React from 'react';
import { motion } from 'framer-motion';

const LifestyleGrid: React.FC = () => {
  return (
    <section className="bg-white pb-24 px-6 md:px-12">
      <div className="max-w-[1920px] mx-auto">
        <div className="mb-12 flex justify-between items-end">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-[#D9281C] text-6xl md:text-8xl font-medium tracking-tight leading-none max-w-4xl"
          >
            Find Your <br /> Perfect Sound
          </motion.h2>
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[#D9281C] text-xs font-bold tracking-widest uppercase hidden md:block mb-2"
          >
            (SOCIALS)
          </motion.span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((item, index) => (
            <motion.div 
              key={item} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="aspect-square relative overflow-hidden group cursor-pointer bg-gray-100"
            >
              <img
                src={item === 1 ? 'https://images.unsplash.com/photo-1484704849700-f032a568e944?q=80&w=800&auto=format&fit=crop' : item === 2 ? `${import.meta.env.BASE_URL}images/lifestyle1.png` : item === 3 ? `${import.meta.env.BASE_URL}images/lifestyle2.png` : `${import.meta.env.BASE_URL}images/lifestyle3.png`}
                alt="Lifestyle"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-[#D9281C]/0 group-hover:bg-[#D9281C]/20 transition-colors duration-300"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LifestyleGrid;