import React, { useState } from 'react';
import { Share2, Trophy, Users } from 'lucide-react';
import { useReferral } from '../hooks/useReferral';

interface ReferralSectionProps {
  isWalletConnected: boolean;
  walletAddress: string | null;
}

function ReferralSection({ isWalletConnected, walletAddress }: ReferralSectionProps) {
  const { referralCode, submitReferralCode, isVerified } = useReferral(walletAddress);
  const [friendCode, setFriendCode] = useState('');

  const handleReferralSubmit = () => {
    submitReferralCode(friendCode);
    setFriendCode(''); // Clear the input after submission
  };

  return (
    <section className="py-20 container mx-auto px-4 bg-gradient-to-b from-pink-100 to-white">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4 text-pink-900">Referral Program</h2>
        <p className="text-pink-800 max-w-2xl mx-auto">
          Invite friends and earn rewards together
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
        {[
          {
            icon: <Share2 className="w-8 h-8 text-pink-500" />,
            title: "Share",
            description: "Invite friends using your unique code",
          },
          {
            icon: <Users className="w-8 h-8 text-pink-500" />,
            title: "Connect",
            description: "Friends join using your referral",
          },
          {
            icon: <Trophy className="w-8 h-8 text-pink-500" />,
            title: "Earn",
            description: "Both receive exclusive rewards",
          },
        ].map((step, index) => (
          <div
            key={index}
            className="bg-white/80 backdrop-blur-lg rounded-xl p-8 text-center shadow-lg border border-pink-200"
          >
            <div className="mb-6">{step.icon}</div>
            <h3 className="text-xl font-bold mb-2 text-pink-900">{step.title}</h3>
            <p className="text-pink-800">{step.description}</p>
          </div>
        ))}
      </div>

      <div className="max-w-2xl mx-auto">
        <div className="bg-white/80 backdrop-blur-lg rounded-xl p-8 shadow-lg border border-pink-200">
          {isWalletConnected ? (
            <>
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-4 text-pink-900">Your Referral Code</h3>
                <div className="flex">
                  <input
                    type="text"
                    value={referralCode}
                    readOnly
                    className="flex-1 bg-pink-50 border border-pink-300 rounded-l-lg px-4 py-2 text-pink-800"
                  />
                  <button
                    onClick={() => navigator.clipboard.writeText(referralCode)}
                    className="bg-pink-500 hover:bg-pink-600 px-4 rounded-r-lg text-white"
                  >
                    Copy
                  </button>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4 text-pink-900">Enter Friend's Code</h3>
                <div className="flex">
                  <input
                    type="text"
                    placeholder="Enter referral code"
                    value={friendCode}
                    onChange={(e) => setFriendCode(e.target.value)}
                    className="flex-1 bg-pink-50 border border-pink-300 rounded-l-lg px-4 py-2 text-pink-800"
                  />
                  <button
                    onClick={handleReferralSubmit}
                    className="bg-pink-500 hover:bg-pink-600 px-4 rounded-r-lg text-white"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </>
          ) : (
            <div className="text-center py-8">
              <p className="text-pink-800 mb-4">Connect your wallet to access the referral program</p>
              <button
                onClick={() => {}}
                className="bg-pink-500 hover:bg-pink-600 px-6 py-2 rounded-lg text-white"
              >
                Connect Wallet
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default ReferralSection;