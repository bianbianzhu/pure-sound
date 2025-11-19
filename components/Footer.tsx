import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white pt-24 pb-12 px-6 md:px-12">
      <div className="max-w-[1920px] mx-auto">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-24">
           
           {/* Branding */}
           <div className="flex flex-col justify-between h-full">
              <div className="text-2xl font-bold tracking-widest uppercase mb-8">Sencor</div>
              <div className="text-gray-500 text-xs uppercase tracking-widest">
                 © 2024 Sencor Audio.<br/>All Rights Reserved.
              </div>
           </div>

           {/* Links 1 */}
           <div className="flex flex-col gap-4 text-xs font-bold uppercase tracking-widest">
              <a href="#" className="hover:text-[#D9281C] transition-colors">Audio Systems</a>
              <a href="#" className="hover:text-[#D9281C] transition-colors">Personal Audio</a>
              <a href="#" className="hover:text-[#D9281C] transition-colors">Kitchen</a>
              <a href="#" className="hover:text-[#D9281C] transition-colors">Home Care</a>
           </div>

           {/* Links 2 */}
           <div className="flex flex-col gap-4 text-xs font-bold uppercase tracking-widest">
              <a href="#" className="hover:text-[#D9281C] transition-colors">About Us</a>
              <a href="#" className="hover:text-[#D9281C] transition-colors">Support</a>
              <a href="#" className="hover:text-[#D9281C] transition-colors">Press</a>
              <a href="#" className="hover:text-[#D9281C] transition-colors">Contact</a>
           </div>

           {/* Newsletter */}
           <div>
              <h4 className="text-xs font-bold uppercase tracking-widest mb-8 text-gray-500">Subscribe</h4>
              <div className="flex border-b border-white pb-2">
                 <input type="email" placeholder="YOUR EMAIL" className="bg-transparent border-none outline-none text-white placeholder-gray-600 text-sm w-full uppercase font-bold" />
                 <button className="text-xs font-bold uppercase tracking-widest hover:text-[#D9281C] transition-colors">Send</button>
              </div>
           </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] uppercase tracking-widest text-gray-600">
            <div className="flex gap-8">
               <a href="#" className="hover:text-white">Privacy Policy</a>
               <a href="#" className="hover:text-white">Terms of Use</a>
               <a href="#" className="hover:text-white">Cookies</a>
            </div>
            <div>
               Designed with Precision
            </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;