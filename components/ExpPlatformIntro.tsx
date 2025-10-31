import React from 'react';
import Section from './Section';
import { PencilIcon, UsersIcon, ChatBubbleLeftRightIcon, ChartPieIcon, ArrowTrendingUpIcon, SparklesIcon, ListBulletIcon, ClipboardDocumentCheckIcon, DocumentTextIcon } from './Icons';
import SectionDivider from './SectionDivider';

const StepCircle: React.FC<{ number: string; label: string; isMain?: boolean }> = ({ number, label, isMain = false }) => (
    <div className="flex flex-col items-center text-center">
        <div className={`flex items-center justify-center rounded-full border-2 ${isMain ? 'w-28 h-28 bg-indigo-700 text-white border-indigo-800' : 'w-24 h-24 bg-white border-slate-300'}`}>
            <div className="text-center">
                <div className={`font-bold ${isMain ? 'text-lg' : 'text-base'}`}>{number}</div>
                <div className={`font-semibold ${isMain ? 'text-sm' : 'text-xs'}`}>{label}</div>
            </div>
        </div>
    </div>
);

const FeatureCard: React.FC<{
    icon: React.ReactElement;
    title: string;
    description: React.ReactNode;
    imagePlaceholder: React.ReactNode;
    reverse?: boolean;
}> = ({ icon, title, description, imagePlaceholder, reverse = false }) => (
    <div className={`grid md:grid-cols-2 gap-8 md:gap-12 items-center ${reverse ? 'md:grid-flow-col-dense' : ''}`}>
        <div className={`text-left ${reverse ? 'md:col-start-2' : ''}`}>
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-indigo-100 mb-4">
                {icon}
            </div>
            <h4 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">{title}</h4>
            <div className="text-slate-600 leading-relaxed space-y-2">
                {description}
            </div>
        </div>
        <div className="rounded-lg">
            {imagePlaceholder}
        </div>
    </div>
);

const MissionCard: React.FC<{
    title: string;
    why: string;
    how: string;
    what: string;
    reward: string;
}> = ({ title, why, how, what, reward }) => (
    <div className="bg-white p-6 rounded-xl shadow-lg border border-slate-200/80 flex flex-col h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1.5">
        <div className="flex items-start justify-between mb-3">
            <h4 className="font-bold text-lg text-slate-800">{title}</h4>
            <span className="text-xs font-bold bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full self-start flex-shrink-0 ml-2">{reward}</span>
        </div>
        <p className="text-sm text-slate-600 mb-4 flex-grow"><strong className="text-indigo-700">Why?</strong> {why}</p>
        <div className="text-xs space-y-2 mt-auto border-t border-slate-200/60 pt-3">
            <p><strong className="font-semibold">How:</strong> {how}</p>
            <p><strong className="font-semibold">What:</strong> {what}</p>
        </div>
    </div>
);

const ExpPlatformIntro: React.FC = () => {

    const expMissionData = [
      { title: '1. AI로 내 일의 30% 줄이기', why: '반복되는 내 업무 중 AI로 대체 가능한 단계를 찾기 위해', how: 'ChatGPT / Claude / Notion', what: '“나의 AI 적용 시나리오 맵” 제출', reward: '+100 EXP / 구름조각 100개' },
      { title: '2. 보고서 자동화 미션', why: '보고서 작성 시간을 절반으로 줄이기 위해', how: 'ChatGPT 프롬프트 / Excel Copilot', what: '‘AI 자동 생성 보고서’ PDF 업로드', reward: '+150 EXP' },
      { title: '3. 회의록 요약 챌린지', why: '회의 내용 공유 시간을 줄이기 위해', how: 'Claude / Notion AI', what: '실제 회의 기록을 요약해 “AI 자동 회의록” 제출', reward: '+100 EXP / 칭찬 보너스' },
      { title: '4. 이메일 자동작성 미션', why: '반복되는 협업 커뮤니케이션 부담을 줄이기 위해', how: 'ChatGPT / Gemini', what: '자동 생성 이메일 초안 (영문·국문 모두 가능)', reward: '+150 EXP / 구름조각 150개' },
      { title: '5. 데이터 요약 실습', why: '숫자 중심 업무를 빠르게 이해하기 위해', how: 'Excel Copilot / GPT', what: '품질·판매 데이터 요약표 + 핵심 인사이트 3줄', reward: '+200 EXP' },
      { title: '6. 시장 트렌드 리서치 미션', why: '시장·소비자 변화를 빠르게 파악하기 위해', how: 'Bing Copilot / Perplexity / GPT', what: '“최근 3개월 식품 소비 트렌드 요약 리포트”', reward: '+250 EXP / 구름조각 200개' },
      { title: '7. 콘텐츠 자동생성 미션', why: '브랜드 콘텐츠 제작 속도를 높이기 위해', how: 'ChatGPT / Canva AI / Runway', what: 'AI로 생성한 홍보 문구·이미지 1세트', reward: '+300 EXP' },
      { title: '8. 품질 리포트 자동화', why: '품질 점검 기록을 자동화하여 리포트 품질을 높이기 위해', how: 'Excel Copilot / GPT / Notion AI', what: '품질 점검표 자동 요약 결과', reward: '+250 EXP / 구름조각 250개' },
      { title: '9. AI 프롬프트 개선 챌린지', why: '더 좋은 결과를 얻기 위한 프롬프트 설계 능력 향상', how: 'ChatGPT / Claude', what: '‘전·후 프롬프트’ 비교 캡처 제출', reward: '+200 EXP' },
      { title: '10. 업무 개선 아이디어 제안', why: 'AI를 통한 효율화 아이디어를 조직에 공유하기 위해', how: 'GPT / Notion', what: '“AI로 개선 가능한 업무 프로세스 제안서”', reward: '+300 EXP / 칭찬 보너스' },
      { title: '11. 나만의 AI 루틴 완성', why: '학습 결과를 실무 루틴으로 정착시키기 위해', how: 'Arkain / Notion', what: '“나의 AI 활용 루틴 시트” 제출', reward: '+400 EXP / 구름조각 300개' },
      { title: '12. My AI Impact 리포트', why: 'AI가 내 업무에 미친 실제 효과를 시각화하기 위해', how: 'EXP 리포트 자동화', what: '미션 수행 전후 업무 효율 비교 리포트', reward: '+500 EXP / 상점 포인트' },
    ];

    return (
        <>
            <SectionDivider />
            <Section title={<>AI 네이티브로 가는 가장 재미있는 여정, <br className="sm:hidden" /> 구름 EXP</>} titleAlign="center">
                 <div 
                    className="max-w-5xl mx-auto text-center bg-white p-8 md:p-10 rounded-2xl shadow-xl border border-slate-200/60 mb-20 relative overflow-hidden animate-in" 
                    style={{ animationDelay: '100ms' }}
                >
                    <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-amber-500 to-indigo-600"></div>
                    <p className="mt-4 text-xl md:text-2xl text-slate-700 leading-relaxed">
                        구름 EXP는 학습자가 주도적으로 성장할 수 있도록 설계된 <strong className="font-bold text-indigo-700">게이미피케이션 기반 학습 플랫폼</strong>입니다.
                        <br />
                        미션과 퀘스트를 수행하며 <strong className="font-bold text-amber-600">EXP(경험치)</strong>와 <strong className="font-bold text-amber-600">구름조각(보상)</strong>을 얻고,
                        <br />
                        <strong className="font-bold text-indigo-700">실시간 랭킹</strong>과 <strong className="font-bold text-indigo-700">팀 경쟁</strong>을 통해 자연스럽게 학습 몰입도를 높입니다.
                    </p>
                </div>

                <div className="mb-24">
                    <h3 className="text-center text-2xl font-bold text-slate-800 mb-10">5단계로 강화되는 동기부여와 학습효과!</h3>
                    <div className="relative max-w-5xl mx-auto">
                        <div className="hidden md:block absolute top-1/2 -translate-y-1/2 left-0 w-full h-0.5 border-t-2 border-dashed border-slate-300"></div>
                        <div className="relative flex justify-between items-center">
                            <StepCircle number="01" label="미션" />
                            <StepCircle number="02" label="학습 및 복습" />
                            <StepCircle number="03" label="피드백" />
                            <StepCircle number="04" label="분석" />
                            <StepCircle number="05" label="보상" />
                        </div>
                    </div>
                     <div className="relative flex justify-center mt-8">
                         <div className="hidden md:block absolute top-0 left-1/2 w-0.5 h-8 border-l-2 border-dashed border-slate-300"></div>
                        <div className="mt-8">
                             <StepCircle number="06" label="팀워크 강화" isMain={true} />
                        </div>
                    </div>
                </div>

                <div className="space-y-20">
                    <FeatureCard
                        icon={<PencilIcon className="w-7 h-7 text-indigo-700" />}
                        title="1. 맞춤형 미션: 게임처럼 즐거운 학습"
                        description={
                            <p>개인의 직무와 역량에 맞춘 맞춤형 미션을 제공합니다. '보고서 자동화', '신제품 아이디어 도출' 등 실무 맞춤형 미션을 수행하며 자연스럽게 역량을 강화하고 성장의 재미를 느낄 수 있습니다.</p>
                        }
                        imagePlaceholder={<img src="https://i.imgur.com/igmNA5f.png" alt="맞춤형 미션 화면 예시" className="rounded-lg w-full h-auto object-contain shadow-lg border border-slate-200/60" />}
                    />
                     <FeatureCard
                        icon={<ClipboardDocumentCheckIcon className="w-7 h-7 text-indigo-700" />}
                        title="2. 일일 퀘스트: 매일 성장하다"
                        description={
                            <p>
                                매일 진행해야 하는 학습들을 퀘스트화 하여 하나씩 완료하면서, 경험치와 보상을 동시에 얻고 새로운 스킬을 장착해 나갈 수 있습니다. 퀘스트는 EXP 미션, 출석체크 등 구름EXP내의 활동들을 통해 달성할 수 있습니다.
                            </p>
                        }
                        imagePlaceholder={<img src="https://goormkdx.notion.site/image/attachment%3A64c213be-c6a5-43f3-aa10-e5f099b77be9%3Aimage.png?table=block&id=29dc0ff4-ce31-8009-b7ae-dc14e78db467&spaceId=8b6f698e-8a67-4ad1-94b0-53ee956264c9&width=1420&userId=&cache=v2" alt="일일 퀘스트 UI 예시" className="rounded-lg w-full h-auto object-contain shadow-lg border border-slate-200/60" />}
                        reverse={true}
                    />
                     <FeatureCard
                        icon={<ChatBubbleLeftRightIcon className="w-7 h-7 text-indigo-700" />}
                        title="3. 피드백: 함께 성장하는 문화"
                        description={
                            <p>동료간 칭찬과 격려를 통해 상호 성장하는 문화를 만듭니다. 교육 관리자는 데이터 기반의 정밀한 피드백을 제공하여, 학습자의 성장을 돕고 교육 효과를 극대화할 수 있습니다.</p>
                        }
                        imagePlaceholder={<img src="https://goormkdx.notion.site/image/attachment%3Adf1dd682-e49a-4128-b7ec-b0c543d1d172%3Aimage.png?table=block&id=29dc0ff4-ce31-8066-a0f7-cd14472551bf&spaceId=8b6f698e-8a67-4ad1-94b0-53ee956264c9&width=1420&userId=&cache=v2" alt="피드백 메시지 UI 예시" className="rounded-lg w-full h-auto object-contain shadow-lg border border-slate-200/60" />}
                    />
                    <FeatureCard
                        icon={<DocumentTextIcon className="w-7 h-7 text-indigo-700" />}
                        title="4. 배움일기: 기록하고 공유하며 성장"
                        description={
                            <>
                                <p>매일 학습한 내용을 글로 작성하여 동료들과 공유합니다. 댓글을 통한 커뮤니케이션으로 성장의 선순환을 만들 수 있습니다.</p>
                                <p>동일 강좌 큐레이션 기능으로 학습 연계성을 높이며, 타 구름 서비스와의 연동으로 효율적인 기록 역시 가능합니다.</p>
                            </>
                        }
                        imagePlaceholder={<img src="https://goormkdx.notion.site/image/attachment%3Aa5f317ee-1f22-4b98-9e7e-34487e24d88d%3Aimage.png?table=block&id=29dc0ff4-ce31-8042-b039-f5b9f73a8259&spaceId=8b6f698e-8a67-4ad1-94b0-53ee956264c9&width=1420&userId=&cache=v2" alt="배움일기 UI 예시" className="rounded-lg w-full h-auto object-contain shadow-lg border border-slate-200/60" />}
                        reverse={true}
                    />
                     <FeatureCard
                        icon={<ChartPieIcon className="w-7 h-7 text-indigo-700" />}
                        title="5. 분석: 데이터로 증명하는 성장"
                        description={
                            <p>모든 학습 활동은 EXP(경험치) 데이터로 기록됩니다. 교육 담당자는 대시보드를 통해 개인 및 조직 단위의 역량 변화를 실시간으로 추적하고, 데이터에 기반한 교육 성과 리포트를 손쉽게 생성할 수 있습니다.</p>
                        }
                        imagePlaceholder={<img src="https://statics.goorm.io/axdx-saleskit/exp-teacher-dashboard.png" alt="학습 통계 차트 UI 예시" className="rounded-lg w-full h-auto object-contain shadow-lg border border-slate-200/60" />}
                    />
                     <FeatureCard
                        icon={<ArrowTrendingUpIcon className="w-7 h-7 text-indigo-700" />}
                        title="6. 보상: 성과를 인정하는 확실한 동기부여"
                        description={
                           <p>퀘스트 완료, 동료의 칭찬 등 모든 학습 활동이 보상으로 이어집니다. 상점 시스템을 통해 획득한 포인트로 각종 기프티콘과 상품 등 실질적인 보상을 받으며 학습에 대한 몰입과 만족도를 높입니다.</p>
                        }
                        imagePlaceholder={<img src="https://i.imgur.com/rCkliWK.png" alt="보상 및 상점 UI 예시" className="rounded-lg w-full h-auto object-contain shadow-lg border border-slate-200/60" />}
                        reverse={true}
                    />
                    <FeatureCard
                        icon={<ListBulletIcon className="w-7 h-7 text-indigo-700" />}
                        title="랭킹: 선의의 경쟁으로 만드는 성장"
                        description={
                            <p>개인 및 팀별 랭킹을 통해 학습 현황을 실시간으로 확인하고, 동료들과 함께 성장하는 재미를 느낄 수 있습니다. 순위 상승은 추가 보상으로 이어져 학습에 대한 열정을 더욱 높여줍니다.</p>
                        }
                        imagePlaceholder={<img src="https://i.imgur.com/CH9b6tJ.png" alt="랭킹 보드 UI 예시" className="rounded-lg w-full h-auto object-contain shadow-lg border border-slate-200/60" />}
                    />
                </div>

                <div className="mt-24 pt-16 border-t border-slate-200/80">
                    <div className="text-center">
                        <h3 className="text-3xl font-bold text-slate-900 mb-2">Ⅲ. EXP 미션 퀘스트</h3>
                        <p className="text-xl text-indigo-700 font-semibold mb-2">“배운 것을 진짜 내 업무에 적용하는 단계”</p>
                        <p className="text-slate-600 mb-12 max-w-3xl mx-auto">EXP 시스템을 통해 개인 미션을 수행하고, 경험치와 구름조각을 쌓으며 실무 성과를 시각적으로 확인하는 구조입니다.</p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {expMissionData.map((mission, index) => (
                            <MissionCard key={index} {...mission} />
                        ))}
                    </div>
                </div>

            </Section>
        </>
    );
};

export default ExpPlatformIntro;