import { CoinbaseWalletSDK } from "@coinbase/wallet-sdk";
import { ethers } from "ethers";

const APP_NAME = "My DApp";
const APP_LOGO_URL = "https://example.com/logo.png"; // Replace with your logo
const RPC_URL = "https://mainnet.base.org"; // Use Base Mainnet or Testnet RPC
const CHAIN_ID = 8453; // Base Mainnet (for Base Sepolia, use 84532)

const coinbaseWallet = new CoinbaseWalletSDK({
  appName: APP_NAME,
  appLogoUrl: APP_LOGO_URL,
  darkMode: true,
});

const ethereum = coinbaseWallet.makeWeb3Provider(RPC_URL, CHAIN_ID);
const provider = new ethers.providers.Web3Provider(ethereum);

export { provider, coinbaseWallet };
