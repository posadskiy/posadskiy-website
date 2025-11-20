import { createContext, useContext, useState, ReactNode } from 'react';
import { NavigationContextType } from '@/types';

const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

export const useNavigation = () => {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error('useNavigation must be used within NavigationProvider');
  }
  return context;
};

interface NavigationProviderProps {
  children: ReactNode;
}

export const NavigationProvider = ({ children }: NavigationProviderProps) => {
  const [currentPage, setCurrentPage] = useState('Main');

  const setPage = (page: string) => {
    setCurrentPage(page);
  };

  return (
    <NavigationContext.Provider value={{ currentPage, setPage }}>
      {children}
    </NavigationContext.Provider>
  );
};

