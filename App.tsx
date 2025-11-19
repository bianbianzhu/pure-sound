import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Manifesto from './components/Manifesto';
import ProductShowcase from './components/ProductShowcase';
import LifestyleGrid from './components/LifestyleGrid';
import CategoryMenu from './components/CategoryMenu';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-black selection:bg-[#D9281C] selection:text-white">
      <Header />
      <main>
        <Hero />
        <Manifesto />
        <ProductShowcase />
        <div className="w-full h-24 bg-white border-t border-gray-200"></div>
        <CategoryMenu />
        <LifestyleGrid />
        <div className="w-full h-24 bg-white border-t border-gray-200"></div>
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default App;