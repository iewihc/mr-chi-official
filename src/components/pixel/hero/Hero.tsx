import React from 'react';

interface HeroProps {
  language: string;
}

const Hero: React.FC<HeroProps> = ({ language }) => {
  return (
    <section className="pixel-section pixel-hero py-0 mt-0" id="home">
      <div className="pixel-grid-bg"></div>
      
      {/* 添加小精靈動畫元素 */}
      <div className="pixel-sprites-container absolute inset-0 w-full h-full pointer-events-none overflow-hidden">
        {/* 左側飄動的小精靈 */}
        <div className="pixel-sprite sprite-1 absolute left-[5%] top-[15%] animate-float-slow" style={{ animationDelay: '0.5s' }}>
          <div className="w-6 h-6 bg-[#00ff00] opacity-70 rounded-sm"></div>
          <div className="pixel-trail"></div>
        </div>
        
        {/* 右側飄動的小精靈 */}
        <div className="pixel-sprite sprite-2 absolute right-[10%] top-[30%] animate-float-medium" style={{ animationDelay: '1.2s' }}>
          <div className="w-8 h-8 bg-[#33ff33] opacity-60 rounded rotate-45"></div>
          <div className="pixel-trail"></div>
        </div>
        
        {/* 中央快速移動的小精靈 */}
        <div className="pixel-sprite sprite-3 absolute left-[40%] top-[60%] animate-float-fast" style={{ animationDelay: '0.8s' }}>
          <div className="w-4 h-4 bg-[#88ff88] opacity-80 rounded-full"></div>
          <div className="pixel-trail"></div>
        </div>
        
        {/* 底部慢速移動的小精靈 */}
        <div className="pixel-sprite sprite-4 absolute left-[20%] bottom-[20%] animate-pulse-slow" style={{ animationDelay: '1.5s' }}>
          <div className="w-5 h-5 bg-[#66ff66] opacity-50 rounded-full"></div>
          <div className="pixel-trail"></div>
        </div>
        
        {/* 右下角閃爍的小精靈 */}
        <div className="pixel-sprite sprite-5 absolute right-[25%] bottom-[15%] animate-pulse-fast" style={{ animationDelay: '0.3s' }}>
          <div className="w-3 h-3 bg-[#44ff44] opacity-90 transform rotate-12"></div>
          <div className="pixel-trail"></div>
        </div>
        
        {/* 添加更多小精靈 */}
        <div className="pixel-sprite sprite-6 absolute left-[60%] top-[20%] animate-float-medium" style={{ animationDelay: '2.1s' }}>
          <div className="w-4 h-4 bg-[#22ff22] opacity-60 rounded-full"></div>
          <div className="pixel-trail"></div>
        </div>
        
        <div className="pixel-sprite sprite-7 absolute right-[40%] top-[50%] animate-pulse-medium" style={{ animationDelay: '1.7s' }}>
          <div className="w-5 h-5 bg-[#11ff11] opacity-70 transform rotate-45"></div>
          <div className="pixel-trail"></div>
        </div>
        
        <div className="pixel-sprite sprite-8 absolute left-[30%] top-[40%] animate-float-fast" style={{ animationDelay: '0.2s' }}>
          <div className="w-3 h-3 bg-[#55ff55] opacity-80 rounded-sm"></div>
          <div className="pixel-trail"></div>
        </div>
      </div>
      
      <div className="pixel-container">
        <div className="pixel-hero-content">
          <div className="pixel-hero-text">
            <div className="pixel-company-box">
              <h2 className="pixel-company-name">
                {language === 'zh' ? 'Mr. Chi' : 'Mr. Chi Tech'}
              </h2>
            </div>
            <h1 className="pixel-slogan">
              {language === 'zh' ? '季先生科技有限公司' : 'Mr. Chi Technology Co., Ltd.'}
            </h1>
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="md:w-2/3">
                <p className="pixel-intro">
                  {language === 'zh' 
                    ? '專注於客製化軟體開發與數位轉型服務，採用敏捷式開發方法，協助企業提升競爭力，打造創新數位解決方案。' 
                    : 'Focused on custom software development and digital transformation services, using agile development methods to help businesses enhance competitiveness and create innovative digital solutions.'}
                </p>
                <div className="pixel-hero-buttons">
                  <a href="#services" className="pixel-button">
                    {language === 'zh' ? '服務項目' : 'Services'}
                  </a>
                  <a href="#about" className="pixel-button pixel-button-primary">
                    {language === 'zh' ? '了解更多' : 'Learn More'}
                  </a>
                </div>
              </div>
              <div className="md:w-1/3 mt-8 md:mt-0 flex justify-center">
                <div className="pixel-computer">
                  <div className="pixel-monitor">
                    <div className="pixel-screen"></div>
                  </div>
                  <div className="pixel-keyboard"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 