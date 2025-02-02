"use client";

import { WagmiProvider, createConfig, http } from "wagmi";
import { baseSepolia } from "wagmi/chains";
import { coinbaseWallet } from "wagmi/connectors";
import { CoinbaseWalletSDK } from "@coinbase/wallet-sdk";

const coinbaseWalletInstance = new CoinbaseWalletSDK({
  appName: "MyDapp",
  appLogoUrl: "https://mydapp.com/logo.png",
  darkMode: false,
});

const config = createConfig({
  autoConnect: true,
  connectors: [
    coinbaseWallet({
      chains: [baseSepolia], // Use Base Sepolia for testing
      options: {
        appName: "MyDapp",
        jsonRpcUrl: "https://sepolia.base.org", // Base Sepolia RPC
      },
    }),
  ],
  transports: {
    [baseSepolia.id]: http(),
  },
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <WagmiProvider config={config}>
      {children}
    </WagmiProvider>
  );
}
