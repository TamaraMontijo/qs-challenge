import { useState } from "react";


export default function CounterButton() {
    const [count, setCount] = useState(0);


    const increment = () => setCount((prev) => prev + 1);


    const decrement = () => {
        if (count > 0) {
            setCount((prev) => prev - 1);
        }
    };

    return (
        <div
            className="relative flex items-center justify-between w-[143px] h-[32px] rounded-lg"
            style={{ fontFamily: "'SF Pro Display', sans-serif" }}
        >

            <button
                onClick={decrement}
                className="absolute left-0 w-8 h-8 flex items-center justify-center bg-[#DADADA] border-[2px] border-[#DADADA] rounded-2xl"
                disabled={count === 0}
            >

                <div className="absolute w-[18px] h-[3px] bg-[#5F5F5F] rounded-[4px]"></div>
            </button>


            <div className="absolute left-[33.57%] right-[33.57%] top-[21.88%] bottom-[19.66%] text-[24px] font-semibold text-[#121212] flex items-center justify-center">
                {count}
            </div>


            <button
                onClick={increment}
                className="absolute right-0 w-8 h-8 flex items-center justify-center bg-primary rounded-2xl"
            >
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M7.5 16.5C7.5 17.3284 8.17157 18 9 18C9.82843 18 10.5 17.3284 10.5 16.5V10.5H16.5C17.3284 10.5 18 9.82843 18 9C18 8.17157 17.3284 7.5 16.5 7.5H10.5V1.5C10.5 0.671573 9.82843 0 9 0C8.17157 0 7.5 0.671573 7.5 1.5V7.5H1.5C0.671573 7.5 0 8.17157 0 9C0 9.82843 0.671573 10.5 1.5 10.5H7.5V16.5Z" fill="white" />
                </svg>

            </button>
        </div>
    );
};