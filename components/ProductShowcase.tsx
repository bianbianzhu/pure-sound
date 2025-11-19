import React from 'react';
import { motion } from 'framer-motion';

interface ProductProps {
  id: string;
  name: string;
  code: string;
  description: string;
  imageUrl: string;
  isNew?: boolean;
}

const products: ProductProps[] = [
  {
    id: '01',
    name: 'SIRIUS 2 MINI',
    code: '(F9)',
    description: 'IMMERSIVE SOUND MEETS DESIGN. A WIRELESS SPEAKER WITH BUILT-IN MICROPHONES, CRYSTAL-CLEAR AUDIO, AND A 360° LIGHT SHOW FOR ANY OCCASION.',
    imageUrl: `${import.meta.env.BASE_URL}images/sirius.png`, // Placeholder for small speaker
    isNew: true
  },
  {
    id: '02',
    name: 'PARTYCON WAVE',
    code: '(M1)',
    description: 'BRING THE PARTY ANYWHERE. A WATERPROOF BLUETOOTH SPEAKER WITH DYNAMIC SOUND AND A VIVID LIGHT SHOW TO SET THE MOOD.',
    imageUrl: `${import.meta.env.BASE_URL}images/partycon.png`, // Placeholder for tall speaker
  },
  {
    id: '03',
    name: 'SSS 3100',
    code: '(GAI)',
    description: 'TURN ANY SPACE INTO A STAGE. A HIGH-POWER PARTY SPEAKER WITH LED LIGHT EFFECTS, WIRELESS MICROPHONE, POWERBANK FUNCTION, AND IPX4 WATER RESISTANCE.',
    imageUrl: `${import.meta.env.BASE_URL}images/sss3100.png`, // Placeholder for block speaker
  }
];

const ProductRow: React.FC<ProductProps> = ({ name, code, description, imageUrl }) => (
  <div className="group border-t border-gray-200 bg-white py-20 px-6 md:px-12 transition-colors duration-500 hover:bg-gray-50">
    <div className="max-w-[1920px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

      {/* Left Info */}
      <div className="flex flex-col items-start h-full justify-center">
        <div className="flex items-baseline gap-2 mb-8">
          <motion.h3 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-5xl md:text-7xl font-medium uppercase text-[#D9281C] tracking-tight group-hover:text-black transition-colors duration-300"
          >
            {name}
          </motion.h3>
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[#D9281C] font-bold text-sm md:text-lg align-top -mt-4 group-hover:text-black transition-colors duration-300"
          >
            {code}
          </motion.span>
        </div>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-[#D9281C] text-sm md:text-base font-medium uppercase leading-relaxed max-w-md tracking-wide mb-12 group-hover:text-black transition-colors duration-300"
        >
          {description}
        </motion.p>

        <motion.a 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          href="#" 
          className="inline-block text-[#D9281C] text-xs font-bold uppercase tracking-widest border-b border-[#D9281C] pb-1 hover:text-black hover:border-black transition-all"
        >
          More Info
        </motion.a>
      </div>

      {/* Right Image */}
      <div className="flex justify-center lg:justify-center relative h-[400px] md:h-[500px] w-full transition-colors duration-500">
        <img
          src={imageUrl}
          alt={name}
          className="h-full w-auto object-contain mix-blend-multiply transform group-hover:scale-105 transition-transform duration-700 ease-out p-8"
        />
      </div>

    </div>
  </div>
);

const ProductShowcase: React.FC = () => {
  return (
    <section className="bg-white">
      {products.map((product) => (
        <ProductRow key={product.id} {...product} />
      ))}

      <div className="bg-white p-6 md:p-12 border-t border-gray-200">
        <button className="w-full bg-[#D9281C] text-white text-xs font-bold uppercase tracking-widest py-8 hover:bg-black transition-colors duration-300">
          Load More
        </button>
      </div>
    </section>
  );
};

export default ProductShowcase;