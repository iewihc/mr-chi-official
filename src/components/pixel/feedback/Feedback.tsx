import React, { useState } from 'react';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import { feedbacks } from '../data';

interface FeedbackProps {
  language: string;
  oddSection: boolean;
}

const Feedback: React.FC<FeedbackProps> = ({ language, oddSection }) => {
  const [activeFeedbackIndex, setActiveFeedbackIndex] = useState(0);

  // 手動切換反饋
  const handleFeedbackChange = (index: number) => {
    setActiveFeedbackIndex(index);
  };

  return (
    <section id="feedback" className={`px-4 py-24 ${oddSection ? 'bg-black' : 'bg-[#0a0a0a]'}`}>
      <div className="container mx-auto">
        <h2 className="pixel-section-title text-center" style={{ textShadow: '2px 2px 4px rgba(0, 255, 0, 0.3)' }}>
          <span className="relative inline-block">
            <span className="text-[#ffcc00]">{language === 'zh' ? '客戶評價' : 'Client Feedbacks'}</span>
            <span className="absolute -bottom-2 left-1/4 w-1/2 h-[2px] bg-[#ffcc00]"></span>
          </span>
        </h2>
        
        <div className="max-w-5xl mx-auto">
          <div className="relative">
            <div className="absolute -left-4 top-1/2 transform -translate-y-1/2 z-10">
              <button 
                className="carousel-control left-control p-2"
                onClick={() => {
                  const carousel = document.querySelector('.feedbacks-carousel');
                  if (carousel) {
                    carousel.scrollBy({ left: -400, behavior: 'smooth' });
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
                <div key={index} className="feedback-card flex-none w-96 mr-10 p-8 border border-[#00ff00] bg-black rounded-lg transition-transform transform hover:scale-105">
                  <div className="flex items-center mb-6">
                    <div className="relative w-14 h-14 rounded-full overflow-hidden bg-green-900 mr-4">
                      <div className="absolute inset-0 flex items-center justify-center text-xl text-white">
                        {(feedback.name || feedback.englishName).charAt(0)}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">{language === 'zh' ? feedback.name : feedback.englishName}</h4>
                      <p className="text-gray-500 text-sm">{language === 'zh' ? feedback.company : feedback.englishCompany}</p>
                    </div>
                  </div>
                  <p className="text-gray-400 italic text-base leading-relaxed min-h-[100px]">
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
                    carousel.scrollBy({ left: 400, behavior: 'smooth' });
                  }
                }}
              >
                <FiArrowRight size={24} />
              </button>
            </div>
          </div>
          
          {/* 像素風格的吃豆人輪播指示點 */}
          <div className="carousel-dots flex justify-center mt-8 items-center">
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
  );
};

export default Feedback; 