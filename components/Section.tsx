import React from 'react';

interface SectionProps {
  title: React.ReactNode;
  children: React.ReactNode;
  id?: string;
  className?: string;
  titleAlign?: 'left' | 'center';
}

const Section: React.FC<SectionProps> = ({ title, children, id, className = '', titleAlign = 'left' }) => {
  return (
    <section id={id} className={`py-16 md:py-24 ${className}`}>
      <div className="container mx-auto px-6">
        <div className={`mb-12 md:mb-16 max-w-4xl mx-auto ${titleAlign === 'center' ? 'text-center' : 'text-center md:text-left'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight tracking-tighter">{title}</h2>
        </div>
        <div className="max-w-7xl mx-auto">
            {children}
        </div>
      </div>
    </section>
  );
};

export default Section;