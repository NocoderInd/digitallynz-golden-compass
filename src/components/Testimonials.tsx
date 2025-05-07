
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  position: string;
  company: string;
  image: string;
  content: string;
  rating: number;
}

const Testimonials: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Sarah Johnson",
      position: "Marketing Director",
      company: "NZ Retail Group",
      image: "/testimonial-1.jpg",
      content: "DigitallyNZ transformed our digital presence completely. Their SEO strategies doubled our online traffic, and their Google Ads campaign delivered an impressive ROI. Highly recommended!",
      rating: 5
    },
    {
      id: 2,
      name: "Michael Zhang",
      position: "CEO",
      company: "Kiwi Tech Innovations",
      content: "Working with the DigitallyNZ team was a game-changer for our startup. Their branding expertise and digital strategy helped us establish market presence quickly. Great communication throughout.",
      image: "/testimonial-2.jpg",
      rating: 5
    },
    {
      id: 3,
      name: "Emma Williams",
      position: "Operations Manager",
      company: "Auckland Services Ltd",
      content: "The website DigitallyNZ built for us not only looks stunning but converts visitors at an amazing rate. They truly understand the balance between design and functionality.",
      image: "/testimonial-3.jpg",
      rating: 5
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="section-padding bg-zinc-950">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="heading-lg inline-block relative fancy-border pb-4">
            Client <span className="text-golden">Testimonials</span>
          </h2>
          <p className="subheading max-w-3xl mx-auto">
            What our clients say about working with us
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative bg-zinc-900 rounded-xl p-8 md:p-12">
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4">
              <div className="w-20 h-20 rounded-full bg-golden flex items-center justify-center text-black font-bold text-2xl">
                NZ
              </div>
            </div>

            {/* Rating */}
            <div className="flex text-golden mb-6">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <Star key={i} fill="#FFD700" size={20} />
              ))}
            </div>

            {/* Content */}
            <blockquote className="text-lg md:text-xl mb-8">
              "{testimonials[currentIndex].content}"
            </blockquote>

            {/* Author */}
            <div className="flex items-center">
              <div className="w-14 h-14 rounded-full overflow-hidden mr-4">
                <img 
                  src={testimonials[currentIndex].image} 
                  alt={testimonials[currentIndex].name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="font-bold">{testimonials[currentIndex].name}</p>
                <p className="text-gray-400 text-sm">
                  {testimonials[currentIndex].position}, {testimonials[currentIndex].company}
                </p>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-end gap-2 mt-6">
              <button 
                onClick={prevTestimonial}
                className="w-10 h-10 rounded-full border border-golden text-golden flex items-center justify-center hover:bg-golden hover:text-black transition-colors"
              >
                <ChevronLeft size={20} />
              </button>
              <button 
                onClick={nextTestimonial}
                className="w-10 h-10 rounded-full border border-golden text-golden flex items-center justify-center hover:bg-golden hover:text-black transition-colors"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
