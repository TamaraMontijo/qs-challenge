"use client";

import CounterButton from '@/components/common/counterButton';
import CTAButton from '@/components/common/ctaButton';
import ModifierGroup from '@/components/item/modifierGroup';
import { useParams } from 'next/navigation';

export default function ItemModal() {
    const params = useParams();
    const itemId = params.id;

    return (
        <div className="md:fixed md:inset-0 md:flex md:justify-center md:items-center md:bg-black md:bg-opacity-65 md:z-50">
            <div className="relative w-full md:max-w-[600px] bg-white shadow-lg">
                <button
                    className="absolute top-4 right-4 w-[28px] h-[28px] bg-white shadow-md rounded-full flex justify-center items-center"
                    onClick={() => window.history.back()}
                >
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M11.7338 0.275313C11.3788 -0.0796359 10.8055 -0.0796359 10.4505 0.275313L6 4.71672L1.54949 0.266212C1.19454 -0.0887372 0.62116 -0.0887372 0.266212 0.266212C-0.0887372 0.62116 -0.0887372 1.19454 0.266212 1.54949L4.71672 6L0.266212 10.4505C-0.0887372 10.8055 -0.0887372 11.3788 0.266212 11.7338C0.62116 12.0887 1.19454 12.0887 1.54949 11.7338L6 7.28328L10.4505 11.7338C10.8055 12.0887 11.3788 12.0887 11.7338 11.7338C12.0887 11.3788 12.0887 10.8055 11.7338 10.4505L7.28328 6L11.7338 1.54949C12.0796 1.20364 12.0796 0.62116 11.7338 0.275313Z" fill="#4F372F" />
                    </svg>

                </button>
                <div className="flex flex-col items-center p-0 bg-[#DADADA] shadow-md">
                    <div className="w-full h-[265px] bg-[url('https://preodemo.gumlet.io/usr/venue/7602/menuItem/646fbe01b3373.png')] bg-cover bg-center"></div>
                    <div className="flex flex-col items-start p-4 gap-2.5 w-full bg-white">
                        <div className="text-[#121212] text-[24px] font-bold leading-[28px]">Smash Burger</div>
                        <p className="text-[#464646] text-[16px] leading-[19px] tracking-[0.5px]">
                            100g pressed hamburger, mozzarella cheese, pickles, red onion, grilled bacon and traditional Heinz mayonnaise.
                        </p>
                    </div>
                </div>
                <ModifierGroup />
                <div className="flex flex-col justify-center items-center pt-2 pb-6 px-6 gap-2">
                    <CounterButton quantity={0} />
                    <CTAButton />

                </div>
            </div>
        </div>
    );
}
