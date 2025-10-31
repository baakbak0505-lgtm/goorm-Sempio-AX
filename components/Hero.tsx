import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative bg-[#FDFCFB] overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-40" style={{
        backgroundImage: 'linear-gradient(rgba(229, 231, 235, 0.5) 1px, transparent 1px), linear-gradient(to right, rgba(229, 231, 235, 0.5) 1px, transparent 1px)',
        backgroundSize: '2rem 2rem',
      }}></div>
       <div className="absolute inset-0 bg-gradient-to-t from-[#FDFCFB] to-transparent z-0"></div>

      <div className="relative pt-32 pb-24 md:pt-48 md:pb-40 z-10">
        <div className="container mx-auto px-6 text-center relative z-10">
          <img src="https://www.sempio.com/static/images/a/logo.svg" alt="Sempio Logo" className="h-12 mx-auto mb-8 animate-in" style={{ animationDelay: '0ms' }} />
          <div className="inline-block bg-indigo-100 text-indigo-800 text-sm font-bold px-4 py-2 rounded-full mb-4 animate-in" style={{ animationDelay: '100ms'}}>
            샘표 맞춤형 AI 전환 교육 프로그램
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-4 leading-tight tracking-tighter animate-in" style={{textShadow: '0 2px 10px rgba(0,0,0,0.05)', animationDelay: '200ms'}}>
              샘표의 맛, AI로 미래를 빚다
          </h1>
          <p className="max-w-3xl mx-auto text-xl md:text-2xl text-slate-700 animate-in" style={{ animationDelay: '300ms' }}>
              “76년 전통의 발효 명가, 샘표의 장인정신에 구름의 AI 기술을 더해
              <br />
              <strong className="font-bold text-amber-600">AI 네이티브 조직으로의 새로운 성장을 제안</strong>합니다.”
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;