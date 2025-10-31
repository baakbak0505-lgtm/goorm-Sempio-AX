import React from 'react';
import { SempioMarkIcon } from './Icons';

const SectionDivider: React.FC = () => {
  return (
    <div className="bg-[#F6F1E9]">
        <div className="relative max-w-sm mx-auto py-12">
            <div className="absolute inset-0 flex items-center" aria-hidden="true">
                <div className="w-full border-t border-[#4F200D]/10" />
            </div>
            <div className="relative flex justify-center">
                <span className="bg-[#F6F1E9] px-4 text-[#4F200D]/50">
                    <SempioMarkIcon className="h-6 w-auto" />
                </span>
            </div>
        </div>
    </div>
  );
};

export default SectionDivider;