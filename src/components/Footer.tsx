import React from 'react';
import { Github, Linkedin, Twitter, Mail, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Digital Studio
            </h3>
            <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
              We create exceptional digital experiences that blend creativity with 
              cutting-edge technology to help businesses thrive in the digital age.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-purple-600 transition-colors duration-300">
                <Github size={20} />
              </a>
              <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-purple-600 transition-colors duration-300">
                <Linkedin size={20} />
              </a>
              <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-purple-600 transition-colors duration-300">
                <Twitter size={20} />
              </a>
              <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-purple-600 transition-colors duration-300">
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors duration-300">UI/UX Design</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-300">Web Development</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-300">Mobile Apps</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-300">SEO Optimization</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-300">Digital Strategy</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors duration-300">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-300">Portfolio</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-300">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-300">Blog</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-300">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0">
              © 2024 Digital Studio. All rights reserved.
            </p>
            <p className="text-gray-400 flex items-center">
              Made with <Heart className="text-red-500 mx-1" size={16} /> by Digital Studio
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;