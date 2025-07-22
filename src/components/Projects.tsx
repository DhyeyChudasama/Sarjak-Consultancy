import React, { useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Calendar, MapPin, X } from 'lucide-react';

const Projects: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: "Residential Project 1",
      category: "Residential",
      image: "/projects/project-1.jpg",
      date: "2024",
      location: "Junagadh, Gujarat",
      description: "High-quality residential construction with modern amenities and superior finishing.",
      fallbackImage: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      id: 2,
      title: "Commercial Project 1",
      category: "Commercial",
      image: "/projects/project-2.jpg",
      date: "2023",
      location: "Junagadh, Gujarat",
      description: "Professional commercial construction with modern design and quality materials.",
      fallbackImage: "https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      id: 3,
      title: "Residential Project 2",
      category: "Residential",
      image: "/projects/project-3.jpg",
      date: "2023",
      location: "Junagadh, Gujarat",
      description: "Premium residential construction with attention to detail and quality craftsmanship.",
      fallbackImage: "https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      id: 4,
      title: "Commercial Project 2",
      category: "Commercial",
      image: "/projects/project-4.jpg",
      date: "2022",
      location: "Junagadh, Gujarat",
      description: "Commercial building construction with modern architecture and professional finish.",
      fallbackImage: "https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      id: 5,
      title: "Residential Project 3",
      category: "Residential",
      image: "/projects/project-5.jpg",
      date: "2021",
      location: "Junagadh, Gujarat",
      description: "Quality residential construction with modern amenities and superior materials.",
      fallbackImage: "https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      id: 6,
      title: "Commercial Project 3",
      category: "Commercial",
      image: "/projects/project-6.jpg",
      date: "2020",
      location: "Junagadh, Gujarat",
      description: "Professional commercial construction with quality workmanship and timely delivery.",
      fallbackImage: "https://images.pexels.com/photos/1427107/pexels-photo-1427107.jpeg?auto=compress&cs=tinysrgb&w=800"
    }
  ];

  return (
    <>
      <section id="projects" className="py-20 bg-gray-50" ref={ref}>
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our <span className="text-blue-700">Projects</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our portfolio of successful projects that showcase our commitment to quality, 
              innovation, and client satisfaction.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                className="group bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer"
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                onClick={() => setSelectedProject(project.id)}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = project.fallbackImage;
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-4 right-4">
                    <span className="bg-blue-700 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {project.category}
                    </span>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ExternalLink className="w-12 h-12 text-white" />
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors">
                    {project.title}
                  </h3>
                  
                  <div className="flex items-center text-gray-500 text-sm mb-2">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>{project.date}</span>
                  </div>
                  
                  <div className="flex items-center text-gray-500 text-sm mb-4">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span>{project.location}</span>
                  </div>
                  
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {project.description.substring(0, 100)}...
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedProject && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedProject(null)}
        >
          <motion.div
            className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            {(() => {
              const project = projects.find(p => p.id === selectedProject);
              if (!project) return null;
              
              return (
                <>
                  <div className="relative">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-80 object-cover rounded-t-2xl"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = project.fallbackImage;
                      }}
                    />
                    <button
                      aria-label="Close"
                      onClick={() => setSelectedProject(null)}
                      className="absolute top-4 right-4 bg-white bg-opacity-90 rounded-full p-2 hover:bg-opacity-100 transition-colors"
                    >
                      <X className="w-6 h-6" />
                    </button>
                  </div>
                  
                  <div className="p-8">
                    <div className="flex items-center justify-between mb-4">
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                        {project.category}
                      </span>
                      <span className="text-gray-500 text-sm">{project.date}</span>
                    </div>
                    
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">{project.title}</h3>
                    
                    <div className="flex items-center text-gray-600 mb-6">
                      <MapPin className="w-5 h-5 mr-2" />
                      <span>{project.location}</span>
                    </div>
                    
                    <p className="text-gray-700 leading-relaxed mb-8">
                      {project.description}
                    </p>
                    
                    <motion.button
                      className="w-full bg-blue-700 text-white py-3 px-6 rounded-lg hover:bg-blue-800 transition-colors font-semibold"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                      Discuss Similar Project
                    </motion.button>
                  </div>
                </>
              );
            })()}
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

export default Projects;