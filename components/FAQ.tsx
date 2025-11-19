import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const questions = [
  { q: 'What is Sencor?', a: 'Sencor is a consumer electronics organization, founded in Japan in the late 1960s and achieved prestigious status in audio technologies.' },
  { q: 'Do I need an app to use the speakers?', a: 'Most of our speakers function directly via Bluetooth without requiring a dedicated app. However, the Sencor Connect app unlocks advanced features.' },
  { q: 'Are the speakers waterproof?', a: 'Yes, the majority of our portable range is IPX7 certified, meaning they can withstand submersion in water up to 1 meter for 30 minutes.' },
  { q: 'How long does the battery last?', a: 'Battery life varies by model, ranging from 12 to 24 hours of continuous playback at medium volume.' },
  { q: 'Can I pair two speakers together?', a: 'Yes, using TWS (True Wireless Stereo) technology, you can pair two identical speakers for immersive stereo sound.' },
  { q: 'Do they work with voice assistants?', a: 'Our smart speaker range is compatible with Google Assistant and Siri for hands-free control.' },
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-white py-24 px-6 md:px-12 border-t border-gray-200">
      <div className="max-w-[1920px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Title Column */}
        <div className="lg:col-span-4">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-[#D9281C] text-xs font-bold tracking-widest uppercase block mb-24"
          >
            (FAQ)
          </motion.span>
          <div className="max-w-xs">
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-[#D9281C] text-xs font-bold uppercase leading-relaxed tracking-wide"
              >
                  Within 24 hours of its reveal, the metaverse's discord server had over 20,000 members, then quickly grew into the hundreds of thousands. This made the mekaverse one of the most highly anticipated NFT drops of 2021.
              </motion.p>
          </div>
        </div>

        {/* Questions Column */}
        <div className="lg:col-span-8">
           <motion.h2 
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8, ease: "easeOut" }}
             className="text-[#D9281C] text-6xl md:text-8xl font-medium tracking-tight leading-none mb-16"
           >
              Questions
           </motion.h2>

           <div className="flex flex-col">
              {questions.map((item, index) => (
                <motion.div 
                  key={index} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="border-t border-gray-200"
                >
                  <button 
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="w-full py-8 flex items-center justify-between group text-left"
                  >
                    <span className={`text-2xl md:text-4xl font-medium transition-colors duration-300 ${openIndex === index ? 'text-black' : 'text-[#D9281C] group-hover:text-black'}`}>
                      {item.q}
                    </span>
                    <span className={`transform transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''} text-[#D9281C]`}>
                        {openIndex === index ? <Minus size={32} strokeWidth={1.5} /> : <Plus size={32} strokeWidth={1.5} />}
                    </span>
                  </button>
                  <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openIndex === index ? 'max-h-96 opacity-100 pb-8' : 'max-h-0 opacity-0'}`}>
                    <p className="text-gray-600 text-lg md:text-xl leading-relaxed max-w-3xl">
                      {item.a}
                    </p>
                  </div>
                </motion.div>
              ))}
               <div className="border-t border-gray-200"></div>
           </div>
        </div>

      </div>
    </section>
  );
};

export default FAQ;