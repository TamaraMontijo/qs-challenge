// utils/themeProvider.ts
'use client';
import { createContext, ReactNode, useContext } from 'react';
import { useTheme } from '@/hooks/useTheme';

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

  if (!theme) return <div>Loading theme...</div>;

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
