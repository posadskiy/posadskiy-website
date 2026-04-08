import { useState, ReactNode } from 'react';
import { NavigationStateContext } from './NavigationStateContext';

interface NavigationProviderProps {
  children: ReactNode;
}

export const NavigationProvider = ({ children }: NavigationProviderProps) => {
  const [currentPage, setCurrentPage] = useState('Main');

  const setPage = (page: string) => {
    setCurrentPage(page);
  };

  return (
    <NavigationStateContext.Provider value={{ currentPage, setPage }}>
      {children}
    </NavigationStateContext.Provider>
  );
};
