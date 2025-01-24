import { toast } from '@/hooks/use-toast';
import apiClient from './apiClient';


export const getRestaurantDetails = async () => {
  try {
    const response = await apiClient.get('/venue/9');
    return response.data;
  } catch (error) {
    toast({
        title: "Error",
        description: "Failed to fetch restaurant details",
    });
  }
};
