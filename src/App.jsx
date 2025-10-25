import React, { useState, useEffect, useRef } from 'react';
import { Camera, Film, Edit3, Mail, Github, Linkedin, Instagram, Play, X } from 'lucide-react';

const App = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const projects = {
    video: [
      { id: 1, title: 'Marriage Hall Promotion Shoot', category: '', thumbnail: '/video1.mp4' },
      { id: 2, title: 'Promotion Shoot', category: '', thumbnail: '/video2.mp4' },
      { id: 3, title: 'Pre-Wedding Shoot', category: '', thumbnail: '/video3.mp4' },
    ],
    photo: [
      { id: 5, title: 'Marriage Event', category: '', thumbnail: '/image3.jpeg' },
      { id: 6, title: 'Baby Shoot', category: '', thumbnail: '/image2.jpeg' },
      { id: 7, title: 'Baby Shoot', category: '', thumbnail: '/image1.jpeg' },
    ],
    editing: [
      { id: 9, title: 'Video Editing', category: '', thumbnail: '/video4.mp4' },
      { id: 10, title: 'Video Editing', category: '', thumbnail: '/image4.jpeg' },
      { id: 11, title: 'Video Editing', category: '', thumbnail: '/image5.jpeg' },

    ]
  };

  const services = [
    { icon: <Film className="w-8 h-8" />, title: 'Videography', desc: 'Cinematic storytelling from concept to final cut' },
    { icon: <Camera className="w-8 h-8" />, title: 'Photography', desc: 'Capturing moments with artistic precision' },
    { icon: <Edit3 className="w-8 h-8" />, title: 'video Editing', desc: 'Advanced editing & color grading' }
  ];

  const scrollToSection = (section) => {
    setActiveSection(section);
    setIsMenuOpen(false);
    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-black text-white min-h-screen overflow-x-hidden scrollbar-hide">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              i_mani_0223
            </div>

            <div className="hidden md:flex space-x-8">
              {['home', 'work', 'services', 'contact'].map(item => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize transition-colors ${activeSection === item ? 'text-purple-400' : 'text-white/70 hover:text-white'
                    }`}
                >
                  {item}
                </button>
              ))}
            </div>

            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <div className="space-y-1">
                <div className="w-6 h-0.5 bg-white"></div>
                <div className="w-6 h-0.5 bg-white"></div>
                <div className="w-6 h-0.5 bg-white"></div>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-md border-t border-white/10">
            {['home', 'work', 'services', 'contact'].map(item => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="block w-full text-left px-4 py-3 capitalize hover:bg-white/5"
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-pink-900/20"
          style={{
            transform: `translate(${mousePosition.x * 20}px, ${mousePosition.y * 20}px)`
          }}
        />

        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-white rounded-full opacity-20"
              style={{
                width: Math.random() * 3 + 1 + 'px',
                height: Math.random() * 3 + 1 + 'px',
                left: Math.random() * 100 + '%',
                top: Math.random() * 100 + '%',
                animation: `float ${Math.random() * 10 + 10}s linear infinite`,
                animationDelay: Math.random() * 5 + 's'
              }}
            />
          ))}
        </div>

        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold mb-6 animate-fade-in">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
              Mani
            </span>
          </h1>
          <p className="text-xl sm:text-2xl text-white/70 mb-8 animate-fade-in-delay">
            Videography • Photography • Video Editing
          </p>
          <button
            onClick={() => scrollToSection('work')}
            className="bg-gradient-to-r from-purple-500 to-pink-500 px-8 py-3 rounded-full text-lg font-semibold hover:scale-105 transition-transform"
          >
            View Work
          </button>
        </div>

        <style jsx>{`
          @keyframes float {
            0%, 100% { transform: translateY(0) translateX(0); }
            50% { transform: translateY(-20px) translateX(10px); }
          }
          @keyframes fade-in {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in {
            animation: fade-in 1s ease-out;
          }
          .animate-fade-in-delay {
            animation: fade-in 1s ease-out 0.3s backwards;
          }
        `}</style>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-purple-900/10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            What I Do
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <div
                key={idx}
                className="group relative p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-purple-500/50 transition-all duration-300 hover:scale-105"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative">
                  <div className="text-purple-400 mb-4 transform group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                  <p className="text-white/70">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Featured Work
          </h2>

          {/* Video Projects */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <Film className="text-purple-400" />
              Videography
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {projects.video.map((project) => (
                <div
                  key={project.id}
                  className="group relative overflow-hidden rounded-xl cursor-pointer"
                  onClick={() => setSelectedProject(project)}
                >
                  {/* 🎥 Video preview */}
                  <video
                    src={project.thumbnail}
                    muted
                    loop
                    playsInline
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                    onMouseEnter={(e) => e.target.play()}
                    onMouseLeave={(e) => e.target.pause()}
                  />

                  {/* 🔲 Overlay with title & category */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <p className="text-sm text-purple-400 mb-1">{project.category}</p>
                      <h4 className="text-lg font-bold">{project.title}</h4>
                    </div>
                    <Play className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 text-white" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Photography */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <Camera className="text-pink-400" />
              Photography
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {projects.photo.map((project) => (
                <div
                  key={project.id}
                  className="group relative overflow-hidden rounded-xl cursor-pointer"
                  onClick={() => setSelectedProject(project)}
                >
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <p className="text-sm text-pink-400 mb-1">{project.category}</p>
                      <h4 className="text-lg font-bold">{project.title}</h4>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Editing */}
          <div>
            <h3 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <Edit3 className="text-cyan-400" />
              Video Editing
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {projects.editing.map((project) => (
                <div
                  key={project.id}
                  className="group relative overflow-hidden rounded-xl cursor-pointer"
                  onClick={() => setSelectedProject(project)}
                >
                  {/* 🎥 Video preview */}
                  {project.thumbnail?.includes(".mp4") ?
                    <video
                      src={project.thumbnail}
                      muted
                      loop
                      playsInline
                      className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                      onMouseEnter={(e) => e.target.play()}
                      onMouseLeave={(e) => e.target.pause()}
                    /> :
                    <img
                      src={project.thumbnail}
                      alt={project.title}
                      className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                    />}

                  {/* 🔲 Overlay with title & category */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <p className="text-sm text-purple-400 mb-1">{project.category}</p>
                      <h4 className="text-lg font-bold">{project.title}</h4>
                    </div>
                    <Play className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 text-white" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-purple-900/10 to-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Let's Create Together
          </h2>
          <p className="text-xl text-white/70 mb-12">
            Have a project in mind? Let's bring your vision to life.
          </p>

          <div className="flex justify-center items-center gap-6 mb-3">
            <a
              href="mailto:manidavinciresolve@gmail.com"
              className="p-3 bg-white/5 rounded-full hover:bg-white/10 transition-colors"
            >
              <Mail className="w-6 h-6" />
            </a>
            <a
              href="https://instagram.com/i_mani_0223"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/5 rounded-full hover:bg-white/10 transition-colors"
            >
              <Instagram className="w-6 h-6" />
            </a>

            {/* Right side — Contact number */}
            <div className="hidden md:block text-sm">
              📞 <a href="tel:+917010305975" className="hover:underline">7010305975</a>
            </div>
          </div>

          <button className="bg-gradient-to-r from-purple-500 to-pink-500 px-8 py-4 rounded-full text-lg font-semibold hover:scale-105 transition-transform">
            Get In Touch
          </button>
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-white/10 rounded-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 z-10 p-2 bg-black/50 rounded-full hover:bg-black/70 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Conditional: show video or image */}
            {selectedProject.thumbnail.endsWith(".mp4") ? (
              <video
                src={selectedProject.thumbnail}
                controls
                autoPlay
                loop
                playsInline
                className="w-full h-96 object-cover"
              />
            ) : (
              <img
                src={selectedProject.thumbnail}
                alt={selectedProject.title}
                className="w-full h-96 object-cover"
              />
            )}

            {/* Project details */}
            <div className="p-8">
              <p className="text-purple-400 mb-2">{selectedProject.category}</p>
              <h3 className="text-3xl font-bold mb-4">{selectedProject.title}</h3>
              <p className="text-white/70">
                This is a showcase of creative work combining technical excellence with artistic vision.
              </p>
            </div>
          </div>
        </div>
      )}


      {/* Footer */}
      <footer className="border-t border-white/10 py-8 text-center text-white/50">
        <p>© 2025 i_mani_0223. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;