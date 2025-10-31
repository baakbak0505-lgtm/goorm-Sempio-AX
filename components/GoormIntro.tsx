import React from 'react';
import SectionDivider from './SectionDivider';
import { ArrowTrendingUpIcon, CpuChipIcon, RocketLaunchIcon, AcademicCapIcon, UsersIcon, TrophyIcon, ClipboardDocumentCheckIcon } from './Icons';

// FIX: Changed icon type from React.ReactElement to React.ReactElement<{ className?: string }> to allow passing className via cloneElement.
const BenefitCard: React.FC<{ icon: React.ReactElement<{ className?: string }>; title: string; points: string[]; }> = ({ icon, title, points }) => (
    <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-200/60 h-full text-left transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 flex flex-col">
        <div className="flex-shrink-0 mb-5 flex items-center">
            <div className="flex items-center justify-center w-14 h-14 rounded-full bg-indigo-100 mr-4">
                {React.cloneElement(icon, { className: "w-8 h-8 text-indigo-700" })}
            </div>
            <h4 className="font-bold text-2xl text-slate-900">{title}</h4>
        </div>
        <div className="border-t border-slate-200/80 pt-5 mt-auto">
            <ul className="space-y-3 text-slate-700">
                {points.map((point, index) => (
                    <li key={index} className="flex items-start">
                        <svg className="w-5 h-5 mr-3 mt-0.5 text-indigo-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                        </svg>
                        <span>{point}</span>
                    </li>
                ))}
            </ul>
        </div>
    </div>
);


const GoormIntro: React.FC = () => {
    const benefits = [
      { 
          icon: <ArrowTrendingUpIcon />, 
          title: "성과 중심 교육", 
          points: [
              "실시간 성과를 증명하는 EXP 대시보드",
              "샘표의 실제 데이터 기반 실무 프로젝트",
              "교육 결과가 바로 업무 개선으로 연결"
          ]
      },
      { 
          icon: <CpuChipIcon />, 
          title: "관리 자동화", 
          points: [
              "학습 현황·참여도 데이터 자동 집계",
              "성과 리포트·인증서 원클릭 생성",
              "담당자의 운영 부담 90% 경감"
          ]
      },
      { 
          icon: <RocketLaunchIcon />, 
          title: "지속 성장 지원", 
          points: [
              "교육 후 EXP 미션으로 역량 내재화",
              "구름의 통합 플랫폼으로 확장 가능",
              "데이터 기반의 명확한 성장 경로 제시"
          ]
      }
    ];

    const stats = [
        { 
            value: "110만+", 
            label: "구름 EDU\n누적 수강생",
            icon: <AcademicCapIcon />
        },
        { 
            value: "1,500+", 
            label: "누적 파트너사",
            icon: <UsersIcon />
        },
        { 
            value: "1위", 
            label: "코딩 교육 브랜드\n(2년 연속)",
            icon: <TrophyIcon />
        },
        { 
            value: "KDT·KHP", 
            label: "정부 핵심 인재\n양성 사업 수행",
            icon: <ClipboardDocumentCheckIcon />
        },
    ];

    return (
        <>
        <SectionDivider />
        <section className="py-20 md:py-24 bg-[#F6F1E9]">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-4xl md:text-5xl font-bold text-[#4F200D] mb-4">
                    왜 구름(goorm)인가?
                </h2>
                <p className="max-w-4xl mx-auto text-lg text-[#4F200D]/80 mb-16 leading-relaxed">
                   구름은 단순 교육 제공을 넘어, 샘표의 성공적인 AI 전환을 위한 <strong className="font-semibold text-[#4F200D]">검증된 파트너</strong>입니다. <br/>
                   자체 보유한 강력한 <strong>교육 플랫폼</strong>과 <strong>풍부한 콘텐츠, 최고의 강사진</strong>을 바탕으로, 대규모 정부 사업을<br/> 성공적으로 수행하며 독보적인 역량을 쌓아왔습니다.
                </p>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-20">
                    {stats.map((stat, index) => (
                        <div 
                            key={index} 
                            className="bg-white p-6 rounded-2xl shadow-lg border border-slate-200/60 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1.5 animate-in text-center relative overflow-hidden"
                            style={{ animationDelay: `${200 + index * 100}ms` }}
                        >
                            <div className="absolute top-0 left-0 h-1.5 bg-indigo-700 w-full"></div>
                            <div className="pt-8 pb-4">
                                <p className="text-5xl font-extrabold text-slate-800 tracking-tight">{stat.value}</p>
                                <p className="mt-3 font-semibold text-base text-slate-600 whitespace-pre-line leading-snug">{stat.label}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto text-left">
                    {benefits.map((benefit, index) => (
                        <BenefitCard key={index} {...benefit} />
                    ))}
                </div>
            </div>
        </section>
        <SectionDivider />
        </>
    );
};

export default GoormIntro;