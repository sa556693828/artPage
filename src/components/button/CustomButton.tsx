import React, { useState, useEffect } from "react";
import { ethers } from "ethers";
import WalletPopup from "./PopUp";

const CustomButton = () => {
  const [isConnected, setIsConnected] = useState(false);
  const [address, setAddress] = useState("");
  const [isCorrectNetwork, setIsCorrectNetwork] = useState(true);
  const [balance, setBalance] = useState("0");
  const [showPopup, setShowPopup] = useState(false);

  // 這些函數需要根據你的實際需求來實現
  const handleCopyAddress = () => {
    navigator.clipboard.writeText(address);
  };
  const handleDisconnect = () => {
    disconnectWallet();
    setShowPopup(false);
  };

  const SEPOLIA_CHAIN_ID = "aa36a7"; // Sepolia 的正確鏈 ID

  const checkNetwork = async () => {
    if (typeof window.ethereum !== "undefined") {
      const provider = new ethers.BrowserProvider(window.ethereum);
      const network = await provider.getNetwork();
      setIsCorrectNetwork(network.chainId.toString(16) === SEPOLIA_CHAIN_ID);
    }
  };

  const checkConnection = async () => {
    if (typeof window.ethereum !== "undefined") {
      const provider = new ethers.BrowserProvider(window.ethereum);
      try {
        const accounts = await provider.listAccounts();
        if (accounts.length > 0) {
          const account = accounts[0];
          const balance = await provider.getBalance(account);
          const formattedBalance = ethers.formatEther(balance);
          setIsConnected(true);
          setAddress(account.address);
          setBalance(parseFloat(formattedBalance).toFixed(3));
        }
      } catch (error) {
        console.error("檢查連接狀態時出錯:", error);
      }
    }
  };

  useEffect(() => {
    checkConnection();
    checkNetwork();
    if (typeof window.ethereum !== "undefined") {
      window.ethereum.on("chainChanged", (chainId: any) => {
        checkNetwork();
        if (chainId.slice(2) !== SEPOLIA_CHAIN_ID) {
          disconnectWallet();
        }
      });
      window.ethereum.on("accountsChanged", (accounts: string[]) => {
        if (accounts.length === 0) {
          disconnectWallet();
        }
      });
    }
    return () => {
      if (typeof window.ethereum !== "undefined") {
        window.ethereum.removeListener("chainChanged", checkNetwork);
        window.ethereum.removeListener("accountsChanged", disconnectWallet);
      }
    };
  }, []);

  const switchNetwork = async () => {
    try {
      await window.ethereum.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: `0x${SEPOLIA_CHAIN_ID}` }],
      });
      await checkNetwork();
    } catch (switchError: any) {
      if (switchError.code === 4902) {
        try {
          await window.ethereum.request({
            method: "wallet_addEthereumChain",
            params: [
              {
                chainId: `0x${SEPOLIA_CHAIN_ID}`,
                chainName: "Sepolia Test Network",
                nativeCurrency: {
                  name: "SepoliaETH",
                  symbol: "SepoliaETH",
                  decimals: 18,
                },
                rpcUrls: ["https://sepolia.infura.io/v3/YOUR-PROJECT-ID"],
                blockExplorerUrls: ["https://sepolia.etherscan.io/"],
              },
            ],
          });
          await checkNetwork();
        } catch (addError: any) {
          console.error("無法添加 Sepolia 網絡:", addError);
        }
      } else {
        console.error("無法切換到 Sepolia 網絡:", switchError);
      }
    }
  };

  const connectWallet = async () => {
    if (typeof window.ethereum !== "undefined") {
      try {
        if (!isCorrectNetwork) {
          await switchNetwork();
          if (!isCorrectNetwork) return; // 如果切換失敗，直接返回
        }

        await window.ethereum.request({ method: "eth_requestAccounts" });
        const provider = new ethers.BrowserProvider(window.ethereum);
        const signer = await provider.getSigner();
        const address = await signer.getAddress();
        const balance = await provider.getBalance(address);
        const formattedBalance = ethers.formatEther(balance);

        setIsConnected(true);
        setAddress(address);
        setBalance(parseFloat(formattedBalance).toFixed(3));
      } catch (error: any) {
        console.error("連接錢包失敗:", error);
        // alert("連接錢包失敗");
      }
    } else {
      alert("請安裝 MetaMask！");
    }
  };

  const disconnectWallet = () => {
    setIsConnected(false);
    setAddress("");
    setBalance("0");
  };

  // const handleButtonClick = () => {
  //   if (isConnected && isCorrectNetwork) {
  //     if (window.confirm("確定要斷開連接嗎？")) {
  //       disconnectWallet();
  //     }
  //   } else {
  //     connectWallet();
  //   }
  // };

  return (
    <>
      <button
        onClick={connectWallet}
        className={`flex items-center font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${
          isCorrectNetwork
            ? "bg-white border border-gray-300 text-gray-700 hover:bg-gray-50"
            : "bg-red-500 hover:bg-red-700 text-white"
        }`}
      >
        {isConnected ? (
          <button onClick={() => setShowPopup(true)}>
            <span className="mr-2">{balance} ETH</span>
            <span>{`${address.slice(0, 6)}...${address.slice(-4)}`}</span>
          </button>
        ) : isCorrectNetwork ? (
          "連接錢包"
        ) : (
          "切換到 Sepolia"
        )}
      </button>
      {showPopup && (
        <WalletPopup
          address={address}
          balance={balance}
          onClose={() => setShowPopup(false)}
          onCopyAddress={handleCopyAddress}
          onDisconnect={handleDisconnect}
        />
      )}
    </>
  );
};

export default CustomButton;
