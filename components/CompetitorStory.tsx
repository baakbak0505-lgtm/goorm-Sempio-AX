
import React from 'react';

// A new Gauge Chart component to visualize statistics
const GaugeChart: React.FC<{ value: string; label: string; }> = ({ value, label }) => {
    const numericValue = Math.abs(parseInt(value));
    const r = 45;
    const circ = 2 * Math.PI * r;
    const strokePct = ((100 - numericValue) * (circ / 2)) / 100;

    return (
        <div className="relative w-48 h-32 flex flex-col items-center justify-end">
            <svg viewBox="0 0 100 55" className="absolute top-0 w-full h-full">
                <path d={`M 5 50 A ${r} ${r} 0 0 1 95 50`} fill="none" stroke="#E5E7EB" strokeWidth="10" />
                <path
                    d={`M 5 50 A ${r} ${r} 0 0 1 95 50`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="10"
                    strokeLinecap="round"
                    strokeDasharray={circ / 2}
                    strokeDashoffset={strokePct}
                    className="gauge-animate"
                />
                <style>{`.gauge-animate { transition: stroke-dashoffset 1.5s ease-out; }`}</style>
            </svg>
            <div className="relative text-center z-10">
                <p className={`text-4xl font-bold`}>{value}</p>
                <p className="text-sm text-slate-700 font-semibold">{label}</p>
            </div>
        </div>
    );
};

interface CompetitorStoryProps {
  logo: React.ReactNode;
  title: string;
  mainStat: string;
  mainStatLabel: string;
  description: string;
  icon: React.ReactNode;
  themeColor: string;
}

const CompetitorStory: React.FC<CompetitorStoryProps> = ({ logo, title, mainStat, mainStatLabel, description, themeColor }) => {
  return (
    <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
      <div className="text-center md:text-left">
        <div className="mb-4 h-10 flex justify-center md:justify-start items-center">{logo}</div>
        <h4 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">{title}</h4>
        <p className="text-slate-600 leading-relaxed">
          {description}
        </p>
      </div>
      <div 
        className="bg-white p-6 rounded-xl border border-slate-200/80 shadow-lg flex justify-center items-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
        style={{ 
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(200, 200, 200, 0.2) 1px, transparent 0)',
          backgroundSize: '25px 25px'
        }}
      >
        <div className={themeColor}>
            <GaugeChart value={mainStat} label={mainStatLabel} />
        </div>
      </div>
    </div>
  );
};

export default CompetitorStory;
