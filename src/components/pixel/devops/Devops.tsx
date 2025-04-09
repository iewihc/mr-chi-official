import React, { useState } from 'react';
import { devopsSteps } from '../data';

interface DevopsProps {
  language: string;
  oddSection: boolean;
}

const Devops: React.FC<DevopsProps> = ({ language, oddSection }) => {
  const [activeDevopsStep, setActiveDevopsStep] = useState(0);

  // 切換DevOps步驟
  const handleDevopsChange = (index: number) => {
    setActiveDevopsStep(index);
  };

  return (
    <section id="devops" className={`px-4 py-24 ${oddSection ? 'bg-black' : 'bg-[#0a0a0a]'}`}>
      <div className="container mx-auto">
        <h2 className="pixel-section-title text-center" style={{ transform: 'skewX(-5deg)' }}>
          <span className="text-[#ff66cc]">
            {language === 'zh' ? '我們的開發流程' : 'Our Development Process'}
          </span>
        </h2>
        
        <p className="text-white !text-white text-center max-w-3xl mx-auto mb-16" style={{color: 'white'}}>
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
                      <p className="text-xs text-white !text-white" style={{color: 'white !important'}}>
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
  );
};

export default Devops; 