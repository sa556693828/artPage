import { etherscan_address, token_address } from "@/utils/constants";
import Link from "next/link";
import { erc20Abi, formatUnits, parseEther } from "viem";
import { polygonAmoy, sepolia } from "viem/chains";
import {
  useAccount,
  useBalance,
  useChainId,
  useContractWrite,
  useReadContract,
  useReadContracts,
  useToken,
  useWaitForTransactionReceipt,
  useWriteContract,
} from "wagmi";
import {
  useReadTokenMaxSupply,
  useWriteTokenApprove,
  useWriteTokenBuyTokens,
  useWriteTokenTransfer,
  useWriteTokenTransferFrom,
} from "../../generated";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";

export default function Demo() {
  const [loading, setLoading] = useState(false);
  const [approveLoading, setApproveLoading] = useState(false);
  const [isApproved, setIsApproved] = useState(false);
  const [approveToastId, setApproveToastId] = useState<string | undefined>();
  const account = useAccount();
  const chain = useChainId();
  const scanWebList = {
    1: "https://etherscan.io",
    11155111: sepolia.blockExplorers.default.url,
    80002: polygonAmoy.blockExplorers.default.url,
  };
  const tokenAddress = token_address(chain);
  const { data: balance } = useBalance({
    address: account.address,
    chainId: chain,
  });
  const results = useReadContracts({
    allowFailure: false,
    contracts: [
      {
        address: tokenAddress as `0x${string}`,
        abi: erc20Abi,
        functionName: "balanceOf",
        args: [account.address as `0x${string}`],
      },

      {
        address: tokenAddress as `0x${string}`,
        abi: erc20Abi,
        functionName: "totalSupply",
      },
      {
        address: tokenAddress as `0x${string}`,
        abi: erc20Abi,
        functionName: "decimals",
      },
      {
        address: tokenAddress as `0x${string}`,
        abi: erc20Abi,
        functionName: "symbol",
      },
      {
        address: tokenAddress as `0x${string}`,
        abi: erc20Abi,
        functionName: "name",
      },
    ],
  });
  const [tokenBalance, totalSupply, decimals, symbol, name] =
    results.data || [];
  const maxSupply = useReadTokenMaxSupply({
    address: tokenAddress as `0x${string}`,
  });
  const ownerAddress = process.env.NEXT_PUBLIC_OWNER_ADDRESS;
  // const key = process.env.NEXT_PUBLIC_KEY;

  const { writeContract: approve, data: approveTx } = useWriteTokenApprove();
  const { writeContract: buyTokens, data: buyTokensTx } =
    useWriteTokenBuyTokens();
  const buyResult = useWaitForTransactionReceipt({
    hash: buyTokensTx,
  });
  const approveResult = useWaitForTransactionReceipt({
    hash: approveTx,
  });
  // const allowance = useReadContract({
  //   address: tokenAddress as `0x${string}`,
  //   abi: erc20Abi,
  //   functionName: "allowance",
  //   args: [ownerAddress as `0x${string}`, account.address as `0x${string}`],
  // });
  // const approveToken = async (toAddress: `0x${string}`, amount: bigint) => {
  //   setApproveLoading(true);
  //   const toastId = toast.loading(`Approving...`);
  //   setApproveToastId(toastId);
  //   try {
  //     await approve(
  //       {
  //         address: tokenAddress as `0x${string}`,
  //         args: [ownerAddress as `0x${string}`, amount],
  //       },
  //       {
  //         onError(error: any) {
  //           console.error(error);
  //           toast.error(`Error approve.`, { id: toastId });
  //         },
  //       }
  //     );
  //   } catch (error) {
  //     console.error(error);
  //     toast.error(`Error approve.`, { id: toastId });
  //   } finally {
  //     setApproveLoading(false);
  //   }
  // };
  const buy = async () => {
    const amount = parseEther("0.001");
    setLoading(true);
    try {
      await buyTokens(
        {
          address: tokenAddress as `0x${string}`,
          value: amount,
        },
        {
          onError(error: any) {
            console.error(error);
            toast.error(`Error buy token.`, {});
            setLoading(false);
          },
        }
      );
    } catch (error) {
      console.error(error);
      toast.error(`Error buy token.`, {});
      setLoading(false);
    }
  };
  useEffect(() => {
    if (approveResult.isSuccess) {
      setIsApproved(true);
      toast.success(`Success approve.`, { id: approveToastId });
    }
  }, [approveResult.isSuccess]);
  useEffect(() => {
    if (buyResult.isSuccess) {
      toast.success(`Success buy token.`, {});
      setLoading(false);
    }
  }, [buyResult.isSuccess]);
  return (
    <section className="py-8 h-full flex items-center justify-center">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold text-center">{name}</h2>
        <h2 className="text-2xl my-4 font-bold text-center ">
          你擁有{" "}
          {tokenBalance && decimals ? formatUnits(tokenBalance, decimals) : 0}{" "}
          {symbol}
        </h2>
        <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-4xl mx-auto">
          <div className="p-8">
            <div className="flex items-center justify-center mb-8">
              <div className="bg-blue-500 text-white text-4xl font-bold rounded-full w-24 h-24 flex items-center justify-center">
                {symbol}
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold mb-2">代幣資訊</h3>
                <ul className="space-y-2">
                  <li>
                    <span className="font-medium">名稱：</span>
                    {name}
                  </li>
                  <li>
                    <span className="font-medium">符號：</span>
                    {symbol}
                  </li>
                  <li>
                    <span className="font-medium">合約地址：</span>
                    <Link
                      href={`${
                        scanWebList[chain as keyof typeof scanWebList]
                      }/address/${tokenAddress}`}
                      target="_blank"
                      className="text-blue-500 hover:underline"
                    >
                      {tokenAddress.slice(0, 6)}...
                      {tokenAddress.slice(-4)}
                    </Link>
                  </li>
                  <li>
                    <span className="font-medium">總供應量：</span>
                    {maxSupply.isSuccess && decimals
                      ? formatUnits(maxSupply.data, decimals)
                      : 0}{" "}
                    {symbol}
                  </li>
                  <li>
                    <span className="font-medium">小數位數：</span>
                    {decimals}
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">當前市場資訊</h3>
                <ul className="space-y-2">
                  <li>
                    {/* <span className="font-medium">當前價格：</span>10萬 台幣 */}
                    <span className="font-medium">當前價格：</span>10萬 台幣
                  </li>
                  <li>
                    <span className="font-medium">市值：</span>1 ETH = 1000 ART
                  </li>
                  <li>
                    <span className="font-medium">24小時交易量：</span>
                    {/* $50,000USD */}
                  </li>
                  <li>
                    <span className="font-medium">當前流通供應量：</span>
                    {totalSupply && decimals
                      ? formatUnits(totalSupply, decimals)
                      : 0}{" "}
                    {symbol}
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-8">
              <button
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg w-full"
                onClick={() => buy()}
                disabled={loading}
              >
                {loading ? "購買中..." : "購買 1 ART"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
