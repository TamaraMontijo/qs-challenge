'use client';

import { createContext, ReactNode, useContext } from 'react';
import { useTheme } from '@/hooks/useTheme';
import { Progress } from '@/components/ui/progress';

interface Theme {
  primaryColour: string;
  primaryColourHover: string;
  backgroundColour: string;
  navBackgroundColour: string;
}

interface ThemeContextType {
  theme: Theme | null;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const theme = useTheme();

  if (!theme) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
        <Progress className="w-1/2" value={50} /> {/* Barra de progresso animada */}
        <p className="mt-4 text-gray-500 text-sm">Loading theme...</p>
      </div>
    );
  }

  return (
    <ThemeContext.Provider value={{ theme }}>
      <style jsx global>{`
        :root {
          --primary-colour: ${theme.primaryColour};
          --primary-colour-hover: ${theme.primaryColourHover};
          --background-colour: ${theme.backgroundColour};
          --nav-background-colour: ${theme.navBackgroundColour};
        }
      `}</style>
      {children}
    </ThemeContext.Provider>
  );
}

export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useThemeContext must be used within a ThemeProvider');
  }
  return context;
};
