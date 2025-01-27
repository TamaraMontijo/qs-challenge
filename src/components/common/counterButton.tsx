import { cn } from "@/lib/utils";
import { useState } from "react";

interface CounterButtonProps {
    quantity: number;
    size?: 'sm' | 'md';
}


export default function CounterButton({ quantity, size = 'md' }: CounterButtonProps) {
    const [count, setCount] = useState(0);


    const increment = () => setCount((prev) => prev + 1);


    const decrement = () => {
        if (count > 0) {
            setCount((prev) => prev - 1);
        }
    };

    const isSmall = size === 'sm';
    const containerClasses = isSmall
        ? 'relative flex items-center justify-between w-[94px] h-[36px] rounded-md p-2 gap-4'
        : 'relative flex items-center justify-between w-[143px] h-[32px] rounded-lg';
    const buttonClasses = isSmall
        ? 'w-[20px] h-[20px] flex items-center justify-center bg-[#4F372F] border-[2px] border-[#4F372F] rounded-full'
        : 'w-8 h-8 flex items-center justify-center bg-primary rounded-2xl';
    const countClasses = isSmall
        ? 'text-[16px] font-bold text-[#121212] flex items-center justify-center w-[30px] h-[18.71px]'
        : 'text-[24px] font-semibold text-[#121212] flex items-center justify-center';

    return (
        <div
            className={cn("relative flex items-center justify-between",
                isSmall ? "w-[94px] h-[36px] rounded-md p-2 gap-4" : "w-[143px] h-[32px] rounded-lg"
            )}
        >

            <button
                onClick={decrement}
                className={cn("absolute left-0 flex items-center justify-center border-[2px] border-[#DADADA] rounded-2xl",
                    isSmall ? "w-5 h-5" : "w-8 h-8",
                    count === 0 ? "bg-[#DADADA] border-[#DADADA]" : "bg-primary border-primary"
                )}
                disabled={count === 0}
            >

                <div className={cn("absolute h-[3px] bg-[#5F5F5F] rounded-[4px]",
                    count === 0 ? "bg-primary" : "bg-[#DADADA]",
                    isSmall ? "w-3" : "w-[18px]"
                )}>

                </div>
            </button>


            <div className={cn("absolute left-[33.57%] right-[33.57%] top-[21.88%] bottom-[19.66%] font-semibold text-[#121212] flex items-center justify-center",
                isSmall ? "text-sm font-bold" : "text-lg"
            )}>
                {count}
            </div>


            <button
                onClick={increment}
                className={cn("absolute right-0 flex items-center justify-center bg-primary rounded-2xl",
                    isSmall ? "w-5 h-5" : "w-8 h-8"
                )}
            >
                {
                    isSmall ?
                        <svg width="12" height="12" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M7.5 16.5C7.5 17.3284 8.17157 18 9 18C9.82843 18 10.5 17.3284 10.5 16.5V10.5H16.5C17.3284 10.5 18 9.82843 18 9C18 8.17157 17.3284 7.5 16.5 7.5H10.5V1.5C10.5 0.671573 9.82843 0 9 0C8.17157 0 7.5 0.671573 7.5 1.5V7.5H1.5C0.671573 7.5 0 8.17157 0 9C0 9.82843 0.671573 10.5 1.5 10.5H7.5V16.5Z" fill="white" />
                        </svg> :
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M7.5 16.5C7.5 17.3284 8.17157 18 9 18C9.82843 18 10.5 17.3284 10.5 16.5V10.5H16.5C17.3284 10.5 18 9.82843 18 9C18 8.17157 17.3284 7.5 16.5 7.5H10.5V1.5C10.5 0.671573 9.82843 0 9 0C8.17157 0 7.5 0.671573 7.5 1.5V7.5H1.5C0.671573 7.5 0 8.17157 0 9C0 9.82843 0.671573 10.5 1.5 10.5H7.5V16.5Z" fill="white" />
                        </svg>

                }

            </button>
        </div>
    );
};