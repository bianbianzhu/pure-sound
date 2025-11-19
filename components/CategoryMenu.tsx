import React from 'react';
import { motion } from 'framer-motion';

const categories = [
  { name: 'Audio Systems', count: '08' },
  { name: 'Boomboxes', count: '04' },
  { name: 'Portable Radio', count: '05' },
  { name: 'Radio Clocks', count: '09' },
];

const CategoryMenu: React.FC = () => {
  return (
    <section className="bg-white py-24 px-6 md:px-12 overflow-hidden">
      <div className="max-w-[1920px] mx-auto">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-24">
          <div className="lg:col-span-4">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-[#D9281C] text-xs font-bold tracking-widest uppercase"
            >
              (CATEGORIES)
            </motion.span>
          </div>
          <div className="lg:col-span-8">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-[#D9281C] text-6xl md:text-8xl font-medium tracking-tight leading-[0.9] mb-24"
            >
              Explore More <br /> from Sencor
            </motion.h2>

            <div className="flex flex-col">
              {categories.map((cat, idx) => (
                <motion.a 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  href="#" 
                  key={idx} 
                  className="group relative border-t border-gray-200 py-8 md:py-12 flex items-baseline justify-between hover:pl-8 transition-[padding] duration-300"
                >
                  <h3 className="text-5xl md:text-8xl uppercase font-medium text-[#D9281C] group-hover:text-black transition-colors">
                    {cat.name}
                  </h3>
                  <span className="text-[#D9281C] text-sm md:text-lg font-bold align-top group-hover:text-black transition-colors">
                    {cat.count}
                  </span>

                  {/* Image Reveal Effect (Concept) */}
                  <div className="absolute top-1/2 right-24 md:right-48 w-48 h-32 bg-gray-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none transform -translate-y-1/2 hidden lg:block z-10 mix-blend-multiply">
                    {/* Placeholder for category image on hover */}
                    <img src={`https://picsum.photos/seed/${cat.name}/300/200`} alt="" className="w-full h-full object-cover grayscale" />
                  </div>
                </motion.a>
              ))}
              <div className="border-t border-gray-200"></div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default CategoryMenu;