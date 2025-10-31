
import React, { useState, useEffect } from 'react';
import { SempioLogo, GoormLogo, ArrowDownTrayIcon } from './Icons';

const SempioGoormLogo: React.FC = () => (
    <div className="flex items-center space-x-3">
        <SempioLogo className="h-5" />
        <span className="text-slate-300 font-light text-xl">|</span>
        <GoormLogo className="h-5" />
    </div>
);


const Header: React.FC<{ onContactClick: () => void; onDownloadPdf: () => void; isDownloading: boolean; }> = ({ onContactClick, onDownloadPdf, isDownloading }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-lg shadow-md border-b border-slate-200/60' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <SempioGoormLogo />
        <div className="flex items-center space-x-3">
          <button
            onClick={onDownloadPdf}
            disabled={isDownloading}
            className="flex items-center justify-center bg-white text-indigo-800 font-semibold px-4 py-2 rounded-lg hover:bg-slate-100 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-75 shadow-sm hover:shadow-md border border-slate-300/80 disabled:bg-slate-200 disabled:text-slate-500 disabled:cursor-wait"
          >
            {isDownloading ? (
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-indigo-700" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
            ) : (
              <ArrowDownTrayIcon className="w-5 h-5 mr-2" />
            )}
            <span>
              {isDownloading ? 'PDF 생성 중...' : '제안서 다운로드'}
            </span>
          </button>
          <button
            onClick={onContactClick}
            className="bg-indigo-800 text-white font-semibold px-4 py-2 rounded-lg hover:bg-indigo-900 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-75 shadow-sm hover:shadow-md"
          >
            상담 신청
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;