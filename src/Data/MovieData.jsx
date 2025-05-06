// src/data/movieData.js
export const movies = [
    {
      id: 1,
      title: "The Shawshank Redemption",
      rating: 9.3,
      year: 1994,
      runtime: 142,
      language: "English",
      genres: ["Drama"],
      description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
      director: "Frank Darabont",
      production: "Castle Rock Entertainment",
      country: "United States",
      releaseDate: "September 23, 1994",
      audienceScore: 98,
      criticsScore: 91,
      posterUrl: "https://m.media-amazon.com/images/M/MV5BNDE3ODcxYzMtY2YzZC00NmNlLWJiNDMtZDViZWM2MzIxZDY2XkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_.jpg",
      backdropUrl: "https://images.unsplash.com/photo-1612536275916-6ec041f3ed17?auto=format&fit=crop&w=1400&q=80",
      cast: [
        { name: "Tim Robbins", character: "Andy Dufresne" },
        { name: "Morgan Freeman", character: "Ellis Boyd 'Red' Redding" },
        { name: "Bob Gunton", character: "Warden Norton" }
      ],
      reviews: [
        {
          username: "MovieFan123",
          date: "2023-05-15",
          rating: 9.5,
          title: "A masterpiece of cinema",
          content: "This film stands the test of time with its powerful storytelling and brilliant performances.",
          likes: 1245,
          dislikes: 12
        },
        {
          username: "CinemaLover",
          date: "2023-04-22",
          rating: 9.0,
          title: "Timeless classic",
          content: "The character development is exceptional and the ending is deeply satisfying.",
          likes: 892,
          dislikes: 5
        }
      ]
    },
    {
      id: 2,
      title: "The Godfather",
      rating: 9.2,
      year: 1972,
      runtime: 175,
      language: "English",
      genres: ["Crime", "Drama"],
      description: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
      director: "Francis Ford Coppola",
      production: "Paramount Pictures",
      country: "United States",
      releaseDate: "March 24, 1972",
      audienceScore: 97,
      criticsScore: 98,
      posterUrl: "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
      backdropUrl: "https://images.unsplash.com/photo-1606484361462-87503b5de5e2?auto=format&fit=crop&w=1400&q=80",
      cast: [
        { name: "Marlon Brando", character: "Don Vito Corleone" },
        { name: "Al Pacino", character: "Michael Corleone" },
        { name: "James Caan", character: "Sonny Corleone" }
      ],
      reviews: [
        {
          username: "FilmCritic101",
          date: "2023-06-10",
          rating: 10,
          title: "Perfect in every way",
          content: "Brando and Pacino deliver performances for the ages in this cinematic masterpiece.",
          likes: 2103,
          dislikes: 8
        }
      ]
    },
    // Add more movies as needed
  ];
  
  // Helper functions to get movies
  export const getMovieById = (id) => {
    return movies.find(movie => movie.id === id);
  };
  
  export const getRelatedMovies = (currentMovie) => {
    // Simple implementation - get movies from same genre
    if (!currentMovie.genres || currentMovie.genres.length === 0) {
      return movies.filter(movie => movie.id !== currentMovie.id).slice(0, 5);
    }
    
    return movies.filter(movie => 
      movie.id !== currentMovie.id && 
      movie.genres.some(genre => currentMovie.genres.includes(genre))
    ).slice(0, 5);
  };
  
  // Export the other movie lists with proper images
  export const topRatedMovies = [
    {
      id: 1,
      title: "The Shawshank Redemption",
      rating: 9.3,
      year: 1994,
      posterUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1ZPIFZ3fbeFLaBW5ZqWTfAAg6pdPLla_1NCRicjueCn0_qnC4crPga59btusBC1jRGNw&usqp=CAU"
    },
    {
      id: 2,
      title: "The Godfather",
      rating: 9.2,
      year: 1972,
      posterUrl: "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg"
    },
    {
      id: 9,
      title: "The Dark Knight",
      rating: 9.0,
      year: 2008,
      posterUrl: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg"
    },
    {
      id: 10,
      title: "Pulp Fiction",
      rating: 8.9,
      year: 1994,
      posterUrl: "https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg"
    },
    {
      id: 11,
      title: "Schindler's List",
      rating: 8.9,
      year: 1993,
      posterUrl: "https://m.media-amazon.com/images/M/MV5BNDE4OTMxMTctNmRhYy00NWE2LTg3YzItYTk3M2UwOTU5Njg4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg"
    }
  ];
  
  export const latestMovies = [
    {
      id: 3,
      title: "Dune: Part Two",
      year: 2024,
      posterUrl: "https://m.media-amazon.com/images/M/MV5BN2QyZGU4ZDctOWMzMy00NTc5LThlOGQtODhmNDI1NmY5YzAwXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg"
    },
    {
      id: 4,
      title: "Wonka",
      year: 2024,
      posterUrl: "https://i.pinimg.com/736x/fa/b1/39/fab1391ac4865db167fe7a8a7f427a25.jpg"
    },
    {
      id: 12,
      title: "The Beekeeper",
      year: 2024,
      posterUrl: "https://i.pinimg.com/474x/11/b4/fa/11b4fae41439eec0872d4c4c173d5f20.jpg"
    },
    {
      id: 13,
      title: "Argylle",
      year: 2024,
      posterUrl: "https://i.pinimg.com/474x/fc/6a/44/fc6a44ae05436a04be2ff093e5d66a5c.jpg"
    },
    {
      id: 14,
      title: "Poor Things",
      year: 2024,
      posterUrl: "https://i.pinimg.com/474x/c4/a1/66/c4a1662eec2aeb848ed172b3677eb02b.jpg"
    }
  ];
  
  export const mostViewedMovies = [
    {
      id: 5,
      title: "Avengers: Endgame",
      views: 12000000,
      posterUrl: "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_.jpg"
    },
    {
      id: 6,
      title: "Avatar: The Way of Water",
      views: 10000000,
      posterUrl: "https://m.media-amazon.com/images/M/MV5BYjhiNjBlODctY2ZiOC00YjVlLWFlNzAtNTVhNzM1YjI1NzMxXkEyXkFqcGdeQXVyMjQxNTE1MDA@._V1_.jpg"
    },
    {
      id: 15,
      title: "Spider-Man: No Way Home",
      views: 9500000,
      posterUrl: "https://m.media-amazon.com/images/M/MV5BZWMyYzFjYTYtNTRjYi00OGExLWE2YzgtOGRmYjAxZTU3NzBiXkEyXkFqcGdeQXVyMzQ0MzA0NTM@._V1_.jpg"
    },
    {
      id: 16,
      title: "Top Gun: Maverick",
      views: 9000000,
      posterUrl: "https://m.media-amazon.com/images/M/MV5BZWYzOGEwNTgtNWU3NS00ZTQ0LWJkODUtMmVhMjIwMjA1ZmQwXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_.jpg"
    },
    {
      id: 17,
      title: "Jurassic World Dominion",
      views: 8500000,
      posterUrl: "https://m.media-amazon.com/images/M/MV5BOTBjMjA4NmYtN2RjMi00YWZlLTliYTktOTIwMmNkYjYxYmE1XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg"
    }
  ];
  
  export const comingSoonMovies = [
    {
      id: 7,
      title: "Deadpool 3",
      releaseDate: "2025-07-24",
      posterUrl: "https://i.pinimg.com/474x/69/66/87/69668756a24d07355f402f7a3d53fc58.jpg"
    },
    {
      id: 8,
      title: "Avatar 3",
      releaseDate: "2025-12-19",
      posterUrl: "https://i.pinimg.com/736x/30/40/10/304010f409cc50741e89a94f5cbf577f.jpg"
    },
    {
      id: 18,
      title: "Gladiator 2",
      releaseDate: "2024-11-22",
      posterUrl: "https://i.pinimg.com/474x/80/ef/6b/80ef6bd60a8e75dcb3e7347ca50cfe5a.jpg"
    },
    {
      id: 19,
      title: "Joker: Folie à Deux",
      releaseDate: "2024-10-04",
      posterUrl: "https://i.pinimg.com/474x/42/bb/ba/42bbbaefd687903bc80b02c014e64a5b.jpg"
    },
    {
      id: 20,
      title: "Furiosa",
      releaseDate: "2024-05-24",
      posterUrl: "https://i.pinimg.com/474x/93/88/3f/93883f0202b8fea310471901ee99e76a.jpg"
    }
  ];