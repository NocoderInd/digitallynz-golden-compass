
import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
}

const Portfolio: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects: Project[] = [
    {
      id: 1,
      title: "Kiwi Retail E-commerce",
      category: "ecommerce",
      image: "/portfolio-1.jpg",
      description: "SEO & Web Development"
    },
    {
      id: 2,
      title: "Auckland Tourism Campaign",
      category: "marketing",
      image: "/portfolio-2.jpg",
      description: "Digital Marketing & Social Media"
    },
    {
      id: 3,
      title: "NZ Tech Startup",
      category: "branding",
      image: "/portfolio-3.jpg",
      description: "Branding & Strategy"
    },
    {
      id: 4,
      title: "Wellington Coffee Chain",
      category: "branding",
      image: "/portfolio-4.jpg",
      description: "Branding & Social Media"
    },
    {
      id: 5,
      title: "Christchurch Real Estate",
      category: "marketing",
      image: "/portfolio-5.jpg",
      description: "SEO & Google Ads"
    },
    {
      id: 6,
      title: "NZ Financial Services",
      category: "ecommerce",
      image: "/portfolio-6.jpg",
      description: "Web Development & SEO"
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="portfolio" className="section-padding bg-black">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="heading-lg inline-block relative fancy-border pb-4">
            Our <span className="text-golden">Portfolio</span>
          </h2>
          <p className="subheading max-w-3xl mx-auto">
            Explore our successful projects and client partnerships
          </p>
        </div>

        {/* Filter Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button 
            className={`px-6 py-2 rounded-full transition-colors ${activeFilter === 'all' ? 'bg-golden text-black' : 'bg-zinc-900 hover:bg-zinc-800'}`}
            onClick={() => setActiveFilter('all')}
          >
            All
          </button>
          <button 
            className={`px-6 py-2 rounded-full transition-colors ${activeFilter === 'ecommerce' ? 'bg-golden text-black' : 'bg-zinc-900 hover:bg-zinc-800'}`}
            onClick={() => setActiveFilter('ecommerce')}
          >
            E-Commerce
          </button>
          <button 
            className={`px-6 py-2 rounded-full transition-colors ${activeFilter === 'marketing' ? 'bg-golden text-black' : 'bg-zinc-900 hover:bg-zinc-800'}`}
            onClick={() => setActiveFilter('marketing')}
          >
            Marketing
          </button>
          <button 
            className={`px-6 py-2 rounded-full transition-colors ${activeFilter === 'branding' ? 'bg-golden text-black' : 'bg-zinc-900 hover:bg-zinc-800'}`}
            onClick={() => setActiveFilter('branding')}
          >
            Branding
          </button>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => (
            <div key={project.id} className="group relative overflow-hidden rounded-lg hover-scale">
              <div className="aspect-square overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-xl font-bold text-white">{project.title}</h3>
                <p className="text-golden mb-4">{project.description}</p>
                <a href="#" className="inline-flex items-center text-white hover:text-golden transition-colors">
                  View Project <ArrowRight className="ml-2" size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
