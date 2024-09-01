import { ConnectButton } from "@rainbow-me/rainbowkit";
import Link from "next/link";
import React, { useContext } from "react";
import CustomButton from "../button/CustomButton";
// import Desktop from "./HeaderDesktop";
// import Mobile from "./HeaderMobile";

interface Props {
  urlPath: string;
}

export default function Header({ urlPath }: Props) {
  const openLink = (link: string) => {
    window.open(link, "_blank");
  };

  return (
    <header className="z-50 border-b flex lg:flex-row flex-col gap-4 py-4 h-full w-full overflow-hidden text-black bg-white lg:items-center px-4 transition-all">
      <div className="container mx-auto flex flex-col items-start gap-4 justify-between">
        <Link href="/" className="text-xl font-semibold hover:opacity-80">
          遇見國寶-趙墨 來者(劉慶書)
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a href="#" className="hover:text-blue-600">
                最新消息
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600">
                藝術家來者
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600">
                線上認證
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600">
                物件利登
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600">
                註冊
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600">
                登入
              </a>
            </li>
            <li>
              <Link href="/demo" className="hover:text-blue-600">
                藝術幣
              </Link>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600">
                🔍
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="flex-shrink-0">
        <CustomButton />
        {/* <ConnectButton /> */}
      </div>
    </header>
  );
}
