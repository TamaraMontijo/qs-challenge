import CounterButton from "../common/counterButton";

const BasketCard = () => {

  const basketItems = [
    { id: 1, name: "Caipirinha", price:  "£5.70", quantity: 1 },
    { id: 2, name: "Smash Brooks", description: "Com 2 carnes", price:  "£45.20", quantity: 1 },
  ];

  const calculateTotal = () => {
    return basketItems
      .reduce((acc, item) => acc + parseFloat(item.price.replace('£', '')) * item.quantity, 0)
      .toFixed(2);
  };


  return (
    <div className="basket-card flex flex-col p-0 gap-1 w-[320px] h-[368px] bg-[#F8F9FA] shadow-[0px_2px_14px_0px_#00000026]">
      {/* Header */}
      <div className="header flex flex-col justify-center p-4 w-full h-[64px] bg-[#F8F9FA] rounded-t-md">
        <h1 className="text-lg font-medium text-[#464646] tracking-wider">Basket</h1>
      </div>

      {/* Items */}
      <div className="items flex flex-col justify-end w-full h-[303px]">
        {basketItems.map((item) => (
          <div
            key={item.id}
            className="basket-item flex flex-col p-2 bg-white border-b border-[#EEEEEE]"
          >
            <div className="flex justify-between items-center w-full">
              <span className="text-sm font-normal text-[#121212]">{item.name}</span>
              <span className="text-sm font-medium text-[#121212] tracking-wider">{item.price}</span>
            </div>
            <div className="flex justify-start items-center gap-4 mt-2">
              <CounterButton quantity={item.quantity} size="sm"/>
            </div>
          </div>
        ))}
      </div>

      {/* Totals */}
      <div className="totals flex flex-col w-full p-4 bg-white">
        <div className="subtotal flex justify-between items-center mb-2">
          <span className="text-sm font-normal text-[#121212]">Subtotal:</span>
          <span className="text-sm font-medium text-[#121212]">£{calculateTotal()}</span>
        </div>
        <div className="divider w-full h-[1px] bg-[#DADADA]" />
        <div className="total flex justify-between items-center mt-4">
          <span className="text-base font-bold text-[#121212]">Total:</span>
          <span className="text-base font-bold text-[#121212]">£{calculateTotal()}</span>
        </div>
      </div>
    </div>
  );
};

export default BasketCard;
