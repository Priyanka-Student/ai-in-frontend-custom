import React from 'react';
import { Palette, Code, Smartphone, Search, Globe, Zap } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Beautiful, intuitive designs that create memorable user experiences and drive engagement.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Code,
      title: 'Web Development',
      description: 'Custom websites and web applications built with modern technologies and best practices.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Smartphone,
      title: 'Mobile Apps',
      description: 'Native and cross-platform mobile applications that deliver exceptional performance.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Search,
      title: 'SEO Optimization',
      description: 'Boost your online visibility and drive organic traffic with our proven SEO strategies.',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: Globe,
      title: 'Digital Strategy',
      description: 'Comprehensive digital strategies that align with your business goals and market needs.',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      icon: Zap,
      title: 'Performance',
      description: 'Lightning-fast websites and applications optimized for speed and user experience.',
      color: 'from-yellow-500 to-orange-500'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We offer a comprehensive range of digital services to help your business 
            thrive in the modern digital landscape.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 group"
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>
              <button className="text-purple-600 font-semibold hover:text-purple-800 transition-colors duration-300">
                Learn More →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;