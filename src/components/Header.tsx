import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Wallet2, Loader2, CheckCircle } from 'lucide-react';

interface HeaderProps {
  isWalletConnected: boolean;
  onConnectWallet: () => void;
  isConnecting: boolean;
  walletAddress?: string | null;
  isVerified: boolean;
}

function Header({ isWalletConnected, onConnectWallet, isConnecting, walletAddress, isVerified }: HeaderProps) {
  const location = useLocation();
  const formatAddress = (address: string) => {
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  };

  return (
    <header className="py-6 px-4 backdrop-blur-lg bg-white/80 sticky top-0 z-50 border-b border-pink-200">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-8">
          <Link to="/">
            <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-400">
              QuantBot.AI
            </h1>
          </Link>
          <nav className="hidden md:flex space-x-6">
            <Link 
              to="/roadmap" 
              className={`transition-colors hover:text-pink-500 ${
                location.pathname === '/roadmap' ? 'text-pink-500' : 'text-pink-900'
              }`}
            >
              Roadmap
            </Link>
            <Link 
              to="/referrals" 
              className={`transition-colors hover:text-pink-500 ${
                location.pathname === '/referrals' ? 'text-pink-500' : 'text-pink-900'
              }`}
            >
              LeaderBoard
            </Link>
          </nav>
        </div>
        <button
          onClick={onConnectWallet}
          disabled={isConnecting}
          className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all ${
            isWalletConnected
              ? 'bg-green-200 text-green-600 border border-green-300'
              : 'bg-pink-200 text-pink-600 border border-pink-300 hover:bg-pink-300'
          }`}
        >
          {isConnecting ? (
            <Loader2 className="w-5 h-5 animate-spin" />
          ) : (
            <Wallet2 className="w-5 h-5" />
          )}
          <span>
            {isConnecting
              ? 'Connecting...'
              : isWalletConnected
              ? formatAddress(walletAddress!)
              : 'Connect Wallet'}
          </span>
          {isWalletConnected && isVerified && (
            <CheckCircle className="w-5 h-5 text-green-500 ml-1" aria-label="Verified" />
          )}
        </button>
      </div>
    </header>
  );
}

export default Header;