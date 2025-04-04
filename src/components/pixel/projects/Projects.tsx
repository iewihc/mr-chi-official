import React, { useState } from 'react';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import { cases } from '../data';

interface ProjectsProps {
  language: string;
  oddSection: boolean;
}

const Projects: React.FC<ProjectsProps> = ({ language, oddSection }) => {
  const [activeCaseIndex, setActiveCaseIndex] = useState(0);

  // 手動切換案例
  const handleCaseChange = (index: number) => {
    setActiveCaseIndex(index);
  };

  return (
    <section id="projects" className={`px-4 py-24 ${!oddSection ? 'bg-black' : 'bg-[#0a0a0a]'}`}>
      <div className="container mx-auto">
        <h2 className="pixel-section-title text-center" style={{ textShadow: '2px 2px 8px rgba(0, 255, 0, 0.4)' }}>
          <span className="relative inline-block">
            <span className="text-[#00ffaa] text-shadow-pixel">{language === 'zh' ? '實際案例' : 'Case Studies'}</span>
            <span className="absolute -bottom-1 left-0 w-full h-1 bg-[#00ff00] opacity-50"></span>
          </span>
        </h2>
        
        <div className="relative max-w-5xl mx-auto">
          <div className="absolute -left-4 top-1/2 transform -translate-y-1/2 z-10">
            <button 
              className="carousel-control left-control p-2"
              onClick={() => {
                const carousel = document.querySelector('.projects-carousel');
                if (carousel) {
                  carousel.scrollBy({ left: -300, behavior: 'smooth' });
                }
              }}
            >
              <FiArrowLeft size={24} />
            </button>
          </div>
          
          <div className="projects-carousel flex overflow-x-auto pb-8 hide-scrollbar relative">
            {/* 輪播圖上的小精靈 */}
            <div className="absolute -top-8 left-[10%] z-10 animate-float-slow" style={{ animationDelay: '0.7s' }}>
              <div className="w-5 h-5 bg-[#00ff00] opacity-70 rounded-sm"></div>
              <div className="pixel-trail"></div>
            </div>
            <div className="absolute -bottom-6 right-[20%] z-10 animate-pulse-medium" style={{ animationDelay: '1.5s' }}>
              <div className="w-4 h-4 bg-[#ffcc00] opacity-60 rounded-full"></div>
              <div className="pixel-trail"></div>
            </div>
            
            {cases.map((caseItem, index) => (
              <div key={index} 
                className="pixel-project-card flex-none w-80 mr-6 overflow-hidden border border-[#00ff00] bg-black p-6 rounded-lg 
                          transition-all duration-300 transform hover:scale-105 cursor-crosshair relative group"
                onClick={() => window.location.href = `/posts/case-${index+1}`}
              >
                {/* 狙擊鏡效果 */}
                <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-[#00ff00]"></div>
                  <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-[#00ff00]"></div>
                  <div className="absolute bottom-0 left-0 w-12 h-12 border-b-2 border-l-2 border-[#00ff00]"></div>
                  <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-[#00ff00]"></div>
                  <div className="absolute top-1/2 left-0 w-full h-[1px] bg-[#00ff00] opacity-30"></div>
                  <div className="absolute top-0 left-1/2 w-[1px] h-full bg-[#00ff00] opacity-30"></div>
                  <div className="absolute top-1/2 left-1/2 w-8 h-8 rounded-full border-2 border-[#00ff00] -ml-4 -mt-4"></div>
                </div>
                
                {/* 技術標籤修改為文章風格，移至左下角 */}
                <div className="flex gap-2 absolute bottom-2 left-2">
                  <span className="flex-none bg-green-900 text-black px-2 py-1 text-xs inline-block shadow-md">
                    {caseItem.frontendTech}
                  </span>
                  <span className="flex-none bg-blue-900 text-white px-2 py-1 text-xs inline-block shadow-md">
                    {caseItem.backendTech}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold mb-3 text-[#00ff00]">
                  {language === 'zh' ? caseItem.title : caseItem.englishTitle}
                </h3>
                <p className="text-gray-400 mb-6">
                  {language === 'zh' ? caseItem.description : caseItem.englishDescription}
                </p>
                <div className="mt-auto text-right pr-2">
                  <span className="text-green-400 text-sm inline-flex items-center">
                    {language === 'zh' ? '查看詳情' : 'View Details'} 
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </span>
                </div>
              </div>
            ))}
          </div>
          
          <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 z-10">
            <button 
              className="carousel-control right-control p-2"
              onClick={() => {
                const carousel = document.querySelector('.projects-carousel');
                if (carousel) {
                  carousel.scrollBy({ left: 300, behavior: 'smooth' });
                }
              }}
            >
              <FiArrowRight size={24} />
            </button>
          </div>
        </div>
        
        {/* 像素風格的吃豆人輪播指示點 */}
        <div className="carousel-dots flex justify-center mt-6 items-center">
          <div className="flex items-center">
            <div className="w-5 h-5 bg-[#ffff00] rounded-full mr-2 animate-pulse-slow pacman">
              <div className="pacman-mouth"></div>
            </div>
            {cases.map((_, index) => (
              <div 
                key={index}
                className={`w-3 h-3 rounded-full mx-1 ${index === activeCaseIndex ? 'bg-[#00ffff]' : 'bg-[#00ff00]'} dot`}
                onClick={() => handleCaseChange(index)}
              ></div>
            ))}
            <div className="w-3 h-3 bg-[#ff6666] rounded-full ml-1 ghost"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects; 