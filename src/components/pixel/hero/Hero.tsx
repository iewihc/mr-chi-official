import React, { useEffect, useRef } from 'react';

interface HeroProps {
  language: string;
}

const Hero: React.FC<HeroProps> = ({ language }) => {
  const codeScreenRef = useRef<HTMLDivElement>(null);
  
  // 模擬打字機效果
  useEffect(() => {
    // 超簡短的純文字
    const text = "Mr.Chi Tech >";
    
    if (!codeScreenRef.current) return;
    
    const screen = codeScreenRef.current;
    let displayText = '';
    let currentIndex = 0;
    
    // 簡單的打字效果
    const typeEffect = () => {
      if (currentIndex < text.length) {
        const nextChar = text[currentIndex];
        displayText += nextChar;
        
        // 在螢幕上顯示文字，使用內嵌樣式而非 Tailwind 類別
        screen.innerHTML = `<div style="font-family: monospace; font-size: 1.25rem; color: #00ff00; padding: 0.5rem; text-shadow: 0 0 5px rgba(0, 255, 0, 0.5);">${displayText}</div>`;
        
        // 繼續打字
        currentIndex++;
        setTimeout(typeEffect, 150 + Math.random() * 50);
      } else {
        // 打字結束後添加閃爍游標
        startCursorBlink();
      }
    };
    
    // 添加閃爍游標
    const startCursorBlink = () => {
      const cursor = document.createElement('span');
      cursor.className = 'blink-cursor';
      cursor.innerHTML = '_';
      cursor.style.color = '#00ff00';
      cursor.style.fontWeight = 'bold';
      cursor.style.textShadow = '0 0 5px rgba(0, 255, 0, 0.5)';
      
      if (screen.firstChild) {
        screen.firstChild.appendChild(cursor);
      }
    };
    
    // 開始打字效果
    setTimeout(typeEffect, 1000);
  }, []);
  
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
        
        {/* 添加程式碼相關元素 - 使其更輕巧、專業 */}
        <div className="absolute right-[20%] top-[15%] animate-float-slow opacity-20" style={{ animationDelay: '0.7s' }}>
          <div className="font-mono text-2xl text-[#00ff88]">{"{"}</div>
        </div>
        
        <div className="absolute left-[12%] bottom-[40%] animate-float-slow opacity-15" style={{ animationDelay: '1.3s' }}>
          <div className="font-mono text-xl text-[#00ff88]">{"}"}</div>
        </div>
        
        <div className="absolute left-[35%] top-[25%] animate-pulse-slow opacity-10" style={{ animationDelay: '1.9s' }}>
          <div className="font-mono text-lg text-[#33aaff]">{"<React/>"}</div>
        </div>
        
        {/* 增加更多前端框架元素 */}
        <div className="absolute right-[30%] top-[40%] animate-float-medium opacity-15" style={{ animationDelay: '1.2s' }}>
          <div className="font-mono text-lg text-[#42b883]">{"<Vue/>"}</div>
        </div>
        
        <div className="absolute right-[15%] bottom-[30%] animate-float-fast opacity-18" style={{ animationDelay: '0.9s' }}>
          <div className="font-mono text-lg text-[#3178c6]">{":TypeScript"}</div>
        </div>
        
        <div className="absolute right-[38%] top-[12%] animate-float-slow opacity-13" style={{ animationDelay: '2.3s' }}>
          <div className="font-mono text-lg text-[#61dafb]">{"<Angular/>"}</div>
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
                <div className="pixel-computer relative">
                  <div className="pixel-monitor border-4 border-gray-800 rounded-t-lg p-1 bg-gray-900 shadow-lg">
                    <div className="pixel-screen bg-black rounded overflow-hidden h-16 flex items-center" ref={codeScreenRef}></div>
                  </div>
                  <div className="pixel-keyboard bg-gray-800 border-2 border-gray-700 rounded-b-lg p-1">
                    <div className="grid grid-cols-12 gap-0.5 h-4">
                      {Array.from({ length: 36 }).map((_, index) => (
                        <div key={index} className="h-1 bg-gray-700 rounded-sm"></div>
                      ))}
                    </div>
                    <div className="w-10 h-1 mx-auto mt-1 bg-gray-600 rounded-sm"></div>
                  </div>
                  <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-2 h-2 rounded-full bg-gray-700"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* 添加程式碼動畫相關的樣式 */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        
        .blink-cursor {
          animation: blink 1s step-end infinite;
          font-size: 20px;
          margin-left: 2px;
        }
        
        .pixel-computer {
          transform: rotate(-2deg);
          transition: all 0.3s ease;
        }
        
        .pixel-computer:hover {
          transform: rotate(0deg) scale(1.02);
        }
        
        .pixel-screen {
          background-color: #000000;
          box-shadow: inset 0 0 10px rgba(0, 255, 0, 0.2);
        }
      `}} />
    </section>
  );
};

export default Hero; 