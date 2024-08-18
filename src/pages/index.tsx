import GoodPage from "@/components/section/good";
import HomePage from "@/components/section/home";
import IntroPage from "@/components/section/intro";
import SpecialPage from "@/components/section/special";
import { Roboto } from "next/font/google";

const roboto = Roboto({ subsets: ["latin"], weight: "400" });

export default function Home() {
  return (
    <main className={`${roboto.className}`}>
      <HomePage />
      <IntroPage />
      <SpecialPage />
      <GoodPage />
    </main>
  );
}
