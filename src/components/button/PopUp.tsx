import React from "react";
import { X, Copy, LogOut } from "lucide-react";

const WalletPopup = ({
  address,
  balance,
  onClose,
  onCopyAddress,
  onDisconnect,
}: any) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-3xl shadow-lg w-80">
        <div className="p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-black hover:text-gray-700"
          >
            <X size={20} />
          </button>

          <div className="flex justify-center mb-4">
            <div className="bg-purple-500 rounded-full p-4">
              <span role="img" aria-label="unicorn" className="text-4xl">
                🦄
              </span>
            </div>
          </div>

          <div className="text-center mb-4">
            <p className="text-lg font-semibold">
              {address.slice(0, 6)}...{address.slice(-4)}
            </p>
            <p className="text-gray-500">{balance} ETH</p>
          </div>

          <div className="flex space-x-4">
            <button
              onClick={onCopyAddress}
              className="flex-1 flex items-center justify-center bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold py-2 px-3 rounded-lg"
            >
              <Copy size={20} className="mr-2" />
              <span className="text-sm">複製地址</span>
            </button>
            <button
              onClick={onDisconnect}
              className="flex-1 flex items-center justify-center bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold py-2 px-4 rounded-lg"
            >
              <LogOut size={20} className="mr-2" />
              <span className="text-sm">取消連接</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WalletPopup;
