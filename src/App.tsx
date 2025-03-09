import React, { useEffect } from 'react';
import { Leaf, Zap, MessageSquare, Users, ArrowRight } from 'lucide-react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProjectCard from './components/ProjectCard';

function App() {
  const projects = [
    {
      id: 1,
      title: "Eco-Friendly Packaging",
      description: "Sustainable packaging design for a local organic food brand.",
      imageUrl: "https://images.unsplash.com/photo-1610348725531-843dff563e2c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      category: "Packaging"
    },
    {
      id: 2,
      title: "Citrus Brand Identity",
      description: "Complete brand identity for a fresh juice company.",
      imageUrl: "https://images.unsplash.com/photo-1597848212624-a19eb35e2651?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      category: "Branding"
    },
    {
      id: 3,
      title: "Summer Collection",
      description: "Vibrant summer-themed illustrations for a fashion line.",
      imageUrl: "https://images.unsplash.com/photo-1523944339743-0fe06f079939?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      category: "Illustration"
    },
    {
      id: 4,
      title: "Lemon App Interface",
      description: "User interface design for a wellness tracking application.",
      imageUrl: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      category: "UI/UX"
    }
  ];

  const services = [
    {
      icon: <Leaf className="h-8 w-8 text-yellow-500" />,
      title: "Brand Identity",
      description: "We create distinctive brand identities that resonate with your audience and stand out in the market."
    },
    {
      icon: <Zap className="h-8 w-8 text-yellow-500" />,
      title: "Digital Design",
      description: "From websites to apps, we design digital experiences that are both beautiful and functional."
    },
    {
      icon: <MessageSquare className="h-8 w-8 text-yellow-500" />,
      title: "Marketing Materials",
      description: "Eye-catching marketing collateral that effectively communicates your message."
    },
    {
      icon: <Users className="h-8 w-8 text-yellow-500" />,
      title: "Consultation",
      description: "Expert advice to help you navigate the design landscape and make informed decisions."
    }
  ];

  // Animation for sections
  const FadeInSection = ({ children, delay = 0, className = "" }) => {
    const controls = useAnimation();
    const [ref, inView] = useInView({
      triggerOnce: true,
      threshold: 0.1,
    });

    useEffect(() => {
      if (inView) {
        controls.start("visible");
      }
    }, [controls, inView]);

    return (
      <motion.div
        ref={ref}
        animate={controls}
        initial="hidden"
        variants={{
          visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay } },
          hidden: { opacity: 0, y: 50 }
        }}
        className={className}
      >
        {children}
      </motion.div>
    );
  };

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-yellow-50 py-20 md:py-32 overflow-hidden">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-6 relative z-10"
        >
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Creative design studio for brands that want to stand out
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              We blend creativity with strategy to create designs that captivate and convert.
            </p>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 px-8 rounded-full transition duration-300 flex items-center"
            >
              Get in touch
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                <ArrowRight className="ml-2 h-5 w-5" />
              </motion.div>
            </motion.button>
          </motion.div>
        </motion.div>
        
        {/* Animated background elements */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.5 }}
          className="absolute right-0 bottom-0 w-1/3 h-1/2 bg-yellow-100 -z-10 hidden md:block"
        />
        
        <motion.div 
          animate={{ 
            y: [0, -15, 0],
            rotate: [0, 5, 0]
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 6,
            ease: "easeInOut" 
          }}
          className="absolute top-20 right-20 w-20 h-20 rounded-full bg-yellow-300 opacity-20 hidden md:block"
        />
        
        <motion.div 
          animate={{ 
            y: [0, 20, 0],
            x: [0, -10, 0]
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 8,
            ease: "easeInOut" 
          }}
          className="absolute bottom-40 left-20 w-16 h-16 rounded-full bg-yellow-400 opacity-10 hidden md:block"
        />
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center">
            <FadeInSection className="md:w-1/2 mb-10 md:mb-0">
              <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }}>
                <img 
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Creative workspace" 
                  className="rounded-lg shadow-xl"
                />
              </motion.div>
            </FadeInSection>
            <div className="md:w-1/2 md:pl-12">
              <FadeInSection delay={0.2}>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">About Lemon Tree Studio</h2>
                <p className="text-gray-700 mb-6">
                  Founded in 2018, Lemon Tree Studio is a creative design agency specializing in brand identity, 
                  digital design, and visual storytelling. We believe that great design has the power to transform 
                  businesses and create meaningful connections with audiences.
                </p>
                <p className="text-gray-700 mb-8">
                  Our team of passionate designers, strategists, and thinkers work collaboratively to deliver 
                  fresh, innovative solutions that help our clients achieve their goals.
                </p>
                <motion.button 
                  whileHover={{ scale: 1.05, backgroundColor: "#f59e0b", color: "white" }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-white font-semibold py-2 px-6 rounded-full transition duration-300"
                >
                  Learn more about us
                </motion.button>
              </FadeInSection>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50 relative overflow-hidden">
        {/* Animated background elements */}
        <motion.div 
          animate={{ 
            rotate: 360,
            x: [0, 20, 0],
            y: [0, -20, 0]
          }}
          transition={{ 
            rotate: { repeat: Infinity, duration: 20, ease: "linear" },
            x: { repeat: Infinity, duration: 10, ease: "easeInOut" },
            y: { repeat: Infinity, duration: 15, ease: "easeInOut" }
          }}
          className="absolute -top-20 -left-20 w-40 h-40 rounded-full border-8 border-yellow-100 opacity-50"
        />
        
        <motion.div 
          animate={{ 
            rotate: -360,
            x: [0, -30, 0],
            y: [0, 30, 0]
          }}
          transition={{ 
            rotate: { repeat: Infinity, duration: 25, ease: "linear" },
            x: { repeat: Infinity, duration: 12, ease: "easeInOut" },
            y: { repeat: Infinity, duration: 18, ease: "easeInOut" }
          }}
          className="absolute -bottom-40 -right-20 w-80 h-80 rounded-full border-12 border-yellow-50 opacity-30"
        />
        
        <div className="container mx-auto px-6 relative z-10">
          <FadeInSection className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              We offer a range of design services to help your business thrive in today's competitive landscape.
            </p>
          </FadeInSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <FadeInSection key={index} delay={0.1 * index}>
                <motion.div 
                  whileHover={{ y: -10, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
                  className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition duration-300"
                >
                  <motion.div 
                    whileHover={{ rotate: [0, -10, 10, -5, 5, 0], scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    className="mb-4"
                  >
                    {service.icon}
                  </motion.div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-700">{service.description}</p>
                </motion.div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <FadeInSection className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Projects</h2>
              <p className="text-xl text-gray-700">
                A selection of our recent work across various industries.
              </p>
            </div>
            <motion.button 
              whileHover={{ x: 5 }}
              className="text-yellow-500 hover:text-yellow-600 font-semibold flex items-center"
            >
              View all projects
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                <ArrowRight className="ml-2 h-5 w-5" />
              </motion.div>
            </motion.button>
          </FadeInSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {projects.map((project, index) => (
              <FadeInSection key={project.id} delay={0.15 * index}>
                <ProjectCard project={project} />
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 bg-yellow-50 relative overflow-hidden">
        {/* Animated quote marks */}
        <motion.div 
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="absolute top-10 left-10 text-9xl font-serif text-yellow-500"
        >
          "
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.1, scale: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="absolute bottom-10 right-10 text-9xl font-serif text-yellow-500"
        >
          "
        </motion.div>
        
        <div className="container mx-auto px-6 relative z-10">
          <FadeInSection className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-12">What Our Clients Say</h2>
            <motion.blockquote 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="text-2xl text-gray-700 italic mb-8"
            >
              "Working with Lemon Tree Studio transformed our brand. Their creative approach and attention to detail 
              resulted in a design that perfectly captures our company's essence."
            </motion.blockquote>
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex items-center justify-center"
            >
              <motion.img 
                whileHover={{ scale: 1.1 }}
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=120&h=120&q=80" 
                alt="Client" 
                className="w-16 h-16 rounded-full mr-4 object-cover"
              />
              <div className="text-left">
                <p className="font-semibold text-gray-900">Sarah Johnson</p>
                <p className="text-gray-600">CEO, Bright Foods</p>
              </div>
            </motion.div>
          </FadeInSection>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row">
            <FadeInSection className="md:w-1/2 mb-10 md:mb-0">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Let's Create Something Amazing Together</h2>
              <p className="text-xl text-gray-700 mb-8">
                Ready to elevate your brand? Get in touch with us to discuss your project.
              </p>
              <div className="space-y-4">
                <motion.div 
                  whileHover={{ x: 5 }}
                  className="flex items-center"
                >
                  <motion.div 
                    whileHover={{ rotate: 15 }}
                    className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mr-4"
                  >
                    <MessageSquare className="h-6 w-6 text-yellow-500" />
                  </motion.div>
                  <div>
                    <p className="text-gray-600">Email</p>
                    <p className="font-semibold">hello@lemontreestudio.com</p>
                  </div>
                </motion.div>
                <motion.div 
                  whileHover={{ x: 5 }}
                  className="flex items-center"
                >
                  <motion.div 
                    whileHover={{ rotate: 15 }}
                    className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mr-4"
                  >
                    <Users className="h-6 w-6 text-yellow-500" />
                  </motion.div>
                  <div>
                    <p className="text-gray-600">Visit Us</p>
                    <p className="font-semibold">123 Design Street, Creative City</p>
                  </div>
                </motion.div>
              </div>
            </FadeInSection>
            <FadeInSection delay={0.3} className="md:w-1/2 md:pl-12">
              <motion.form 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-gray-50 p-8 rounded-lg shadow-md"
              >
                <div className="mb-6">
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name</label>
                  <motion.input 
                    whileFocus={{ scale: 1.01 }}
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    placeholder="Your name"
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
                  <motion.input 
                    whileFocus={{ scale: 1.01 }}
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    placeholder="Your email"
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
                  <motion.textarea 
                    whileFocus={{ scale: 1.01 }}
                    id="message" 
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    placeholder="Tell us about your project"
                  ></motion.textarea>
                </div>
                <motion.button 
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  type="submit" 
                  className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 px-6 rounded-lg transition duration-300"
                >
                  Send Message
                </motion.button>
              </motion.form>
            </FadeInSection>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default App;