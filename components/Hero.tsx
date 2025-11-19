import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section className="relative w-full h-screen min-h-[700px] bg-[#D9281C] overflow-hidden pt-20">

      {/* Content Container */}
      <div className="relative h-full w-full max-w-[1920px] mx-auto flex flex-col justify-between z-10 px-6 md:px-12 pb-12 md:pb-8">

        {/* Top UI Layer (Visually hidden spacer if needed, or explicit top elements) */}
        <div className="hidden md:block h-20"></div>

        {/* Hero Image Container - Centered and Floating */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
          <div className="w-full h-full relative flex items-center justify-center">
            <img
              src={`${import.meta.env.BASE_URL}images/hero_large.png`}
              alt="Sencor Hero Speaker"
              className="h-[120%] w-auto max-w-none object-contain object-center translate-y-[10%]"
            />
          </div>
        </div>

        {/* Bottom Text Layer */}
        <div className="relative z-30 mt-auto md:mb-0">
          <div className="flex items-end justify-between w-full border-b border-white/20 pb-4 mb-4">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-white/80 text-xs font-bold tracking-widest uppercase hidden md:block"
            >
              (SENCORS SPEAKERS)
            </motion.span>
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-white/80 text-xs font-bold tracking-widest uppercase hidden md:block"
            >
              SCROLL DOWN ↓
            </motion.span>
          </div>

          <h1 className="text-white font-bold uppercase leading-[0.8] tracking-tighter text-[15vw] md:text-[11vw] flex flex-col w-full">
            <motion.span 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="block"
            >
              Pure Sound
            </motion.span>
            <motion.span 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="block md:ml-[10vw]"
            >
              Anywhere <span className="inline-block align-middle ml-4 transform rotate-90 md:rotate-0">↓</span>
            </motion.span>
          </h1>
        </div>

      </div>

      {/* Decorative Grid Lines */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div className="w-full h-full border-x border-white mx-auto max-w-[1920px]"></div>
        <div className="absolute top-0 bottom-0 left-1/4 border-l border-white"></div>
        <div className="absolute top-0 bottom-0 right-1/4 border-r border-white"></div>
      </div>
    </section>
  );
};

export default Hero;