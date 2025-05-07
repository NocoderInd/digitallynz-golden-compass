
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="section-padding bg-black">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="heading-lg relative fancy-border pb-4">
              Digital Excellence <span className="text-golden">Since 2015</span>
            </h2>
            <p className="text-gray-300 text-lg">
              At DigitallyNZ, we transform businesses through strategic digital marketing and innovative technology solutions. Based in Auckland, we serve clients across New Zealand and beyond.
            </p>
            <p className="text-gray-300">
              Our team of digital strategists, designers, and developers work together to create comprehensive digital experiences that drive real business results.
            </p>
            <div className="grid grid-cols-2 gap-6 pt-4">
              <div>
                <h3 className="text-golden text-4xl font-bold">200+</h3>
                <p className="text-gray-300">Clients Served</p>
              </div>
              <div>
                <h3 className="text-golden text-4xl font-bold">15M+</h3>
                <p className="text-gray-300">Revenue Generated</p>
              </div>
              <div>
                <h3 className="text-golden text-4xl font-bold">50+</h3>
                <p className="text-gray-300">Industries</p>
              </div>
              <div>
                <h3 className="text-golden text-4xl font-bold">98%</h3>
                <p className="text-gray-300">Client Retention</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-64 h-64 bg-golden rounded-tl-3xl z-0"></div>
            <div className="relative z-10 rounded-tr-3xl rounded-bl-3xl overflow-hidden">
              <img 
                src="/about-image.jpg" 
                alt="Digital agency team" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
