import React, { useRef } from 'react';

interface HeaderProps {
  language: string;
  toggleLanguage: () => void;
  isMobileMenuOpen: boolean;
  toggleMobileMenu: () => void;
}

const Header: React.FC<HeaderProps> = ({ 
  language, 
  toggleLanguage, 
  isMobileMenuOpen, 
  toggleMobileMenu 
}) => {
  const searchInputRef = useRef<HTMLInputElement>(null);
  
  const focusSearchInput = () => {
    if (searchInputRef.current) {
      searchInputRef.current.focus();
    }
  };

  return (
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
        
        <div className="pixel-search-container hidden md:block">
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
          <button onClick={toggleLanguage} className="pixel-lang-switch hidden md:block">
            {language === 'zh' ? 'EN' : '中文'}
          </button>
        </nav>
        
        <div className="flex items-center gap-2">
          <button 
            onClick={toggleLanguage} 
            className="pixel-lang-switch-mobile md:hidden"
            aria-label={language === 'zh' ? "Switch to English" : "切換至中文"}
          >
            {language === 'zh' ? 'EN' : '中文'}
          </button>
          
          <button 
            className="pixel-mobile-menu-btn" 
            onClick={toggleMobileMenu}
            aria-expanded={isMobileMenuOpen}
            aria-label="Menu"
          >
            ☰
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header; 