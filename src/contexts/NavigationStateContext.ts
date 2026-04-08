import { createContext } from 'react';
import type { NavigationContextType } from '@/types';

export const NavigationStateContext = createContext<NavigationContextType | undefined>(undefined);
