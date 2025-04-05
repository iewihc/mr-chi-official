import React from 'react';
import { feedbacks } from '../data';

interface FeedbackProps {
  language: string;
  oddSection: boolean;
}

const Feedback: React.FC<FeedbackProps> = ({ language, oddSection }) => {
  return (
    <section id="feedback" className={`px-4 py-24 ${oddSection ? 'bg-black' : 'bg-[#0a0a0a]'}`}>
      <div className="container mx-auto">
        <h2 className="pixel-section-title text-center" style={{ textShadow: '2px 2px 4px rgba(0, 255, 0, 0.3)' }}>
          <span className="relative inline-block">
            <span className="text-[#ffcc00]">{language === 'zh' ? '客戶評價' : 'Client Feedbacks'}</span>
            <span className="absolute -bottom-2 left-1/4 w-1/2 h-[2px] bg-[#ffcc00]"></span>
          </span>
        </h2>
        
        <div className="max-w-6xl mx-auto">
          <div className="relative mt-12">
            {/* 裝飾元素 */}
            <div className="absolute -top-6 right-[15%] z-10 animate-float-fast" style={{ animationDelay: '0.3s' }}>
              <div className="w-6 h-6 bg-[#ffcc00] opacity-70 rotate-45"></div>
              <div className="pixel-trail"></div>
            </div>
            <div className="absolute -bottom-8 left-[30%] z-10 animate-pulse-slow" style={{ animationDelay: '2.1s' }}>
              <div className="w-3 h-3 bg-[#66ff99] opacity-80 rounded-full"></div>
              <div className="pixel-trail"></div>
            </div>
            
            {/* 使用網格布局代替滾動 */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {feedbacks.slice(0, 6).map((feedback, index) => (
                <div key={index} className="feedback-card border border-[#00ff00] bg-black rounded-lg p-6 transition-transform transform hover:scale-105 h-full flex flex-col">
                  <div className="flex items-center mb-4">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden bg-green-900 mr-4 flex-shrink-0">
                      <div className="absolute inset-0 flex items-center justify-center text-xl text-white">
                        {(feedback.name || feedback.englishName).charAt(0)}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-bold">{language === 'zh' ? feedback.name : feedback.englishName}</h4>
                      <p className="text-gray-500 text-sm">{language === 'zh' ? feedback.company : feedback.englishCompany}</p>
                    </div>
                  </div>
                  <p className="text-gray-400 italic flex-grow line-clamp-4">
                    "{language === 'zh' ? feedback.content : feedback.englishContent}"
                  </p>
                  
                  {/* 星級評分 */}
                  <div className="flex mt-4 justify-end">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className={`text-lg ${i < feedback.rating ? 'text-[#ffcc00]' : 'text-gray-700'}`}>★</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* 裝飾元素 */}
          <div className="flex justify-center mt-8 items-center">
            <div className="flex items-center">
              <div className="w-5 h-5 bg-[#ffff00] rounded-full animate-pulse-slow pacman">
                <div className="pacman-mouth"></div>
              </div>
              <div className="mx-2 text-[#00ff00]">•••</div>
              <div className="w-3 h-3 bg-[#ff9999] rounded-full ghost"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feedback; 