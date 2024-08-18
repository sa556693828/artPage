import { ConnectButton } from "@rainbow-me/rainbowkit";
import React, { useContext } from "react";
// import Desktop from "./HeaderDesktop";
// import Mobile from "./HeaderMobile";

interface Props {
  urlPath: string;
}

export default function Footer({ urlPath }: Props) {
  const openLink = (link: string) => {
    window.open(link, "_blank");
  };

  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-auto mb-4 md:mb-0">
            <a href="#" className="mr-4 hover:text-gray-300">
              首頁
            </a>
            <a href="#" className="mr-4 hover:text-gray-300">
              最新消息
            </a>
            <a href="#" className="mr-4 hover:text-gray-300">
              線上認證
            </a>
            <a href="#" className="hover:text-gray-300">
              物件利登
            </a>
          </div>
          <div className="w-full md:w-auto text-sm">
            Hestia | Developed by ThemeIsle
          </div>
        </div>
      </div>
    </footer>
  );
}
