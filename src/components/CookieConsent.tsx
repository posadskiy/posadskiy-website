import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { PAGES } from '@/constants/pages';

type ConsentStatus = 'accepted' | 'rejected';

const CONSENT_STORAGE_KEY = 'dp_cookie_consent';

export const CookieConsent = () => {
  const [status, setStatus] = useState<ConsentStatus | null>(null);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }
    const stored = window.localStorage.getItem(CONSENT_STORAGE_KEY);
    if (stored === 'accepted' || stored === 'rejected') {
      setStatus(stored);
    }
  }, []);

  const handleDecision = (value: ConsentStatus) => {
    setStatus(value);
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(CONSENT_STORAGE_KEY, value);
    }
  };

  if (status) {
    return null;
  }

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 px-4 pb-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl rounded-2xl border border-white/15 bg-slate-900/95 p-5 shadow-2xl shadow-violet-900/20 backdrop-blur-xl text-sm text-slate-100">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="flex-1 leading-relaxed">
            This site only uses essential cookies and local storage for navigation and preferences. I call
            attention to the{' '}
            <Link to={PAGES.PRIVACY.url || '/privacy'} className="font-semibold text-violet-300 underline">
              privacy policy
            </Link>{' '}
            for details about personal data handling. Choose whether to accept or reject non-essential
            cookies.
          </p>

          <div className="flex flex-wrap gap-2">
            <button
              className="rounded-full bg-violet-500/90 px-4 py-2 text-sm font-semibold text-white transition hover:bg-violet-400"
              onClick={() => handleDecision('accepted')}
            >
              Accept all
            </button>
            <button
              className="rounded-full border border-white/30 px-4 py-2 text-sm font-semibold text-white transition hover:border-white/50"
              onClick={() => handleDecision('rejected')}
            >
              Reject optional
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

