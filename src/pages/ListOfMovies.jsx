import { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Star, Filter, Search, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';

// Sample movie data (in a real app, this would come from an API)
const allMovies = [
  {
    id: 1,
    title: 'Inception',
    year: 2020,
    genres: ['Action', 'Sci-Fi'],
    language: 'English',
    rating: 8.8,
    posterUrl: 'https://i.pinimg.com/474x/6f/59/24/6f59248e6fa95bef5d87667e59dacf55.jpg'
  },
  {
    id: 2,
    title: 'Parasite',
    year: 2019,
    genres: ['Drama', 'Thriller'],
    language: 'Korean',
    rating: 8.6,
    posterUrl: 'https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@.V1.jpg'
  },
  {
    id: 3,
    title: 'The Dark Knight',
    year: 2008,
    genres: ['Action', 'Crime', 'Drama'],
    language: 'English',
    rating: 9.0,
    posterUrl: 'https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@.V1.jpg'
  },
  {
    id: 4,
    title: 'Pulp Fiction',
    year: 1994,
    genres: ['Crime', 'Drama'],
    language: 'English',
    rating: 8.9,
    posterUrl: 'https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@.V1.jpg'
  },
  {
    id: 5,
    title: 'Spirited Away',
    year: 2001,
    genres: ['Animation', 'Adventure', 'Family'],
    language: 'Japanese',
    rating: 8.6,
    posterUrl: 'https://m.media-amazon.com/images/M/MV5BMjlmZmI5MDctNDE2YS00YWE0LWE5ZWItZDBhYWQ0NTcxNWRhXkEyXkFqcGdeQXVyMTMxODk2OTU@.V1.jpg'
  },
  {
    id: 6,
    title: 'The Shawshank Redemption',
    year: 1994,
    genres: ['Drama'],
    language: 'English',
    rating: 9.3,
    posterUrl: 'https://m.media-amazon.com/images/M/MV5BNDE3ODcxYzMtY2YzZC00NmNlLWJiNDMtZDViZWM2MzIxZDYwXkEyXkFqcGdeQXVyNjAwNDUxODI@.V1.jpg'
  },
  {
    id: 7,
    title: 'The Godfather',
    year: 1972,
    genres: ['Crime', 'Drama'],
    language: 'English',
    rating: 9.2,
    posterUrl: 'https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@.V1.jpg'
  },
  {
    id: 8,
    title: 'Your Name',
    year: 2016,
    genres: ['Animation', 'Drama', 'Romance'],
    language: 'Japanese',
    rating: 8.4,
    posterUrl: 'https://m.media-amazon.com/images/M/MV5BODRmZDVmNzUtZDA4ZC00NjhkLWI2M2UtN2M0ZDIzNDcxYThjL2ltYWdlXkEyXkFqcGdeQXVyNTk0MzMzODA@.V1.jpg'
  }
];

const ListOfMovies = () => {
  const [searchParams] = useSearchParams();
  const categoryParam = searchParams.get('category');
  
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    genre: '',
    year: '',
    language: '',
    rating: ''
  });
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    // Simulate fetching data based on category
    const timer = setTimeout(() => {
      setMovies(allMovies);
      setFilteredMovies(allMovies);
      setIsLoading(false);
    }, 800);
    
    return () => clearTimeout(timer);
  }, [categoryParam]);

  useEffect(() => {
    // Apply filters and search
    let results = [...movies];
    
    // Apply search term
    if (searchTerm) {
      results = results.filter(movie => 
        movie.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    // Apply filters
    if (filters.genre) {
      results = results.filter(movie => movie.genres.includes(filters.genre));
    }
    
    if (filters.year) {
      results = results.filter(movie => movie.year === parseInt(filters.year));
    }
    
    if (filters.language) {
      results = results.filter(movie => movie.language === filters.language);
    }
    
    if (filters.rating) {
      results = results.filter(movie => movie.rating >= parseFloat(filters.rating));
    }
    
    setFilteredMovies(results);
  }, [searchTerm, filters, movies]);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const clearFilters = () => {
    setFilters({
      genre: '',
      year: '',
      language: '',
      rating: ''
    });
    setSearchTerm('');
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold text-white"
        >
          {categoryParam ? 
            categoryParam.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ') + ' Movies' : 
            'All Movies'
          }
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-gray-400 mt-2"
        >
          Browse through our collection of {filteredMovies.length} movies
        </motion.p>
      </div>

      {/* Search and Filter */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="mb-8"
      >
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          {/* Search Bar */}
          <div className="relative w-full md:w-96">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search size={18} className="text-gray-400" />
            </div>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search movies..."
              className="block w-full pl-10 pr-3 py-2 border border-gray-600 rounded-md bg-gray-800 text-gray-300 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Filter Button */}
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center px-4 py-2 bg-gray-800 border border-gray-600 rounded-md text-gray-300 hover:bg-gray-700 transition"
          >
            <Filter size={18} className="mr-2" />
            Filters
            <ChevronDown 
              size={16} 
              className={`ml-2 transform transition-transform ${showFilters ? 'rotate-180' : ''}`} 
            />
          </button>
        </div>

        {/* Filter Options */}
        {showFilters && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="mt-4 p-4 bg-gray-800 border border-gray-700 rounded-md"
          >
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {/* Genre Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">Genre</label>
                <select
                  name="genre"
                  value={filters.genre}
                  onChange={handleFilterChange}
                  className="block w-full px-3 py-2 border border-gray-600 rounded-md bg-gray-700 text-gray-300 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">All Genres</option>
                  <option value="Action">Action</option>
                  <option value="Comedy">Comedy</option>
                  <option value="Drama">Drama</option>
                  <option value="Horror">Horror</option>
                  <option value="Sci-Fi">Sci-Fi</option>
                </select>
              </div>

              {/* Year Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">Year</label>
                <select
                  name="year"
                  value={filters.year}
                  onChange={handleFilterChange}
                  className="block w-full px-3 py-2 border border-gray-600 rounded-md bg-gray-700 text-gray-300 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">All Years</option>
                  <option value="2025">2025</option>
                  <option value="2024">2024</option>
                  <option value="2023">2023</option>
                  <option value="2022">2022</option>
                  <option value="2021">2021</option>
                </select>
              </div>

              {/* Language Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">Language</label>
                <select
                  name="language"
                  value={filters.language}
                  onChange={handleFilterChange}
                  className="block w-full px-3 py-2 border border-gray-600 rounded-md bg-gray-700 text-gray-300 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">All Languages</option>
                  <option value="English">English</option>
                  <option value="Spanish">Spanish</option>
                  <option value="Korean">Korean</option>
                  <option value="Japanese">Japanese</option>
                  <option value="Hindi">Hindi</option>
                </select>
              </div>

              {/* Rating Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">Rating</label>
                <select
                  name="rating"
                  value={filters.rating}
                  onChange={handleFilterChange}
                  className="block w-full px-3 py-2 border border-gray-600 rounded-md bg-gray-700 text-gray-300 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">Any Rating</option>
                  <option value="9">9+</option>
                  <option value="8">8+</option>
                  <option value="7">7+</option>
                  <option value="6">6+</option>
                  <option value="5">5+</option>
                </select>
              </div>
            </div>

            {/* Clear Filters Button */}
            <div className="mt-4 flex justify-end">
              <button
                onClick={clearFilters}
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-md text-white transition"
              >
                Clear Filters
              </button>
            </div>
          </motion.div>
        )}
      </motion.div>

      {/* Movies Grid */}
      {filteredMovies.length > 0 ? (
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
        >
          {filteredMovies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} variants={itemVariants} />
          ))}
        </motion.div>
      ) : (
        <div className="text-center py-16">
          <p className="text-gray-400 text-lg">No movies found matching your criteria</p>
          <button
            onClick={clearFilters}
            className="mt-4 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-md text-white transition"
          >
            Clear Filters
          </button>
        </div>
      )}
    </div>
  );
};

const MovieCard = ({ movie, variants }) => {
  return (
    <motion.div 
      variants={variants} 
      className="overflow-hidden rounded-lg bg-gray-800 shadow-lg transform transition duration-300 hover:scale-105 group"
    >
      <Link to={`/movies/${movie.id}`}>
        <div className="relative pb-[150%]">
          <img 
            src={movie.posterUrl} 
            alt={movie.title} 
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="absolute bottom-0 left-0 right-0 p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="flex items-center text-yellow-400">
              <Star size={16} />
              <span className="ml-1 text-sm font-medium">{movie.rating}</span>
            </div>
          </div>
        </div>
        <div className="p-3">
          <h3 className="text-white font-medium truncate">{movie.title}</h3>
          <p className="text-xs text-gray-400">{movie.year}</p>
          <div className="mt-1 flex flex-wrap gap-1">
            {movie.genres.slice(0, 2).map((genre, index) => (
              <span key={index} className="inline-block px-2 py-1 text-xs bg-blue-900 text-blue-200 rounded">
                {genre}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ListOfMovies;