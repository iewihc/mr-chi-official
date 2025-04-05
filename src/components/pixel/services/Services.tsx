import React from 'react';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import { services } from '../data';

interface ServicesProps {
  language: string;
  oddSection: boolean;
}

const Services: React.FC<ServicesProps> = ({ language, oddSection }) => {
  return (
    <section id="services" className={`py-16 ${oddSection ? 'bg-black' : 'bg-[#0a0a0a]'}`}>
      <div className="container mx-auto px-4">
        <h2 className="pixel-section-title text-center">
          <span className="text-[#00ffaa] text-shadow-pixel">{language === 'zh' ? '我們的服務' : 'Our Services'}</span>
        </h2>
        
        {/* 服務輪播控制按鈕 */}
        <div className="relative">
          <div className="absolute -left-4 top-1/2 transform -translate-y-1/2 z-10">
            <button 
              className="carousel-control left-control p-2"
              onClick={() => {
                const carousel = document.querySelector('.services-carousel');
                if (carousel) {
                  carousel.scrollBy({ left: -300, behavior: 'smooth' });
                }
              }}
            >
              <FiArrowLeft size={24} />
            </button>
          </div>
          
          {/* 服務跑馬燈 */}
          <div className="services-carousel flex overflow-x-auto pb-8 hide-scrollbar">
            {services.map((service, index) => (
              <div key={index} className="service-card flex-none w-80 mr-10 p-6 border border-[#00ff00] bg-black rounded-lg transition-transform transform hover:scale-105">
                <div className="text-[#00ff00] text-3xl mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-[#00ffaa] text-shadow-pixel">
                  {language === 'zh' ? service.title : service.englishTitle}
                </h3>
                <p className="text-gray-400">
                  {language === 'zh' ? service.description : service.englishDescription}
                </p>
              </div>
            ))}
          </div>
          
          <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 z-10">
            <button 
              className="carousel-control right-control p-2"
              onClick={() => {
                const carousel = document.querySelector('.services-carousel');
                if (carousel) {
                  carousel.scrollBy({ left: 300, behavior: 'smooth' });
                }
              }}
            >
              <FiArrowRight size={24} />
            </button>
          </div>
        </div>
        
        {/* 輪播指示點 */}
        <div className="carousel-dots flex justify-center mt-6 items-center">
          <div className="flex items-center">
            <div className="w-5 h-5 bg-[#ffff00] rounded-full mr-2 animate-pulse-slow pacman">
              <div className="pacman-mouth"></div>
            </div>
            <div className="w-3 h-3 bg-[#00ff00] rounded-full mx-1 dot"></div>
            <div className="w-3 h-3 bg-[#00ff00] rounded-full mx-1 dot"></div>
            <div className="w-3 h-3 bg-[#00ff00] rounded-full mx-1 dot"></div>
            <div className="w-3 h-3 bg-[#ff6666] rounded-full mx-1 ghost"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services; 