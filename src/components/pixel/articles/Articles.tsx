import React from 'react';

interface ArticlesProps {
  language: string;
  oddSection: boolean;
}

const Articles: React.FC<ArticlesProps> = ({ language, oddSection }) => {
  return (
    <section id="articles" className={`px-4 py-24 ${oddSection ? 'bg-black' : 'bg-neutral-950'}`}>
      <div className="container mx-auto">
        <h2 className="pixel-section-title text-center">
          <span className="text-[#66ff99]">{language === 'zh' ? '最新文章' : 'Latest Articles'}</span>
        </h2>
        <p className="mb-12 text-gray-400 text-center">
          {language === 'zh' ? '探索我們分享的技術知識和行業洞察' : 'Explore our technical knowledge and industry insights'}
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="pixel-service-card">
            <div className="mb-4 flex-none bg-green-900 text-black px-2 py-1 text-xs inline-block">{language === 'zh' ? 'ERP' : 'ERP'}</div>
            <h3 className="pixel-service-title mb-4">{language === 'zh' ? '企業資源規劃系統實施指南' : 'Enterprise Resource Planning System Implementation Guide'}</h3>
            <p className="pixel-service-desc mb-8">
              {language === 'zh' 
                ? '本文介紹如何順利實施ERP系統，避免常見陷阱並最大化投資回報...' 
                : 'This article introduces how to successfully implement an ERP system, avoid common pitfalls, and maximize return on investment...'}
            </p>
            <div className="mt-auto flex justify-between items-center">
              <span className="text-gray-500 text-xs">2023-10-15</span>
              <a href="/posts/erp-guide" className="text-green-400 hover:text-green-300 text-sm">{language === 'zh' ? '閱讀更多' : 'Read More'}</a>
            </div>
          </div>
          
          <div className="pixel-service-card">
            <div className="mb-4 flex-none bg-green-900 text-black px-2 py-1 text-xs inline-block">{language === 'zh' ? 'Web開發' : 'Web Development'}</div>
            <h3 className="pixel-service-title mb-4">{language === 'zh' ? '2023年Web開發趨勢展望' : '2023 Web Development Trends Outlook'}</h3>
            <p className="pixel-service-desc mb-8">
              {language === 'zh' 
                ? '探討當前最熱門的網站開發技術和框架，以及它們如何影響未來的網絡生態...' 
                : 'Discuss the most popular website development technologies and frameworks, and how they affect the future network ecology...'}
            </p>
            <div className="mt-auto flex justify-between items-center">
              <span className="text-gray-500 text-xs">2023-09-22</span>
              <a href="/posts/web-trends" className="text-green-400 hover:text-green-300 text-sm">{language === 'zh' ? '閱讀更多' : 'Read More'}</a>
            </div>
          </div>
          
          <div className="pixel-service-card">
            <div className="mb-4 flex-none bg-green-900 text-black px-2 py-1 text-xs inline-block">{language === 'zh' ? '數位轉型' : 'Digital Transformation'}</div>
            <h3 className="pixel-service-title mb-4">{language === 'zh' ? '中小企業數位轉型策略' : 'Digital Transformation Strategy for SMEs'}</h3>
            <p className="pixel-service-desc mb-8">
              {language === 'zh' 
                ? '針對資源有限的中小企業，如何制定有效的數位轉型策略並分階段實施...' 
                : 'For SMEs with limited resources, how to formulate effective digital transformation strategies and implement them in phases...'}
            </p>
            <div className="mt-auto flex justify-between items-center">
              <span className="text-gray-500 text-xs">2023-08-30</span>
              <a href="/posts/digital-transformation" className="text-green-400 hover:text-green-300 text-sm">{language === 'zh' ? '閱讀更多' : 'Read More'}</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Articles; 