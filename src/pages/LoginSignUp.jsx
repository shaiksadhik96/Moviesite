import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Lock, User, Eye, EyeOff, ArrowRight, LogIn, UserPlus } from 'lucide-react';

const LoginSignUp = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      console.log('Login attempt with:', {
        email: formData.email,
        password: formData.password
      });
      // Login logic would go here
    } else {
      console.log('Signup attempt with:', formData);
      // Signup logic would go here
    }
  };

  const toggleForm = () => {
    setIsLogin(!isLogin);
    setFormData({
      name: '',
      email: '',
      password: '',
      confirmPassword: ''
    });
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center px-4 py-12 bg-gradient-to-br from-indigo-900/90 to-violet-900/90">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        <div className="backdrop-blur-md bg-black/30 border border-violet-500/30 rounded-2xl overflow-hidden shadow-2xl">
          {/* Header */}
          <div className="p-6 bg-gradient-to-r from-violet-600 to-indigo-600">
            <h2 className="text-2xl font-bold text-white text-center">
              {isLogin ? 'Welcome Back!' : 'Create an Account'}
            </h2>
            <p className="text-violet-200 text-center mt-1">
              {isLogin 
                ? 'Sign in to continue your cinematic journey' 
                : 'Join our community of movie enthusiasts'}
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="p-6 space-y-6">
            {/* Name field (only for signup) */}
            {!isLogin && (
              <div className="space-y-2">
                <label htmlFor="name" className="block text-violet-300 font-medium">
                  Full Name
                </label>
                <div className="relative">
                  <User size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-violet-400" />
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required={!isLogin}
                    className="w-full bg-indigo-900/40 border border-violet-500/50 rounded-lg pl-10 pr-4 py-3 text-white focus:ring-2 focus:ring-violet-500 focus:border-transparent"
                    placeholder="John Doe"
                  />
                </div>
              </div>
            )}

            {/* Email field */}
            <div className="space-y-2">
              <label htmlFor="email" className="block text-violet-300 font-medium">
                Email Address
              </label>
              <div className="relative">
                <Mail size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-violet-400" />
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-indigo-900/40 border border-violet-500/50 rounded-lg pl-10 pr-4 py-3 text-white focus:ring-2 focus:ring-violet-500 focus:border-transparent"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            {/* Password field */}
            <div className="space-y-2">
              <label htmlFor="password" className="block text-violet-300 font-medium">
                Password
              </label>
              <div className="relative">
                <Lock size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-violet-400" />
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  className="w-full bg-indigo-900/40 border border-violet-500/50 rounded-lg pl-10 pr-12 py-3 text-white focus:ring-2 focus:ring-violet-500 focus:border-transparent"
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-violet-400 hover:text-violet-300"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            {/* Confirm Password (only for signup) */}
            {!isLogin && (
              <div className="space-y-2">
                <label htmlFor="confirmPassword" className="block text-violet-300 font-medium">
                  Confirm Password
                </label>
                <div className="relative">
                  <Lock size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-violet-400" />
                  <input
                    type={showPassword ? "text" : "password"}
                    id="confirmPassword"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    required={!isLogin}
                    className="w-full bg-indigo-900/40 border border-violet-500/50 rounded-lg pl-10 pr-4 py-3 text-white focus:ring-2 focus:ring-violet-500 focus:border-transparent"
                    placeholder="••••••••"
                  />
                </div>
              </div>
            )}

            {/* Forgot password (only for login) */}
            {isLogin && (
              <div className="text-right">
                <a href="#" className="text-violet-400 hover:text-violet-300 text-sm">
                  Forgot your password?
                </a>
              </div>
            )}

            {/* Submit button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 text-white py-3 px-4 rounded-lg flex items-center justify-center gap-2 shadow-lg"
            >
              {isLogin ? (
                <>
                  <LogIn size={18} />
                  Sign In
                </>
              ) : (
                <>
                  <UserPlus size={18} />
                  Create Account
                </>
              )}
            </motion.button>
          </form>

          {/* Toggle between login and signup */}
          <div className="px-6 pb-6 text-center">
            <p className="text-violet-300">
              {isLogin ? "Don't have an account?" : "Already have an account?"}
              <button
                type="button"
                onClick={toggleForm}
                className="ml-2 text-violet-400 hover:text-violet-300 font-medium inline-flex items-center"
              >
                {isLogin ? "Sign up" : "Sign in"}
                <ArrowRight size={16} className="ml-1" />
              </button>
            </p>
          </div>

          {/* Social login options */}
          <div className="border-t border-violet-500/30 px-6 py-6">
            <p className="text-center text-violet-300 mb-4">Or continue with</p>
            <div className="flex justify-center space-x-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-indigo-900/40 border border-violet-500/50 rounded-lg p-3 text-white hover:bg-indigo-800/40"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.283 10.356h-8.327v3.451h4.792c-.446 2.193-2.313 3.453-4.792 3.453a5.27 5.27 0 0 1-5.279-5.28 5.27 5.27 0 0 1 5.279-5.279c1.259 0 2.397.447 3.29 1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233a8.908 8.908 0 0 0-8.934 8.934 8.907 8.907 0 0 0 8.934 8.934c4.467 0 8.529-3.249 8.529-8.934 0-.528-.081-1.097-.202-1.625z"></path>
                </svg>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-indigo-900/40 border border-violet-500/50 rounded-lg p-3 text-white hover:bg-indigo-800/40"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z"></path>
                </svg>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-indigo-900/40 border border-violet-500/50 rounded-lg p-3 text-white hover:bg-indigo-800/40"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.995 6.68c-.048-1.068-.485-2.042-1.234-2.734-.731-.677-1.704-1.047-2.733-1.047-.989 0-1.941.335-2.704.944a3.935 3.935 0 0 0-3.59-2.342 3.977 3.977 0 0 0-3.593 2.342 3.946 3.946 0 0 0-2.704-.944c-1.029 0-2.002.37-2.731 1.047-.75.692-1.187 1.666-1.235 2.734-.05 1.104.343 2.192 1.08 2.955.37.388.822.687 1.324.877.66.255 1.323.382 2 .382 1.822 0 3.375-.984 4.132-2.404.757 1.42 2.311 2.404 4.132 2.404.677 0 1.34-.127 2-.382.502-.19.954-.489 1.324-.877.738-.763 1.131-1.851 1.08-2.955z"></path>
                </svg>
              </motion.button>
            </div>
          </div>
        </div>

        {/* Terms and privacy notice */}
        <p className="mt-6 text-center text-violet-400 text-sm">
          By continuing, you agree to our <a href="#" className="underline hover:text-white">Terms of Service</a> and <a href="#" className="underline hover:text-white">Privacy Policy</a>
        </p>
      </motion.div>
    </div>
  );
};

export default LoginSignUp;