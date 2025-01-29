"use client";

interface ModalProps {
  onClose: () => void;
  children: React.ReactNode;
}

export const Modal = ({ onClose, children }: ModalProps) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg shadow-lg max-w-md">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600"
        >
          ✕
        </button>
        <div className="h-screen w-screen">{children}</div>
      </div>
    </div>
  );
};
