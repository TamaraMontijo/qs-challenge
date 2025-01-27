/* components/CTAButton.jsx */

export default function CTAButton() {
    return (
      <button className="flex flex-row justify-center items-center px-6 py-1 gap-2 w-[345px] h-12 bg-primary rounded-[40px]">
        {/* Your Order */}
        <span className="flex items-center text-center text-[18px] leading-[21px] font-medium text-white tracking-[0.75px]">
          Your Order
        </span>
        {/* (3 items) */}
        <span className="flex items-center text-right text-[18px] leading-[21px] font-medium text-white tracking-[0.75px]">
          (3 items)
        </span>
        {/* Price */}
        <span className="flex items-center text-center text-[18px] leading-[21px] font-medium text-white tracking-[0.75px]">
          $60
        </span>
      </button>
    );
  }
  