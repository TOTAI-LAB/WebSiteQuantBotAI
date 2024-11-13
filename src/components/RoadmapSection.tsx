import React from 'react';
import { CheckCircle, Circle } from 'lucide-react';

function RoadmapSection() {
  const milestones = [
    {
      title: 'Phase 1: Genesis Launch with Referral and Invite-Based Access',
      description: `Website launch with social media channels and Nami AI release. 
                    Exclusive Access through Invites: Limit initial access to the chatbot by making it invite-only. Users can invite a set number of friends to gain access, creating a sense of exclusivity and encouraging early users to share within their network. 
                    Referral Rewards System: Create a referral score that rewards users for each successful invite. Rewards could include early access to new features, digital collectibles, or badges. Display a leaderboard to highlight top referrers. 
                    Special Perks for Early Adopters: Grant early adopters unique privileges like exclusive interactions with Nami AI or priority access to future characters and features, including limited-edition digital badges for those reaching a referral milestone.`,
      completed: true,
    },
    {
      title: 'Phase 2: Expanding the Crew (Next 3-6 Months)',
      description: `Second Character Release: Introduce Zoro AI as the “Technical Analyst.”
                    Exclusive Content Access: Unlock unique conversations or insights when users interact with both Nami and Zoro.
                    Community Voting: Launch a poll to let users vote on the next character from One Piece.
                    Collaborative Events: Host events where Nami and Zoro interact together, enhancing the sense of a growing world.`,
      completed: false,
    },
    {
      title: 'Phase 3: Expanding Beyond One Piece (6-9 Months)',
      description: `Introduction of First Naruto Character: Release a Naruto character like Naruto AI or Sasuke AI.
                    Cross-Anime Collaboration: Host themed events blending One Piece and Naruto characters, e.g., “Market Battle” for varied perspectives.
                    User-Exclusive Rewards and NFT Drops: Offer digital collectibles, badges, or NFTs to active users.
                    Platform Expansion: Integrate chatbot access on mobile apps, Discord, and Telegram.`,
      completed: false,
    },
    {
      title: 'Phase 4: Building a Multi-Character World (9-12 Months)',
      description: `Release Additional Characters Based on Community Votes.
                    Themed Quests and Missions: Introduce character-specific “quests” that allow users to earn points and unlock interactions or complete a “Crypto Knowledge Journey.”
                    Virtual Events and AMAs: Host live Q&As where characters update on trending topics.
                    User Recognition Program: Highlight top users with badges or titles based on engagement milestones.`,
      completed: false,
    },
    {
      title: 'Phase 5: Community Milestones and Partnerships (12-18 Months)',
      description: `Introduce Limited-Edition Characters from Attack on Titan or Dragon Ball as time-limited chatbots.
                    Official Partnership Program: Form partnerships with anime influencers and crypto-themed projects.
                    Community Rewards Program: Launch a referral program to earn points that unlock exclusive content and avatars.
                    Voting for the Next Anime Series: Host a community vote for the next anime series integration.`,
      completed: false,
    },
    {
      title: 'Phase 6: Entering the Metaverse (18-24 Months)',
      description: `Launch AR/VR Experiences for virtual and augmented reality interactions with characters.
                    Special Events and Anniversaries: Host annual events with limited-time characters and milestone rewards.
                    DAO for Governance: Enable community voting on major decisions like new character releases and feature additions.
                    Real-World Events and Merchandise: Host events where users can meet the team and access exclusive merchandise.`,
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