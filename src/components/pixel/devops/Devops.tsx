import React, { useState, useEffect, useRef } from 'react';
import { devopsSteps } from '../data';

interface DevopsProps {
  language: string;
  oddSection: boolean;
}

interface ConnectionLine {
  startId: number;
  endId: number;
  startX: number;
  startY: number;
  endX: number;
  endY: number;
  animationProgress: number;
  color: string;
  id: string;
}

const Devops: React.FC<DevopsProps> = ({ language, oddSection }) => {
  const [activeDevopsStep, setActiveDevopsStep] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [connections, setConnections] = useState<ConnectionLine[]>([]);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const animationFrameRef = useRef<number | null>(null);
  
  // 隨機顏色生成
  const getRandomColor = () => {
    const colors = ['#00ff00', '#33ff33', '#66ff66', '#99ff99', '#ccffcc', '#ffff00', '#00ffff'];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  // 切換DevOps步驟
  const handleDevopsChange = (index: number) => {
    setActiveDevopsStep(index);
  };

  // 創建隨機連線
  const createRandomConnection = () => {
    if (!isMobile || itemRefs.current.length < 2) return;
    
    // 隨機選擇兩個不同的節點
    const allIndices = Array.from({ length: devopsSteps.length }, (_, i) => i);
    const availableIndices = allIndices.filter(i => itemRefs.current[i] !== null);
    
    if (availableIndices.length < 2) return;
    
    // 隨機選擇起點和終點
    const randomStartIndex = Math.floor(Math.random() * availableIndices.length);
    const startId = availableIndices[randomStartIndex];
    
    // 從剩餘的節點中選擇終點
    const remainingIndices = availableIndices.filter(i => i !== startId);
    const randomEndIndex = Math.floor(Math.random() * remainingIndices.length);
    const endId = remainingIndices[randomEndIndex];
    
    if (typeof startId !== 'number' || typeof endId !== 'number') return;
    
    // 計算連線位置
    const startElement = itemRefs.current[startId];
    const endElement = itemRefs.current[endId];
    
    if (!startElement || !endElement) return;
    
    const startRect = startElement.getBoundingClientRect();
    const endRect = endElement.getBoundingClientRect();
    const containerRect = startElement.parentElement?.getBoundingClientRect() || { left: 0, top: 0 };
    
    const startX = startRect.left + startRect.width / 2 - containerRect.left;
    const startY = startRect.top + startRect.height / 2 - containerRect.top;
    const endX = endRect.left + endRect.width / 2 - containerRect.left;
    const endY = endRect.top + endRect.height / 2 - containerRect.top;
    
    const connectionId = `conn-${Date.now()}-${startId}-${endId}`;
    const color = getRandomColor();
    
    if (!color) return;
    
    const newConnection: ConnectionLine = {
      startId,
      endId,
      startX,
      startY,
      endX,
      endY,
      animationProgress: 0,
      color,
      id: connectionId
    };
    
    // 添加新連線
    setConnections(prev => {
      // 限制最大連線數量，如果超過則移除最舊的
      const maxConnections = 3;
      const updatedConnections = [...prev, newConnection];
      return updatedConnections.slice(-maxConnections);
    });
    
    // 動畫進度
    let progress = 0;
    const animateConnection = () => {
      progress += 0.02;
      
      if (progress <= 1) {
        setConnections(prev => 
          prev.map(conn => 
            conn.id === connectionId
              ? { ...conn, animationProgress: progress } 
              : conn
          )
        );
        animationFrameRef.current = requestAnimationFrame(animateConnection);
      } else {
        // 動畫結束後，閃爍項目然後移除連線
        if (typeof startId === 'number' && typeof endId === 'number') {
          const startElement = itemRefs.current[startId];
          const endElement = itemRefs.current[endId];
          
          if (startElement && endElement) {
            startElement.classList.add('connected-item');
            endElement.classList.add('connected-item');
            
            setTimeout(() => {
              startElement.classList.remove('connected-item');
              endElement.classList.remove('connected-item');
              
              // 移除已完成的連線
              setConnections(prev => prev.filter(conn => conn.id !== connectionId));
            }, 800);
          }
        }
      }
    };
    
    animationFrameRef.current = requestAnimationFrame(animateConnection);
  };

  // 更新連線位置 (當屏幕大小改變時)
  const updateConnectionPositions = () => {
    if (!isMobile) return;
    
    setConnections(prev => 
      prev.map(conn => {
        if (typeof conn.startId !== 'number' || typeof conn.endId !== 'number') return conn;
        
        const startElement = itemRefs.current[conn.startId];
        const endElement = itemRefs.current[conn.endId];
        
        if (!startElement || !endElement) return conn;
        
        const startRect = startElement.getBoundingClientRect();
        const endRect = endElement.getBoundingClientRect();
        const containerRect = startElement.parentElement?.getBoundingClientRect() || { left: 0, top: 0 };
        
        const startX = startRect.left + startRect.width / 2 - containerRect.left;
        const startY = startRect.top + startRect.height / 2 - containerRect.top;
        const endX = endRect.left + endRect.width / 2 - containerRect.left;
        const endY = endRect.top + endRect.height / 2 - containerRect.top;
        
        return { ...conn, startX, startY, endX, endY };
      })
    );
  };
  
  // 定期創建新的隨機連線
  useEffect(() => {
    if (!isMobile) return;
    
    // 初始連線
    const initializeConnections = () => {
      // 清除現有連線
      setConnections([]);
      
      // 延遲一些時間讓元素渲染並獲取正確的位置
      setTimeout(() => {
        createRandomConnection();
      }, 500);
    };
    
    initializeConnections();
    
    // 定期創建新連線
    const intervalId = setInterval(() => {
      createRandomConnection();
    }, 1800);
    
    // 定期更新連線位置
    const positionUpdateId = setInterval(() => {
      updateConnectionPositions();
    }, 1000);
    
    return () => {
      clearInterval(intervalId);
      clearInterval(positionUpdateId);
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
    };
  }, [isMobile]);

  // 監聽窗口調整事件更新連線位置
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      updateConnectionPositions();
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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
          {/* 手機版顯示連連看效果 */}
          {isMobile ? (
            <div className="pixel-connect-game relative grid grid-cols-2 gap-4 md:hidden">
              {/* 連線畫布 */}
              <div className="absolute w-full h-full pointer-events-none">
                <svg className="w-full h-full" style={{ position: 'absolute', top: 0, left: 0 }}>
                  {connections.map((conn) => {
                    const dx = conn.endX - conn.startX;
                    const dy = conn.endY - conn.startY;
                    const distance = Math.sqrt(dx * dx + dy * dy);
                    const currentDistance = distance * conn.animationProgress;
                    
                    // 計算目前動畫進度的終點座標
                    const currentEndX = conn.startX + (dx * conn.animationProgress);
                    const currentEndY = conn.startY + (dy * conn.animationProgress);
                    
                    return (
                      <line 
                        key={conn.id}
                        x1={conn.startX} 
                        y1={conn.startY} 
                        x2={currentEndX} 
                        y2={currentEndY} 
                        stroke={conn.color}
                        strokeWidth="2"
                        strokeDasharray="5,3"
                      />
                    );
                  })}
                </svg>
              </div>
              
              {/* 連連看項目 */}
              {devopsSteps.map((step, index) => (
                <div 
                  key={index}
                  ref={el => itemRefs.current[index] = el}
                  className={`pixel-connect-item p-3 rounded-lg transition-all duration-300
                    bg-[#222222] border border-[#444444]
                  `}
                >
                  <div className="text-center">
                    <div className="pixel-brick-icon mb-1">{step.icon}</div>
                    <h4 className="text-sm font-semibold mb-1">
                      {language === 'zh' ? step.title : step.englishTitle}
                    </h4>
                    <p className="text-xs text-white !text-white overflow-hidden" style={{
                      color: 'white !important',
                      display: '-webkit-box',
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: 'vertical'
                    }}>
                      {language === 'zh' ? step.description : step.englishDescription}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            /* 電腦版保持原有效果 */
            <div className="pixel-mario-pipeline relative hidden md:block">
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
          )}
        </div>
      </div>
      
      {/* 新增 CSS 樣式 */}
      <style dangerouslySetInnerHTML={{__html: `
        .connected-item {
          transform: scale(1.05);
          border-color: #00ff00 !important;
          border-width: 2px !important;
          transition: all 0.3s ease;
        }
      `}} />
    </section>
  );
};

export default Devops; 