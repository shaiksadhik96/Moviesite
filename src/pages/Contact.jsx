import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageSquare, Clock, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // In a real application, you'd send this data to your backend
    setIsSubmitted(true);
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const contactMethods = [
    {
      icon: <Mail size={24} />,
      title: 'Email Us',
      description: 'Our friendly team is here to help.',
      contact: 'contact@cineverse.com',
      action: 'Send Email',
      link: 'mailto:contact@cineverse.com'
    },
    {
      icon: <Phone size={24} />,
      title: 'Call Us',
      description: 'Mon-Fri from 8am to 5pm.',
      contact: '+1 (555) 123-4567',
      action: 'Call Now',
      link: 'tel:+15551234567'
    },
    {
      icon: <MapPin size={24} />,
      title: 'Visit Us',
      description: 'Come say hello at our office.',
      contact: '123 Film Street, Hollywood, CA 90028',
      action: 'Get Directions',
      link: 'https://maps.google.com'
    }
  ];

  const faqItems = [
    {
      question: 'How do I reset my password?',
      answer: 'To reset your password, click on the "Forgot Password" link on the login page. You\'ll receive an email with instructions to create a new password.'
    },
    {
      question: 'Can I delete my review after posting?',
      answer: 'Yes, you can delete or edit your reviews at any time. Simply navigate to your profile, find the review you want to modify, and use the edit or delete options.'
    },
    {
      question: 'How long does it take for my review to be approved?',
      answer: 'Most reviews are approved within 24 hours. However, during peak times or if a review requires additional moderation, it may take up to 48 hours.'
    },
    {
      question: 'Do you have a mobile app?',
      answer: 'Yes! Our mobile app is available for both iOS and Android devices. You can download it from the App Store or Google Play Store.'
    }
  ];

  return (
    <div className="bg-gradient-to-br from-indigo-900/90 to-violet-900/90 min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl font-bold text-white mb-6 leading-tight">
              Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-indigo-400">Touch</span>
            </h1>
            <p className="text-xl text-violet-200 max-w-3xl mx-auto">
              Have questions, feedback, or just want to chat about movies? 
              We'd love to hear from you! Our team is always ready to assist.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {contactMethods.map((method, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-indigo-900/30 backdrop-blur-sm border border-violet-500/30 rounded-lg p-6"
              >
                <div className="text-violet-400 mb-4">
                  {method.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{method.title}</h3>
                <p className="text-violet-200 mb-3">{method.description}</p>
                <p className="text-white font-medium mb-4">{method.contact}</p>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href={method.link}
                  className="inline-flex items-center text-violet-400 hover:text-violet-300"
                >
                  {method.action}
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </motion.a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & FAQ Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-black/40 backdrop-blur-sm border border-violet-500/30 rounded-lg p-8">
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <MessageSquare size={24} className="mr-2 text-violet-400" />
                  Send Us a Message
                </h2>
                
                {isSubmitted ? (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-center py-12"
                  >
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-violet-500/20 text-violet-400 mb-6">
                      <CheckCircle size={32} />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">Thank You!</h3>
                    <p className="text-violet-200">
                      Your message has been received. We'll get back to you as soon as possible.
                    </p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="mt-6 text-violet-400 hover:text-violet-300 underline"
                    >
                      Send another message
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-violet-300 mb-2">Your Name</label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full bg-indigo-900/40 border border-violet-500/50 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-violet-500 focus:border-transparent"
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-violet-300 mb-2">Your Email</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full bg-indigo-900/40 border border-violet-500/50 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-violet-500 focus:border-transparent"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-violet-300 mb-2">Subject</label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full bg-indigo-900/40 border border-violet-500/50 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-violet-500 focus:border-transparent"
                        placeholder="How can we help you?"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-violet-300 mb-2">Your Message</label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full bg-indigo-900/40 border border-violet-500/50 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-violet-500 focus:border-transparent resize-none"
                        placeholder="Tell us what you need assistance with..."
                      ></textarea>
                    </div>
                    
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      className="flex items-center justify-center gap-2 bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition-colors duration-300"
                    >
                      <Send size={18} />
                      Send Message
                    </motion.button>
                  </form>
                )}
              </div>
            </motion.div>
            
            {/* FAQ Section */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="bg-black/40 backdrop-blur-sm border border-violet-500/30 rounded-lg p-8">
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <Clock size={24} className="mr-2 text-violet-400" />
                  Frequently Asked Questions
                </h2>
                
                <div className="space-y-6">
                  {faqItems.map((item, index) => (
                    <motion.div
                      key={index}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      variants={fadeIn}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="border-b border-violet-500/30 pb-4 last:border-b-0"
                    >
                      <h3 className="text-lg font-semibold text-white mb-2">{item.question}</h3>
                      <p className="text-violet-200">{item.answer}</p>
                    </motion.div>
                  ))}
                </div>
                
                <div className="mt-8 pt-6 border-t border-violet-500/30">
                  <p className="text-violet-300 mb-4">
                    Can't find what you're looking for? Check our comprehensive knowledge base.
                  </p>
                  <motion.a
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    href="/help"
                    className="inline-flex items-center text-violet-400 hover:text-violet-300"
                  >
                    Visit Help Center
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ duration: 0.6 }}
            className="bg-black/40 backdrop-blur-sm border border-violet-500/30 rounded-lg overflow-hidden"
          >
            <div className="aspect-w-16 aspect-h-9">
              {/* Map placeholder - in a real application you'd integrate Google Maps or similar */}
              <div className="w-full h-96 bg-indigo-900/50 flex items-center justify-center">
                <div className="text-center">
                  <MapPin size={48} className="mx-auto text-violet-400 mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">Our Location</h3>
                  <p className="text-violet-300">123 Film Street, Hollywood, CA 90028</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-violet-900/60 to-indigo-900/60 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-white mb-4">Stay in the Loop</h2>
            <p className="text-lg text-violet-200 mb-8">
              Subscribe to our newsletter for the latest movie reviews, exclusive interviews, and special offers.
            </p>
            
            <form className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow bg-black/30 border border-violet-500/50 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-violet-500 focus:border-transparent"
                required
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition-colors duration-300"
              >
                Subscribe
              </motion.button>
            </form>
            
            <p className="text-sm text-violet-300 mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;