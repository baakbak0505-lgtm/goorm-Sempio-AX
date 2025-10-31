
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Section from './components/Section';
import CompetitorStory from './components/CompetitorStory';
import Footer from './components/Footer';
import { ChartBarIcon, ArrowTrendingUpIcon, MagnifyingGlassIcon, UsersIcon, AcademicCapIcon, CJLogo, OttogiLogo, ArrowRightIcon, ChevronDownIcon } from './components/Icons';
import GoormIntro from './components/GoormIntro';
import Curriculum from './components/Curriculum';
import ExpPlatformIntro from './components/ExpPlatformIntro';
import UrgencyStatement from './components/UrgencyStatement';
import ContactModal from './components/CompetitorCard';

declare global {
    interface Window {
        jspdf: any;
        html2canvas: any;
    }
}


// --- START: Data Visualization Components ---

const LineChart: React.FC = () => (
    <svg viewBox="0 0 100 50" className="w-full h-full">
        <path d="M 5 40 C 25 35, 40 15, 60 12 S 85 10, 95 5" fill="none" stroke="#f59e0b" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"
              className="path-animate" style={{ strokeDasharray: 150, strokeDashoffset: 150 }} />
        <circle cx="95" cy="5" r="3" fill="#f59e0b" />
        <style>{`.path-animate { animation: draw 2s ease-out forwards; } @keyframes draw { to { stroke-dashoffset: 0; } }`}</style>
    </svg>
);

const BarChart: React.FC = () => (
    <svg viewBox="0 0 100 50" className="w-full h-full">
        {[
            { y: 30, h: 20 }, { y: 20, h: 30 }, { y: 35, h: 15 },
            { y: 15, h: 35 }, { y: 25, h: 25 }, { y: 10, h: 40 }
        ].map((bar, i) => (
            <rect key={i} x={i * 15 + 7.5} y={bar.y} width="10" height={bar.h} fill="#f59e0b" rx="2"
                  className="bar-animate" style={{ animationDelay: `${i * 100}ms` }} />
        ))}
        <style>{`.bar-animate { transform-origin: bottom; animation: grow 1s ease-out forwards; transform: scaleY(0); } @keyframes grow { to { transform: scaleY(1); } }`}</style>
    </svg>
);

const DonutChart: React.FC<{ percentage: number }> = ({ percentage }) => {
    const r = 20;
    const circ = 2 * Math.PI * r;
    const strokePct = ((100 - percentage) * circ) / 100;

    return (
        <svg viewBox="0 0 50 50" className="w-full h-full transform -rotate-90">
            <circle cx="25" cy="25" r={r} fill="transparent" stroke="#E5E7EB" strokeWidth="5" />
            <circle
                cx="25" cy="25" r={r} fill="transparent"
                stroke="#f59e0b" strokeWidth="5" strokeLinecap="round"
                strokeDasharray={circ}
                strokeDashoffset={percentage > 0 ? strokePct : circ}
                className="donut-animate"
            />
            <style>{`.donut-animate { transition: stroke-dashoffset 1.5s ease-out; }`}</style>
        </svg>
    );
};

// --- END: Data Visualization Components ---


const MetricCard: React.FC<{ title: string; description: string; chart: React.ReactNode; className?: string; style?: React.CSSProperties }> = ({ title, description, chart, className, style }) => (
    <div className={`bg-white p-6 rounded-xl shadow-lg border border-slate-200/80 flex flex-col items-center text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-2 overflow-hidden ${className}`} style={style}>
        <div className="absolute top-0 left-0 right-0 h-2 bg-indigo-800"></div>
        <div className="h-20 w-32 mb-4 mt-4">{chart}</div>
        <h3 className="text-3xl font-bold text-slate-800 mb-2">{title}</h3>
        <p className="text-slate-600">{description}</p>
    </div>
);

const PartnershipStepCard: React.FC<{
  step: string;
  title: string;
  // FIX: Changed icon type from React.ReactElement to React.ReactElement<{ className?: string }> to allow passing className via cloneElement.
  icon: React.ReactElement<{ className?: string }>;
  description: string;
  tags: string[];
  isOpen: boolean;
  onClick: () => void;
  animationDelay: string;
}> = ({ step, title, icon, description, tags, isOpen, onClick, animationDelay }) => (
  <div 
    className="bg-white rounded-2xl shadow-lg border border-slate-200/80 p-6 w-full max-w-sm mx-auto transition-all duration-300 hover:shadow-xl hover:-translate-y-1 animate-in cursor-pointer"
    style={{ animationDelay }}
    onClick={onClick}
  >
    <div className="flex items-start justify-between">
      <div className="flex items-center">
        <div className="flex-shrink-0 flex items-center justify-center w-14 h-14 rounded-full bg-indigo-100 mr-4">
          {React.cloneElement(icon, { className: "w-8 h-8 text-indigo-700" })}
        </div>
        <div>
          <span className="text-sm font-bold text-indigo-700">{step}</span>
          <h3 className="text-xl font-bold text-slate-900 leading-tight whitespace-nowrap">{title}</h3>
        </div>
      </div>
      <div className="flex-shrink-0 w-8 h-8 mt-1 flex items-center justify-center">
        <ChevronDownIcon className={`w-6 h-6 text-slate-500 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </div>
    </div>
    
    <div 
      className={`grid transition-all duration-500 ease-in-out ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
    >
      <div className="overflow-hidden">
        <div className="mt-4 pt-4 border-t border-slate-200/60">
            <p className="text-slate-600 text-sm mb-4 whitespace-pre-line">{description}</p>
            <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                <span key={tag} className="text-xs font-semibold bg-slate-100 text-slate-700 px-2.5 py-1 rounded-full">{tag}</span>
                ))}
            </div>
        </div>
      </div>
    </div>
  </div>
);

interface ModalData {
  icon: string;
  title: string;
  description: string;
}

const InfoModal: React.FC<{ content: ModalData; onClose: () => void }> = ({ content, onClose }) => {
  React.useEffect(() => {
    document.body.style.overflow = 'hidden';
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEsc);

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleEsc);
    };
  }, [onClose]);

  return (
    <div 
      className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 animate-in"
      style={{ animationName: 'fadeIn', animationDuration: '300ms' }}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="info-modal-title"
    >
      <div 
        className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full text-center relative animate-in"
        style={{ animationName: 'zoomIn', animationDuration: '300ms', animationDelay: '50ms' }}
        onClick={(e) => e.stopPropagation()} 
      >
        <button onClick={onClose} className="absolute top-3 right-3 text-slate-400 hover:text-slate-600 transition-colors p-1 rounded-full" aria-label="Close modal">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <div className="text-5xl mb-4" aria-hidden="true">{content.icon}</div>
        <h3 id="info-modal-title" className="text-2xl font-bold text-slate-800 mb-2">{content.title}</h3>
        <p className="text-slate-600 leading-relaxed">{content.description}</p>
      </div>
      <style>{`
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes zoomIn { from { opacity: 0; transform: scale(0.95); } to { opacity: 1; transform: scale(1); } }
      `}</style>
    </div>
  );
};

const App: React.FC = () => {
    const [expandedStep, setExpandedStep] = React.useState<number | null>(null);
    const [modalContent, setModalContent] = React.useState<ModalData | null>(null);
    const [isContactModalOpen, setIsContactModalOpen] = React.useState(false);
    const [isDownloading, setIsDownloading] = React.useState(false);


    const handleDownloadPdf = async () => {
        setIsDownloading(true);

        const headerElement = document.querySelector('header');
        if (headerElement) headerElement.style.display = 'none';

        try {
            const { jsPDF } = window.jspdf;
            const content = document.getElementById('root');
            if (!content) return;
            
            const canvas = await window.html2canvas(content, {
                scale: 2,
                useCORS: true,
                logging: false,
                onclone: (document) => {
                    // This can be used to modify the document before rendering
                }
            });

            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF({
                orientation: 'p',
                unit: 'mm',
                format: 'a4',
                putOnlyUsedFonts: true,
                compress: true,
            });

            const pdfWidth = pdf.internal.pageSize.getWidth();
            const canvasWidth = canvas.width;
            const canvasHeight = canvas.height;
            const ratio = canvasWidth / pdfWidth;
            const pagedImgHeight = canvasHeight / ratio;
            const pdfHeight = pdf.internal.pageSize.getHeight();

            let heightLeft = pagedImgHeight;
            let position = 0;
            
            pdf.addImage(imgData, 'PNG', 0, position, pdfWidth, pagedImgHeight, undefined, 'FAST');
            heightLeft -= pdfHeight;

            while (heightLeft > 0) {
                position = heightLeft - pagedImgHeight;
                pdf.addPage();
                pdf.addImage(imgData, 'PNG', 0, position, pdfWidth, pagedImgHeight, undefined, 'FAST');
                heightLeft -= pdfHeight;
            }

            pdf.save('샘표_AI_전환_제안서_by_goorm.pdf');

        } catch (error) {
            console.error("Error generating PDF:", error);
            alert("PDF 생성에 실패했습니다. 잠시 후 다시 시도해주세요.");
        } finally {
            if (headerElement) headerElement.style.display = 'flex';
            setIsDownloading(false);
        }
    };

    const partnershipStepsData = [
        {
            step: "STEP 01",
            title: "진단 및 목표 수립",
            icon: <MagnifyingGlassIcon />,
            description: "샘표의 현재 AI 역량 수준을 정밀하게 진단하고, 비즈니스 목표와 연결된 명확한 AI 전환 KPI를 함께 수립합니다.",
            tags: ["현업 인터뷰", "업무 분석", "KPI 설정"],
            animationDelay: "200ms"
        },
        {
            step: "STEP 02",
            title: "맞춤형 교육 설계",
            icon: <AcademicCapIcon />,
            description: "진단 결과를 바탕으로 샘표의 직무, 직급,\n과제에 최적화된 커리큘럼을 설계합니다. EXP 플랫폼으로 학습 효과를 극대화합니다.",
            tags: ["직무별 모듈", "EXP 미션 설계", "플랫폼 세팅"],
            animationDelay: "300ms"
        },
        {
            step: "STEP 03",
            title: "프로젝트 중심 교육",
            icon: <UsersIcon />,
            description: "실제 현업 데이터를 활용한 프로젝트 기반 학습(PBL)으로, 교육 내용이 바로 실무에 적용될 수 있도록 합니다.",
            tags: ["오프라인 집중 교육", "실무 데이터 활용", "PBL 수행"],
            animationDelay: "400ms"
        },
        {
            step: "STEP 04",
            title: "성과 측정 및 성장",
            icon: <ArrowTrendingUpIcon />,
            description: "EXP 대시보드를 통해 교육 성과를 실시간으로 추적하고, 정량적인 리포트를 제공하며 지속적인 성장 로드맵을 지원합니다.",
            tags: ["EXP 대시보드", "성과 리포트", "지속 성장 지원"],
            animationDelay: "500ms"
        }
    ];

    const metricsData = [
      {
        id: 'taste',
        title: '82%',
        description: '1년마다 입맛이 변하는 소비자',
        chart: <DonutChart percentage={82} />,
        className: 'animate-in',
        style: { animationDelay: '300ms' },
        modal: {
          icon: '🍽️',
          title: '소비자 입맛 변화',
          description: '전 세계 소비자의 82%가 지난 1년 내 식습관 또는 선호하는 맛이 변했다고 응답했습니다.'
        }
      },
      {
        id: 'volatility',
        title: '±21%',
        description: '주요 원자재 시장의 불안정성',
        chart: <BarChart />,
        className: 'animate-in',
        style: { animationDelay: '400ms' },
        modal: {
          icon: '🌾',
          title: '원자재 가격 변동성',
          description: '주요 식품 원자재 가격이 2024년 한 해 평균 ±21% 등락하며 예측 불가능성을 높였습니다.'
        }
      },
      {
        id: 'successRate',
        title: '< 10%',
        description: '혁신적인 신제품의 시장 생존율',
        chart: <DonutChart percentage={10} />,
        className: 'animate-in',
        style: { animationDelay: '500ms' },
        modal: {
          icon: '⚙️',
          title: '낮은 신제품 성공률',
          description: '글로벌 식품 CPG 기업의 신제품 중 10% 미만만 2년 이상 시장에서 살아남는 치열한 경쟁 환경을 보여줍니다.'
        }
      }
    ];

  return (
    <div className="bg-white text-slate-800 antialiased selection:bg-amber-500/20">
      <Header 
        onContactClick={() => setIsContactModalOpen(true)}
        onDownloadPdf={handleDownloadPdf}
        isDownloading={isDownloading}
      />
      <main>
        <Hero />

        <Section title="왜 지금 AI 전환이 필요한가?" titleAlign="center">
            <div>
                <p className="max-w-3xl mx-auto text-center text-lg text-slate-600 leading-relaxed mb-12">
                    76년 역사의 샘표가 마주한 시장은 그 어느 때보다 빠르게 변하고 있습니다. AI는 이 변화 속에서 새로운 기회를 발견하고, 맛의 기준을 한 단계 높이는 핵심 열쇠입니다.
                </p>
                <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                     {metricsData.map(metric => (
                        <div key={metric.id} onClick={() => setModalContent(metric.modal)} className="cursor-pointer" role="button" aria-label={`${metric.description} 자세히 보기`}>
                            <MetricCard 
                                title={metric.title} 
                                description={metric.description} 
                                chart={metric.chart} 
                                className={metric.className} 
                                style={metric.style} 
                            />
                        </div>
                    ))}
                </div>
                 <div className="text-center text-xs text-slate-500 mt-8 max-w-5xl mx-auto">
                    * Innova Market Insights(2025), UN FAO(2025), NielsenIQ(2025) 자료 기반
                </div>
            </div>
        </Section>
        
        <Section title="경쟁사는 이미 AI로 맛의 기준을 바꾸고 있습니다" className="bg-slate-50">
            <div>
                <div className="space-y-16 max-w-5xl mx-auto">
                    <CompetitorStory
                        logo={<CJLogo className="h-8" />}
                        themeColor="text-amber-500"
                        title="AI로 고객의 식탁을 분석하다"
                        mainStat="+30%"
                        mainStatLabel="고객 반응률"
                        description="AI 카피라이터가 생성한 초개인화 메시지를 통해 달성한 성과입니다. 고객의 숨은 니즈를 파악해 구매 전환율 또한 40% 증가시켰습니다."
                        icon={<ArrowTrendingUpIcon className="w-10 h-10" />}
                    />
                    <CompetitorStory
                        logo={<OttogiLogo className="h-9" />}
                        themeColor="text-amber-500"
                        title="AI로 최고의 품질을 지켜내다"
                        mainStat="-15%"
                        mainStatLabel="제품 불량률 감소"
                        description="AI 비전 시스템이 0.1초 만에 미세한 불량을 감지합니다. 이를 통해 품질 클레임을 0.3% 미만으로 유지하며 브랜드 신뢰도를 높였습니다."
                        icon={<ChartBarIcon className="w-10 h-10" />}
                    />
                </div>
                <div className="text-center text-xs text-slate-500 mt-12 max-w-5xl mx-auto">
                    * 각사 보도자료 및 관련 기사(Footer 참조) 기반으로 작성되었습니다.
                </div>
            </div>
        </Section>

        <UrgencyStatement />

        <GoormIntro />

        <Section title="성공적인 AI 전환, 4단계 파트너십" className="bg-slate-50" titleAlign="center">
            <p className="max-w-3xl mx-auto text-center text-slate-600 mb-12 -mt-8">
                단순 교육 제공을 넘어, 샘표의 비즈니스 성과를 만드는 든든한 파트너가 되겠습니다.
            </p>
             <div className="flex flex-col lg:flex-row lg:items-center justify-center gap-y-8 lg:gap-x-6">
                 {partnershipStepsData.map((stepData, index) => (
                    <React.Fragment key={index}>
                        <PartnershipStepCard
                            {...stepData}
                            isOpen={expandedStep === index}
                            onClick={() => setExpandedStep(expandedStep === index ? null : index)}
                        />
                        {index < partnershipStepsData.length - 1 && (
                            <div className="flex items-center justify-center">
                                <ArrowRightIcon className="w-12 h-12 text-slate-300 transform rotate-90 lg:rotate-0" />
                            </div>
                        )}
                    </React.Fragment>
                ))}
            </div>
        </Section>


        <Curriculum />
        <ExpPlatformIntro />
        
      </main>
      <Footer onContactClick={() => setIsContactModalOpen(true)} />
      {modalContent && <InfoModal content={modalContent} onClose={() => setModalContent(null)} />}
      {isContactModalOpen && <ContactModal onClose={() => setIsContactModalOpen(false)} />}
    </div>
  );
};

export default App;