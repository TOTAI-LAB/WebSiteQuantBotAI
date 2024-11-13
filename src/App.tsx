import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import RoadmapPage from './pages/RoadmapPage';
import ReferralPage from './pages/ReferralPage';
import { useWallet } from './hooks/useWallet';
import { useReferral } from './hooks/useReferral';

function App() {
  const { address, isConnecting, connectSolanaWallet } = useWallet();
  const { isVerified } = useReferral(address);

  const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
    if (!address) {
      return <Navigate to="/" replace />;
    }
    if (!isVerified) {
      return <Navigate to="/referrals" replace />;
    }
    return <>{children}</>;
  };

  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-b from-pink-100 via-pink-200 to-white text-gray-800 relative overflow-hidden">
        {/* Animated background effects */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          {/* Neon gradients */}
          <div className="absolute w-[400px] h-[400px] bg-gradient-to-br from-pink-400 via-purple-400 to-blue-400 rounded-full blur-3xl opacity-60 animate-pulse -top-10 -left-20"></div>
          <div className="absolute w-[500px] h-[500px] bg-gradient-to-br from-yellow-300 via-pink-400 to-purple-400 rounded-full blur-3xl opacity-50 animate-pulse-slower -bottom-20 -right-20"></div>
          {/* Small floating particles */}
          <div className="absolute inset-0">
            {Array(20)
              .fill(0)
              .map((_, i) => (
                <div
                  key={i}
                  className={`absolute w-[20px] h-[20px] bg-gradient-to-br from-pink-400 to-purple-400 rounded-full blur-xl opacity-40 animate-float`}
                  style={{
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                    animationDuration: `${Math.random() * 3 + 2}s`,
                  }}
                ></div>
              ))}
          </div>
        </div>

        {/* App Content */}
        <div className="relative z-10">
          <Toaster position="top-right" />
          <Header
            isWalletConnected={!!address}
            onConnectWallet={connectSolanaWallet}
            isConnecting={isConnecting}
            walletAddress={address}
            isVerified={isVerified}
          />
          <Routes>
            <Route
              path="/"
              element={<HomePage isWalletConnected={!!address} isVerified={isVerified} />}
            />
            <Route path="/roadmap" element={<RoadmapPage />} />
            <Route
              path="/referrals"
              element={
                <ReferralPage
                  isWalletConnected={!!address}
                  walletAddress={address}
                  isVerified={isVerified}
                />
              }
            />
          </Routes>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;