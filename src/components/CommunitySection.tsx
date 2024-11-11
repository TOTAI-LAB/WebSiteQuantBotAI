import React from 'react';
import { MessageSquare, Twitter } from 'lucide-react';

function CommunitySection() {
  return (
    <section className="py-20 container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4 text-purple-900">Join Our Community</h2>
        <p className="text-purple-800 max-w-2xl mx-auto">
          Connect with fellow anime enthusiasts and stay updated
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {[
          {
            icon: <Twitter className="w-8 h-8 text-pink-500" />,
            title: "Twitter",
            description: "Follow us for the latest updates",
            action: "Follow",
            color: "bg-purple-600"
          },
          {
            icon: <MessageSquare className="w-8 h-8 text-pink-500" />,
            title: "Telegram",
            description: "Join our Telegram community",
            action: "Join Chat",
            color: "bg-purple-600"
          }
        ].map((platform, index) => (
          <div key={index} className="bg-white/80 backdrop-blur-lg rounded-xl p-8 text-center shadow-lg border border-pink-200 hover:scale-105 transition-transform">
            <div className="mb-6">{platform.icon}</div>
            <h3 className="text-xl font-bold mb-2 text-purple-900">{platform.title}</h3>
            <p className="text-purple-800 mb-6">{platform.description}</p>
            <button className={`px-6 py-2 rounded-lg ${platform.color} hover:opacity-90 transition-opacity`}>
              {platform.action}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CommunitySection;