
import React from 'react';
import { Search, BarChart3, Megaphone, Palette, Code, LineChart } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon }) => {
  return (
    <div className="bg-zinc-900 p-8 rounded-lg hover-scale border border-zinc-800 hover:border-golden transition-all duration-300">
      <div className="text-golden mb-5">{icon}</div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
};

const Services: React.FC = () => {
  const services = [
    {
      icon: <Search size={36} />,
      title: "Search Engine Optimization",
      description: "Boost your visibility online and climb the ranks of search engine results with our targeted SEO strategies."
    },
    {
      icon: <Megaphone size={36} />,
      title: "Meta & Google Ads",
      description: "Reach potential customers through strategic paid advertising campaigns on major platforms."
    },
    {
      icon: <BarChart3 size={36} />,
      title: "Analytics & Reporting",
      description: "Data-driven insights to measure performance and inform strategic business decisions."
    },
    {
      icon: <Palette size={36} />,
      title: "Branding & Design",
      description: "Create a memorable brand identity with professional logo design, visual elements, and brand guidelines."
    },
    {
      icon: <Code size={36} />,
      title: "Web Development",
      description: "Custom websites and applications built for performance, user experience, and conversion optimization."
    },
    {
      icon: <LineChart size={36} />,
      title: "Growth Strategy",
      description: "Comprehensive digital strategies aligned with your business goals to drive sustainable growth."
    },
  ];

  return (
    <section id="services" className="section-padding bg-zinc-950">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="heading-lg inline-block relative fancy-border pb-4">
            Our <span className="text-golden">Services</span>
          </h2>
          <p className="subheading max-w-3xl mx-auto">
            Comprehensive digital solutions to elevate your business in the digital landscape
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
