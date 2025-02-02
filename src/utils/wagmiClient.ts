// src/utils/wagmiClient.ts
import { configureChains, createClient } from 'wagmi';
import { mainnet, sepolia } from 'wagmi/chains';
import { jsonRpcProvider } from 'wagmi/providers/jsonRpc';
import { ethers } from 'ethers';


const { chains, provider, webSocketProvider } = configureChains(
  [mainnet, sepolia], 
  [
    jsonRpcProvider({
      rpc: (chain) => ({
        http: chain.id === 1 ? 'https://mainnet.infura.io/v3/516363b37439411d96a414cf43c94220' : 'https://sepolia.infura.io/v3/516363b37439411d96a414cf43c94220',
      }),
    }),
  ]
);


const client = createClient({
  autoConnect: true,
  provider,
  webSocketProvider,
});

export { chains, client };
