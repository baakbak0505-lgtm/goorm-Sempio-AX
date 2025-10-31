import React, { useState } from 'react';
import Section from './Section';
import { ChevronDownIcon, CheckCircleIcon, TrophyIcon, ArrowRightIcon } from './Icons';

// --- START: Reusable Components for Curriculum ---

const AccordionItem: React.FC<{
    title: string;
    children: React.ReactNode;
    isOpen: boolean;
    onClick: () => void;
    colors: { bg: string; text: string; border: string; };
}> = ({ title, children, isOpen, onClick, colors }) => (
    <div className={`rounded-xl overflow-hidden transition-all duration-300 ease-in-out border ${isOpen ? `${colors.border} shadow-lg shadow-indigo-500/10` : 'border-slate-200/80'}`}>
        <button onClick={onClick} className={`w-full flex justify-between items-center p-5 text-left transition-colors duration-200 ${isOpen ? colors.bg : 'bg-white hover:bg-slate-50/70'}`}>
            <span className={`font-bold text-lg transition-colors duration-200 ${isOpen ? colors.text : 'text-slate-900'}`}>{title}</span>
            <ChevronDownIcon className={`w-6 h-6 transition-all duration-300 flex-shrink-0 ml-4 ${isOpen ? `transform rotate-180 ${colors.text}` : 'text-slate-400'}`} />
        </button>
        <div className={`grid transition-all duration-500 ease-in-out ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
            <div className="overflow-hidden bg-white">
                {children}
            </div>
        </div>
    </div>
);


const RoleTrackContainer: React.FC<{
    title: string;
    tagline: string;
    description: string;
    children: React.ReactNode;
}> = ({ title, tagline, description, children }) => (
    <div className="bg-white p-6 md:p-8 rounded-2xl shadow-xl border border-slate-200/60 relative overflow-hidden">
        <div className="absolute top-0 left-0 h-2 w-full bg-gradient-to-r from-indigo-700 to-indigo-500"></div>
        <div className="mb-8 mt-4">
            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">{title}</h3>
            <p className="font-semibold text-indigo-700 mb-4">“{tagline}”</p>
            <p className="text-base text-slate-600 max-w-4xl">{description}</p>
        </div>
        <div>
            {children}
        </div>
    </div>
);

const MissionList: React.FC<{ title: string; missions: string[] }> = ({ title, missions }) => (
    <div className="mt-8 p-6 bg-slate-50/70 rounded-lg border border-slate-200/80">
        <h4 className="font-bold text-slate-800 mb-3">{title}</h4>
        <ul className="space-y-2">
            {missions.map((mission, index) => (
                <li key={index} className="flex items-start text-slate-600">
                    <CheckCircleIcon className="w-5 h-5 mr-3 mt-0.5 text-indigo-600 flex-shrink-0" />
                    <span>{mission.substring(mission.indexOf(' ') + 1)}</span>
                </li>
            ))}
        </ul>
    </div>
);

// --- END: Reusable Components ---

// --- START: Data Definitions ---

const newcomerTrackData = [
  { topic: '📨 AI로 문서·보고 자동 작성하기', goal: '품질·생산·영업 보고서 및 회의록 자동화', example: 'ChatGPT로 생산일지·품질 리포트 자동 생성' },
  { topic: '🪄 AI로 기획서·PPT 자동 생성하기', goal: '아이디어를 제품 제안서·기획안으로 전환', example: 'Claude/Gamma로 신제품 제안서 자동 생성' },
  { topic: '📊 AI로 데이터 리포트 자동화하기', goal: '현장 데이터·매출 데이터 요약 및 시각화', example: 'Excel Copilot으로 주간 리포트 자동화' },
  { topic: '🤖 AI로 나만의 업무 챗봇 만들기', goal: '반복 질문·문서 검색을 대신하는 챗봇 구축', example: 'FAQ·레시피 관리·교육 Q&A 챗봇 실습' },
  { topic: '✍️ AI 프롬프트 공식 세우기', goal: '제조·품질·영업 등 직무별 프롬프트 공식화', example: 'Role–Goal–Tone 구조로 업무별 프롬프트 설계' },
  { topic: '🌍 AI로 글로벌 콘텐츠 자동 생성하기', goal: '수출·해외 영업 대응 콘텐츠 자동화', example: '다국어 보도자료·제품 카탈로그 자동 생성' },
];
const newcomerMissions = [
  '📅 “AI로 우리 부서의 반복 업무 자동화하기”',
  '🧠 “나만의 챗봇을 실무에 도입해 전후 비교 리포트 제출”',
  '📊 “AI 생성 리포트로 실제 품질/매출 데이터 분석 결과 공유”',
];

const leaderTrackData = [
  { topic: '💬 AI로 회의·피드백 자동화하기', goal: '공정 개선·품질 회의 속도를 높이는 자동화', example: '회의록 → 액션 정리 → 팀 공지 자동화' },
  { topic: '📑 AI로 전략 문서 자동 생성하기', goal: '사업·생산성·브랜드 전략 문서 자동 초안화', example: 'Claude로 전략 리포트 초안 생성' },
  { topic: '🤖 팀 전용 AI 챗봇 만들기', goal: '부서별 품질·교육·공지 챗봇 설계', example: '현장 개선 아이디어·Q&A 챗봇 구축' },
  { topic: '🌐 AI로 글로벌 협업 자동화하기', goal: '수출·공급망 보고 및 해외 협업 자동화', example: '다국어 회의록·리포트 자동 생성' },
  { topic: '🚀 AI 리더십 실천 플랜 세우기', goal: '8주 실무 미션 기반 AI 적용 로드맵 수립', example: '부서별 AI 실행 로드맵 및 KPI 설계' },
];
const leaderMissions = [
  '📊 “AI 기반 팀 리포트 자동화 시스템 구축”',
  '🧠 “팀 단위 챗봇 운영 시범 적용 및 개선 피드백”',
  '🌍 “글로벌 협업 보고서 자동화 PoC 실행 및 검증”',
];

const jobSpecificTracks = [
    { title: '🍽 영업 직군', data: [ { level: '신입', topic1: 'AI로 거래처·주문 데이터 자동 정리', topic2: 'AI로 제안서·견적서 자동 생성 및 현지화', mission: '“AI로 거래처 관리 문서 자동화 후 효율 측정”' }, { level: '실무자', topic1: 'AI 기반 매출 예측 및 수요 분석', topic2: 'AI로 고객 피드백 요약·인사이트 도출', mission: '“AI 예측 모델로 매출 변동 분석 리포트 제작”' }, { level: '리더', topic1: 'AI로 해외 시장 트렌드 분석', topic2: 'AI로 영업 KPI 대시보드 자동화', mission: '“해외 지표 기반 영업 리포트 자동화 PoC 구축”' } ] },
    { title: '🎯 마케팅 직군', data: [ { level: '신입', topic1: 'AI로 브랜드 카피·이미지 콘텐츠 생성', topic2: 'AI로 다국어 SNS 포스트 제작', mission: '“AI 콘텐츠 10종 제작 및 조회수 비교”' }, { level: '실무자', topic1: 'AI로 캠페인 성과 리포트 자동화', topic2: 'AI로 숏폼·레시피형 영상 콘텐츠 제작', mission: '“AI 생성 숏폼 콘텐츠 실험 및 효과 분석”' }, { level: '리더', topic1: 'AI로 글로벌 브랜드 전략 초안 생성', topic2: 'AI로 소비 트렌드 분석 및 메시지 설계', mission: '“AI 분석 기반 신제품 포지셔닝 전략 제안”' } ] },
    { title: '🤝 HR / 교육 직군', data: [ { level: '신입', topic1: 'AI로 공지·FAQ 자동 생성', topic2: 'AI로 채용 Q&A 챗봇 만들기', mission: '“신입 대상 교육 FAQ 챗봇 제작 및 운영”' }, { level: '실무자', topic1: 'AI로 인사 리포트·성과 분석', topic2: 'AI로 교육 콘텐츠 자동 요약·제작', mission: '“AI 기반 인사 리포트 자동화 시스템 구축”' }, { level: '리더', topic1: 'AI로 조직 역량 리포트 자동화', topic2: 'AI로 글로벌 인재 데이터 분석', mission: '“AI로 인재 DB 시각화 리포트 설계”' } ] },
    { title: '🧪 R&D / 품질 직군', data: [ { level: '신입', topic1: 'AI로 연구 데이터 요약', topic2: 'AI로 테스트 리포트 자동 생성', mission: '“AI 자동 리포트로 실험 분석 효율화”' }, { level: '실무자', topic1: 'AI로 이상 탐지·불량 예측', topic2: 'AI로 품질 개선 리포트 자동화', mission: '“AI 기반 불량 패턴 예측 리포트 제작”' }, { level: '리더', topic1: 'AI로 신제품 트렌드 분석', topic2: 'AI로 품질 개선 전략 문서 자동화', mission: '“AI로 신제품 R&D 트렌드 리포트 생성”' } ] },
    { title: '⚙️ 생산 / 공정 직군', data: [ { level: '신입', topic1: 'AI로 생산일지 자동 작성', topic2: 'AI로 공정 체크리스트 자동화', mission: '“AI로 현장 데이터 보고 자동화 PoC”' }, { level: '실무자', topic1: 'AI로 불량 데이터 분석', topic2: 'AI로 생산 리포트 자동화', mission: '“AI로 불량률 예측 모델 구축 및 검증”' }, { level: '리더', topic1: 'AI로 생산 KPI 대시보드 구축', topic2: 'AI로 설비 효율 예측 리포트 자동화', mission: '“AI KPI 대시보드 기반 공정개선 실행”' } ] },
    { title: '💻 개발 / 기술 직군', data: [ { level: '신입', topic1: 'AI로 코드 문서·주석 자동 생성', topic2: 'AI로 테스트 스크립트 자동화', mission: '“AI 코드 리뷰 자동화 및 개선 사례 발표”' }, { level: '실무자', topic1: 'AI로 개발 챗봇·자동화 툴 설계', topic2: 'AI로 운영 데이터 분석', mission: '“AI로 사내 툴 자동화 모듈 구축”' }, { level: '리더', topic1: 'AI로 개발 생산성 리포트 자동화', topic2: 'AI로 기술 로드맵 문서 자동 생성', mission: '“AI 기반 기술 보고서 자동 생성 시스템 설계”' } ] },
    { title: '📈 경영기획 / 전략 직군', data: [ { level: '신입', topic1: 'AI로 산업·시장 리서치 자동화', topic2: 'AI로 회의록·보고서 자동화', mission: '“AI 시장 리포트 작성 및 실무 적용”' }, { level: '실무자', topic1: 'AI로 사업 제안서 자동 생성', topic2: 'AI로 KPI 분석 리포트 시각화', mission: '“AI로 KPI 리포트 자동화 대시보드 구축”' }, { level: '리더', topic1: 'AI로 글로벌 전략 시나리오 설계', topic2: 'AI로 ROI 리포트 자동화', mission: '“AI로 글로벌 시장 진출 전략 초안 도출”' } ] },
    { title: '🎨 디자인 / 브랜드 직군', data: [ { level: '신입', topic1: 'AI로 브랜드 콘셉트 이미지 생성', topic2: 'AI로 제품 패키지 디자인 초안 제작', mission: '“AI 생성 시안을 실제 디자인 반영 테스트”' }, { level: '실무자', topic1: 'AI로 광고·SNS 콘텐츠 자동화', topic2: 'AI로 숏폼 영상 제작', mission: '“AI 생성 콘텐츠 A/B 테스트 운영”' }, { level: '리더', topic1: 'AI로 브랜드 스토리 프레젠테이션 생성', topic2: 'AI로 글로벌 디자인 리포트 자동화', mission: '“AI 브랜드 스토리 보고서 자동화 PoC”' } ] },
];

const jobModuleColors: { [key: string]: { bg: string; text: string; border: string; } } = {
    '🍽 영업 직군': { bg: 'bg-sky-50', text: 'text-sky-800', border: 'border-sky-200' },
    '🎯 마케팅 직군': { bg: 'bg-rose-50', text: 'text-rose-800', border: 'border-rose-200' },
    '🤝 HR / 교육 직군': { bg: 'bg-amber-50', text: 'text-amber-800', border: 'border-amber-200' },
    '🧪 R&D / 품질 직군': { bg: 'bg-cyan-50', text: 'text-cyan-800', border: 'border-cyan-200' },
    '⚙️ 생산 / 공정 직군': { bg: 'bg-emerald-50', text: 'text-emerald-800', border: 'border-emerald-200' },
    '💻 개발 / 기술 직군': { bg: 'bg-violet-50', text: 'text-violet-800', border: 'border-violet-200' },
    '📈 경영기획 / 전략 직군': { bg: 'bg-indigo-50', text: 'text-indigo-800', border: 'border-indigo-200' },
    '🎨 디자인 / 브랜드 직군': { bg: 'bg-fuchsia-50', text: 'text-fuchsia-800', border: 'border-fuchsia-200' },
};

// --- END: Data Definitions ---

const FinalRoadmap: React.FC = () => (
    <div className="mt-24 p-8 md:p-12 bg-white rounded-2xl shadow-2xl border border-slate-200/60 animate-in" style={{ animationDelay: '200ms' }}>
        <div className="text-center">
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">샘표의 AI 네이티브 성장 로드맵</h3>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">체계적인 3단계 프로그램을 통해 학습, 적용, 혁신을 이루며 샘표의 AI 네이티브 전환을 완성합니다.</p>
        </div>
        <div className="mt-12 flex flex-col lg:flex-row justify-center items-center gap-y-6">
            <div className="text-center px-4">
                <div className="text-lg font-bold text-indigo-700">STEP 1</div>
                <div className="text-xl font-semibold text-slate-800 mt-1">🌐 공통 리터러시</div>
            </div>
             <ArrowRightIcon className="w-12 h-12 text-slate-300 transform rotate-90 lg:rotate-0" />
            <div className="text-center px-4">
                <div className="text-lg font-bold text-indigo-700">STEP 2</div>
                <div className="text-xl font-semibold text-slate-800 mt-1">🎯 직무별 심화</div>
            </div>
             <ArrowRightIcon className="w-12 h-12 text-slate-300 transform rotate-90 lg:rotate-0" />
            <div className="text-center px-4">
                <div className="text-lg font-bold text-indigo-700">STEP 3</div>
                <div className="text-xl font-semibold text-slate-800 mt-1">🏆 샘표톤</div>
            </div>
        </div>
    </div>
);


const Curriculum: React.FC = () => {
    const [openAccordion, setOpenAccordion] = useState<string | null>(null);

    const handleAccordionClick = (title: string) => {
        setOpenAccordion(openAccordion === title ? null : title);
    };

    const tableHeaderClass = "p-3 text-xs font-semibold text-slate-500 bg-slate-50 uppercase tracking-wider text-left";
    const tableCellClass = "p-3 text-slate-700 text-left align-top";

    return (
        <Section title="샘표 맞춤형 AI 역량 강화 커리큘럼" id="curriculum" className="bg-slate-50" titleAlign="center">
            <div className="max-w-5xl mx-auto space-y-16">
                
                {/* I. 공통 리터러시 교육 (통합) */}
                <div>
                    <div className="bg-gradient-to-br from-slate-900 to-indigo-900 text-white p-8 rounded-2xl shadow-2xl text-center animate-in" style={{ animationDelay: '100ms' }}>
                        <h3 className="text-3xl md:text-4xl font-bold mb-3">🌐 I. 공통 리터러시 교육</h3>
                        <p className="text-xl text-indigo-300 font-semibold mb-4">“AI로 일하는 방식의 진화”</p>
                        <p className="text-slate-300 mb-6 max-w-3xl mx-auto">
                            전 구성원이 ‘AI-Native 제조·브랜드 조직’으로 도약하기 위한 공통 기반 역량 강화 과정
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 text-center text-sm">
                            <div className="bg-indigo-500/80 px-5 py-3 rounded-lg w-full sm:w-auto">
                                <p className="font-bold">Phase 1: 1일 오프라인 집중 실습</p>
                            </div>
                            <span className="text-indigo-400 font-bold text-2xl transform sm:rotate-0 rotate-90">&rarr;</span>
                            <div className="bg-indigo-500/80 px-5 py-3 rounded-lg w-full sm:w-auto">
                                <p className="font-bold">Phase 2: 8주 실무 EXP 미션</p>
                            </div>
                        </div>
                    </div>
                    
                    {/* 직급별 핵심 역량 트랙 (공통에 포함) */}
                    <div className="mt-16">
                        <div className="text-center animate-in mb-10" style={{ animationDelay: '200ms' }}>
                            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">👥 직급별 핵심 역량 트랙</h3>
                            <p className="text-xl text-indigo-700 font-semibold">“신입사원과 리더의 역할에 맞춰 AI 핵심 스킬을 완성합니다.”</p>
                        </div>
                        <div className="space-y-16">
                            <RoleTrackContainer
                                title="👩‍💻 신입사원 트랙"
                                tagline="AI로 일하는 감각을 익혀, 빠르게 성장하는 스마트 실무인으로"
                                description="실무 기초와 생성형 AI를 활용한 6대 실무 스킬 완성 + 8주 EXP 실무 적용"
                            >
                                <div className="overflow-x-auto">
                                    <table className="min-w-full text-sm border-t border-b border-slate-200">
                                        <thead>
                                            <tr>
                                                <th className={`${tableHeaderClass} rounded-tl-lg w-[30%]`}>주제</th>
                                                <th className={`${tableHeaderClass} w-[35%]`}>학습 목표</th>
                                                <th className={`${tableHeaderClass} rounded-tr-lg w-[35%]`}>주요 실습 예시</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-slate-200/80">
                                            {newcomerTrackData.map((item, index) => (
                                                <tr key={index} className="bg-white hover:bg-indigo-50/50">
                                                    <td className={`${tableCellClass} font-semibold`}>{item.topic}</td>
                                                    <td className={tableCellClass}>{item.goal}</td>
                                                    <td className={tableCellClass}>{item.example}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                                <MissionList title="🧩 8주 EXP 미션 예시" missions={newcomerMissions} />
                            </RoleTrackContainer>
                            
                            <RoleTrackContainer
                                title="🧠 리더 트랙"
                                tagline="팀과 조직이 AI로 더 효율적이고 빠르게 움직이게 만드는 리더십"
                                description="전략·협업·성과 관리 중심의 5대 리더십 스킬 완성 + 8주 EXP 실무 적용"
                            >
                                <div className="overflow-x-auto">
                                    <table className="min-w-full text-sm border-t border-b border-slate-200">
                                        <thead>
                                            <tr>
                                                <th className={`${tableHeaderClass} rounded-tl-lg w-[30%]`}>주제</th>
                                                <th className={`${tableHeaderClass} w-[35%]`}>학습 목표</th>
                                                <th className={`${tableHeaderClass} rounded-tr-lg w-[35%]`}>주요 실습 예시</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-slate-200/80">
                                            {leaderTrackData.map((item, index) => (
                                                <tr key={index} className="bg-white hover:bg-indigo-50/50">
                                                    <td className={`${tableCellClass} font-semibold`}>{item.topic}</td>
                                                    <td className={tableCellClass}>{item.goal}</td>
                                                    <td className={tableCellClass}>{item.example}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                                <MissionList title="🧩 8주 EXP 미션 예시" missions={leaderMissions} />
                            </RoleTrackContainer>
                        </div>
                    </div>
                </div>

                {/* II. 직무·직급별 맞춤형 스킬 커리큘럼 */}
                 <div>
                    <div className="bg-gradient-to-br from-slate-900 to-indigo-900 text-white p-8 rounded-2xl shadow-2xl text-center animate-in mb-10" style={{ animationDelay: '300ms' }}>
                        <h3 className="text-3xl md:text-4xl font-bold mb-3">🎯 II. 직무·직급별 맞춤형 스킬 커리큘럼</h3>
                        <p className="text-xl text-indigo-300 font-semibold mb-4">“실무에 바로 적용하는 맞춤형 AI 역량 강화”</p>
                        <p className="text-slate-300 max-w-4xl mx-auto mb-6">
                            각 직무의 특성과 실무 과제를 중심으로 심화 학습이 진행됩니다.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 text-center text-sm">
                            <div className="bg-indigo-500/80 px-5 py-3 rounded-lg w-full sm:w-auto">
                                <p className="font-bold">Phase 1: 1일 오프라인 집중 실습</p>
                            </div>
                            <span className="text-indigo-400 font-bold text-2xl transform sm:rotate-0 rotate-90">&rarr;</span>
                            <div className="bg-indigo-500/80 px-5 py-3 rounded-lg w-full sm:w-auto">
                                <p className="font-bold">Phase 2: 8주 실무 EXP 미션</p>
                            </div>
                        </div>
                    </div>
                     <div className="space-y-4">
                        {jobSpecificTracks.map(track => (
                            <AccordionItem 
                                key={track.title}
                                title={track.title}
                                isOpen={openAccordion === track.title}
                                onClick={() => handleAccordionClick(track.title)}
                                colors={jobModuleColors[track.title]}
                            >
                                <div className="p-2 overflow-x-auto">
                                    <table className="min-w-full text-sm">
                                        <thead>
                                            <tr>
                                                <th className={`${tableHeaderClass} w-[10%]`}>구분</th>
                                                <th className={`${tableHeaderClass} w-[25%]`}>주제 1</th>
                                                <th className={`${tableHeaderClass} w-[25%]`}>주제 2</th>
                                                <th className={`${tableHeaderClass} w-[40%]`}>8주 EXP 미션 예시</th>
                                            </tr>
                                        </thead>
                                        <tbody className="bg-white divide-y divide-slate-200/80">
                                            {track.data.map((levelData) => (
                                                <tr key={levelData.level}>
                                                    <td className={`${tableCellClass} font-semibold text-indigo-700`}>{levelData.level}</td>
                                                    <td className={tableCellClass}>{levelData.topic1}</td>
                                                    <td className={tableCellClass}>{levelData.topic2}</td>
                                                    <td className={`${tableCellClass} font-medium text-amber-800`}>{levelData.mission}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </AccordionItem>
                        ))}
                    </div>
                </div>

                 {/* III. AI 역량의 실전 증명, 샘표톤(Sempio-thon) */}
                <div>
                    <div className="bg-gradient-to-br from-slate-900 to-indigo-900 text-white p-8 rounded-2xl shadow-2xl text-center animate-in" style={{ animationDelay: '300ms' }}>
                        <h3 className="text-3xl md:text-4xl font-bold mb-3">🏆 III. AI 역량의 실전 증명, 샘표톤(Sempio-thon)</h3>
                        <p className="text-xl text-indigo-300 font-semibold mb-4">“배움을 넘어, 실제 비즈니스 문제를 해결하는 혁신의 장”</p>
                        <p className="text-slate-300 max-w-4xl mx-auto">
                            교육의 마지막 단계는 바로 ‘실전’입니다. 학습한 AI 역량을 바탕으로 샘표의 실제 비즈니스 문제를 해결하는 아이디어 해커톤을 개최하여, 협업 능력과 실무 적용 능력을 극대화하고 조직 전체에 AI 혁신 문화를 확산시킵니다.
                        </p>
                    </div>

                    <div className="mt-16 bg-white p-8 rounded-2xl shadow-xl border border-slate-200/60">
                        <h4 className="text-2xl font-bold text-slate-800 mb-2 text-center">왜 구름의 해커톤은 특별한가?</h4>
                        <p className="text-slate-600 mb-8 text-center max-w-2xl mx-auto">구름은 구름톤, 유니브, 딥다이브 등 수많은 해커톤을 성공적으로 운영하며 국내 최고의 해커톤 기획 및 운영 노하우를 보유하고 있습니다.</p>
                        
                        <div className="grid md:grid-cols-3 gap-6 text-left">
                            <div className="bg-slate-50 p-4 rounded-lg border border-slate-200/80">
                                <h5 className="font-bold text-slate-800">✅ 검증된 성공 경험</h5>
                                <p className="text-sm text-slate-600 mt-1">다양한 규모와 성격의 해커톤을 성공적으로 개최하며 쌓은 독보적인 경험을 제공합니다.</p>
                            </div>
                             <div className="bg-slate-50 p-4 rounded-lg border border-slate-200/80">
                                <h5 className="font-bold text-slate-800">🎓 전문가 네트워크</h5>
                                <p className="text-sm text-slate-600 mt-1">국내 최고 수준의 AI 전문가, 개발자, 기획자로 구성된 멘토단과 심사위원 풀을 보유하고 있습니다.</p>
                            </div>
                             <div className="bg-slate-50 p-4 rounded-lg border border-slate-200/80">
                                <h5 className="font-bold text-slate-800">🏢 맞춤형 기획 및 운영</h5>
                                <p className="text-sm text-slate-600 mt-1">샘표의 비즈니스 목표와 과제에 100% 부합하는 맞춤형 해커톤을 기획하고 운영합니다.</p>
                            </div>
                        </div>

                        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
                            <img src="https://i.imgur.com/Eny2jxE.png" alt="해커톤 현장 사진 1" className="rounded-lg shadow-md aspect-video object-cover w-full h-full" />
                            <img src="https://i.imgur.com/EpSoeyi.png" alt="해커톤 현장 사진 2" className="rounded-lg shadow-md aspect-video object-cover w-full h-full" />
                            <img src="https://i.imgur.com/xrpY5RX.png" alt="해커톤 현장 사진 3" className="rounded-lg shadow-md aspect-video object-cover w-full h-full" />
                            <img src="https://i.imgur.com/MlIaTRG.png" alt="해커톤 현장 사진 4" className="rounded-lg shadow-md aspect-video object-cover w-full h-full" />
                        </div>
                    </div>
                </div>
                
                <FinalRoadmap />
            </div>
        </Section>
    );
};

export default Curriculum;
