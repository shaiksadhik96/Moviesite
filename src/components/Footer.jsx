import { Link } from 'react-router-dom';
import { Film, Mail, Instagram, Twitter, Facebook, Github } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black bg-opacity-90 border-t border-violet-700">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center">
              <Film className="h-8 w-8 text-violet-400" />
              <span className="ml-2 text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-violet-500">
                NeoReelReviews
              </span>
            </Link>
            <p className="mt-2 text-sm text-gray-400">
              Your ultimate destination for the latest movie reviews, ratings, and cinematic discussions.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Navigation</h3>
            <ul className="mt-4 space-y-2">
              <FooterLink to="/" text="Home" />
              <FooterLink to="/movies" text="Movies" />
              <FooterLink to="/about" text="About Us" />
              <FooterLink to="/contact" text="Contact" />
            </ul>
          </div>
          
          {/* Categories */}
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Categories</h3>
            <ul className="mt-4 space-y-2">
              <FooterLink to="/movies?category=top-rated" text="Top Rated" />
              <FooterLink to="/movies?category=latest" text="Latest Releases" />
              <FooterLink to="/movies?category=most-viewed" text="Most Viewed" />
              <FooterLink to="/movies?category=coming-soon" text="Coming Soon" />
            </ul>
          </div>
          
          {/* Contact & Social */}
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Connect With Us</h3>
            <ul className="mt-4 space-y-2">
              <li className="flex items-center">
                <Mail size={16} className="text-blue-400" />
                <span className="ml-2 text-gray-300">contact@neoreelreviews.com</span>
              </li>
              <li className="mt-4">
                <div className="flex space-x-4">
                  <SocialIcon icon={<Facebook size={20} />} />
                  <SocialIcon icon={<Twitter size={20} />} />
                  <SocialIcon icon={<Instagram size={20} />} />
                  <SocialIcon icon={<Github size={20} />} />
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="mt-8 border-t border-gray-800 pt-6">
          <p className="text-sm text-center text-gray-400">
            &copy; {new Date().getFullYear()} NeoReelReviews. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

const FooterLink = ({ to, text }) => (
  <li>
    <Link to={to} className="text-gray-300 hover:text-blue-400 transition duration-200">
      {text}
    </Link>
  </li>
);

const SocialIcon = ({ icon }) => (
  <a href="#" className="text-gray-400 hover:text-blue-400 transition duration-200">
    {icon}
  </a>
);

export default Footer;