import React from 'react';
import { cases } from '../data';

interface ProjectsProps {
  language: string;
  oddSection: boolean;
}

const Projects: React.FC<ProjectsProps> = ({ language, oddSection }) => {
  return (
    <section id="projects" className={`px-4 py-24 ${!oddSection ? 'bg-black' : 'bg-[#0a0a0a]'}`}>
      <div className="container mx-auto">
        <h2 className="pixel-section-title text-center" style={{ textShadow: '2px 2px 8px rgba(0, 255, 0, 0.4)' }}>
          <span className="relative inline-block">
            <span className="text-[#00ffaa] text-shadow-pixel">{language === 'zh' ? '實際案例' : 'Case Studies'}</span>
            <span className="absolute -bottom-1 left-0 w-full h-1 bg-[#00ff00] opacity-50"></span>
          </span>
        </h2>
        
        <div className="relative max-w-6xl mx-auto">
          {/* 輪播圖上的小精靈裝飾 */}
          <div className="absolute -top-8 left-[10%] z-10 animate-float-slow" style={{ animationDelay: '0.7s' }}>
            <div className="w-5 h-5 bg-[#00ff00] opacity-70 rounded-sm"></div>
            <div className="pixel-trail"></div>
          </div>
          <div className="absolute -bottom-6 right-[20%] z-10 animate-pulse-medium" style={{ animationDelay: '1.5s' }}>
            <div className="w-4 h-4 bg-[#ffcc00] opacity-60 rounded-full"></div>
            <div className="pixel-trail"></div>
          </div>
          
          {/* 網格布局取代水平滾動 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {cases.slice(0, 6).map((caseItem, index) => (
              <div key={index} 
                className="pixel-project-card overflow-hidden border border-[#00ff00] bg-black p-6 rounded-lg 
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
                <p className="text-gray-400 mb-6 line-clamp-3">
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
        </div>
        
        {/* 顯示瀏覽更多案例按鈕 */}
        <div className="text-center mt-12">
          <a href="/posts" className="inline-block border-2 border-[#00ff00] bg-black text-[#00ff00] 
                                     px-6 py-3 rounded-lg hover:bg-[#00ff00] hover:text-black 
                                     transition-colors duration-300 cursor-pointer">
            <span className="font-pixel">{language === 'zh' ? '瀏覽更多案例' : 'View More Cases'}</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects; 