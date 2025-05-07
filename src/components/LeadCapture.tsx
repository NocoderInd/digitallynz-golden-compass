
import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";

const LeadCapture: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    businessName: '',
    phone: '',
    location: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 5000); // Show after 5 seconds

    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Form validation
    if (!formData.businessName || !formData.phone) {
      toast({
        title: "Error",
        description: "Please fill out all required fields",
        variant: "destructive"
      });
      return;
    }

    // Submit form logic would go here
    console.log("Form submitted:", formData);
    
    // Show success message
    setIsSubmitted(true);
    
    // Reset form after submission
    setTimeout(() => {
      setIsVisible(false);
      
      // Reset for next time
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          businessName: '',
          phone: '',
          location: ''
        });
      }, 500);
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/70 backdrop-blur-sm">
      <div className="w-full max-w-md bg-zinc-900 rounded-lg relative border border-golden animate-fade-up">
        <button 
          onClick={() => setIsVisible(false)}
          className="absolute top-4 right-4 text-gray-400 hover:text-white"
        >
          <X size={20} />
        </button>

        <div className="p-6 md:p-8">
          {!isSubmitted ? (
            <>
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold mb-2">Get Your Free Strategy</h2>
                <p className="text-gray-400">Fill out the form below and we'll contact you within 24 hours</p>
              </div>

              <form onSubmit={handleSubmit}>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="businessName" className="block text-sm font-medium mb-1">
                      Business Name*
                    </label>
                    <Input
                      id="businessName"
                      name="businessName"
                      value={formData.businessName}
                      onChange={handleChange}
                      required
                      className="bg-zinc-800 border-zinc-700 focus:border-golden"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-1">
                      Phone Number*
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="bg-zinc-800 border-zinc-700 focus:border-golden"
                    />
                  </div>

                  <div>
                    <label htmlFor="location" className="block text-sm font-medium mb-1">
                      Google Maps Location
                    </label>
                    <Input
                      id="location"
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      placeholder="e.g., Auckland CBD"
                      className="bg-zinc-800 border-zinc-700 focus:border-golden"
                    />
                  </div>

                  <Button type="submit" className="golden-bg w-full py-6">
                    Get My Free Strategy
                  </Button>
                </div>
              </form>
            </>
          ) : (
            <div className="py-8 text-center">
              <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Thanks!</h3>
              <p className="text-gray-400">We'll reach out shortly with your custom strategy.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LeadCapture;
