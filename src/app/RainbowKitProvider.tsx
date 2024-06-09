"use client";
import "@rainbow-me/rainbowkit/styles.css";
import {
  getDefaultConfig,
  RainbowKitProvider as RainbowKit,
  darkTheme,
} from "@rainbow-me/rainbowkit";
import { WagmiProvider } from "wagmi";
import {
  mainnet,
  polygon,
  optimism,
  arbitrum,
  base,
  astar,
  astarZkEVM,
  polygonZkEvm,
  aurora,
  baseSepolia,
  bsc,
  dogechain,
  evmos,
  filecoin,
  hardhat,
  manta,
} from "wagmi/chains";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

const config = getDefaultConfig({
  appName: "My RainbowKit App",
  projectId: "963fa014cfcb65ff35053dc8feef9748",
  chains: [mainnet, base, arbitrum, optimism, bsc, polygon],
  ssr: false, // If your dApp uses server side rendering (SSR)
});
const queryClient = new QueryClient();

export function RainbowKitProvider({ children }: any) {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKit modalSize="compact" theme={darkTheme()}>
          {children}
        </RainbowKit>
      </QueryClientProvider>
    </WagmiProvider>
  );
}
