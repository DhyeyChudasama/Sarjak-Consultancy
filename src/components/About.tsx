import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award, Users, Calendar, CheckCircle } from 'lucide-react';

const About: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { icon: Calendar, label: "Years Experience", value: "22+" },
    { icon: Users, label: "Projects Completed", value: "50+" },
    { icon: Award, label: "Satisfied Clients", value: "100+" },
    { icon: CheckCircle, label: "Quality Assurance", value: "100%" }
  ];

  const experiences = [
    { year: "2003", title: "Company Founded", desc: "Sarjak Consultancy established with vision for quality construction" },
    { year: "2008", title: "Expanded Services", desc: "Added comprehensive surveying and supervision services" },
    { year: "2015", title: "Major Projects", desc: "Completed significant residential and commercial developments" },
    { year: "2025", title: "Currently Working", desc: "Continuing to serve clients with excellence and innovation" }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About <span className="text-blue-700">Sarjak Consultancy</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Led by Rajesh V. Chudasama, we bring over 15 years of expertise in construction, 
            surveying, and project consultation to deliver exceptional results.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
              <img
                src="/founder-photo.jpg"
                alt="Rajesh V. Chudasama - Founder & Owner of Sarjak Consultancy"
                className="rounded-lg shadow-2xl w-full h-96 object-cover"
                onError={(e) => {
                  // Fallback to placeholder if founder photo is not uploaded
                  (e.target as HTMLImageElement).src = "https://images.pexels.com/photos/1134166/pexels-photo-1134166.jpeg?auto=compress&cs=tinysrgb&w=800";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent rounded-lg" />
              
              {/* Professional Badge */}
              <div className="absolute bottom-4 left-4 bg-white bg-opacity-95 backdrop-blur-sm px-4 py-2 rounded-lg shadow-lg">
                <p className="text-sm font-semibold text-gray-900">Founder & Owner</p>
                <p className="text-xs text-blue-700">22+ Years Experience</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Meet Our Founder</h3>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              <strong>Rajesh V. Chudasama</strong> brings extensive experience in construction and surveying, 
              with a commitment to delivering projects that exceed client expectations. His expertise spans 
              residential, commercial, and industrial construction projects throughout Gujarat.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-6 h-6 text-green-500" />
                <span className="text-gray-700">Licensed Building Contractor</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-6 h-6 text-green-500" />
                <span className="text-gray-700">Certified Land Surveyor</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-6 h-6 text-green-500" />
                <span className="text-gray-700">Project Management Expert</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg text-center"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <stat.icon className="w-12 h-12 text-blue-700 mx-auto mb-4" />
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Journey</h3>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-0.5 w-0.5 h-full bg-blue-200"></div>
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className={`flex items-center mb-8 ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
              >
                <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                  <div className="bg-white p-6 rounded-lg shadow-lg">
                    <div className="text-2xl font-bold text-blue-700 mb-2">{exp.year}</div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">{exp.title}</h4>
                    <p className="text-gray-600">{exp.desc}</p>
                  </div>
                </div>
                <div className="w-2/12 flex justify-center">
                  <div className="w-4 h-4 bg-blue-700 rounded-full border-4 border-white shadow-lg"></div>
                </div>
                <div className="w-5/12"></div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;