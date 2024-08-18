import { etherscan_address } from "@/utils/constants";
import Link from "next/link";
import { polygonAmoy, sepolia } from "viem/chains";
import { useAccount, useChainId, useToken } from "wagmi";

export default function Demo() {
  const account = useAccount();
  const chain = useChainId();
  const scanWebList = {
    1: "https://etherscan.io",
    11155111: sepolia.blockExplorers.default.url,
    80002: polygonAmoy.blockExplorers.default.url,
  };
  const result = useToken({
    address: "0xFcd020A13089c2D80410B9713D0EE236FE102f1A",
  });
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          {result.data?.name}
        </h2>
        <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-4xl mx-auto">
          <div className="p-8">
            <div className="flex items-center justify-center mb-8">
              <div className="bg-blue-500 text-white text-4xl font-bold rounded-full w-24 h-24 flex items-center justify-center">
                {result.data?.symbol}
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold mb-2">代幣資訊</h3>
                <ul className="space-y-2">
                  <li>
                    <span className="font-medium">名稱：</span>
                    {result.data?.name}
                  </li>
                  <li>
                    <span className="font-medium">符號：</span>
                    {result.data?.symbol}
                  </li>
                  <li>
                    <span className="font-medium">合約地址：</span>
                    <Link
                      href={`${
                        scanWebList[chain as keyof typeof scanWebList]
                      }/address/${result.data?.address}`}
                      target="_blank"
                      className="text-blue-500 hover:underline"
                    >
                      {result.data?.address.slice(0, 6)}...
                      {result.data?.address.slice(-4)}
                    </Link>
                  </li>
                  <li>
                    <span className="font-medium">總供應量：</span>
                    {result.data?.totalSupply.formatted} {result.data?.symbol}
                  </li>
                  <li>
                    <span className="font-medium">小數位數：</span>
                    {result.data?.decimals}
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">當前市場資訊</h3>
                <ul className="space-y-2">
                  <li>
                    <span className="font-medium">當前價格：</span>10萬 台幣
                  </li>
                  <li>
                    <span className="font-medium">市值：</span>10億 台幣
                  </li>
                  <li>
                    <span className="font-medium">24小時交易量：</span>
                    {/* $50,000USD */}
                  </li>
                  <li>
                    <span className="font-medium">流通供應量：</span>
                    {result.data?.totalSupply.formatted} {result.data?.symbol}
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-8">
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg w-full">
                購買 ART
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
