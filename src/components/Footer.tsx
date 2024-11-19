import React from 'react';
import { Twitter, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-white/90 backdrop-blur-lg py-8 mt-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold text-pink-900 mb-4">
              QuantBot.AI
            </h3>
            <p className="text-pink-800">
              Experience the future of anime interaction through cutting-edge AI technology.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-pink-900">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-pink-800 hover:text-pink-500 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/roadmap" className="text-pink-800 hover:text-pink-500 transition-colors">
                  Roadmap
                </Link>
              </li>
              <li>
                <Link to="/referrals" className="text-pink-800 hover:text-pink-500 transition-colors">
                  Referrals
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-pink-900">Connect With Us</h4>
            <div className="flex space-x-4">
              <a
                href="https://x.com/ciphernami/"
                className="text-pink-800 hover:text-pink-500 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-6 h-6" />
              </a>
              <a
                href="https://t.me/NamiTheAgi"
                className="text-pink-800 hover:text-pink-500 transition-colors"
                aria-label="Telegram"
              >
                <MessageSquare className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-pink-200 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-pink-800 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} AnimeAI Chat. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-pink-800 hover:text-pink-500 text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-pink-800 hover:text-pink-500 text-sm transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;