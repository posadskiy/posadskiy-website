import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { Navigation } from './Navigation';
import { LoadingSpinner } from './LoadingSpinner';
import { CookieConsent } from './CookieConsent';
import { PAGES } from '@/constants/pages';

interface LayoutProps {
  children: ReactNode;
  loading?: boolean;
}

export const Layout = ({ children, loading = false }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col bg-slate-950">
      <Navigation />
      <main className="flex-1 relative">
        {loading && <LoadingSpinner />}
        {children}
      </main>
      <footer className="border-t border-white/10 bg-slate-950/60 py-6">
        <div className="mx-auto flex max-w-6xl justify-center px-4 text-sm text-slate-400">
          <p>
            <Link to={PAGES.PRIVACY.url || '/privacy'} className="font-semibold text-white transition hover:text-violet-300">
              Privacy policy
            </Link>
            {' · '}
            <span>Only essential cookies are used unless you choose otherwise.</span>
          </p>
        </div>
      </footer>
      <CookieConsent />
    </div>
  );
};

