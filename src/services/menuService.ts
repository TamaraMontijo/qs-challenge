import { toast } from '@/hooks/use-toast';
import apiClient from './apiClient';


export const getMenuDetails = async () => {
  try {
    const response = await apiClient.get('/menu');
    return response.data;
  } catch (error) {
    toast({
        title: `${error}`,
        description: "Failed to fetch menu details",
    });
  }
};
