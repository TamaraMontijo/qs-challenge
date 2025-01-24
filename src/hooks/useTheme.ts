// hooks/useTheme.ts
import { getRestaurantDetails } from '@/services/restaurantService.service';
import { useEffect, useState } from 'react';

interface Theme {
  primaryColour: string;
  primaryColourHover: string;
  backgroundColour: string;
  navBackgroundColour: string;
}

export function useTheme() {
  const [theme, setTheme] = useState<Theme | null>(null);

  useEffect(() => {
    async function fetchTheme() {
      try {
        const restaurantData = await getRestaurantDetails();
        console.log('restaurantData', restaurantData)
        const themeSettings = restaurantData.webSettings;

        setTheme({
          primaryColour: themeSettings.primaryColour,
          primaryColourHover: themeSettings.primaryColourHover,
          backgroundColour: themeSettings.backgroundColour,
          navBackgroundColour: themeSettings.navBackgroundColour,
        });
      } catch (error) {
        console.error('Error fetching theme:', error);
      }
    }

    fetchTheme();
  }, []);

  return theme;
}
