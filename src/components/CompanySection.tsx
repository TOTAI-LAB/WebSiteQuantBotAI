import React from 'react';
import { FaBrain, FaBolt, FaCode, FaAtom, FaShieldAlt, FaInfinity, FaStar, FaGlobe } from 'react-icons/fa'; // Updated to use react-icons

function CompanySection() {
  const features = [
    {
      icon: <FaBrain className="w-8 h-8" />,
      title: "Petabyte-Fed, Degen-Born AI Brains",
      description: "NAMI ain’t your average AI—she’s chugged petabytes of crypto alpha, schooled on pre-trained LLMs, and is wired to dominate meme coin chaos and Solana’s lightning-fast blockchain. Big brain moves, always.",
    },
    {
      icon: <FaBolt className="w-8 h-8" />,
      title: "Meme Coin Alpha Hunter",
      description: "NAMI isn’t just tracking trends—she’s predicting them. Using AGI-level foresight, she identifies meme coin pumps and calls out rug pulls before anyone else in the market even sees them coming.",
    },
    {
      icon: <FaCode className="w-8 h-8" />,
      title: "On-Chain Execution Mastermind",
      description: "NAMI doesn’t just analyze Solana’s blockchain—she interacts with it. From querying real-time on-chain data to executing smart contract-based strategies, she’s the ultimate Solana power user.",
    },
    {
      icon: <FaAtom className="w-8 h-8" />,
      title: "AGI-Driven Market Adaptation",
      description: "This isn’t just AI; it’s AGI. NAMI evolves with the market, adapting to Solana’s shifting tides and meme coin volatility. She learns faster than you degen and reacts even faster.",
    },
    {
      icon: <FaShieldAlt className="w-8 h-8" />,
      title: "Anti-Rug Intelligence",
      description: "Rug pulls? NAMI eats them for breakfast. Her AGI-level fraud detection scans on-chain data, wallet movements, and tokenomics to keep your bags safe from scams and grifters.",
    },
    {
      icon: <FaInfinity className="w-8 h-8" />,
      title: "Infinite Use-Case Potential",
      description: "From PVP leaderboards to decentralized analytics, NAMI unlocks a world of possibilities—staking strategies, revenue sharing, and Solana-based meme coin adventures are just the beginning.",
    },
    {
      icon: <FaStar className="w-8 h-8" />,
      title: "Customizable Intelligence",
      description: "Want NAMI to focus on meme coin alpha? Solana DeFi? Both? Her modular AI architecture lets you build a version of her tailored to your degen goals and ambitions.",
    },
    {
      icon: <FaGlobe className="w-8 h-8" />,
      title: "Global Meme Coin Domination",
      description: "NAMI doesn’t just exist for Solana—she’s mapping out meme coin ecosystems across the globe. From Solana to Ethereum, she’s your ticket to cross-chain dominance in crypto’s wildest markets.",
    },
  ];

  return (
    <section className="py-20 container mx-auto px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-pink-900">Our Expertise</h2>
          <p className="text-pink-800 max-w-2xl mx-auto">
            Bridging anime and the decentralized world through AI-powered interactions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white/90 backdrop-blur-lg rounded-xl p-8 shadow-lg border border-pink-200"
            >
              <div className="text-pink-500 mb-6">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-4 text-pink-900">{feature.title}</h3>
              <p className="text-pink-800">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white/90 backdrop-blur-lg rounded-xl p-8 shadow-lg border border-pink-200">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-pink-900">Why Choose QuantBot.ai?</h3>
            <p className="text-pink-800 mb-6">
              QuantBot.ai is on a mission to revolutionize the intersection of artificial intelligence, blockchain, and creativity. Our vision is to build a future where technology doesn’t just solve problems but transforms how people interact with the decentralized world. By leveraging the latest advancements in AI, blockchain integration, and data analytics, we create cutting-edge solutions that redefine innovation.
              <br /><br />
              At the heart of QuantBot.ai is a team of visionary developers, researchers, and blockchain experts united by a passion for pushing the boundaries of what’s possible. Our expertise spans artificial intelligence, large-scale data processing, and decentralized technologies, enabling us to deliver unparalleled solutions to complex challenges. Whether it's pioneering AI-driven insights or crafting creative solutions for blockchain ecosystems, our commitment to excellence sets us apart.
            </p>
            <ul className="space-y-4 text-pink-800">
              <li className="flex items-center space-x-3">
                <span className="w-2 h-2 bg-pink-400 rounded-full"></span>
                <span>Innovative AI solutions for the decentralized world</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="w-2 h-2 bg-pink-400 rounded-full"></span>
                <span>Expertise in blockchain and large-scale data analytics</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="w-2 h-2 bg-pink-400 rounded-full"></span>
                <span>Driven by a vision to reshape future technologies</span>
              </li>
            </ul>
          </div>
            <div className="relative h-[300px] rounded-xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&q=80"
                alt="AI Technology"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CompanySection;