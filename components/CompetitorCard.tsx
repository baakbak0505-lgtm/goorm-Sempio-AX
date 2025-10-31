import React, { useState, useEffect } from 'react';

interface ContactModalProps {
  onClose: () => void;
}

const InputField: React.FC<{ label: string; name: string; type?: string; value: string; onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; required?: boolean; placeholder?: string; }> = ({ label, name, type = 'text', value, onChange, required = false, placeholder = '' }) => (
    <div>
        <label htmlFor={name} className="block text-sm font-medium text-slate-700 mb-1">{label} {required && <span className="text-red-500">*</span>}</label>
        <input
            type={type}
            id={name}
            name={name}
            value={value}
            onChange={onChange}
            required={required}
            placeholder={placeholder}
            className="w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
        />
    </div>
);


const ContactModal: React.FC<ContactModalProps> = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    department: '',
    position: '',
    phone: '',
    email: '',
    message: '',
    preferredTime: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // !! 중요: 'your-script-id'를 실제 Google Apps Script ID로 교체해야 합니다. !!
    const scriptURL = 'https://script.google.com/macros/s/your-script-id/exec';

    fetch(scriptURL, {
      method: 'POST',
      // Google Apps Script가 CORS 요청을 처리하도록 설정되었다고 가정합니다.
      // 만약 CORS 오류가 발생한다면, Apps Script에 doOptions() 함수를 구현해야 할 수 있습니다.
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        company: '샘표',
        name: formData.name,
        email: formData.email,
        department: `${formData.department || ''}${formData.position ? ` / ${formData.position}` : ''}`.trim(),
        phone: formData.phone,
        preferredTime: formData.preferredTime,
        message: formData.message,
        source: 'Sempio'
      })
    })
    .then(res => {
        if (!res.ok) {
            // 서버에서 에러 응답을 보냈을 경우
            throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
    })
    .then(data => {
      console.log('상담신청 성공:', data);
      setIsSubmitted(true);
    })
    .catch(err => {
      console.error('에러 발생:', err);
      alert('상담 신청 중 오류가 발생했습니다. 입력하신 정보를 확인하시거나 잠시 후 다시 시도해주세요.');
    })
    .finally(() => {
      setIsSubmitting(false);
    });
  };

  return (
    <div
      className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 animate-in"
      style={{ animationName: 'fadeIn', animationDuration: '300ms' }}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-modal-title"
    >
      <div
        className="bg-white rounded-2xl shadow-2xl p-8 max-w-lg w-full relative animate-in"
        style={{ animationName: 'zoomIn', animationDuration: '300ms', animationDelay: '50ms' }}
        onClick={(e) => e.stopPropagation()}
      >
        <button onClick={onClose} className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 transition-colors p-1 rounded-full" aria-label="닫기">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        
        {isSubmitted ? (
            <div className="text-center py-8">
                <svg className="w-16 h-16 mx-auto text-green-500 mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15L15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3 className="text-2xl font-bold text-slate-800 mb-2">신청이 완료되었습니다!</h3>
                <p className="text-slate-600 mb-6">
                    담당자가 입력하신 정보를 확인 후<br/>
                    빠른 시일 내에 연락드리겠습니다.
                </p>
                <button
                    onClick={onClose}
                    className="w-full bg-indigo-800 text-white font-bold py-3 px-4 rounded-lg hover:bg-indigo-900 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-75"
                >
                    확인
                </button>
            </div>
        ) : (
            <>
                <div className="text-center mb-6">
                    <h3 id="contact-modal-title" className="text-2xl font-bold text-slate-800 mb-2">상담 신청하기</h3>
                    <p className="text-slate-500">성공적인 AI 전환, 구름이 가장 확실한 파트너가 되겠습니다.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <InputField label="이름" name="name" value={formData.name} onChange={handleChange} required />
                        <InputField label="이메일" name="email" type="email" value={formData.email} onChange={handleChange} required />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <InputField label="직무/부서" name="department" value={formData.department} onChange={handleChange} />
                        <InputField label="직책" name="position" value={formData.position} onChange={handleChange} />
                    </div>
                     <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <InputField label="연락처" name="phone" type="tel" value={formData.phone} onChange={handleChange} required />
                        <InputField label="연락 희망 시간" name="preferredTime" value={formData.preferredTime} onChange={handleChange} placeholder="예: 오후 2-4시" />
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">상담 내용 <span className="text-red-500">*</span></label>
                        <textarea
                            id="message"
                            name="message"
                            rows={4}
                            value={formData.message}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                            placeholder="궁금하신 점이나 논의하고 싶은 내용을 자유롭게 작성해주세요."
                            required
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-indigo-800 text-white font-bold py-3 px-4 rounded-lg hover:bg-indigo-900 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-75 disabled:bg-slate-400 disabled:cursor-not-allowed flex items-center justify-center"
                    >
                        {isSubmitting && (
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                        )}
                        {isSubmitting ? '신청하는 중...' : '상담 신청하기'}
                    </button>
                </form>
            </>
        )}
      </div>
       <style>{`
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes zoomIn { from { opacity: 0; transform: scale(0.95); } to { opacity: 1; transform: scale(1); } }
      `}</style>
    </div>
  );
};

export default ContactModal;