import React from 'react';
import { Brain, Sparkles, Code2, Palette } from 'lucide-react';

function CompanySection() {
  const features = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Crypto-Driven AI Technology",
      description: "Our AI models blend anime storytelling with decentralized crypto concepts, creating immersive and authentic character interactions."
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Lifelike Anime Personalities",
      description: "Each character embodies consistent personality traits and memories, evolving with interactions."
    },
    {
      icon: <Code2 className="w-8 h-8" />,
      title: "Blockchain Integration",
      description: "Our characters interact with blockchain elements, bringing crypto directly into their personalities and conversations."
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Personalized Character Creation",
      description: "Customize your own anime-inspired characters, integrating them into your crypto journey."
    }
  ];

  return (
    <section className="py-20 container mx-auto px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-purple-900">Our Expertise</h2>
          <p className="text-purple-800 max-w-2xl mx-auto">
            Bridging anime and the decentralized world through AI-powered interactions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white/80 backdrop-blur-lg rounded-xl p-8 shadow-lg border border-pink-200"
            >
              <div className="text-pink-500 mb-6">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-4 text-purple-900">{feature.title}</h3>
              <p className="text-purple-800">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white/80 backdrop-blur-lg rounded-xl p-8 shadow-lg border border-pink-200">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-purple-900">Why Choose QuantBot.ai?</h3>
              <p className="text-purple-800 mb-6">
                QuantBot.ai is pioneering anime character interactions with a crypto-centric edge. Our team combines advanced AI technology with a passion for anime and decentralized principles to bring characters to life in ways that align with the values of the crypto community.
              </p>
              <ul className="space-y-4 text-purple-800">
                <li className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                  <span>Crypto-integrated AI technology</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                  <span>Anime expertise with blockchain insight</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                  <span>Community-driven development</span>
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