import { useState, useEffect } from 'react';
import toast from 'react-hot-toast';

interface ReferralStats {
  points: number;
  referrals: number;
  rank: number;
  isVerified: boolean;
}

interface ReferralUser {
  address: string;
  points: number;
  referrals: number;
}

export function useReferral(walletAddress: string | null) {
  const [referralCode] = useState('ANIME' + Math.random().toString(36).substring(2, 8).toUpperCase());
  const [stats, setStats] = useState<ReferralStats>({ points: 0, referrals: 0, rank: 0, isVerified: false });
  const [leaderboard, setLeaderboard] = useState<ReferralUser[]>([]);
  const [isVerified, setIsVerified] = useState(false);

  useEffect(() => {
    if (walletAddress) {
      const storedStats = localStorage.getItem(`referral_stats_${walletAddress}`);
      if (storedStats) {
        const parsedStats = JSON.parse(storedStats);
        setStats(parsedStats);
        setIsVerified(parsedStats.isVerified);
      }

      const storedLeaderboard = localStorage.getItem('referral_leaderboard');
      if (storedLeaderboard) {
        setLeaderboard(JSON.parse(storedLeaderboard));
      }
    }
  }, [walletAddress]);

  const submitReferralCode = (code: string) => {
    if (!walletAddress) {
      toast.error('Please connect your wallet first');
      return;
    }

    if (code === referralCode) {
      toast.error("You can't use your own referral code");
      return;
    }

    const allCodes = JSON.parse(localStorage.getItem('referral_codes') || '{}');
    const referrerAddress = allCodes[code];

    if (!referrerAddress) {
      toast.error('Invalid referral code');
      return;
    }

    const referredUsers = JSON.parse(localStorage.getItem('referred_users') || '{}');
    if (referredUsers[walletAddress]) {
      toast.error('You have already used a referral code');
      return;
    }

    // Update referrer's stats
    const referrerStats = JSON.parse(localStorage.getItem(`referral_stats_${referrerAddress}`) || '{"points": 0, "referrals": 0, "rank": 0, "isVerified": true}');
    referrerStats.points += 100;
    referrerStats.referrals += 1;
    localStorage.setItem(`referral_stats_${referrerAddress}`, JSON.stringify(referrerStats));

    // Update referred user's stats
    const newStats = { ...stats, points: stats.points + 50, isVerified: true };
    setStats(newStats);
    setIsVerified(true);
    localStorage.setItem(`referral_stats_${walletAddress}`, JSON.stringify(newStats));

    // Mark user as referred
    referredUsers[walletAddress] = true;
    localStorage.setItem('referred_users', JSON.stringify(referredUsers));

    // Update leaderboard
    const updatedLeaderboard = [...leaderboard];
    const referrerIndex = updatedLeaderboard.findIndex(user => user.address === referrerAddress);
    if (referrerIndex >= 0) {
      updatedLeaderboard[referrerIndex] = {
        ...updatedLeaderboard[referrerIndex],
        points: referrerStats.points,
        referrals: referrerStats.referrals,
      };
    }
    setLeaderboard(updatedLeaderboard);
    localStorage.setItem('referral_leaderboard', JSON.stringify(updatedLeaderboard));

    toast.success('Referral code applied successfully! You can now access the chatbot.');
  };

  useEffect(() => {
    if (walletAddress) {
      const allCodes = JSON.parse(localStorage.getItem('referral_codes') || '{}');
      allCodes[referralCode] = walletAddress;
      localStorage.setItem('referral_codes', JSON.stringify(allCodes));
    }
  }, [walletAddress, referralCode]);

  return {
    referralCode,
    stats,
    leaderboard,
    submitReferralCode,
    isVerified
  };
}