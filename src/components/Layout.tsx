import { ReactNode } from 'react';
import { Navigation } from './Navigation';
import { LoadingSpinner } from './LoadingSpinner';

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
    </div>
  );
};

