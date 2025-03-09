import React from 'react';
import { motion } from 'framer-motion';

interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  category: string;
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <motion.div 
      whileHover={{ y: -10 }}
      className="group overflow-hidden rounded-lg shadow-md hover:shadow-xl transition duration-300"
    >
      <div className="relative overflow-hidden">
        <motion.img 
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.6 }}
          src={project.imageUrl} 
          alt={project.title} 
          className="w-full h-64 object-cover transform transition duration-500"
        />
        <motion.div 
          initial={{ x: -100 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute top-4 left-4"
        >
          <motion.span 
            whileHover={{ scale: 1.1 }}
            className="bg-yellow-500 text-white text-xs font-semibold px-3 py-1 rounded-full"
          >
            {project.category}
          </motion.span>
        </motion.div>
      </div>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="p-6"
      >
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
        <p className="text-gray-700">{project.description}</p>
      </motion.div>
    </motion.div>
  );
};

export default ProjectCard;