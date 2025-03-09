import React from 'react';
import { Diamond as Lemon, Instagram, Twitter, Linkedin, Facebook } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  const socialIcons = [
    { icon: <Instagram className="h-5 w-5" />, href: "#" },
    { icon: <Twitter className="h-5 w-5" />, href: "#" },
    { icon: <Linkedin className="h-5 w-5" />, href: "#" },
    { icon: <Facebook className="h-5 w-5" />, href: "#" }
  ];

  const quickLinks = [
    { name: "Home", href: "#" },
    { name: "About Us", href: "#" },
    { name: "Services", href: "#" },
    { name: "Projects", href: "#" },
    { name: "Contact", href: "#" }
  ];

  const serviceLinks = [
    { name: "Brand Identity", href: "#" },
    { name: "Digital Design", href: "#" },
    { name: "Marketing Materials", href: "#" },
    { name: "Consultation", href: "#" },
    { name: "Packaging Design", href: "#" }
  ];

  const contactInfo = [
    "123 Design Street",
    "Creative City, ST 12345",
    "hello@lemontreestudio.com",
    "(555) 123-4567"
  ];

  const footerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <motion.footer 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={footerVariants}
      className="bg-gray-900 text-white py-12"
    >
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <motion.div variants={itemVariants}>
            <div className="flex items-center mb-4">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <Lemon className="h-8 w-8 text-yellow-500 mr-2" />
              </motion.div>
              <span className="font-bold text-xl">Lemon Tree Studio</span>
            </div>
            <p className="text-gray-400 mb-6">
              Creating fresh designs that bring your brand to life.
            </p>
            <div className="flex space-x-4">
              {socialIcons.map((social, index) => (
                <motion.a 
                  key={index}
                  href={social.href} 
                  whileHover={{ y: -5, color: "#f59e0b" }}
                  className="text-gray-400 hover:text-yellow-500 transition duration-300"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <motion.li 
                  key={index}
                  whileHover={{ x: 5 }}
                >
                  <a href={link.href} className="text-gray-400 hover:text-yellow-500 transition duration-300">
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {serviceLinks.map((link, index) => (
                <motion.li 
                  key={index}
                  whileHover={{ x: 5 }}
                >
                  <a href={link.href} className="text-gray-400 hover:text-yellow-500 transition duration-300">
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-gray-400">
              {contactInfo.map((info, index) => (
                <motion.li 
                  key={index}
                  whileHover={{ x: 5 }}
                >
                  {info}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div 
          variants={itemVariants}
          className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Lemon Tree Studio. All rights reserved.
          </p>
          <div className="flex space-x-6">
            {["Privacy Policy", "Terms of Service", "Cookies Policy"].map((policy, index) => (
              <motion.a 
                key={index}
                href="#" 
                whileHover={{ y: -2, color: "#f59e0b" }}
                className="text-gray-400 hover:text-yellow-500 text-sm transition duration-300"
              >
                {policy}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;