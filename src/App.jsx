import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ListOfMovies from './pages/ListOfMovies';
import MovieDetails from './pages/MovieDetails';
import ReviewSubmit from './pages/ReviewSubmit';
import LoginSignup from './pages/LoginSignUp';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movies" element={<ListOfMovies />} />
            <Route path="/movies/:id" element={<MovieDetails />} />
            <Route path="/review/:id" element={<ReviewSubmit />} />
            <Route path="/login" element={<LoginSignup />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;