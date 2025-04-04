import React from 'react';

interface FaqProps {
  language: string;
  oddSection: boolean;
}

const Faq: React.FC<FaqProps> = ({ language, oddSection }) => {
  return (
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
  );
};

export default Faq; 