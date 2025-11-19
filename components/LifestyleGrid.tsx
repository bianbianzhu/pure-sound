import React from 'react';

const LifestyleGrid: React.FC = () => {
  return (
    <section className="bg-white pb-24 px-6 md:px-12">
      <div className="max-w-[1920px] mx-auto">
        <div className="mb-12 flex justify-between items-end">
          <h2 className="text-[#D9281C] text-6xl md:text-8xl font-medium tracking-tight leading-none max-w-4xl">
            Find Your <br /> Perfect Sound
          </h2>
          <span className="text-[#D9281C] text-xs font-bold tracking-widest uppercase hidden md:block mb-2">(SOCIALS)</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="aspect-square relative overflow-hidden group cursor-pointer bg-gray-100">
              <img
                src={item === 1 ? 'https://images.unsplash.com/photo-1484704849700-f032a568e944?q=80&w=800&auto=format&fit=crop' : item === 2 ? `${import.meta.env.BASE_URL}images/lifestyle1.png` : item === 3 ? `${import.meta.env.BASE_URL}images/lifestyle2.png` : `${import.meta.env.BASE_URL}images/lifestyle3.png`}
                alt="Lifestyle"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-[#D9281C]/0 group-hover:bg-[#D9281C]/20 transition-colors duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LifestyleGrid;