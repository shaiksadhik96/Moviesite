import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Film, Menu, X, Home, List, Info, Mail, LogIn } from 'lucide-react';
import { motion } from 'framer-motion';

// Correctly renamed: CustomNavLink
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black bg-opacity-80 backdrop-blur-md sticky top-0 z-50 border-b border-violet-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo Section */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Film className="h-8 w-8 text-violet-400" />
              <motion.span 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="ml-2 text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-violet-500"
              >
                NeoReelReviews
              </motion.span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4">
            <CustomNavLink to="/" icon={<Home size={18} />} text="Home" />
            <CustomNavLink to="/movies" icon={<List size={18} />} text="Movies" />
            <CustomNavLink to="/about" icon={<Info size={18} />} text="About" />
            <CustomNavLink to="/contact" icon={<Mail size={18} />} text="Contact" />
            <Link 
              to="/login" 
              className="px-4 py-2 rounded-md bg-gradient-to-r from-blue-600 to-violet-600 text-white font-medium flex items-center"
            >
              <LogIn size={18} className="mr-1" /> Login
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-gray-900 border-b border-violet-700"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <MobileNavLink to="/" icon={<Home size={18} />} text="Home" />
            <MobileNavLink to="/movies" icon={<List size={18} />} text="Movies" />
            <MobileNavLink to="/about" icon={<Info size={18} />} text="About" />
            <MobileNavLink to="/contact" icon={<Mail size={18} />} text="Contact" />
            <MobileNavLink to="/login" icon={<LogIn size={18} />} text="Login" />
          </div>
        </motion.div>
      )}
    </nav>
  );
};

// ✨ Corrected name: CustomNavLink
const CustomNavLink = ({ to, icon, text }) => (
  <Link 
    to={to} 
    className="px-3 py-2 text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-800 rounded-md flex items-center transition duration-200"
  >
    {icon}
    <span className="ml-1">{text}</span>
  </Link>
);

// Mobile version
const MobileNavLink = ({ to, icon, text }) => (
  <Link
    to={to}
    className=" px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-800 flex items-center"
  >
    {icon}
    <span className="ml-2">{text}</span>
  </Link>
);

export default Navbar;