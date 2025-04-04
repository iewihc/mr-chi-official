import React from 'react';

interface PinballSectionProps {
  language: string;
}

function PinballSection({ language }: PinballSectionProps) {
  return (
    <section id="pinball" className="px-4 py-24 bg-black">
      <div className="container mx-auto">
        <h2 className="text-center text-2xl font-pixel text-green-400 mb-8">
          {language === 'zh' ? '創意科技' : 'Creative Technology'}
        </h2>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12">
          {language === 'zh' 
            ? '我們結合創意與專業技術，為您打造獨特的數位體驗！' 
            : 'We combine creativity with professional technology to create unique digital experiences for you!'}
        </p>
        
        <div className="max-w-3xl mx-auto relative">
          {/* 彈珠臺圖片 */}
          <div className="relative overflow-hidden border-4 border-green-500 rounded-lg">
            <img 
              src="/images/pinball-machine.jpg" 
              alt={language === 'zh' ? "復古彈珠臺" : "Vintage Pinball Machine"} 
              className="w-full h-auto"
              onError={(e) => {
                // 如果圖片載入失敗，顯示替代內容
                e.currentTarget.style.display = 'none';
                document.getElementById('pinball-fallback')?.classList.remove('hidden');
              }}
            />
            
            {/* 圖片載入失敗時的替代內容 */}
            <div id="pinball-fallback" className="hidden bg-gray-900 p-8 text-center">
              <div className="mb-4 text-xl font-pixel text-green-400">
                {language === 'zh' ? '彈珠臺示意圖' : 'Pinball Machine Illustration'}
              </div>
              <p className="text-gray-400">
                {language === 'zh' 
                  ? '圖片載入失敗。這裡應該是一張復古風格的電子彈珠臺圖片，展示我們對細節的關注和創意設計能力。' 
                  : 'Image failed to load. This should be an image of a vintage pinball machine, showcasing our attention to detail and creative design capabilities.'}
              </p>
              
              {/* 簡單的彈珠臺示意圖 */}
              <div className="mt-8 p-4 border-2 border-green-500 mx-auto max-w-md">
                <div className="flex justify-around">
                  {/* 燈泡人元素作為彈珠臺上的裝飾 */}
                  <div className="bulbman">
                    <div className="bulbman-body bg-yellow-400">
                      <div className="bulbman-shine"></div>
                      <div className="bulbman-shine-small"></div>
                      <div className="text-xs font-bold text-black absolute top-1/4 left-1/2 transform -translate-x-1/2">MR</div>
                      <div className="text-xs font-bold text-black absolute top-1/2 left-1/2 transform -translate-x-1/2">CHI</div>
                    </div>
                    <div className="bulbman-legs"></div>
                    <div className="bulbman-base"></div>
                  </div>
                  
                  <div className="bulbman">
                    <div className="bulbman-body bg-blue-400">
                      <div className="bulbman-shine"></div>
                      <div className="bulbman-shine-small"></div>
                      <div className="text-xs font-bold text-black absolute top-1/4 left-1/2 transform -translate-x-1/2">MR</div>
                      <div className="text-xs font-bold text-black absolute top-1/2 left-1/2 transform -translate-x-1/2">CHI</div>
                    </div>
                    <div className="bulbman-legs"></div>
                    <div className="bulbman-base"></div>
                  </div>
                  
                  <div className="bulbman">
                    <div className="bulbman-body bg-green-400">
                      <div className="bulbman-shine"></div>
                      <div className="bulbman-shine-small"></div>
                      <div className="text-xs font-bold text-black absolute top-1/4 left-1/2 transform -translate-x-1/2">MR</div>
                      <div className="text-xs font-bold text-black absolute top-1/2 left-1/2 transform -translate-x-1/2">CHI</div>
                    </div>
                    <div className="bulbman-legs"></div>
                    <div className="bulbman-base"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* 說明文字 */}
          <div className="text-center mt-6 text-gray-400 max-w-xl mx-auto">
            <p>
              {language === 'zh' 
                ? '就像經典彈珠臺融合機械與藝術，我們的技術方案也結合了專業與創意，為您提供獨特的數位體驗。' 
                : 'Just like classic pinball machines blend mechanics with art, our technical solutions combine professionalism and creativity to provide you with unique digital experiences.'}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PinballSection;
