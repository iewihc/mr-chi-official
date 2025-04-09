import React from 'react';
import { cases } from '../data';

interface ProjectsProps {
  language: string;
  oddSection: boolean;
}

// 模擬案例縮圖數據
const projectImages = [
  '/images/projects/manufacturing-dashboard.jpg',
  '/images/projects/education-registration.jpg',
  '/images/projects/medical-equipment.jpg',
  '/images/projects/ecommerce-platform.jpg',
  '/images/projects/logistics-system.jpg',
  '/images/projects/restaurant-pos.jpg',
];

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
        
        <p className="text-white text-center max-w-3xl mx-auto mb-12">
          {language === 'zh' 
            ? '透過我們的成功案例，了解我們如何幫助客戶實現目標，解決業務挑戰，提升運營效率。' 
            : 'Through our successful cases, understand how we help clients achieve goals, solve business challenges, and improve operational efficiency.'}
        </p>
        
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
          
          {/* 網格布局取代水平滾動 - 使用大卡片設計 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            {cases.map((caseItem, index) => (
              <div 
                key={index} 
                className="pixel-project-card overflow-hidden border-2 border-[#00ff00] bg-black rounded-lg 
                          transition-all duration-300 transform hover:scale-[1.03] cursor-pointer relative group
                          h-full flex flex-col"
                onClick={() => window.location.href = `/posts/case-${index+1}`}
              >
                {/* 項目縮圖 */}
                <div className="relative overflow-hidden h-48">
                  <img 
                    src={projectImages[index % projectImages.length]} 
                    alt={language === 'zh' ? caseItem.title : caseItem.englishTitle}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* 技術標籤重新定位到縮圖上 */}
                  <div className="absolute top-0 right-0 flex gap-1 p-2">
                    <span className="flex-none bg-green-900 text-white px-2 py-1 text-xs shadow-md border border-green-600">
                      {caseItem.frontendTech}
                    </span>
                    <span className="flex-none bg-blue-900 text-white px-2 py-1 text-xs shadow-md border border-blue-600">
                      {caseItem.backendTech}
                    </span>
                  </div>
                  
                  {/* 縮圖覆蓋漸變 */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70"></div>
                </div>
                
                {/* 內容區域 */}
                <div className="p-5 flex-grow flex flex-col">
                  <h3 className="text-xl font-bold mb-3 text-[#00ff00]">
                    {language === 'zh' ? caseItem.title : caseItem.englishTitle}
                  </h3>
                  
                  <p className="text-white mb-4 flex-grow">
                    {language === 'zh' ? caseItem.description : caseItem.englishDescription}
                  </p>
                  
                  <div className="mt-auto text-right">
                    <span className="text-green-400 text-sm inline-flex items-center">
                      {language === 'zh' ? '查看詳情' : 'View Details'} 
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </span>
                  </div>
                </div>
                
                {/* 狙擊鏡效果保留但簡化 */}
                <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-[#00ff00]"></div>
                  <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-[#00ff00]"></div>
                  <div className="absolute bottom-0 left-0 w-12 h-12 border-b-2 border-l-2 border-[#00ff00]"></div>
                  <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-[#00ff00]"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* 顯示瀏覽更多案例按鈕 */}
        <div className="text-center mt-12">
          <a href="/posts" className="inline-block border-2 border-[#00ff00] bg-black text-[#00ff00] 
                                     px-6 py-3 hover:bg-[#00ff00] hover:text-black 
                                     transition-colors duration-300 cursor-pointer">
            <span className="font-pixel">{language === 'zh' ? '瀏覽更多案例' : 'View More Cases'}</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects; 