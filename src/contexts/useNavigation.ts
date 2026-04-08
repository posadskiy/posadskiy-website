import { useContext } from 'react';
import { NavigationStateContext } from './NavigationStateContext';

export const useNavigation = () => {
  const context = useContext(NavigationStateContext);
  if (!context) {
    throw new Error('useNavigation must be used within NavigationProvider');
  }
  return context;
};
