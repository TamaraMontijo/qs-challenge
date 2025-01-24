"use client"

import { getRestaurantDetails } from '@/services/restaurantService.service';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function BannerImage() {
    const [bannerUrl, setBannerUrl] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
  
    useEffect(() => {
      async function fetchBanner() {
        try {
          const restaurantData = await getRestaurantDetails();
          if (restaurantData && restaurantData.webSettings?.bannerImage) {
            setBannerUrl(restaurantData.webSettings.bannerImage);
          }
        } catch (error) {
          console.error('Error fetching restaurant details:', error);
        } finally {
          setLoading(false);
        }
      }
  
      fetchBanner();
    }, []);
  
    if (loading) {
      return <div className="w-full h-[150px] bg-gray-300 animate-pulse"></div>;
    }
  
    if (!bannerUrl) {
      return <div className="w-full h-[150px] bg-gray-300 flex items-center justify-center text-gray-600">No image available</div>;
    }
  
    return (
      <div className="relative w-full">  
        <div className="block h-[150px] mx-auto overflow-hidden">
          <Image
            src={bannerUrl}
            alt="Restaurant Mobile Banner"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    );
  }
  
