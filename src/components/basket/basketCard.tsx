import { useSelector, useDispatch } from "react-redux";
import CounterButton from "../common/counterButton";
import { RootState } from "@/store/store";
import { clearBasket, removeItem } from "@/store/slice/basketSlice";
import { Trash } from "lucide-react";
import CTAButton from "../common/ctaButton";
import { Modal } from "../common/modal";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function BasketCard() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const basketItems = useSelector((state: RootState) => state.basket.items); // Pega os itens do estado global
  const dispatch = useDispatch();
  const router = useRouter()

  const calculateTotal = () => {
    return basketItems
      .reduce((acc, item) => acc + item.price * item.quantity, 0)
      .toFixed(2);
  };

  const totalItems = basketItems.reduce((acc, item) => acc + item.quantity, 0);
  const totalPrice = basketItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const toggleModal = () => {
    if (!isModalOpen) {
      setIsModalOpen(true);
    } else {
      setIsModalOpen(false);
      dispatch(clearBasket());
    }
  };

  return (
    <div className="basket-card flex flex-col p-0 gap-1 md:w-[320px] h-auto bg-[#F8F9FA] shadow-[0px_2px_14px_0px_#00000026] rounded-md">
      {/* Header */}
      <div className="header flex flex-col justify-center p-4 w-full h-[64px] bg-[#F8F9FA] rounded-t-md border-b-[1px] border-b-[#DADADA]">
        <h1 className="text-lg font-medium text-[#464646] tracking-wider">Basket</h1>
      </div>

      {/* Check if basket is empty */}
      {basketItems.length === 0 ? (
        <div className="flex flex-col justify-center items-start p-6 bg-white w-[320px] h-[64px]">
          <p className="text-[#464646] text-sm font-normal">
            There are no items in your basket
          </p>
        </div>
      ) : (
        <>
          {/* Items */}
          <div className="items flex flex-col justify-end w-full h-auto max-h-[303px] overflow-y-auto">
            {basketItems.map((item) => (
              <div
                key={item.id}
                className="basket-item flex flex-col p-2 bg-white border-b border-[#EEEEEE]"
              >
                <div className="flex justify-between items-center w-full">
                  <span className="text-sm font-normal text-[#121212]">{item.name}</span>
                  <span className="text-sm font-medium text-[#121212] tracking-wider">
                    R${(item.price * item.quantity).toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between items-center gap-4 mt-2">
                  <CounterButton size="sm" itemId={item.id} itemName={item.name} itemPrice={item.price} />
                  <button
                    onClick={() => dispatch(removeItem(item.id))}
                    className="text-red-500 text-sm"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Totals */}
          <div className="totals flex flex-col w-full p-4 bg-white">
            <div className="subtotal flex justify-between items-center mb-2">
              <span className="text-sm font-normal text-[#121212]">Subtotal:</span>
              <span className="text-sm font-medium text-[#121212]">R${calculateTotal()}</span>
            </div>
            <div className="divider w-full h-[1px] bg-[#DADADA]" />
            <div className="total flex justify-between items-center mt-4">
              <span className="text-base font-bold text-[#121212]">Total:</span>
              <span className="text-base font-bold text-[#121212]">R${calculateTotal()}</span>
            </div>
          </div>
        </>
      )}


      {totalItems > 0 && (
        <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg flex justify-center py-4 md:hidden">
          <CTAButton
            itemId={0} 
            itemName="Basket"
            itemPrice={totalPrice} 
            quantity={totalItems} 
            buttonText={`Checkout`}
            onClick={toggleModal} 
          />
        </div>
      )}

      {/* Basket Modal */}
      {isModalOpen && (
        <Modal onClose={toggleModal}>
          {isModalOpen && (
            <Modal onClose={toggleModal}>
              <div className="flex justify-center items-center h-full">
                <p className="text-xl font-semibold text-primary animate-fadeInScale">
                  Order placed successfully!
                </p>
              </div>
            </Modal>
          )}

        </Modal>
      )}
    </div>
  );
}
