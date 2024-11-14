import React from 'react';
import { CheckCircle, Circle } from 'lucide-react';

function RoadmapSection() {
  const milestones = [
    {
      title: 'Phase 1: Genesis Launch and Community Seeding (0-3 Months)',
      description: `Launch QuantBot.ai with a focus on exclusivity and strong community foundations:
                    - **Invite-Only Genesis Access**: Restrict initial access to the chatbot via exclusive invites to create hype and exclusivity.
                    - **Referral Rewards**: Implement a referral leaderboard with crypto-based incentives such as digital collectibles, token airdrops, or exclusive NFTs for top contributors.
                    - **Early Adopter Privileges**: Provide unique interactions, priority access to future releases, and early feature testing for early adopters. 
                    - **Social Media Domination**: Roll out a multi-channel presence across Twitter, Discord, Telegram, and Instagram to build momentum and engagement.`,
      completed: true,
    },
    {
      title: 'Phase 2: Expanding the Crew and Ecosystem (3-6 Months)',
      description: `Grow the ecosystem by introducing new features and characters:
                    - **Zoro AI Release**: Launch Zoro as a “Technical Analyst” AI, providing advanced crypto trading insights.
                    - **Dynamic Interactions**: Enable cross-character conversations where Nami and Zoro collaborate on market insights.
                    - **Community Voting**: Launch a poll for users to decide the next character, driving engagement and ownership.
                    - **Gamified Leaderboards**: Introduce a gamified system where users earn points for referrals, activity, or usage, redeemable for exclusive rewards.`,
      completed: false,
    },
    {
      title: 'Phase 3: Multi-Anime Collaboration and Crypto Utility (6-9 Months)',
      description: `Expand beyond One Piece to attract a broader audience:
                    - **Naruto AI Launch**: Introduce Naruto or Sasuke AI to provide motivational or risk management advice tailored to users' trading habits.
                    - **Cross-Anime Events**: Host themed events like “Crypto Showdowns,” where characters from One Piece and Naruto offer competing insights.
                    - **User Utility Rewards**: Reward active users with unique NFTs, badges, or even governance tokens for platform engagement.
                    - **Mobile and Cross-Platform Access**: Launch QuantBot.ai on mobile apps, Discord, and Telegram to reach a wider audience.`,
      completed: false,
    },
    {
      title: 'Phase 4: Multi-Character Universe and Advanced Engagement (9-12 Months)',
      description: `Develop a vibrant multi-character ecosystem:
                    - **Community-Powered Releases**: Let users vote for the next character lineup, including Dragon Ball or Attack on Titan themes.
                    - **Character Missions and Quests**: Gamify the experience with character-specific “crypto missions” that unlock rewards, interactions, and insights.
                    - **Exclusive AMA Sessions**: Host live Q&As with characters, providing real-time insights on crypto trends while building community trust.
                    - **User Recognition**: Reward top users with exclusive titles, governance rights, or collectible NFTs.`,
      completed: false,
    },
    {
      title: 'Phase 5: Partnerships, Tokenization, and Rewards (12-18 Months)',
      description: `Capitalize on the platform’s growth with strategic expansions:
                    - **Exclusive Partnerships**: Collaborate with anime influencers, crypto projects, and NFT artists to enhance reach and credibility.
                    - **Tokenized Ecosystem**: Introduce a governance token for rewards and voting, enabling community-driven decision-making.
                    - **Limited-Edition Drops**: Release time-limited characters or collectible NFTs tied to special events or partnerships.
                    - **Rewards and Loyalty Programs**: Expand the referral and activity-based reward systems with tangible crypto-based benefits.`,
      completed: false,
    },
    {
      title: 'Phase 6: Entering the Metaverse and Real-World Integration (18-24 Months)',
      description: `Bridge virtual and physical worlds for immersive user experiences:
                    - **AR/VR Chatbot Integration**: Enable virtual interactions with AI characters in metaverse platforms.
                    - **QuantBot DAO**: Establish a decentralized governance system, allowing the community to vote on new character releases, platform features, and partnerships.
                    - **Merchandise and Events**: Launch exclusive QuantBot merchandise and host global community events to strengthen the brand and community.
                    - **Cross-Chain Expansion**: Extend AI character capabilities to other blockchains beyond Solana, such as Ethereum, Polygon, and Binance Smart Chain.`,
      completed: false,
    },
  ];

  return (
    <section className="py-20 container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4 text-pink-900">Project Roadmap</h2>
        <p className="text-pink-800 max-w-2xl mx-auto">
          Our journey to revolutionize anime character interactions
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        {milestones.map((milestone, index) => (
          <div
            key={index}
            className="relative pl-8 pb-8 last:pb-0 before:content-[''] before:absolute before:left-[15px] before:top-8 before:w-[2px] before:h-[calc(100%-32px)] before:bg-pink-500/30 last:before:hidden"
          >
            <div className="absolute left-0 top-1">
              {milestone.completed ? (
                <CheckCircle className="w-8 h-8 text-pink-500" />
              ) : (
                <Circle className="w-8 h-8 text-gray-500" />
              )}
            </div>
            <div className="bg-white/80 backdrop-blur-lg rounded-xl p-6 shadow-lg border border-pink-200">
              <h3 className="text-xl font-bold mb-2 text-pink-900">{milestone.title}</h3>
              <p className="text-pink-800 drop-shadow-md">{milestone.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default RoadmapSection;