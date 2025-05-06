import { useState } from 'react';
import { Star, Send, AlertCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const ReviewSubmit = ({ movieId, movieTitle }) => {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [review, setReview] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (rating === 0) {
      setError('Please select a rating');
      return;
    }

    if (review.trim().length < 10) {
      setError('Review must be at least 10 characters');
      return;
    }

    // Here you would normally send the review to your backend
    console.log({
      movieId,
      rating,
      review,
      date: new Date().toISOString(),
    });

    // Show success message
    setSubmitted(true);
    setError('');
    setReview('');
    setRating(0);

    // Reset success message after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
    }, 3000);
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-4xl mx-auto px-4 py-8 bg-gradient-to-br from-indigo-900/20 to-violet-900/20 rounded-lg shadow-lg backdrop-blur-sm"
    >
      <h2 className="text-3xl font-bold text-white mb-6 border-b border-violet-500 pb-2">
        Write a Review for {movieTitle || "This Movie"}
      </h2>

      {submitted && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 p-4 bg-violet-500/20 border border-violet-500 rounded-lg text-white"
        >
          Your review has been submitted successfully. Thank you for your feedback!
        </motion.div>
      )}

      {error && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 p-4 bg-red-500/20 border border-red-500 rounded-lg text-white flex items-center gap-2"
        >
          <AlertCircle size={20} />
          {error}
        </motion.div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-violet-300 text-lg mb-2">Your Rating</label>
          <div className="flex gap-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <motion.button
                key={star}
                type="button"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setRating(star)}
                onMouseEnter={() => setHoverRating(star)}
                onMouseLeave={() => setHoverRating(0)}
                className="focus:outline-none"
              >
                <Star
                  size={36}
                  className={`${
                    (hoverRating || rating) >= star
                      ? 'fill-violet-400 text-violet-400'
                      : 'text-gray-400'
                  } transition-colors duration-200`}
                />
              </motion.button>
            ))}
            <span className="ml-4 text-white text-lg">
              {rating > 0 ? `${rating} of 5 stars` : 'Select rating'}
            </span>
          </div>
        </div>

        <div>
          <label htmlFor="review" className="block text-violet-300 text-lg mb-2">
            Your Review
          </label>
          <textarea
            id="review"
            value={review}
            onChange={(e) => setReview(e.target.value)}
            rows={6}
            className="w-full bg-indigo-900/30 border border-violet-500/50 rounded-lg p-4 text-white focus:ring-2 focus:ring-violet-500 focus:border-transparent resize-none"
            placeholder="Share your thoughts about the movie..."
          ></textarea>
          <p className="text-gray-400 text-sm mt-1">
            {review.length} / 500 characters (minimum 10)
          </p>
        </div>

        <div className="flex justify-between items-center">
          <div className="text-violet-300 text-sm">
            <p>Your review will be public and may help others discover great movies.</p>
          </div>
          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 bg-violet-600 hover:bg-violet-700 text-white px-6 py-3 rounded-lg shadow-lg transition-colors duration-300"
          >
            <Send size={18} />
            Submit Review
          </motion.button>
        </div>
      </form>

      <div className="mt-12 border-t border-violet-500/30 pt-6">
        <h3 className="text-xl font-semibold text-white mb-4">Review Guidelines</h3>
        <ul className="list-disc pl-5 text-gray-300 space-y-2">
          <li>Be respectful and constructive in your criticism</li>
          <li>Avoid spoilers or use spoiler warnings</li>
          <li>Focus on your personal experience with the movie</li>
          <li>Consider acting, direction, writing, and technical aspects</li>
          <li>Reviews are moderated and may take up to 24 hours to appear</li>
        </ul>
      </div>
    </motion.div>
  );
};

export default ReviewSubmit;