import { useEffect, useState } from "react";
import Image from "next/image";
import flow1 from "@/assets/flow/flow1.svg";
import flow2 from "@/assets/flow/flow2.svg";
import flow3 from "@/assets/flow/flow3.svg";
import flow4 from "@/assets/flow/flow4.svg";
import flow5 from "@/assets/flow/flow5.svg";
import flow6 from "@/assets/flow/flow6.svg";
import flow7 from "@/assets/flow/flow7.svg";
import flow8 from "@/assets/flow/flow8.svg";
import flow9 from "@/assets/flow/flow9.svg";
import flow10 from "@/assets/flow/flow10.svg";
import flow11 from "@/assets/flow/flow11.svg";
import flow12 from "@/assets/flow/flow12.svg";
import flow13 from "@/assets/flow/flow13.svg";
import Link from "next/link";
import ProgressSidebar from "@/components/prograssBar";

export default function Learning() {
  return (
    <section className="py-12 font-inter flex w-4/5 mx-auto">
      <div className="flex flex-col items-start w-3/4">
        <h1 className="text-center text-5xl font-normal">藝術幣購買指南</h1>
        <div className="flex items-center gap-4 pt-4 text-[#87909D] text-sm">
          <p>發布時間 2024年10月25日</p>
          <p>更新時間 2024年10月26日</p>
        </div>
        <div className="mt-20 flex flex-col gap-10">
          <div id="intro" className="flex flex-col text-[#565656] gap-4">
            <h2 className="text-[32px]">前言</h2>
            <p className="text-xl">
              以下使用Metamask為例，展示如何購買本站藝術幣，相同流程適用於其他錢包。
            </p>
          </div>
          <div id="wallet-prep" className="flex flex-col text-[#565656] gap-4">
            <h2 className="text-[32px]">錢包準備</h2>
            <p className="text-xl pl-2">1. 安裝 Metamask 插件</p>
            <ul className="flex flex-col gap-2 list-disc ml-8">
              <li className="text-xl">
                進入{" "}
                <Link
                  className="text-[#007AFF] underline underline-offset-4"
                  href="https://metamask.io/zh-CN/"
                  target="_blank"
                >
                  Metamask 官網
                </Link>{" "}
                下載並安裝適用於您的瀏覽器的插件。
              </li>
              <li className="text-xl">
                安裝完成後，點擊瀏覽器右上角的 Metamask 圖示開啟插件。
              </li>
            </ul>
            <Image
              src={flow1}
              alt="flow1"
              className="w-full"
              width={1000}
              height={1000}
            />
            <Image
              src={flow2}
              alt="flow2"
              className="w-full"
              width={1000}
              height={1000}
            />
            <p className="text-xl pl-2">2. 新增一個新的錢包</p>
            <ul className="flex flex-col gap-2 list-disc ml-8">
              <li className="text-xl">選擇【創建新錢包】。</li>
            </ul>
            <Image
              src={flow3}
              alt="flow3"
              className="w-full"
              width={1000}
              height={1000}
            />
            <ul className="flex flex-col gap-2 list-disc ml-8">
              <li className="text-xl">
                設置一個強密碼，並仔細閱讀並同意使用條款。
              </li>
            </ul>
            <Image
              src={flow4}
              alt="flow4"
              className="w-full"
              width={1000}
              height={1000}
            />
            <ul className="flex flex-col gap-2 list-disc ml-8">
              <li className="text-xl">
                {`系統會生成一組錢包助記詞（12 個單詞），這是您找回錢包的唯一方法，請務必妥善保存並且切勿洩漏給他人。`}
              </li>
            </ul>
            <Image
              src={flow5}
              alt="flow5"
              className="w-full"
              width={1000}
              height={1000}
            />
            <ul className="flex flex-col gap-2 list-disc ml-8">
              <li className="text-xl">
                {`確認並保存助記詞後，您的新錢包將完成創建。`}
              </li>
            </ul>
            <Image
              src={flow6}
              alt="flow6"
              className="w-full"
              width={1000}
              height={1000}
            />
            <Image
              src={flow7}
              alt="flow7"
              className="w-full"
              width={1000}
              height={1000}
            />
          </div>
          <div
            id="wallet-connect"
            className="flex flex-col text-[#565656] gap-4"
          >
            <h2 className="text-[32px]">連結錢包</h2>
            <p className="text-xl pl-2">{`1. 進入目標網站「遇見國寶-藝術幣」，點選右上角【連結錢包】按鈕。`}</p>
            <Image
              src={flow8}
              alt="flow8"
              className="w-full"
              width={1000}
              height={1000}
            />
            <p className="text-xl pl-2">{`2. 系統會跳轉至 Metamask，點選【簽屬】以完成連結。`}</p>
            <Image
              src={flow9}
              alt="flow9"
              className="w-full"
              width={1000}
              height={1000}
            />
            <p className="text-xl pl-2">{`3. 連結完成，網頁右上角顯示您的錢包地址。`}</p>
            <Image
              src={flow10}
              alt="flow10"
              className="w-full"
              width={1000}
              height={1000}
            />
          </div>
          <div
            id="token-purchase"
            className="flex flex-col text-[#565656] gap-4"
          >
            <h2 className="text-[32px]">購買藝術幣</h2>
            <p className="text-xl pl-2">{`1. 在網站中進入【藝術幣】頁面，點選【購買】按鈕。`}</p>
            <Image
              src={flow11}
              alt="flow11"
              className="w-full"
              width={1000}
              height={1000}
            />
            <p className="text-xl pl-2">{`2. 跳轉至 Metamask，點選【確認】以完成交易。`}</p>
            <Image
              src={flow12}
              alt="flow12"
              className="w-full"
              width={1000}
              height={1000}
            />
            <p className="text-xl pl-2">{`3. 購買成功，完成操作。`}</p>
            <Image
              src={flow13}
              alt="flow13"
              className="w-full"
              width={1000}
              height={1000}
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col w-1/4">
        <ProgressSidebar />
      </div>
    </section>
  );
}
