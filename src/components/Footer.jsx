// components/Footer.jsx
import React from "react";
import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Copyright */}
          <div className="text-gray-400 mb-4 md:mb-0">
            © {currentYear} John Doe. All rights reserved.
          </div>

          {/* Made with love */}
          <div className="flex items-center text-gray-400">
            Made with
            <Heart size={16} className="mx-2 text-red-500 fill-current" />
            using React & Tailwind CSS
          </div>

          {/* Back to top */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="mt-4 md:mt-0 text-blue-400 hover:text-blue-300 transition-colors"
          >
            Back to Top
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
