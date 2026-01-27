import React, { useState, useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";

const slides = [
  {
    id: 1,
    title: "EXPERTISE IN ACTION IT DEVELOPMENT",
    description: "We provide innovative technology & solutions.",
    buttonText: "Know More",
    textColor: "text-white",
    imagePosition: "right",
  },
  {
    id: 2,
    title: "AI FOR THE DIGITAL ENTERPRISE ARTIFICIAL INTELLIGENCE",
    description: "With AI, enterprises can access the power of analytics insights.",
    buttonText: "Know More",
    textColor: "text-white",
    imagePosition: "left",
  },
  {
    id: 3,
    title: "MIGRATING TO THE CLOUD SOLUTIONS",
    description: "We've assembled, facilitated and conveyed cloud solutions.",
    buttonText: "Know More",
    textColor: "text-white",
    imagePosition: "right",
  },
];

const HeroSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlay] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Auto slide functionality
  useEffect(() => {
    if (!isAutoPlay) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlay]);

  // Ensure video plays automatically
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(e => {
        console.log("Video autoplay failed:", e);
      });
    }
  }, []);

  // const nextSlide = () => {
  //   setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  // };

  // const prevSlide = () => {
  //   setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  // };

  // const goToSlide = (index: number) => {
  //   setCurrentSlide(index);
  // };

  return (
    <div className="relative w-full h-[450px] md:h-[500px] overflow-hidden">
      {/* Video Background - Single continuous video */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover object-top"
        >
          <source src="/hero-bgvideo3.mp4" type="video/mp4" />
          <source src="/hero-bgvideo3.webm" type="video/webm" />
          {/* Fallback image if video doesn't load */}
          <div className="w-full h-full bg-gradient-to-br from-gray-900 to-black flex items-center justify-center">
            <div className="text-center text-white p-8">
              <h3 className="text-2xl font-bold mb-2">Technology Innovation</h3>
              <p>Your video background will appear here</p>
            </div>
          </div>
        </video>
        
        {/* Black gradient overlay for better text contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-black/50"></div>
        
        {/* Additional gradient for depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
      </div>

      {/* Slides Container */}
      <div className="relative w-full h-full z-10">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 w-full h-full transition-all duration-700 ease-in-out ${
              currentSlide === index
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-full"
            }`}
          >
            {/* Content Container */}
            <div className="relative h-full max-w-7xl mx-auto px-4 md:px-8 flex items-center">
              {/* Text Content Only - No Images */}
              <div className="w-full">
                <div className="max-w-4xl mx-auto text-center">
                  <div className="space-y-6">
                    <h1 className={`text-3xl md:text-5xl lg:text-3xl font-bold ${slide.textColor} leading-tight`}>
                      {slide.title}
                    </h1>
                    <p className="text-lg md:text-base text-white/90 max-w-3xl mx-auto">
                      {slide.description}
                    </p>
                  </div>
                  
                  {/* Know More Button */}
                  <div className="pt-8">
                    <button 
                      onClick={() => {/* Add your navigation or modal logic here */}}
                      className="group inline-flex items-center gap-3 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                    >
                      {slide.buttonText}
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default HeroSection;