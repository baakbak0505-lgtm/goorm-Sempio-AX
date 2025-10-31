
import React from 'react';
import { SempioLogo, GoormLogo } from './Icons';

const Footer: React.FC<{ onContactClick: () => void }> = ({ onContactClick }) => {
    return (
        <footer className="bg-[#FDFCFB]">
            <div id="contact" className="py-24 md:py-32">
                <div className="container mx-auto px-6 text-slate-800">
                    
                    <div className="max-w-5xl mx-auto text-center">
                        <div className="flex justify-center items-center space-x-6 animate-in" style={{ animationDelay: '100ms' }}>
                            <SempioLogo className="h-10" />
                            <span className="text-slate-400 font-light text-3xl">×</span>
                            <GoormLogo className="h-10" />
                        </div>

                        <p className="mt-16 text-2xl text-slate-600 animate-in" style={{ animationDelay: '200ms' }}>
                            시간이 지나도 변하지 않는 것이 있습니다.
                        </p>

                        <div className="mt-8 text-3xl md:text-4xl !leading-tight space-y-5 animate-in text-slate-800" style={{ animationDelay: '300ms' }}>
                            <p>
                                <strong className="font-semibold text-amber-600">샘표</strong>는 ‘사람이 믿을 수 있는 맛’을,<br />
                                <strong className="font-semibold text-slate-700">구름</strong>은 ‘사람이 성장할 수 있는 기술’을 만듭니다.
                            </p>
                            <p>
                                한쪽은 삶의 온도를, 한쪽은 미래의 속도를 지켜왔습니다.
                            </p>
                        </div>
                        
                        <p className="mt-8 text-2xl text-slate-600 leading-snug animate-in" style={{ animationDelay: '400ms' }}>
                            이제, 따뜻한 진심이 기술을 만나<br />세상을 움직입니다.
                        </p>
                        
                        <hr className="mt-16 border-slate-300/70 max-w-sm mx-auto animate-in" style={{ animationDelay: '500ms' }} />

                        <h2 className="mt-16 text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 animate-in" style={{ animationDelay: '600ms' }}>
                            샘표의 100년, 구름이 함께 빚어가겠습니다.
                        </h2>
                    </div>

                    <div className="mt-16 text-center animate-in" style={{ animationDelay: '700ms' }}>
                        <button 
                            onClick={onContactClick}
                            className="bg-amber-600 text-white font-bold text-lg px-8 py-4 rounded-lg hover:bg-amber-700 transition-all duration-300 transform hover:-translate-y-1 shadow-lg shadow-amber-900/20 focus:outline-none focus:ring-4 focus:ring-amber-500/50">
                            샘표의 AI 혁신, 지금 시작하기 (상담 신청)
                        </button>
                        <p className="mt-4 text-sm text-slate-500">
                            성공적인 AI 전환, 구름이 가장 확실한 파트너가 되겠습니다.
                        </p>
                    </div>

                </div>
            </div>

            <div className="border-t border-slate-200/80 py-12">
                <div className="container mx-auto px-6 max-w-4xl">
                    <h4 className="font-semibold text-md text-slate-700 mb-4">주요 기사 출처</h4>
                    <ul className="space-y-2 text-slate-500 text-sm list-disc list-inside">
                        <li>전자신문 (2023.03.17) – “CJ, 성향맞춤 AI 카피라이터 도입… 고객 반응률 30% 상승”</li>
                        <li>iConsumer (2024.06.12) – “CJ AI 초개인화 마케팅, 구매전환율 40% 증가”</li>
                        <li>하이테크경제 (2024.07.18) – “오뚜기 대풍공장 스마트팩토리 AI 검사 시스템 구축”</li>
                        <li>식품경제신문 (2024.11.05) – “AI 품질관리로 불량률 15% 감소, 클레임 0.3% 미만”</li>
                    </ul>
                </div>
            </div>

            <div className="bg-slate-50 py-4 border-t border-slate-200/80">
                <div className="container mx-auto px-6 text-center text-slate-500 text-xs">
                    &copy; {new Date().getFullYear()} Goorm Inc. All rights reserved. This is a proposal document for Sempio.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
