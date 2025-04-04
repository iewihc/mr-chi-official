import React from 'react';
import { FiTarget, FiEye, FiAward } from 'react-icons/fi';

interface AboutProps {
  language: string;
  oddSection: boolean;
}

const About: React.FC<AboutProps> = ({ language, oddSection }) => {
  return (
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
  );
};

export default About; 