// src/pages/MovieDetails.jsx
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getMovieById, getRelatedMovies } from '../Data/MovieData';
import { Star, Clock, Calendar, Globe, Film } from 'lucide-react';

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [relatedMovies, setRelatedMovies] = useState([]);

  useEffect(() => {
    const fetchedMovie = getMovieById(parseInt(id));
    setMovie(fetchedMovie);
    if (fetchedMovie) {
      setRelatedMovies(getRelatedMovies(fetchedMovie));
    }
    window.scrollTo(0, 0);
  }, [id]);

  if (!movie) {
    return (
      <div className="flex justify-center items-center h-screen text-white text-2xl">
        No movie found 😢
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 text-white">
      <Link to="/movies" className="text-blue-400 hover:text-blue-300 mb-6 inline-flex items-center transition duration-200">
        <span className="mr-1">&larr;</span> Back to Movies
      </Link>

      <div className="flex flex-col xl:flex-row gap-8">
        {/* Main Content */}
        <div className="flex-1 flex flex-col lg:flex-row gap-8">
          {/* Movie Poster */}
          <div className="w-full lg:w-1/3 xl:w-2/5 relative">
            <img
              src={movie.posterUrl || 'https://via.placeholder.com/500x750?text=No+Poster'}
              alt={movie.title}
              className="w-full h-auto rounded-lg shadow-xl object-cover transition-all duration-300 hover:shadow-2xl"
              onError={(e) => {
                e.target.src = 'https://via.placeholder.com/500x750?text=No+Poster';
              }}
            />
            {movie.rating && (
              <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-yellow-600 to-yellow-400 text-white font-bold rounded-full w-16 h-16 flex items-center justify-center shadow-lg">
                <div className="flex flex-col items-center">
                  <Star size={16} className="mb-1" />
                  <span>{movie.rating}</span>
                </div>
              </div>
            )}
          </div>

          {/* Movie Details */}
          <div className="flex-1">
            <h1 className="text-4xl font-bold mb-2">{movie.title}</h1>
            <p className="text-gray-300 mb-6">{movie.description}</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="flex items-center">
                <Film className="text-blue-400 mr-3" size={20} />
                <div>
                  <p className="text-gray-400 text-sm">Director</p>
                  <p className="font-medium">{movie.director}</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <Calendar className="text-blue-400 mr-3" size={20} />
                <div>
                  <p className="text-gray-400 text-sm">Release Date</p>
                  <p className="font-medium">{movie.releaseDate || movie.year}</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <Clock className="text-blue-400 mr-3" size={20} />
                <div>
                  <p className="text-gray-400 text-sm">Runtime</p>
                  <p className="font-medium">{movie.runtime ? `${movie.runtime} mins` : 'N/A'}</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <Globe className="text-blue-400 mr-3" size={20} />
                <div>
                  <p className="text-gray-400 text-sm">Country</p>
                  <p className="font-medium">{movie.country || 'N/A'}</p>
                </div>
              </div>
            </div>

            {/* Genres */}
            {movie.genres && movie.genres.length > 0 && (
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">Genres</h3>
                <div className="flex flex-wrap gap-2">
                  {movie.genres.map(genre => (
                    <span key={genre} className="px-3 py-1 bg-blue-900 bg-opacity-50 rounded-full text-sm">
                      {genre}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Cast */}
            {movie.cast && movie.cast.length > 0 && (
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">Cast</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                  {movie.cast.slice(0, 4).map(person => (
                    <div key={`${person.name}-${person.character}`} className="bg-gray-800 p-3 rounded-lg">
                      <p className="font-medium">{person.name}</p>
                      <p className="text-sm text-gray-400">{person.character}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Related Movies Sidebar - Pinterest Style */}
        {relatedMovies.length > 0 && (
          <div className="xl:w-1/4">
            <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-gray-700">You May Also Like</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-1 gap-4">
              {relatedMovies.map(relatedMovie => (
                <Link 
                  to={`/movies/${relatedMovie.id}`} 
                  key={relatedMovie.id}
                  className="group relative block rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <img
                    src={relatedMovie.posterUrl || 'https://via.placeholder.com/300x450?text=No+Poster'}
                    alt={relatedMovie.title}
                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => {
                      e.target.src = 'https://via.placeholder.com/300x450?text=No+Poster';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                    <div>
                      <h3 className="text-white font-bold">{relatedMovie.title}</h3>
                      {relatedMovie.year && (
                        <p className="text-gray-300 text-sm">{relatedMovie.year}</p>
                      )}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MovieDetails;