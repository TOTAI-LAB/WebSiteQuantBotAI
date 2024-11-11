import { useState, useCallback, useEffect } from 'react';
import toast from 'react-hot-toast';

export interface WalletState {
  address: string | null;
  isConnecting: boolean;
  signer: null; // Solana doesn’t use ethers.js signer, so set it to null
  walletType: 'solana' | null;
}

export function useWallet() {
  const [walletState, setWalletState] = useState<WalletState>({
    address: null,
    isConnecting: false,
    signer: null,
    walletType: null,
  });

  const checkWalletConnection = useCallback(async () => {
    if (window.solana && (window.solana.isPhantom || window.solana.isSolflare)) {
      // Solana wallet (Phantom, Solflare)
      try {
        const response = await window.solana.connect({ onlyIfTrusted: true });
        if (response && response.publicKey) {
          setWalletState({
            address: response.publicKey.toString(),
            isConnecting: false,
            signer: null,
            walletType: 'solana',
          });
          return true;
        }
      } catch (error) {
        console.error('Error checking Solana wallet connection:', error);
      }
    }
    return false;
  }, []);

  const connectSolanaWallet = async () => {
    if (!(window.solana && (window.solana.isPhantom || window.solana.isSolflare))) {
      toast.error('Please install a supported Solana wallet (e.g., Phantom or Solflare)!');
      return;
    }

    try {
      setWalletState(prev => ({ ...prev, isConnecting: true }));
      const response = await window.solana.connect();
      if (response && response.publicKey) {
        setWalletState({
          address: response.publicKey.toString(),
          isConnecting: false,
          signer: null,
          walletType: 'solana',
        });
        toast.success('Solana wallet connected successfully!');
      }
    } catch (error) {
      console.error('Error connecting Solana wallet:', error);
      toast.error('Failed to connect Solana wallet. Please try again.');
      setWalletState(prev => ({ ...prev, isConnecting: false }));
    }
  };

  useEffect(() => {
    checkWalletConnection();

    if (window.solana && (window.solana.isPhantom || window.solana.isSolflare)) {
      window.solana.on('connect', () => {
        checkWalletConnection();
      });
      window.solana.on('disconnect', () => {
        setWalletState({
          address: null,
          isConnecting: false,
          signer: null,
          walletType: null,
        });
      });
    }

    return () => {
      if (window.solana && (window.solana.isPhantom || window.solana.isSolflare)) {
        window.solana.removeAllListeners();
      }
    };
  }, [checkWalletConnection]);

  return {
    ...walletState,
    connectSolanaWallet,
  };
}

// Add TypeScript declarations for window.solana to include multiple wallets
declare global {
  interface Window {
    solana?: {
      isPhantom?: boolean;
      isSolflare?: boolean;
      connect: (options?: { onlyIfTrusted: boolean }) => Promise<{ publicKey: { toString: () => string } }>;
      disconnect: () => void;
      on: (event: string, callback: (...args: any[]) => void) => void;
      removeAllListeners: () => void;
    };
  }
}