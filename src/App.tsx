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
      <div className="min-h-screen bg-gradient-to-b from-pink-200 via-purple-300 to-pink-200 text-gray-800 relative">
        <div 
          className="fixed inset-0 bg-cover bg-center z-0 opacity-10" 
          style={{ 
            backgroundImage: 'url("https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&q=80")',
            backgroundBlendMode: 'soft-light'
          }}
        />
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
            <Route path="/" element={<HomePage isWalletConnected={!!address} isVerified={isVerified} />} />
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