import "@/styles/globals.css";
import type { AppProps } from "next/app";
import "@rainbow-me/rainbowkit/styles.css";
import { getDefaultConfig, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { WagmiProvider, http } from "wagmi";
import { sepolia, polygonAmoy } from "wagmi/chains";
import BaseLayout from "@/components/layouts/BasicLayout";
import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const infuraKey = process.env.NEXT_PUBLIC_INFURA_API_KEY as string;

const wagmiConfig = getDefaultConfig({
  ssr: true,
  appName: "Art Demo",
  projectId: process.env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID!,
  chains: [sepolia],
  transports: {
    [sepolia.id]: http(`https://sepolia.infura.io/v3/${infuraKey}`),
    [polygonAmoy.id]: http(`https://polygon-amoy.infura.io/v3/${infuraKey}`),
  },
});

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <WagmiProvider config={wagmiConfig}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>
          <BaseLayout>
            <Toaster
              toastOptions={{
                style: {
                  paddingTop: "6px",
                  paddingBottom: "6px",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                  border: "1px solid #B4FF78",
                  fontSize: "12px",
                },
              }}
            />
            <Component {...pageProps} />
          </BaseLayout>
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}
