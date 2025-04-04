import React, { useState, useRef, useEffect } from 'react';
import { 
  FiDatabase, FiShoppingCart, FiMonitor, FiSettings, 
  FiServer, FiCloud, FiSmartphone, FiShield, FiBarChart, FiArrowLeft, FiArrowRight,
  FiCode, FiGitPullRequest, FiPackage, FiCheck, FiUploadCloud, FiActivity, FiPenTool, FiImage, FiLayers, FiTarget, FiEye, FiAward } from 'react-icons/fi';

// 定義服務項目的介面
interface ServiceItem {
  title: string;
  englishTitle?: string;
  description: string;
  englishDescription?: string;
  icon: React.ReactNode;
}

function PixelMain() {
  const [activeServiceIndex, setActiveServiceIndex] = useState(0);
  const [activeCaseIndex, setActiveCaseIndex] = useState(0);
  const [activeFeedbackIndex, setActiveFeedbackIndex] = useState(0);
  const [activeDevopsStep, setActiveDevopsStep] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [language, setLanguage] = useState('zh'); // 'zh' for Chinese, 'en' for English
  const [oddSection, setOddSection] = useState(true); // 用於交替區段背景顏色
  const searchInputRef = useRef<HTMLInputElement>(null);

  // 語言切換功能
  const toggleLanguage = () => {
    setLanguage(prevLang => prevLang === 'zh' ? 'en' : 'zh');
  };

  // 服務數據
  const services: ServiceItem[] = [
    {
      title: "創意LOGO設計",
      englishTitle: "Creative Logo Design",
      description: "建立獨特品牌識別，讓您在市場中脫穎而出。",
      englishDescription: "Establish a unique brand identity that makes you stand out in the market.",
      icon: <i className="fas fa-paint-brush"></i>
    },
    {
      title: "全端網站開發",
      englishTitle: "Full-Stack Web Development",
      description: "建立獨特品牌識別，讓您在市場中脫穎而出。",
      englishDescription: "Establish a unique brand identity that makes you stand out in the market.",
      icon: <i className="fas fa-laptop-code"></i>
    },
    {
      title: "ERP系統整合",
      englishTitle: "ERP System Integration",
      description: "建立獨特品牌識別，讓您在市場中脫穎而出。",
      englishDescription: "Establish a unique brand identity that makes you stand out in the market.",
      icon: <i className="fas fa-network-wired"></i>
    },
    {
      title: "DevOps服務",
      englishTitle: "DevOps Services",
      description: "建立獨特品牌識別，讓您在市場中脫穎而出。",
      englishDescription: "Establish a unique brand identity that makes you stand out in the market.",
      icon: <i className="fas fa-sync-alt"></i>
    },
    {
      title: "UI/UX設計",
      englishTitle: "UI/UX Design",
      description: "建立獨特品牌識別，讓您在市場中脫穎而出。",
      englishDescription: "Establish a unique brand identity that makes you stand out in the market.",
      icon: <i className="fas fa-pencil-ruler"></i>
    },
    {
      title: "技術顧問",
      englishTitle: "Technical Consulting",
      description: "建立獨特品牌識別，讓您在市場中脫穎而出。",
      englishDescription: "Establish a unique brand identity that makes you stand out in the market.",
      icon: <i className="fas fa-comments"></i>
    },
  ];

  // 案例數據
  const cases = [
    {
      title: "製造業自動化報表",
      englishTitle: "Manufacturing Automated Reports",
      description: "為製造商打造自動化報表系統，將每天3小時的Excel統計工作縮短至5分鐘，錯誤率歸零。",
      englishDescription: "Created an automated reporting system for manufacturers, reducing daily Excel statistics work from 3 hours to 5 minutes with zero error rate.",
      frontendTech: "React",
      backendTech: "Node.js"
    },
    {
      title: "教育機構線上報名系統",
      englishTitle: "Educational Institution Online Registration System",
      description: "為教育機構開發線上報名與後台管理系統，節省70%行政時間，提升用戶體驗。",
      englishDescription: "Developed an online registration and backend management system for educational institutions, saving 70% of administrative time and improving user experience.",
      frontendTech: "Vue",
      backendTech: "Python"
    },
    {
      title: "醫療設備管理平台",
      englishTitle: "Medical Equipment Management Platform",
      description: "為醫療單位建立設備管理系統，實現庫存追蹤與維護排程，提高運營效率。",
      englishDescription: "Established an equipment management system for medical units to achieve inventory tracking and maintenance scheduling, improving operational efficiency.",
      frontendTech: "Angular",
      backendTech: ".NET"
    }
  ];

  // 客戶反饋數據
  const feedbacks = [
    {
      name: "貿易公司業主",
      englishName: "Trading Company Owner",
      company: "台灣貿易企業",
      englishCompany: "Taiwan Trading Enterprise",
      content: "本來只是抱著試試看的心態找季先生科技，沒想到開發過程中問題解得比我們內部還快，連流程都幫我們一起優化了。",
      englishContent: "I originally approached Mr. Chi Tech with a trial mentality, but didn't expect that they would solve problems faster than our internal team during the development process, and even helped us optimize our workflows.",
      avatar: "/avatar1.jpg"
    },
    {
      name: "課程平台創辦人",
      englishName: "Course Platform Founder",
      company: "教育科技公司",
      englishCompany: "Educational Technology Company",
      content: "很少有工程師願意聽我們這種非技術背景講話，而且還能聽懂。我們遇到的每個難題，他們都用實際方式解決。",
      englishContent: "Few engineers are willing to listen to non-technical backgrounds like us, and still understand. They solved every challenge we encountered in a practical way.",
      avatar: "/avatar2.jpg"
    },
    {
      name: "醫療儀器設備商負責人",
      englishName: "Medical Equipment Supplier Manager",
      company: "醫療設備供應商",
      englishCompany: "Medical Equipment Supplier",
      content: "合作起來最放心的一點是他們的回覆速度跟改版彈性，真的有把我們的專案當一回事。",
      englishContent: "The most reassuring aspect of working with them is their response speed and flexibility for revisions. They truly treated our project as a priority.",
      avatar: "/avatar3.jpg"
    }
  ];

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

  // DevOps步驟的資料
  interface DevOpsStep {
    title: string;
    englishTitle?: string;  // 選填的英文標題
    description: string;
    englishDescription?: string;  // 選填的英文描述
    icon: React.ReactNode;
  }

  // 更新 DevOps 步驟為具有中英文的資料
  const devopsSteps: DevOpsStep[] = [
    { 
      title: "計劃 (Plan)", 
      englishTitle: "Plan", 
      description: "收集需求、制定開發與部署策略", 
      englishDescription: "Gather requirements, formulate development and deployment strategies",
      icon: <FiDatabase size={24} /> 
    },
    { 
      title: "開發 (Develop)", 
      englishTitle: "Develop", 
      description: "撰寫程式碼、版本控制", 
      englishDescription: "Write code, version control",
      icon: <FiMonitor size={24} /> 
    },
    { 
      title: "建置 (Build)", 
      englishTitle: "Build", 
      description: "將原始碼編譯為可執行應用", 
      englishDescription: "Compile source code into executable applications",
      icon: <FiSettings size={24} /> 
    },
    { 
      title: "整合 (Test)", 
      englishTitle: "Test", 
      description: "自動化測試，確保品質", 
      englishDescription: "Automated testing, quality assurance",
      icon: <FiServer size={24} /> 
    },
    { 
      title: "交付 (Release)", 
      englishTitle: "Release", 
      description: "將通過測試的程式部署至環境", 
      englishDescription: "Deploy tested code to environment",
      icon: <FiShoppingCart size={24} /> 
    },
    { 
      title: "部署 (Deploy)", 
      englishTitle: "Deploy", 
      description: "自動部署至實際環境", 
      englishDescription: "Automated deployment to production environment",
      icon: <FiCloud size={24} /> 
    },
    { 
      title: "監控 (Monitor)", 
      englishTitle: "Monitor", 
      description: "即時監控應用與基礎架構", 
      englishDescription: "Real-time monitoring of applications and infrastructure",
      icon: <FiBarChart size={24} /> 
    }
  ];

  // 設定輪播效果
  useEffect(() => {
    // 設置服務輪播間隔
    const servicesInterval = setInterval(() => {
      setActiveServiceIndex((prevIndex: number) => (prevIndex + 1) % services.length);
    }, 5000);
    
    // 設置案例輪播間隔
    const casesInterval = setInterval(() => {
      setActiveCaseIndex((prevIndex: number) => (prevIndex + 1) % cases.length);
      
      // 滾動案例輪播
      const carousel = document.querySelector('.projects-carousel');
      if (carousel) {
        const nextIndex = (activeCaseIndex + 1) % cases.length;
        const caseItems = carousel.querySelectorAll('.pixel-project-card');
        if (caseItems && caseItems[nextIndex]) {
          carousel.scrollTo({
            left: (caseItems[nextIndex] as HTMLElement).offsetLeft - 20,
            behavior: 'smooth'
          });
        }
      }
    }, 7000);
    
    // 設置反饋輪播間隔
    const feedbacksInterval = setInterval(() => {
      setActiveFeedbackIndex((prevIndex: number) => (prevIndex + 1) % feedbacks.length);
      
      // 滾動反饋輪播
      const carousel = document.querySelector('.feedbacks-carousel');
      if (carousel) {
        const nextIndex = (activeFeedbackIndex + 1) % feedbacks.length;
        const feedbackItems = carousel.querySelectorAll('.feedback-card');
        if (feedbackItems && feedbackItems[nextIndex]) {
          carousel.scrollTo({
            left: (feedbackItems[nextIndex] as HTMLElement).offsetLeft - 20,
            behavior: 'smooth'
          });
        }
      }
    }, 8000);
    
    // DevOps步驟輪播間隔
    const devopsInterval = setInterval(() => {
      setActiveDevopsStep((prevIndex: number) => (prevIndex + 1) % devopsSteps.length);
    }, 6000);
    
    // 清除間隔函數
    return () => {
      clearInterval(servicesInterval);
      clearInterval(casesInterval);
      clearInterval(feedbacksInterval);
      clearInterval(devopsInterval);
    };
  }, [services.length, cases.length, feedbacks.length, devopsSteps.length, activeCaseIndex, activeFeedbackIndex]);

  // 焦點搜尋欄位
  const focusSearchInput = () => {
    if (searchInputRef.current) {
      searchInputRef.current.focus();
    }
  };

  // 切換DevOps步驟
  const handleDevopsChange = (index: number) => {
    setActiveDevopsStep(index);
  };

  // 切換移動端選單
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // 手動切換服務
  const handleServiceChange = (index: number) => {
    setActiveServiceIndex(index);
  };

  // 手動切換案例
  const handleCaseChange = (index: number) => {
    setActiveCaseIndex(index);
  };

  // 手動切換反饋
  const handleFeedbackChange = (index: number) => {
    setActiveFeedbackIndex(index);
  };

  // 擴展 interface 以確保所有資料類型正確
  interface CaseItem {
    title: string;
    englishTitle: string;
    description: string;
    englishDescription: string;
    frontendTech: string;
    backendTech: string;
  }

  interface Feedback {
    name: string;
    englishName: string;
    company: string;
    englishCompany: string;
    content: string;
    englishContent: string;
    avatar: string;
  }

  // 更新實際案例區塊，添加程式語言標籤和自動輪播
  useEffect(() => {
    // 設置自動輪播
    const projectsInterval = setInterval(() => {
      const carousel = document.querySelector('.projects-carousel');
      if (carousel) {
        carousel.scrollBy({ left: 300, behavior: 'smooth' });
        
        // 檢查是否已經滾動到最後，如果是，則回到開始
        const scrollWidth = carousel.scrollWidth;
        const clientWidth = carousel.clientWidth;
        const scrollLeft = carousel.scrollLeft;
        
        if (scrollLeft + clientWidth >= scrollWidth - 50) {
          carousel.scrollTo({ left: 0, behavior: 'smooth' });
        }
      }
    }, 5000);
    
    // 設置客戶回饋自動輪播
    const feedbacksInterval = setInterval(() => {
      const carousel = document.querySelector('.feedbacks-carousel');
      if (carousel) {
        carousel.scrollBy({ left: 300, behavior: 'smooth' });
        
        // 檢查是否已經滾動到最後，如果是，則回到開始
        const scrollWidth = carousel.scrollWidth;
        const clientWidth = carousel.clientWidth;
        const scrollLeft = carousel.scrollLeft;
        
        if (scrollLeft + clientWidth >= scrollWidth - 50) {
          carousel.scrollTo({ left: 0, behavior: 'smooth' });
        }
      }
    }, 6000);
    
    // DevOps動畫效果 - 馬里奧移動動畫
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
        const pipelineWidth = pipeline.clientWidth - 50;
        
        // 邊界檢查，達到邊界時改變方向
        if (marioPosition >= pipelineWidth) {
          marioDirection = -1; // 向左
        } else if (marioPosition <= 0) {
          marioDirection = 1; // 向右
        }
        
        // 計算當前應該激活的磚塊
        const normalizedPosition = marioPosition / pipelineWidth;
        const targetBrickIndex = Math.floor(normalizedPosition * devopsSteps.length);
        
        // 如果磚塊索引變化了，更新激活的磚塊
        if (targetBrickIndex !== currentBrickIndex && targetBrickIndex >= 0 && targetBrickIndex < devopsSteps.length) {
          // 重置所有磚塊
          brickContainers.forEach((container) => {
            container.classList.remove('active');
          });
          
          // 激活當前磚塊
          const targetBrick = brickContainers[targetBrickIndex] as HTMLElement;
          if (targetBrick) {
            targetBrick.classList.add('active');
            setActiveDevopsStep(targetBrickIndex);
            
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
    
    // 清理定時器
    return () => {
      clearInterval(projectsInterval);
      clearInterval(feedbacksInterval);
    };
  }, [devopsSteps.length]);

  return (
    <main className="tw-main-content relative">
      {/* SEO 隱藏內容 */}
      <div className="seo-hidden" style={{ display: 'none' }}>
        <h1>季先生科技 - 專業軟體開發與數位轉型顧問</h1>
        <p>提供客製化軟體開發、技術顧問及軟體維護服務，採用敏捷式開發，讓客戶能夠參與開發流程。</p>
        <p>台灣領先的軟體開發團隊，幫助企業提升競爭力並實現數位轉型。</p>
      </div>
      
      {/* 導航欄 */}
      <header className="pixel-header">
        <div className="pixel-header-content">
          <div className="pixel-logo">
            <a href="#home" aria-label="Home">
              <div className="flex items-center">
                <div className="flex flex-col">
                  <span className="font-pixel text-base md:text-lg">
                    <span className="text-gray-300">MR.</span> <span className="text-[#00ff00]">CHI</span>
                  </span>
                  <span className="text-xs text-gray-400">數位轉型專家</span>
                </div>
              </div>
            </a>
          </div>
          
          <div className="pixel-search-container">
            <div className="pixel-search">
              <input 
                type="text" 
                placeholder={language === 'zh' ? "搜尋..." : "Search..."} 
                ref={searchInputRef}
                className="tw-main-content"
              />
              <button onClick={focusSearchInput} className="pixel-search-btn" aria-label="Search">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square">
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
              </button>
            </div>
          </div>

          <nav className={`pixel-nav ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
            <a href="#home" className="tw-main-content">Home</a>
            <a href="#services" className="tw-main-content">Services</a>
            <a href="#about" className="tw-main-content">About</a>
            <a href="#projects" className="tw-main-content">Projects</a>
            <a href="/posts" className="tw-main-content">Blog</a>
            <button onClick={toggleLanguage} className="pixel-lang-switch">
              {language === 'zh' ? 'EN' : '中文'}
            </button>
          </nav>
          
          <button 
            className="pixel-mobile-menu-btn" 
            onClick={toggleMobileMenu}
            aria-expanded={isMobileMenuOpen}
            aria-label="Menu"
          >
            ☰
          </button>
        </div>
      </header>

      {/* 首頁區段 - 移除間隔 */}
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

      {/* 服務區段 - 改為跑馬燈效果 */}
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
              {/* 服務項目1 - LOGO設計風格 */}
              <div className="service-card flex-none w-80 mr-10 p-6 border border-[#00ff00] bg-black rounded-lg transition-transform transform hover:scale-105">
                <div className="text-[#00ff00] text-3xl mb-6">
                  <i className="fas fa-paint-brush"></i>
                </div>
                <h3 className="text-xl font-bold mb-3 text-[#00ffaa] text-shadow-pixel">{language === 'zh' ? '創意LOGO設計' : 'Creative Logo Design'}</h3>
                <p className="text-gray-400">
                  {language === 'zh' 
                    ? '建立獨特品牌識別，讓您在市場中脫穎而出。' 
                    : 'Establish a unique brand identity that makes you stand out in the market.'}
                </p>
              </div>
            
              {/* 服務項目2 - LOGO設計風格 */}
              <div className="service-card flex-none w-80 mr-10 p-6 border border-[#00ff00] bg-black rounded-lg transition-transform transform hover:scale-105">
                <div className="text-[#00ff00] text-3xl mb-6">
                  <i className="fas fa-laptop-code"></i>
                </div>
                <h3 className="text-xl font-bold mb-3 text-[#00ffaa] text-shadow-pixel">{language === 'zh' ? '全端網站開發' : 'Full-Stack Web Development'}</h3>
                <p className="text-gray-400">
                  {language === 'zh' 
                    ? '建立獨特品牌識別，讓您在市場中脫穎而出。' 
                    : 'Establish a unique brand identity that makes you stand out in the market.'}
                </p>
              </div>
              
              {/* 服務項目3 - LOGO設計風格 */}
              <div className="service-card flex-none w-80 mr-10 p-6 border border-[#00ff00] bg-black rounded-lg transition-transform transform hover:scale-105">
                <div className="text-[#00ff00] text-3xl mb-6">
                  <i className="fas fa-network-wired"></i>
                </div>
                <h3 className="text-xl font-bold mb-3 text-[#00ffaa] text-shadow-pixel">{language === 'zh' ? 'ERP系統整合' : 'ERP System Integration'}</h3>
                <p className="text-gray-400">
                  {language === 'zh' 
                    ? '建立獨特品牌識別，讓您在市場中脫穎而出。' 
                    : 'Establish a unique brand identity that makes you stand out in the market.'}
                </p>
              </div>
              
              {/* 服務項目4 - LOGO設計風格 */}
              <div className="service-card flex-none w-80 mr-10 p-6 border border-[#00ff00] bg-black rounded-lg transition-transform transform hover:scale-105">
                <div className="text-[#00ff00] text-3xl mb-6">
                  <i className="fas fa-sync-alt"></i>
                </div>
                <h3 className="text-xl font-bold mb-3 text-[#00ffaa] text-shadow-pixel">{language === 'zh' ? 'DevOps服務' : 'DevOps Services'}</h3>
                <p className="text-gray-400">
                  {language === 'zh' 
                    ? '建立獨特品牌識別，讓您在市場中脫穎而出。' 
                    : 'Establish a unique brand identity that makes you stand out in the market.'}
                </p>
              </div>
              
              {/* 服務項目5 - LOGO設計風格 */}
              <div className="service-card flex-none w-80 mr-10 p-6 border border-[#00ff00] bg-black rounded-lg transition-transform transform hover:scale-105">
                <div className="text-[#00ff00] text-3xl mb-6">
                  <i className="fas fa-pencil-ruler"></i>
                </div>
                <h3 className="text-xl font-bold mb-3 text-[#00ffaa] text-shadow-pixel">{language === 'zh' ? 'UI/UX設計' : 'UI/UX Design'}</h3>
                <p className="text-gray-400">
                  {language === 'zh' 
                    ? '建立獨特品牌識別，讓您在市場中脫穎而出。' 
                    : 'Establish a unique brand identity that makes you stand out in the market.'}
                </p>
              </div>
              
              {/* 服務項目6 - LOGO設計風格 */}
              <div className="service-card flex-none w-80 mr-10 p-6 border border-[#00ff00] bg-black rounded-lg transition-transform transform hover:scale-105">
                <div className="text-[#00ff00] text-3xl mb-6">
                  <i className="fas fa-comments"></i>
                </div>
                <h3 className="text-xl font-bold mb-3 text-[#00ffaa] text-shadow-pixel">{language === 'zh' ? '技術顧問' : 'Technical Consulting'}</h3>
                <p className="text-gray-400">
                  {language === 'zh' 
                    ? '建立獨特品牌識別，讓您在市場中脫穎而出。' 
                    : 'Establish a unique brand identity that makes you stand out in the market.'}
                </p>
              </div>
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

      {/* 專案案例區段 - 添加輪播功能 */}
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

      {/* 客戶反饋區段 */}
      <section id="feedback" className={`px-4 py-24 ${oddSection ? 'bg-black' : 'bg-[#0a0a0a]'}`}>
        <div className="container mx-auto">
          <h2 className="pixel-section-title text-center" style={{ textShadow: '2px 2px 4px rgba(0, 255, 0, 0.3)' }}>
            <span className="relative inline-block">
              <span className="text-[#ffcc00]">{language === 'zh' ? '客戶評價' : 'Client Feedbacks'}</span>
              <span className="absolute -bottom-2 left-1/4 w-1/2 h-[2px] bg-[#ffcc00]"></span>
            </span>
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute -left-4 top-1/2 transform -translate-y-1/2 z-10">
                <button 
                  className="carousel-control left-control p-2"
                  onClick={() => {
                    const carousel = document.querySelector('.feedbacks-carousel');
                    if (carousel) {
                      carousel.scrollBy({ left: -300, behavior: 'smooth' });
                    }
                  }}
                >
                  <FiArrowLeft size={24} />
                </button>
              </div>
              
              <div className="feedbacks-carousel flex overflow-x-auto pb-8 hide-scrollbar relative">
                {/* 反饋輪播上的小精靈 */}
                <div className="absolute -top-6 right-[15%] z-10 animate-float-fast" style={{ animationDelay: '0.3s' }}>
                  <div className="w-6 h-6 bg-[#ffcc00] opacity-70 rotate-45"></div>
                  <div className="pixel-trail"></div>
                </div>
                <div className="absolute -bottom-8 left-[30%] z-10 animate-pulse-slow" style={{ animationDelay: '2.1s' }}>
                  <div className="w-3 h-3 bg-[#66ff99] opacity-80 rounded-full"></div>
                  <div className="pixel-trail"></div>
                </div>
                
                {feedbacks.map((feedback, index) => (
                  <div key={index} className="feedback-card flex-none w-80 mr-10 p-6 border border-[#00ff00] bg-black rounded-lg transition-transform transform hover:scale-105">
                    <div className="flex items-center mb-4">
                      <div className="relative w-12 h-12 rounded-full overflow-hidden bg-green-900 mr-4">
                        <div className="absolute inset-0 flex items-center justify-center text-xl text-white">
                          {(feedback.name || feedback.englishName).charAt(0)}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-bold">{language === 'zh' ? feedback.name : feedback.englishName}</h4>
                        <p className="text-gray-500 text-sm">{language === 'zh' ? feedback.company : feedback.englishCompany}</p>
                      </div>
                    </div>
                    <p className="text-gray-400 italic">
                      "{language === 'zh' ? feedback.content : feedback.englishContent}"
                    </p>
                  </div>
                ))}
              </div>
              
              <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 z-10">
                <button 
                  className="carousel-control right-control p-2"
                  onClick={() => {
                    const carousel = document.querySelector('.feedbacks-carousel');
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
                {feedbacks.map((_, index) => (
                  <div 
                    key={index}
                    className={`w-3 h-3 rounded-full mx-1 ${index === activeFeedbackIndex ? 'bg-[#ffaa00]' : 'bg-[#00ff00]'} dot`}
                    onClick={() => handleFeedbackChange(index)}
                  ></div>
                ))}
                <div className="w-3 h-3 bg-[#ff9999] rounded-full ml-1 ghost"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 實際案例區段結束 */}
      
      {/* 關於我們區段 */}
      <section id="about" className={`px-4 py-24 ${!oddSection ? 'bg-black' : 'bg-[#0a0a0a]'}`}>
        <div className="container mx-auto">
          <h2 className="pixel-section-title text-center" style={{ letterSpacing: '2px' }}>
            <span className="border-b-2 border-[#66ccff] pb-2">
              <span className="text-[#66ccff]">{language === 'zh' ? '關於我們' : 'About Us'}</span>
            </span>
          </h2>
          
          <div className="max-w-4xl mx-auto text-center mb-16">
            <p className="text-gray-300 mb-6">
              {language === 'zh' 
                ? '季先生科技有限公司是一家專注於軟體開發與數位轉型的技術顧問公司。我們提供各種專業服務，從網站和應用程式開發到系統整合和技術顧問。' 
                : 'Mr. Chi Technology Co., Ltd. is a technology consulting company focused on software development and digital transformation. We provide various professional services, from website and application development to system integration and technical consulting.'}
            </p>
            <p className="text-gray-300">
              {language === 'zh' 
                ? '我們的團隊由經驗豐富的開發人員和顧問組成，他們擁有不同領域的專業知識。我們致力於提供高品質、創新且可靠的解決方案，幫助企業實現其目標。' 
                : 'Our team consists of experienced developers and consultants with expertise in various fields. We are committed to providing high-quality, innovative, and reliable solutions to help businesses achieve their goals.'}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="pixel-about-card">
              <div className="pixel-about-icon">
                <FiTarget />
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#00ff00]">
                {language === 'zh' ? '我們的使命' : 'Our Mission'}
              </h3>
              <p className="text-gray-400">
                {language === 'zh' 
                  ? '協助企業透過科技創新提升競爭力，實現數位轉型目標，創造更大的商業價值。' 
                  : 'To help businesses enhance competitiveness through technological innovation, achieve digital transformation goals, and create greater business value.'}
              </p>
            </div>
            
            <div className="pixel-about-card">
              <div className="pixel-about-icon">
                <FiEye />
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#00ff00]">
                {language === 'zh' ? '我們的願景' : 'Our Vision'}
              </h3>
              <p className="text-gray-400">
                {language === 'zh' 
                  ? '成為台灣最具創新力的軟體開發團隊，打造最優質的數位解決方案，引領產業變革。' 
                  : 'To become Taiwan\'s most innovative software development team, creating the highest quality digital solutions and leading industry transformation.'}
              </p>
            </div>
            
            <div className="pixel-about-card">
              <div className="pixel-about-icon">
                <FiAward />
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#00ff00]">
                {language === 'zh' ? '我們的價值' : 'Our Values'}
              </h3>
              <p className="text-gray-400">
                {language === 'zh' 
                  ? '誠信、專業、創新、合作。我們相信透過這些核心價值，能夠為客戶提供最優質的服務。' 
                  : 'Integrity, professionalism, innovation, collaboration. We believe that through these core values, we can provide the best service to our clients.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* DevOps開發流程圖 */}
      <section id="devops" className={`px-4 py-24 ${oddSection ? 'bg-black' : 'bg-[#0a0a0a]'}`}>
        <div className="container mx-auto">
          <h2 className="pixel-section-title text-center" style={{ transform: 'skewX(-5deg)' }}>
            <span className="text-[#ff66cc]">
              {language === 'zh' ? '我們的開發流程' : 'Our Development Process'}
            </span>
          </h2>
          
          <p className="text-gray-400 text-center max-w-3xl mx-auto mb-16">
            {language === 'zh' 
              ? '我們採用DevOps方法論，整合開發與運維，加速交付進程，確保軟體品質。透過自動化工具與持續整合，提供穩定、可靠的解決方案。' 
              : 'We adopt the DevOps methodology, integrating development and operations to accelerate delivery and ensure software quality. Through automation tools and continuous integration, we provide stable and reliable solutions.'}
          </p>
          
          <div className="devops-section">
            <div className="pixel-mario-pipeline relative">
              <div className="pixel-coins-container absolute w-full h-full pointer-events-none"></div>
              
              <div className="pixel-pipeline-track"></div>
              
              <div className="pixel-mario"></div>
              
              <div className="pixel-devops-mario gap-4 flex flex-wrap justify-center">
                {devopsSteps.map((step, index) => (
                  <div 
                    key={index}
                    className={`pixel-brick-container transition-all duration-300 ${index === activeDevopsStep ? 'active' : ''}`}
                    onClick={() => handleDevopsChange(index)}
                  >
                    <div className="pixel-mario-brick text-center">
                      <div>
                        <div className="pixel-brick-icon mb-2">{step.icon}</div>
                        <h4 className="text-base font-semibold mb-1">
                          {language === 'zh' ? step.title : step.englishTitle}
                        </h4>
                        <p className="text-xs text-gray-400">
                          {language === 'zh' ? step.description : step.englishDescription}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 常見問題 - 使用一般FAQ樣式 */}
      <section id="faq" className={`px-4 py-24 ${!oddSection ? 'bg-black' : 'bg-[#0c0c0c]'}`}>
        <div className="container mx-auto">
          <h2 className="pixel-section-title text-center" style={{ textShadow: '0 0 10px rgba(0, 255, 0, 0.5)' }}>
            <span className="relative inline-block px-4">
              <span className="text-[#ff9966]">{language === 'zh' ? '常見問題' : 'FAQ'}</span>
              <span className="absolute left-0 top-1/2 w-2 h-2 bg-[#ff9966] rounded-full"></span>
              <span className="absolute right-0 top-1/2 w-2 h-2 bg-[#ff9966] rounded-full"></span>
            </span>
          </h2>
          
          <div className="max-w-3xl mx-auto divide-y divide-[#00ff00]/30">
            <div className="py-5">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-medium text-[#00ff00]">
                  {language === 'zh' ? '你們提供什麼類型的服務？' : 'What types of services do you provide?'}
                </h3>
              </div>
              <p className="mt-3 text-gray-400">
                {language === 'zh' 
                  ? '我們提供全方位的軟體開發服務，包括前後端開發、移動應用開發、系統整合、技術顧問、軟體維護，以及平面設計服務如名片、LOGO和品牌視覺設計。' 
                  : 'We offer comprehensive software development services, including front-end and back-end development, mobile app development, system integration, technical consulting, software maintenance, as well as graphic design services such as business cards, logos, and brand visual design.'}
              </p>
            </div>
            
            <div className="py-5">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-medium text-[#00ff00]">
                  {language === 'zh' ? '你們的開發流程是什麼？' : 'What is your development process?'}
                </h3>
            </div>
              <p className="mt-3 text-gray-400">
                {language === 'zh' 
                  ? '我們採用敏捷開發方法論，讓客戶參與整個開發過程。流程包括需求分析、設計、開發、測試和部署，並在每個階段提供反饋和調整的機會。' 
                  : 'We adopt agile development methodology, allowing clients to participate in the entire development process. The process includes requirement analysis, design, development, testing, and deployment, with opportunities for feedback and adjustments at each stage.'}
              </p>
            </div>
            
            <div className="py-5">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-medium text-[#00ff00]">
                  {language === 'zh' ? '如何開始與你們合作？' : 'How do we start working with you?'}
                </h3>
            </div>
              <p className="mt-3 text-gray-400">
                {language === 'zh' 
                  ? '首先，您可以通過電子郵件、LINE或電話與我們聯繫，安排初步討論。之後，我們會深入了解您的需求，提供方案建議和報價，達成共識後簽訂合同並開始專案。' 
                  : 'First, you can contact us via email, LINE, or phone to arrange an initial discussion. Then, we will delve into your requirements, provide solution suggestions and quotations, sign a contract after reaching a consensus, and start the project.'}
              </p>
            </div>
            
            <div className="py-5">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-medium text-[#00ff00]">
                  {language === 'zh' ? '你們是否提供售後支持？' : 'Do you provide after-sales support?'}
                </h3>
              </div>
              <p className="mt-3 text-gray-400">
                {language === 'zh' 
                  ? '是的，我們提供全面的售後支持和維護服務。根據合同條款，我們通常提供一段時間的免費修復和支持，之後可選擇簽訂長期維護合同。' 
                  : 'Yes, we provide comprehensive after-sales support and maintenance services. According to contract terms, we typically offer a period of free fixes and support, after which you can choose to sign a long-term maintenance contract.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 文章區段 */}
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

      {/* 頁腳 */}
      <footer className="bg-black px-4 py-16 border-t border-green-800">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="mb-8 md:mb-0">
              <div className="mb-4">
                <span className="text-white font-pixel text-xl">
                  <span className="text-green-400">MR.</span> <span className="text-white">CHI</span>
                </span>
              </div>
              <p className="text-gray-400 text-sm mb-4">
                {language === 'zh' ? '專業軟體開發與數位轉型顧問' : 'Professional Software Development & Digital Transformation Consultant'}
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-green-400 hover:text-green-300">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"></path>
                  </svg>
                </a>
                <a href="#" className="text-green-400 hover:text-green-300">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                  </svg>
                </a>
                <a href="#" className="text-green-400 hover:text-green-300">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd"></path>
                  </svg>
                </a>
                <a href="#" className="text-green-400 hover:text-green-300">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                  </svg>
                </a>
            </div>
            </div>
            
            <div>
              <h4 className="text-green-400 text-sm font-pixel uppercase mb-4">{language === 'zh' ? '服務' : 'Services'}</h4>
              <ul className="space-y-2">
                <li><a href="#services" className="text-gray-400 hover:text-green-400 text-sm transition-colors">{language === 'zh' ? '資料庫設計' : 'Database Design'}</a></li>
                <li><a href="#services" className="text-gray-400 hover:text-green-400 text-sm transition-colors">{language === 'zh' ? '電子商務' : 'E-commerce'}</a></li>
                <li><a href="#services" className="text-gray-400 hover:text-green-400 text-sm transition-colors">{language === 'zh' ? '網站開發' : 'Web Development'}</a></li>
                <li><a href="#services" className="text-gray-400 hover:text-green-400 text-sm transition-colors">{language === 'zh' ? '系統整合' : 'System Integration'}</a></li>
                </ul>
              </div>

            <div>
              <h4 className="text-green-400 text-sm font-pixel uppercase mb-4">{language === 'zh' ? '關於' : 'About'}</h4>
              <ul className="space-y-2">
                <li><a href="#about" className="text-gray-400 hover:text-green-400 text-sm transition-colors">{language === 'zh' ? '公司介紹' : 'Company'}</a></li>
                <li><a href="#devops" className="text-gray-400 hover:text-green-400 text-sm transition-colors">{language === 'zh' ? '開發流程' : 'Development'}</a></li>
                <li><a href="#projects" className="text-gray-400 hover:text-green-400 text-sm transition-colors">{language === 'zh' ? '專案案例' : 'Projects'}</a></li>
                <li><a href="#feedback" className="text-gray-400 hover:text-green-400 text-sm transition-colors">{language === 'zh' ? '客戶評價' : 'Feedback'}</a></li>
                </ul>
              </div>

            <div>
              <h4 className="text-green-400 text-sm font-pixel uppercase mb-4">{language === 'zh' ? '聯絡資訊' : 'Contact'}</h4>
              <ul className="space-y-2">
                <li className="text-gray-400 text-sm flex items-start">
                  <span className="text-green-400 mr-2">✉</span>
                  <span>mr.chi.service@gmail.com</span>
                </li>
                <li className="text-gray-400 text-sm flex items-start">
                  <span className="text-green-400 mr-2">📍</span>
                  <span>{language === 'zh' ? '台北市中山區民生東路二段147巷3之1號B1' : 'B1, No. 3-1, Lane 147, Section 2, Minsheng East Road, Zhongshan District, Taipei City'}</span>
                </li>
                <li className="text-gray-400 text-sm flex items-start">
                  <span className="text-green-400 mr-2">LINE</span>
                  <span>@115swcxp</span>
                </li>
                </ul>
              </div>
            </div>
          
          <div className="mt-12 pt-8 border-t border-gray-800 text-center">
            <p className="text-gray-500 text-xs">
              &copy; 2023 {language === 'zh' ? '季先生科技有限公司 (統一編號:96787421). 版權所有。' : 'Mr. Chi Technology Co., Ltd. (Tax ID: 96787421). All Rights Reserved.'}
            </p>
          </div>
        </div>
      </footer>

      {/* 移動端選單覆蓋層 */}
      <div 
        className={`pixel-mobile-menu-overlay ${isMobileMenuOpen ? 'active' : ''}`}
        onClick={toggleMobileMenu}
      ></div>
    </main>
  );
}

export default PixelMain; 