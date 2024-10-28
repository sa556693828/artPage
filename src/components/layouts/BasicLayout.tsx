import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Header from "../Header";
import Footer from "../Footer";
// import Header from "../Header/Header";
// import LoadingPage from "../LoadingPage/LoadingPage";
//   import Loading from "../../pages/Loading";
// import Footer from "../Footer/Footer";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});
export default function BaseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const isMobile = useBreakpointValue({ base: true, lg: false });
  const urlPath = useRouter().pathname;
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    setTimeout(() => {
      setIsVisible(true);
    }, 500);
  }, [router]);

  if (isLoading)
    return (
      <main
        className={`flex min-h-[100dvh] max-w-[100vw] pt-[100px] items-center justify-center text-black ${inter.className}`}
      >
        Loading
      </main>
    );

  return (
    <>
      <Header urlPath={urlPath} />
      <main
        className="max-w-[100vw] text-black bg-white pt-[100px]"
        style={{
          minHeight: "calc(100vh - 88px)",
        }}
      >
        {children}
      </main>
      <Footer urlPath={urlPath} />
    </>
  );
}
