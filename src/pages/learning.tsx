import Image from "next/image";
import flow1 from "@/assets/flow/flow1.png";
import flow2 from "@/assets/flow/flow2.png";
import flow3 from "@/assets/flow/flow3.png";
import flow4 from "@/assets/flow/flow4.png";
import flow8 from "@/assets/flow/flow8.png";
import flow9 from "@/assets/flow/flow9.png";
import flow10 from "@/assets/flow/flow10.png";
import flow11 from "@/assets/flow/flow11.png";
import flow12 from "@/assets/flow/flow12.png";
import flow13 from "@/assets/flow/flow13.png";
import update1 from "@/assets/flow/update1.png";
import update3 from "@/assets/flow/update3.png";
import update4 from "@/assets/flow/update4.png";
import update5 from "@/assets/flow/update5.png";
import update6 from "@/assets/flow/update6.png";
import update7 from "@/assets/flow/update7.png";
import update8 from "@/assets/flow/update8.png";
import update10 from "@/assets/flow/update10.png";
import update11 from "@/assets/flow/update11.png";
import update12 from "@/assets/flow/update12.png";
import update13 from "@/assets/flow/update13.png";
import Link from "next/link";
import ProgressSidebar from "@/components/prograssBar";

export default function Learning() {
  return (
    <section className="py-12 font-inter flex w-4/5 mx-auto">
      <div className="flex flex-col items-start w-4/5">
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
            <h2 className="text-[32px] ">錢包準備</h2>
            <p className="text-xl pl-2">
              1. 安裝 Metamask 插件： 進入{" "}
              <Link
                className="text-[#007AFF] underline underline-offset-4"
                href="https://metamask.io/zh-CN/"
                target="_blank"
              >
                Metamask 官網
              </Link>{" "}
              下載並安裝適用於您的瀏覽器的插件。
            </p>
            <ul className="flex flex-col gap-2 list-disc ml-8">
              <li className="text-xl">
                在 Metamask 官網點選【Chrome安裝MetaMask】。
              </li>
            </ul>
            <Image
              src={flow1}
              alt="flow1"
              className="w-full"
              width={1000}
              height={1000}
            />
            <ul className="flex flex-col gap-2 list-disc ml-8">
              <li className="text-xl">點選【加到Chrome】。</li>
            </ul>
            <Image
              src={flow2}
              alt="flow2"
              className="w-full"
              width={1000}
              height={1000}
            />
            <ul className="flex flex-col gap-2 list-disc ml-8">
              <li className="text-xl">
                在彈窗中點選【新增擴充功能】，以完成安裝。
              </li>
            </ul>
            <Image
              src={update1}
              alt="update1"
              className="w-2/3"
              width={1000}
              height={1000}
            />
            <p className="text-xl pl-2">2. 新增一個新的錢包或連結現有錢包。</p>
            <ul className="flex flex-col gap-2 list-disc ml-8">
              <li className="text-xl">
                若您是新用戶，在勾選確認使用條款後，選擇【Create a new wallet
                創建新錢包】。
              </li>
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
                在設置一個密碼以前，仔細閱讀資訊條款，然後點選【I argee 同意】。
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
              <li className="text-xl">設置一個 Metamask 的密碼。</li>
            </ul>
            <Image
              src={update3}
              alt="update3"
              className="w-2/3"
              width={1000}
              height={1000}
            />
            <ul className="flex flex-col gap-2 list-disc ml-8">
              <li className="text-xl">
                在進行下一步前先觀看安全影片，其中有提及備份私鑰以及助記詞的重要性，看完後點選【Secure
                my wallet 保護我的錢包】。
              </li>
            </ul>
            <Image
              src={update4}
              alt="update4"
              className="w-full"
              width={1000}
              height={1000}
            />
            <ul className="flex flex-col gap-2 list-disc ml-8">
              <li className="text-xl">
                系統會生成一組錢包助記詞（12
                個單詞），點選【顯示助記詞】並立即妥善保存。這是您找回錢包的唯一方法，請務必妥善保存並且切勿洩漏給他人。若之後刪除
                App 或是更換手機，可以使用備份短語來找回錢包。若您弄丟此 12
                個單字，任何人都無法協助救援。
              </li>
              <li className="text-xl">保存好後點選【下一頁】。</li>
            </ul>
            <Image
              src={update5}
              alt="update5"
              className="w-2/3"
              width={1000}
              height={1000}
            />
            <ul className="flex flex-col gap-2 list-disc ml-8">
              <li className="text-xl">
                這一頁進行測試，將助記詞依順序填進方框後即點選【確認】。
              </li>
            </ul>
            <Image
              src={update6}
              alt="update6"
              className="w-2/3"
              width={1000}
              height={1000}
            />
            <ul className="flex flex-col gap-2 list-disc ml-8">
              <li className="text-xl">您的新錢包完成創建。</li>
            </ul>
            <Image
              src={update7}
              alt="update7"
              className="w-full"
              width={1000}
              height={1000}
            />
            <Image
              src={update8}
              alt="update8"
              className="w-full"
              width={1000}
              height={1000}
            />
          </div>
          <p className="text-xl pl-2 text-[#565656]">
            2. 若您原本就有帳戶，則選擇【Import using seed phrase】。
          </p>
          <Image
            src={flow3}
            alt="flow3"
            className="w-full"
            width={1000}
            height={1000}
          />
          <ul className="flex flex-col gap-2 list-disc ml-8">
            <li className="text-xl text-[#565656]">填入您的助記詞。</li>
          </ul>
          <Image
            src={update10}
            alt="update10"
            className="w-2/3"
            width={1000}
            height={1000}
          />
          <ul className="flex flex-col gap-2 list-disc ml-8">
            <li className="text-xl text-[#565656]">為這個裝置建立密碼。</li>
          </ul>
          <Image
            src={update11}
            alt="update11"
            className="w-2/3"
            width={1000}
            height={1000}
          />
          <ul className="flex flex-col gap-2 list-disc ml-8">
            <li className="text-xl text-[#565656]">您的錢包已完成導入。</li>
          </ul>
          <Image
            src={update12}
            alt="update12"
            className="w-2/3"
            width={1000}
            height={1000}
          />
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
            <p className="text-xl pl-2">{`2. MetaMask彈出視窗，點選【批準】以切換到合適的網路（鏈）。`}</p>
            <Image
              src={update13}
              alt="update13"
              className="w-2/3"
              width={1000}
              height={1000}
            />
            <p className="text-xl pl-2">{`3. 點選【簽屬】以完成連結。`}</p>
            <Image
              src={flow9}
              alt="flow9"
              className="w-full"
              width={1000}
              height={1000}
            />
            <p className="text-xl pl-2">{`4. 連結完成，網頁右上角顯示您的錢包地址。`}</p>
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
      <div className="flex flex-col w-1/5">
        <ProgressSidebar />
      </div>
    </section>
  );
}
