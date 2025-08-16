import React from 'react';
import { Users, Award, Coffee, Heart } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Users, number: '500+', label: 'Happy Clients' },
    { icon: Award, number: '50+', label: 'Awards Won' },
    { icon: Coffee, number: '1000+', label: 'Cups of Coffee' },
    { icon: Heart, number: '100%', label: 'Passion' },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About Our Story
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We're a passionate team of designers and developers who believe in the power of 
            great design to transform businesses and create meaningful connections.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-900">
              Crafting Digital Excellence Since 2020
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our journey began with a simple mission: to create digital experiences that not only 
              look beautiful but also drive real results for our clients. We combine strategic 
              thinking with creative execution to deliver solutions that stand out in today's 
              competitive landscape.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              From startups to Fortune 500 companies, we've helped brands tell their stories 
              through innovative design and seamless user experiences.
            </p>
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
              Learn More
            </button>
          </div>
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-purple-100 to-pink-100 rounded-3xl p-8">
              <img 
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Team working" 
                className="w-full h-full object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <stat.icon className="text-purple-600" size={32} />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;