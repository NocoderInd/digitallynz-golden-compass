
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer: React.FC = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="bg-zinc-950 text-white">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-2">
            <a href="/" className="block mb-4">
              <img 
                src="/lovable-uploads/59460437-45f7-489f-9274-07e94323332e.png" 
                alt="DigitallyNZ Logo"
                className="h-16"
              />
            </a>
            <p className="text-gray-400 max-w-md">
              Your strategic partner for digital growth. We help businesses across New Zealand leverage digital solutions for lasting success.
            </p>
            <div className="mt-6">
              <h4 className="font-semibold mb-3">Subscribe to our newsletter</h4>
              <div className="flex">
                <Input 
                  type="email" 
                  placeholder="Your email" 
                  className="bg-zinc-900 border-zinc-800 rounded-r-none focus:border-golden"
                />
                <Button className="golden-bg rounded-l-none">
                  <ArrowRight size={18} />
                </Button>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-golden transition-colors">Search Engine Optimization</a></li>
              <li><a href="#" className="text-gray-400 hover:text-golden transition-colors">Meta & Google Ads</a></li>
              <li><a href="#" className="text-gray-400 hover:text-golden transition-colors">Analytics & Reporting</a></li>
              <li><a href="#" className="text-gray-400 hover:text-golden transition-colors">Branding & Design</a></li>
              <li><a href="#" className="text-gray-400 hover:text-golden transition-colors">Web Development</a></li>
              <li><a href="#" className="text-gray-400 hover:text-golden transition-colors">Growth Strategy</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-golden transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-golden transition-colors">Our Work</a></li>
              <li><a href="#" className="text-gray-400 hover:text-golden transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-golden transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-golden transition-colors">Contact</a></li>
              <li><a href="#" className="text-gray-400 hover:text-golden transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="border-t border-zinc-800 py-6">
        <div className="container-custom flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400">© {year} DigitallyNZ. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-golden transition-colors">Terms</a>
            <a href="#" className="text-gray-400 hover:text-golden transition-colors">Privacy</a>
            <a href="#" className="text-gray-400 hover:text-golden transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
