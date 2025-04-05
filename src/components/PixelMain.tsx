import { useState, useEffect } from 'react';

// 引入組件
import Header from './pixel/header/Header';
import Hero from './pixel/hero/Hero';
import Services from './pixel/services/Services';
import Projects from './pixel/projects/Projects';
import Feedback from './pixel/feedback/Feedback';
import About from './pixel/about/About';
import Devops from './pixel/devops/Devops';
import Faq from './pixel/faq/Faq';
import Articles from './pixel/articles/Articles';
import Footer from './pixel/footer/Footer';

function PixelMain() {
  const [oddSection, setOddSection] = useState(true); // 用於交替區段背景顏色
  const [language, setLanguage] = useState('zh'); // 'zh' for Chinese, 'en' for English
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // 語言切換功能
  const toggleLanguage = () => {
    setLanguage(prevLang => prevLang === 'zh' ? 'en' : 'zh');
  };

  // 切換移動端選單
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // 在 PixelMain 組件中添加區段計數邏輯
  useEffect(() => {
    // 定義各區塊並按顺序設置奇數/偶數背景
    const sections: string[] = ['home', 'services', 'projects', 'about', 'feedback', 'faq', 'articles'];
    
    // 為每個區塊添加滚动檢測
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200; // 添加偏移量以提前觸發
      
      // 檢查哪個區塊在視窗中
      for (let i = 0; i < sections.length; i++) {
        const sectionId = sections[i];
        // 明確指定 sectionId 不為 undefined，所以可以安全地傳給 getElementById
        const section = document.getElementById(sectionId as string);
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionBottom = sectionTop + section.offsetHeight;
          
          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            setOddSection(i % 2 === 0); // 奇數索引的區塊設為 false (深色背景)
            break;
          }
        }
      }
    };
    
    // 初始化時執行一次以設定初始背景
    handleScroll();
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);  // 依賴項為空陣列，只在組件掛載時執行一次

  // 設定 DevOps 動畫效果
  useEffect(() => {
    // DevOps 動畫效果 - 馬里奧移動動畫
    const animateDevOpsPipeline = () => {
      // 獲取瑪利歐元素和所有磚塊
      const mario = document.querySelector('.pixel-mario');
      const brickContainers = document.querySelectorAll('.pixel-brick-container');
      const pipeline = document.querySelector('.pixel-pipeline-track');
      
      if (!mario || brickContainers.length === 0 || !pipeline) return;
      
      // 設置瑪利歐初始位置
      let marioPosition = 0;
      let marioDirection = 1; // 1向右，-1向左
      let currentBrickIndex = 0;
      let animationFrame: number;
      
      // 瑪利歐動畫函數
      const moveMario = () => {
        if (!mario) return;
        
        // 更新瑪利歐位置
        marioPosition += 2 * marioDirection;
        (mario as HTMLElement).style.transform = `translateX(${marioPosition}px) scaleX(${marioDirection})`;
        
        // 獲取管道寬度，用於判斷邊界
        const pipelineWidth = (pipeline as HTMLElement).clientWidth - 50;
        
        // 邊界檢查，達到邊界時改變方向
        if (marioPosition >= pipelineWidth) {
          marioDirection = -1; // 向左
        } else if (marioPosition <= 0) {
          marioDirection = 1; // 向右
        }
        
        // 計算當前應該激活的磚塊
        const normalizedPosition = marioPosition / pipelineWidth;
        const targetBrickIndex = Math.floor(normalizedPosition * brickContainers.length);
        
        // 如果磚塊索引變化了，更新激活的磚塊
        if (targetBrickIndex !== currentBrickIndex && targetBrickIndex >= 0 && targetBrickIndex < brickContainers.length) {
          // 重置所有磚塊
          brickContainers.forEach((container) => {
            container.classList.remove('active');
          });
          
          // 激活當前磚塊
          const targetBrick = brickContainers[targetBrickIndex] as HTMLElement;
          if (targetBrick) {
            targetBrick.classList.add('active');
            
            // 創建硬幣效果
            const coinContainer = document.querySelector('.pixel-coins-container');
            if (coinContainer) {
              const brickRect = targetBrick.getBoundingClientRect();
              const coin = document.createElement('div');
              coin.className = 'pixel-coin';
              coin.style.left = `${brickRect.left + brickRect.width/2 - 10}px`;
              coin.style.top = `${brickRect.top - 20}px`;
              coinContainer.appendChild(coin);
              
              // 硬幣消失後移除元素
              setTimeout(() => {
                coin.remove();
              }, 1000);
            }
            
            currentBrickIndex = targetBrickIndex;
          }
        }
        
        // 繼續動畫循環
        animationFrame = requestAnimationFrame(moveMario);
      };
      
      // 開始動畫
      moveMario();
      
      // 返回清理函數
      return () => {
        if (animationFrame) {
          cancelAnimationFrame(animationFrame);
        }
      };
    };
    
    // 當DevOps區塊進入可視區域時觸發動畫
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const cleanup = animateDevOpsPipeline();
          return () => {
            if (cleanup) cleanup();
          };
        }
      });
    }, { threshold: 0.3 });
    
    const devopsSection = document.querySelector('.devops-section');
    if (devopsSection) {
      observer.observe(devopsSection);
    }
    
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <main className="tw-main-content relative">
      {/* SEO 隱藏內容 */}
      <div className="seo-hidden" style={{ display: 'none' }}>
        <h1>季先生科技 - 專業軟體開發與數位轉型顧問</h1>
        <p>提供客製化軟體開發、技術顧問及軟體維護服務，採用敏捷式開發，讓客戶能夠參與開發流程。</p>
        <p>台灣領先的軟體開發團隊，幫助企業提升競爭力並實現數位轉型。</p>
      </div>
      
      {/* 導航欄 */}
      <Header 
        language={language} 
        toggleLanguage={toggleLanguage} 
        isMobileMenuOpen={isMobileMenuOpen} 
        toggleMobileMenu={toggleMobileMenu} 
      />

      {/* 首頁區段 */}
      <Hero language={language} />

      {/* 服務區段 */}
      <Services language={language} oddSection={oddSection} />

      {/* 專案案例區段 */}
      <Projects language={language} oddSection={oddSection} />

      {/* 客戶反饋區段 */}
      <Feedback language={language} oddSection={oddSection} />

      {/* 關於我們區段 */}
      <About language={language} oddSection={oddSection} />

      {/* DevOps開發流程圖 */}
      <Devops language={language} oddSection={oddSection} />

      {/* 常見問題 */}
      <Faq language={language} oddSection={oddSection} />

      {/* 文章區段 */}
      <Articles language={language} oddSection={oddSection} />

      {/* 頁腳 */}
      <Footer language={language} />

      {/* 移動端選單覆蓋層 */}
      <div 
        className={`pixel-mobile-menu-overlay ${isMobileMenuOpen ? 'active' : ''}`}
        onClick={toggleMobileMenu}
      ></div>
    </main>
  );
}

export default PixelMain; 