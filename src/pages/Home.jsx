// src/Pages/Home.jsx
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Star, Clock, Eye, TrendingUp, Film, Tv, ArrowUp } from 'lucide-react';
import { motion } from 'framer-motion';
import { topRatedMovies, latestMovies, mostViewedMovies, comingSoonMovies } from '../Data/MovieData';

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showScrollButton, setShowScrollButton] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleMovieClick = (e, movieId) => {
    e.preventDefault();
    navigate('/movies');
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="w-16 h-16 border-t-4 border-blue-500 border-solid rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen relative">
      {/* Hero Section */}
      <section className="relative h-96 md:h-screen max-h-[800px]">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80" 
            alt="Cinema Background" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>
        </div>
        <div className="relative flex items-center h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-lg"
          >
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl mb-6">
              <span className="block text-blue-400">Discover.</span>
              <span className="block text-violet-400">Review.</span>
              <span className="block">Experience.</span>
            </h1>
            <p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-lg">
              Explore the latest releases, read honest reviews, and share your cinematic experiences with our growing community of movie enthusiasts.
            </p>
            <div className="mt-8 flex space-x-4">
              <Link to="/movies" className="px-6 py-3 rounded-md bg-gradient-to-r from-blue-600 to-violet-600 text-white font-medium hover:from-blue-700 hover:to-violet-700 transition duration-200">
                Browse Movies
              </Link>
              <Link to="/login" className="px-6 py-3 rounded-md border border-violet-500 text-violet-400 font-medium hover:bg-violet-900 hover:bg-opacity-20 transition duration-200">
                Join Community
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Categories Sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Top Rated */}
        <CategorySection 
          title="Top Rated Movies" 
          icon={<Star className="text-yellow-400" />}
          movies={topRatedMovies} 
          viewAllLink="/movies?category=top-rated"
          containerVariants={containerVariants}
          itemVariants={itemVariants}
          onMovieClick={handleMovieClick}
        />

        {/* Latest Releases */}
        <CategorySection 
          title="Latest Releases" 
          icon={<Clock className="text-blue-400" />}
          movies={latestMovies} 
          viewAllLink="/movies?category=latest"
          containerVariants={containerVariants}
          itemVariants={itemVariants}
          onMovieClick={handleMovieClick}
        />

        {/* Most Viewed */}
        <CategorySection 
          title="Most Viewed" 
          icon={<Eye className="text-violet-400" />}
          movies={mostViewedMovies} 
          viewAllLink="/movies?category=most-viewed"
          containerVariants={containerVariants}
          itemVariants={itemVariants}
          onMovieClick={handleMovieClick}
        />

        {/* Coming Soon */}
        <CategorySection 
          title="Coming Soon" 
          icon={<TrendingUp className="text-green-400" />}
          movies={comingSoonMovies} 
          viewAllLink="/movies?category=coming-soon"
          containerVariants={containerVariants}
          itemVariants={itemVariants}
          onMovieClick={handleMovieClick}
        />

        {/* Language Categories */}
        <section className="mt-16">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-white flex items-center">
              <Film className="mr-2 text-blue-400" />
              Browse by Language
            </h2>
          </div>
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {['English', 'Spanish', 'Korean', 'Japanese', 'Hindi', 'French', 'Italian', 'German'].map((language) => (
              <motion.div 
                key={language} 
                variants={itemVariants}
                className="relative overflow-hidden rounded-lg h-24 cursor-pointer group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-violet-700 opacity-80 group-hover:opacity-100 transition duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="text-xl font-bold text-white">{language}</h3>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Genres */}
        <section className="mt-16">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-white flex items-center">
              <Tv className="mr-2 text-violet-400" />
              Popular Genres
            </h2>
          </div>
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {['Action', 'Comedy', 'Drama', 'Horror', 'Sci-Fi', 'Thriller', 'Romance', 'Animation'].map((genre) => (
              <motion.div 
                key={genre} 
                variants={itemVariants}
                className="relative overflow-hidden rounded-lg h-24 cursor-pointer group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-violet-600 opacity-80 group-hover:opacity-100 transition duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="text-xl font-bold text-white">{genre}</h3>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>
      </div>

      {/* Back to Top Button */}
      {showScrollButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 p-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg transition-all duration-300 transform hover:scale-110"
          aria-label="Back to top"
        >
          <ArrowUp size={24} />
        </button>
      )}
    </div>
  );
};

const CategorySection = ({ title, icon, movies, viewAllLink, containerVariants, itemVariants, onMovieClick }) => {
  return (
    <section className="mt-16 first:mt-0">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-white flex items-center">
          {icon}
          <span className="ml-2">{title}</span>
        </h2>
        <Link to={viewAllLink} className="text-blue-400 hover:text-blue-300 transition duration-200 text-sm font-medium">
          View All
        </Link>
      </div>
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
      >
        {movies.slice(0, 5).map((movie) => (
          <MovieCard 
            key={movie.id} 
            movie={movie} 
            variants={itemVariants}
            onClick={(e) => onMovieClick(e, movie.id)}
          />
        ))}
      </motion.div>
    </section>
  );
};

const MovieCard = ({ movie, variants, onClick }) => {
  const imageUrl = movie.posterUrl || movie.image || 'https://via.placeholder.com/300x450?text=No+Image';

  const subtitle = movie.year 
    ? movie.year 
    : movie.releaseDate 
      ? movie.releaseDate.split('-')[0]
      : movie.views 
        ? `${(movie.views / 1000000).toFixed(1)}M views` 
        : '';

  return (
    <motion.div 
      variants={variants} 
      className="overflow-hidden rounded-lg bg-gray-800 shadow-lg transform transition duration-300 hover:scale-105 group"
    >
      <div className="cursor-pointer" onClick={onClick}>
        <div className="relative pb-[150%]">
          <img 
            src={imageUrl} 
            alt={movie.title} 
            className="absolute inset-0 w-full h-full object-cover"
            onError={(e) => {
              e.target.src = 'https://via.placeholder.com/300x450?text=No+Image';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="absolute bottom-0 left-0 right-0 p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {movie.rating && (
              <div className="flex items-center text-yellow-400">
                <Star size={16} />
                <span className="ml-1 text-sm font-medium">{movie.rating}</span>
              </div>
            )}
          </div>
        </div>
        <div className="p-3">
          <h3 className="text-white font-medium truncate">{movie.title}</h3>
          {subtitle && <p className="text-xs text-gray-400">{subtitle}</p>}
        </div>
      </div>
    </motion.div>
  );
};

export default Home;