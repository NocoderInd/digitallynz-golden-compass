
import React, { useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (heroRef.current) {
        // Parallax effect
        heroRef.current.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div 
      ref={heroRef}
      className="relative h-screen flex items-center justify-center bg-black bg-[url('/hero-bg.jpg')] bg-cover bg-center bg-blend-overlay bg-opacity-60"
    >
      <div className="absolute inset-0 bg-black/70"></div>
      
      <div className="container mx-auto px-4 z-10 text-center">
        <div className="space-y-6 max-w-4xl mx-auto">
          <h1 className="heading-xl text-white animate-fade-down">
            We Scale Businesses With <span className="text-golden">Digital Precision</span>
          </h1>
          
          <p className="subheading max-w-2xl mx-auto animate-fade-up">
            Digital marketing done right – from Auckland to the world.
            We help businesses grow through strategic digital solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-6 animate-fade-up" style={{animationDelay: "0.3s"}}>
            <Button className="golden-bg hover:opacity-90 text-lg py-6 px-8">
              Get Started
            </Button>
            <Button variant="outline" className="border-golden text-golden hover:text-black hover:bg-golden text-lg py-6 px-8">
              See Our Work <ArrowRight className="ml-2" size={18} />
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-white">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-down">
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Hero;
