import React, { useState, useEffect } from 'react';
import { useTranslation, I18nextProvider } from 'react-i18next';
import { Languages, Database, Globe, Code, Monitor, ChevronRight } from 'lucide-react';
import i18n from '../i18n/init';

//
// 像素風格的按鈕組件
//
interface PixelButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

const PixelButton: React.FC<PixelButtonProps> = ({ children, onClick, className = '' }) => (
  <button
    onClick={onClick}
    className={`font-pixel border-2 border-b-4 border-green-900 bg-green-800 px-4 py-2 text-white transition-all duration-100 hover:bg-green-700 active:border-t-4 active:border-b-2 ${className}`}
    style={{
      imageRendering: 'pixelated',
      boxShadow: '2px 2px 0 rgba(0,0,0,0.2)'
    }}
  >
    {children}
  </button>
);

//
// 像素風格的卡片組件
//
interface PixelCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const PixelCard: React.FC<PixelCardProps> = ({ icon, title, description }) => (
  <div
    className='border-2 border-gray-300 bg-white p-6 transition-colors duration-300 hover:border-green-800'
    style={{
      imageRendering: 'pixelated',
      boxShadow: '4px 4px 0 rgba(0,0,0,0.1)'
    }}
  >
    <div className='mb-4 flex h-12 w-12 items-center justify-center border-2 border-green-800 bg-green-100 text-green-800'>
      {icon}
    </div>
    <h3 className='font-pixel mb-2 text-xl'>{title}</h3>
    <p className='text-gray-600'>{description}</p>
  </div>
);

//
// DevOps 流程階段組件
//
interface DevOpsStageProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  active: boolean;
}

const DevOpsStage: React.FC<DevOpsStageProps> = ({ icon, title, description, active }) => (
  <div
    className={`flex flex-col items-center p-4 ${active ? 'scale-110' : 'opacity-50'} transition-all duration-300`}
  >
    <div
      className={`mb-2 flex h-10 w-10 items-center justify-center border-2 text-green-800 ${
        active ? 'border-green-800 bg-green-100' : 'border-gray-300'
      }`}
      style={{ imageRendering: 'pixelated' }}
    >
      {icon}
    </div>
    <h3 className='font-pixel mb-1 text-lg'>{title}</h3>
    <p className='text-center text-sm text-gray-600'>{description}</p>
  </div>
);

//
// 區塊組件（用於各區塊標題與包裝內容）
//
interface SectionProps {
  title: string;
  children: React.ReactNode;
  className?: string;
  id?: string;
}

const Section: React.FC<SectionProps> = ({ title, children, className = '', id }) => (
  <div className={`w-full py-16 ${className}`} id={id}>
    <div className='mx-auto max-w-6xl px-4'>
      <h2 className='font-pixel mb-8 border-l-4 border-green-800 pl-4 text-3xl'>{title}</h2>
      {children}
    </div>
  </div>
);

//
// 主內容組件，包含導航、Hero、服務、DevOps 流程、專案、技術棧、頁尾等區塊
//
const MainContent: React.FC = () => {
  const { t, i18n } = useTranslation();

  // 定義 DevOps 各階段
  const devOpsStages = [
    { icon: <Globe size={20} />, title: t('planTitle'), description: t('planDesc') },
    { icon: <Code size={20} />, title: t('codeTitle'), description: t('codeDesc') },
    { icon: <Database size={20} />, title: t('buildTitle'), description: t('buildDesc') },
    { icon: <Monitor size={20} />, title: t('testTitle'), description: t('testDesc') },
    { icon: <ChevronRight size={20} />, title: t('releaseTitle'), description: t('releaseDesc') },
    { icon: <Database size={20} />, title: t('deployTitle'), description: t('deployDesc') },
    { icon: <Globe size={20} />, title: t('operateTitle'), description: t('operateDesc') },
    { icon: <Monitor size={20} />, title: t('monitorTitle'), description: t('monitorDesc') }
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % devOpsStages.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [devOpsStages.length]);

  const toggleLang = () => {
    i18n.changeLanguage(i18n.language === 'zh' ? 'en' : 'zh');
  };

  // 像素風格的 CSS
  const pixelStyle = `
    @font-face {
      font-family: 'PixelFont';
      src: url('https://fonts.cdnfonts.com/css/press-start-2p');
    }
    .font-pixel {
      font-family: monospace;
      letter-spacing: -0.5px;
      font-weight: bold;
    }
    .pixel-border {
      image-rendering: pixelated;
      border-style: solid;
      border-width: 4px;
      box-shadow: 4px 4px 0 rgba(0,0,0,0.2);
    }
  `;

  return (
    <div className='min-h-screen bg-gray-100 font-sans text-gray-800'>
      <style>{pixelStyle}</style>

      {/* 導航列 */}
      <nav
        className='sticky top-0 z-10 border-b-2 border-green-800 bg-white px-6 py-4'
        style={{ imageRendering: 'pixelated' }}
      >
        <div className='mx-auto flex max-w-6xl items-center justify-between'>
          <div className='flex items-center'>
            <div
              className='mr-3 h-10 w-10 border-2 border-green-900 bg-green-800'
              style={{ imageRendering: 'pixelated' }}
            ></div>
            <h1 className='font-pixel text-xl text-green-800'>{t('companyName')}</h1>
          </div>
          <div className='hidden space-x-6 md:flex'>
            <a href='#home' className='font-pixel transition-colors hover:text-green-800'>
              {t('home')}
            </a>
            <a href='#services' className='font-pixel transition-colors hover:text-green-800'>
              {t('services')}
            </a>
            <a href='#projects' className='font-pixel transition-colors hover:text-green-800'>
              {t('projects')}
            </a>
            <a href='/posts' className='font-pixel transition-colors hover:text-green-800'>
              Posts
            </a>
          </div>
          <PixelButton onClick={toggleLang} className='flex items-center'>
            <Languages size={16} className='mr-2' />
            {i18n.language === 'zh' ? 'English' : '中文'}
          </PixelButton>
        </div>
      </nav>

      {/* Hero 區塊 */}
      <div id='home' className='bg-green-800 py-24 text-white'>
        <div className='mx-auto flex max-w-6xl flex-col items-center px-4 md:flex-row'>
          <div className='mb-10 md:mb-0 md:w-1/2'>
            <div
              className='font-pixel mb-4 inline-block border-2 border-green-700 bg-green-900 px-3 py-1 text-sm'
              style={{ imageRendering: 'pixelated' }}
            >
              Mr. Chi
            </div>
            <h1 className='font-pixel mb-4 text-4xl md:text-5xl'>{t('companyName')}</h1>
            <p className='font-pixel mb-6 text-xl'>{t('slogan')}</p>
            <p className='mb-8'>{t('intro')}</p>
            <PixelButton onClick={() => (window.location.href = '#services')}>
              {t('learnMore')}
            </PixelButton>
          </div>
          <div className='flex justify-center md:w-1/2'>
            <div
              className='h-64 w-64 border-4 border-green-900 bg-white'
              style={{ imageRendering: 'pixelated', boxShadow: '8px 8px 0 rgba(0,0,0,0.2)' }}
            >
              <div className='flex h-full w-full items-center justify-center bg-green-100 p-4'>
                <div
                  className='font-pixel text-9xl text-green-800'
                  style={{ fontFamily: 'monospace' }}
                >
                  C
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 服務區塊 */}
      <Section title={t('servicesTitle')} id='services' className='bg-white'>
        <div className='grid grid-cols-1 gap-8 md:grid-cols-2'>
          <PixelCard
            icon={<Database size={24} />}
            title={t('service1Title')}
            description={t('service1Desc')}
          />
          <PixelCard
            icon={<Globe size={24} />}
            title={t('service2Title')}
            description={t('service2Desc')}
          />
          <PixelCard
            icon={<Code size={24} />}
            title={t('service3Title')}
            description={t('service3Desc')}
          />
          <PixelCard
            icon={<Monitor size={24} />}
            title={t('service4Title')}
            description={t('service4Desc')}
          />
        </div>
      </Section>

      {/* 為什麼選擇我們？ 區塊 */}
      <Section title='為什麼選擇我們？' id='why-choose-us' className='bg-[#5E735B]'>
        <div
          className='p-6 text-white'
          style={{
            backgroundColor: '#344431',
            border: '2px solid #263024',
            imageRendering: 'pixelated',
            boxShadow: '4px 4px 0 rgba(0,0,0,0.1)'
          }}
        >
          <p className='leading-relaxed'>
            我們提供高品質、具可行性且安全的系統，並採用敏捷專案管理，讓開發過程透明有彈性。程式碼公開、自由修改，絕不綁死你的發展！
          </p>
        </div>
      </Section>

      {/* DevOps 流程動畫區塊 */}
      <Section title={t('devOpsTitle')} id='devops' className='bg-gray-100'>
        <div
          className='border-2 border-gray-300 bg-white p-6'
          style={{ imageRendering: 'pixelated', boxShadow: '4px 4px 0 rgba(0,0,0,0.1)' }}
        >
          <div className='flex flex-wrap justify-center'>
            {devOpsStages.map((stage, index) => (
              <DevOpsStage
                key={index}
                icon={stage.icon}
                title={stage.title}
                description={stage.description}
                active={activeIndex === index}
              />
            ))}
          </div>
          <div
            className='mt-8 h-4 overflow-hidden border-2 border-gray-300 bg-gray-200'
            style={{ imageRendering: 'pixelated' }}
          >
            <div
              className='h-full bg-green-800 transition-all duration-700 ease-in-out'
              style={{ width: `${((activeIndex + 1) / devOpsStages.length) * 100}%` }}
            ></div>
          </div>
        </div>
      </Section>

      {/* 專案區塊 */}
      <Section title={t('projectsTitle')} id='projects' className='bg-white'>
        <div className='grid grid-cols-1 gap-8 md:grid-cols-3'>
          {[1, 2, 3].map((num) => (
            <div
              key={num}
              className='border-2 border-gray-300 bg-white transition-colors duration-300 hover:border-green-800'
              style={{ imageRendering: 'pixelated', boxShadow: '4px 4px 0 rgba(0,0,0,0.1)' }}
            >
              <div className='h-48 border-b-2 border-gray-300 bg-green-200'>
                <div className='flex h-full w-full items-center justify-center'>
                  <div className='font-pixel text-5xl text-green-800'>P{num}</div>
                </div>
              </div>
              <div className='p-4'>
                <h3 className='font-pixel mb-2 text-xl text-green-800'>
                  {t(`project${num}Title`)}
                </h3>
                <p className='text-gray-600'>{t(`project${num}Desc`)}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Our Tech Stack 區塊 */}
      <Section title='Our Tech Stack' id='tech-stack' className='bg-white'>
        <div className='grid grid-cols-1 gap-8 md:grid-cols-2'>
          <div>
            <h3 className='font-pixel mb-4 text-2xl'>Languages</h3>
            <p>Java, JavaScript, TypeScript</p>
          </div>
          <div>
            <h3 className='font-pixel mb-4 text-2xl'>Backend</h3>
            <p>ASP .NET Core, ASP .NET Core Blazor, ASP.NET Web APIs, Golang, Python, Fast API</p>
          </div>
          <div>
            <h3 className='font-pixel mb-4 text-2xl'>Front End</h3>
            <p>HTML5, CSS3, jQuery, React, Angular, MUI, Vue, Bootstrap</p>
          </div>
          <div>
            <h3 className='font-pixel mb-4 text-2xl'>DB</h3>
            <p>SQL, MySQL, Oracle, PostgresQL DB, DynamoDB</p>
          </div>
          <div>
            <h3 className='font-pixel mb-4 text-2xl'>Tools</h3>
            <p>Azure, AWS, Git, webpack, vite, Jenkins, Jira</p>
          </div>
        </div>
      </Section>

      {/* 頁尾 */}
      <footer className='bg-green-900 py-12 text-white'>
        <div className='mx-auto max-w-6xl px-4'>
          <div className='flex flex-col justify-between md:flex-row'>
            <div className='mb-8 md:mb-0'>
              <div className='mb-4 flex items-center'>
                <div
                  className='mr-2 h-8 w-8 border-2 border-green-700 bg-green-800'
                  style={{ imageRendering: 'pixelated' }}
                ></div>
                <h3 className='font-pixel text-lg'>{t('companyName')}</h3>
              </div>
              <p className='max-w-md text-green-200'>{t('intro')}</p>
            </div>
            <div className='grid grid-cols-1 gap-8 md:grid-cols-2'>
              <div>
                <h4 className='font-pixel mb-4 text-lg'>{t('services')}</h4>
                <ul className='space-y-2 text-green-200'>
                  <li>ERP</li>
                  <li>EC Platform</li>
                  <li>Web Development</li>
                  <li>Technical Support</li>
                </ul>
              </div>
              <div>
                <h4 className='font-pixel mb-4 text-lg'>Posts</h4>
                <ul className='space-y-2 text-green-200'>
                  <li>
                    <a href='/posts/astro-in-brief' className='hover:text-green-100'>
                      Astro in brief
                    </a>
                  </li>
                  <li>
                    <a href='/posts/another-post' className='hover:text-green-100'>
                      Another Post
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className='mt-12 border-t border-green-700 pt-8 text-center text-green-300'>
            <p className='font-pixel'>&copy; 2025 {t('companyName')}. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

//
// 外層包裹 i18next context
//
const Main: React.FC = () => (
  <I18nextProvider i18n={i18n}>
    <MainContent />
  </I18nextProvider>
);

export default Main;
