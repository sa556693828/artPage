import { ConnectButton } from "@rainbow-me/rainbowkit";
import Link from "next/link";
import React, { useContext } from "react";
import CustomButton from "../button/CustomButton";
import { useState, useEffect } from "react";
interface Props {
  urlPath: string;
}

export default function Header({ urlPath }: Props) {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const openLink = (link: string) => {
    window.open(link, "_blank");
  };
  useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        // 向下滾動
        setIsVisible(false);
      } else {
        // 向上滾動
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", controlNavbar);

    // 清理事件監聽
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  return (
    <header
      className={`z-50 drop-shadow-lg border-b flex lg:flex-row flex-col gap-4 py-4 h-[100px] w-full overflow-hidden text-black bg-white lg:items-center px-4 transition-all fixed top-0 left-0 
        ${isVisible ? "translate-y-0" : "-translate-y-full"}`}
    >
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
              <Link href="/learning" className="hover:text-blue-600">
                教學頁面
              </Link>
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
