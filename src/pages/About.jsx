import { motion } from 'framer-motion';
import { Film, Star, Users, Award, Clock, Globe, Shield } from 'lucide-react';

const About = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  // Pinterest-style team images with direct image URLs
  const teamGallery = [
    {
      id: 1,
      url: 'https://i.pinimg.com/564x/3b/7a/3e/3b7a3e5f5c5a8c5e8c5f5c5a8c5e8c5e.jpg',
      title: 'Team Collaboration',
      description: 'Our team brainstorming movie recommendation algorithms'
    },
    {
      id: 2,
      url: 'https://i.pinimg.com/564x/8c/95/3a/8c953a9f9f9f9f9f9f9f9f9f9f9f9f9.jpg',
      title: 'Movie Nights',
      description: 'Weekly team screenings of classic and new releases'
    },
    {
      id: 3,
      url: 'https://i.pinimg.com/564x/5e/8c/5f/5e8c5f5c5a8c5e8c5f5c5a8c5e8c5e.jpg',
      title: 'Film Festival',
      description: 'Our team attending international film festivals'
    },
    {
      id: 4,
      url: 'https://i.pinimg.com/564x/a8/c5/e8/a8c5e8c5f5c5a8c5e8c5f5c5a8c5e8c5.jpg',
      title: 'Office Culture',
      description: 'Our movie-themed workspace inspires creativity'
    },
    {
      id: 5,
      url: 'https://i.pinimg.com/564x/f5/c5/a8/f5c5a8c5e8c5f5c5a8c5e8c5f5c5a8.jpg',
      title: 'Team Outings',
      description: 'Visiting historic movie theaters for inspiration'
    },
    {
      id: 6,
      url: 'https://i.pinimg.com/564x/c5/a8/c5/c5a8c5e8c5f5c5a8c5e8c5f5c5a8c5.jpg',
      title: 'Behind the Scenes',
      description: 'Developing new features for our community'
    }
  ];

  const teamMembers = [
    {
      name: 'Alex Johnson',
      role: 'Founder & CEO',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
      bio: 'Film enthusiast with over 15 years of experience in digital media.'
    },
    {
      name: 'Sophia Chen',
      role: 'Lead Developer',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
      bio: 'Full-stack developer passionate about creating seamless user experiences.'
    },
    {
      name: 'Marcus Williams',
      role: 'Head of Content',
      image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
      bio: 'Former film critic with a keen eye for storytelling and cinematography.'
    },
    {
      name: 'Nina Rodriguez',
      role: 'UI/UX Designer',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
      bio: 'Creative designer who transforms ideas into beautiful, functional interfaces.'
    }
  ];

  // ... (keep all your existing stats, values, and other data)

  return (
    <div className="bg-gradient-to-br from-indigo-900/90 to-violet-900/90 min-h-screen">
      {/* ... (keep all your existing sections until the Team section) */}

      {/* Our Team Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        transition={{ duration: 0.6 }}
        className="py-16 px-4 bg-indigo-900/30 backdrop-blur-sm"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            Meet Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-indigo-400">Team</span>
          </h2>
          
          {/* Team Members Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-black/40 backdrop-blur-sm border border-violet-500/30 rounded-lg overflow-hidden"
              >
                <div className="h-64 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                    onError={(e) => {
                      e.target.src = 'https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80';
                    }}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white">{member.name}</h3>
                  <p className="text-violet-400 mb-3">{member.role}</p>
                  <p className="text-gray-300">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Pinterest-style Team Gallery */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ duration: 0.6 }}
            className="mb-12 text-center"
          >
            <h3 className="text-2xl font-bold text-white mb-4">Team Moments</h3>
            <p className="text-lg text-violet-200">
              Behind-the-scenes glimpses of our passionate team
            </p>
          </motion.div>

          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
            {teamGallery.map((image) => (
              <motion.div
                key={image.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                transition={{ duration: 0.4 }}
                className="break-inside-avoid group relative overflow-hidden rounded-lg bg-black/30 backdrop-blur-sm border border-violet-500/30"
              >
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    e.target.src = 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 flex flex-col justify-end">
                  <h3 className="text-white font-bold text-lg">{image.title}</h3>
                  <p className="text-violet-200 text-sm">{image.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* ... (keep all your remaining sections) */}
    </div>
  );
};

export default About;