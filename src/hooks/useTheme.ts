// hooks/useTheme.ts
import { getRestaurantDetails } from '@/services/restaurantService.service';
import { useEffect, useState } from 'react';
import { toast } from './use-toast';

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
        const themeSettings = restaurantData.webSettings;

        setTheme({
          primaryColour: themeSettings.primaryColour,
          primaryColourHover: themeSettings.primaryColourHover,
          backgroundColour: themeSettings.backgroundColour,
          navBackgroundColour: themeSettings.navBackgroundColour,
        });
      } catch (error) {
        toast({
          title: `Error: ${error}`,
          description: "Error fetching theme",
      });
      }
    }

    fetchTheme();
  }, []);

  return theme;
}
