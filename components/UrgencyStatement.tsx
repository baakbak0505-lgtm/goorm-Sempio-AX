import React from 'react';

const UrgencyStatement: React.FC = () => {
  return (
    <section className="bg-slate-900 py-20 md:py-24 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      <div className="container mx-auto px-6 text-center relative z-10 animate-in" style={{ animationDelay: '200ms' }}>
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6" style={{ textShadow: '0 2px 15px rgba(0,0,0,0.5)' }}>
          전통의 맛이, 새로운 기술을 만난다면?
        </h2>
        <p className="max-w-4xl mx-auto text-lg md:text-xl text-slate-300 leading-relaxed">
          변화의 속도는 빨라졌지만, ‘좋은 맛’을 향한 마음은 변하지 않습니다.<br className="hidden md:block" /> 이제 샘표는 그 진심 위에 AI의 기술을 더해, 더 많은 사람들의 식탁과 마음을 잇고자 합니다.
        </p>
        <p className="mt-8 text-xl md:text-2xl font-semibold text-amber-400">
          AI-Native로의 전환은 더 이상 선택이 아닌, 생존과 성장의 문제입니다.
        </p>
      </div>
       <style>{`
        .bg-grid-pattern {
          background-image: linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px);
          background-size: 3rem 3rem;
        }
      `}</style>
    </section>
  );
};

export default UrgencyStatement;