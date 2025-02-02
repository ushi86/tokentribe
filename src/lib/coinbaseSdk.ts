import { CoinbaseWalletSDK } from "@coinbase/wallet-sdk";
import { createWalletClient, custom } from "viem";
import { baseSepolia } from "viem/chains";

const APP_NAME = "MyDapp";
const APP_LOGO = "https://mydapp.com/logo.png"; // Replace with your logo
const RPC_URL = "https://sepolia.base.org"; // Base Sepolia RPC

const coinbaseWallet = new CoinbaseWalletSDK({
  appName: APP_NAME,
  appLogoUrl: APP_LOGO,
  darkMode: false,
});

const coinbaseProvider = coinbaseWallet.makeWeb3Provider(RPC_URL, baseSepolia.id);
const walletClient = createWalletClient({
  chain: baseSepolia,
  transport: custom(coinbaseProvider),
});

export { coinbaseWallet, walletClient };
