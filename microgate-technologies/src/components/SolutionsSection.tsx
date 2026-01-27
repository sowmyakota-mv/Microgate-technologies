import React, { useState, useRef, useEffect } from "react";
import { 
  HeadphonesIcon as Consulting,
  Network,
  CheckSquare,
  Home,
  Zap,
  Cloud,
  BarChart3,
  ArrowRight,
  ChevronLeft,
  ChevronRight
} from "lucide-react";

const SolutionsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);
  const containerRef = useRef<HTMLDivElement>(null);

  const allSolutions = [
    {
      id: 1,
      title: "IT Consulting",
      icon: <Consulting className="w-8 h-8" />,
      description: "Strategic technology consulting to align IT with business objectives and drive digital transformation.",
      gradient: "from-blue-500 to-blue-600",
      bg: "bg-blue-50",
      iconColor: "text-blue-600",
      image: "/it-consulting.png"
    },
    {
      id: 2,
      title: "IT Outsourcing",
      icon: <Network className="w-8 h-8" />,
      description: "Comprehensive IT outsourcing services to reduce costs and improve operational efficiency.",
      gradient: "from-green-500 to-green-600",
      bg: "bg-green-50",
      iconColor: "text-green-600",
      image: "/it-outsourcing.png"
    },
    {
      id: 3,
      title: "Testing & QA",
      icon: <CheckSquare className="w-8 h-8" />,
      description: "Comprehensive software testing and quality assurance services for flawless digital solutions.",
      gradient: "from-red-500 to-red-600",
      bg: "bg-red-50",
      iconColor: "text-red-600",
      image: "/testing-solutions.png"
    },
    {
      id: 4,
      title: "Mortgage Solutions",
      icon: <Home className="w-8 h-8" />,
      description: "Specialized technology solutions for mortgage and lending industry automation.",
      gradient: "from-amber-500 to-amber-600",
      bg: "bg-amber-50",
      iconColor: "text-amber-600",
      image: "/mortage-solutions.png"
    },
    {
      id: 5,
      title: "Power Apps",
      icon: <Zap className="w-8 h-8" />,
      description: "Custom Power Apps development to streamline business processes and boost productivity.",
      gradient: "from-purple-500 to-purple-600",
      bg: "bg-purple-50",
      iconColor: "text-purple-600",
      image: "/power-solutions.png"
    },
    {
      id: 6,
      title: "Cloud Solutions",
      icon: <Cloud className="w-8 h-8" />,
      description: "Comprehensive cloud migration, implementation, and management services across platforms.",
      gradient: "from-indigo-500 to-indigo-600",
      bg: "bg-indigo-50",
      iconColor: "text-indigo-600",
      image: "/cloud-solutions.png"
    },
    {
      id: 7,
      title: "BI & Visualization",
      icon: <BarChart3 className="w-8 h-8" />,
      description: "Business intelligence and data visualization solutions for data-driven decision making.",
      gradient: "from-teal-500 to-teal-600",
      bg: "bg-teal-50",
      iconColor: "text-teal-600",
      image: "/bi-solutions.png"
    }
  ];

  // Update visible cards based on screen size
  useEffect(() => {
    const updateVisibleCards = () => {
      if (window.innerWidth >= 1280) {
        setVisibleCards(3); // xl screens
      } else if (window.innerWidth >= 1024) {
        setVisibleCards(3); // lg screens
      } else if (window.innerWidth >= 768) {
        setVisibleCards(2); // md screens
      } else {
        setVisibleCards(1); // mobile
      }
    };

    updateVisibleCards();
    window.addEventListener('resize', updateVisibleCards);
    return () => window.removeEventListener('resize', updateVisibleCards);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => {
      const maxIndex = allSolutions.length - visibleCards;
      if (prevIndex >= maxIndex) {
        return 0; // Go back to first solution
      }
      return prevIndex + 1;
    });
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex <= 0) {
        return allSolutions.length - visibleCards; // Go to last solution
      }
      return prevIndex - 1;
    });
  };

  const getVisibleSolutions = () => {
    // Handle edge case for last positions
    const endIndex = currentIndex + visibleCards;
    if (endIndex > allSolutions.length) {
      const firstPart = allSolutions.slice(currentIndex);
      const remaining = visibleCards - firstPart.length;
      const secondPart = allSolutions.slice(0, remaining);
      return [...firstPart, ...secondPart];
    }
    return allSolutions.slice(currentIndex, endIndex);
  };

  const isAtStart = currentIndex === 0;
  const isAtEnd = currentIndex >= allSolutions.length - visibleCards;

  return (
    <section className="py-16 md:py-12 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header Section */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#1E3A8A]/10 to-[#3B82F6]/10 text-[#1E3A8A] text-sm font-semibold mb-4">
            <Zap className="w-4 h-4" />
            OUR SOLUTIONS
          </div>
          <h1 className="text-4xl md:text-4xl font-bold text-gray-900 mb-2">
            COMPREHENSIVE{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1E3A8A] to-[#3B82F6]">
              IT SOLUTIONS
            </span>
          </h1>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto">
            End-to-end technology solutions designed to address your business challenges and drive growth
          </p>
        </div>

        {/* Solutions Container with Arrows */}
        <div className="relative">
          {/* Left Arrow */}
          <button
            onClick={prevSlide}
            className={`absolute left-2 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-8 z-10 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white shadow-lg flex items-center justify-center transition-all duration-300 hover:bg-gray-50 hover:shadow-xl hover:scale-110`}
            aria-label="Previous solutions"
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-[#1E3A8A]" />
          </button>

          {/* Right Arrow */}
          <button
            onClick={nextSlide}
            className={`absolute right-6 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-8 z-10 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white shadow-lg flex items-center justify-center transition-all duration-300 hover:bg-gray-50 hover:shadow-xl hover:scale-110`}
            aria-label="Next solutions"
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-[#1E3A8A]" />
          </button>

          {/* Solutions Grid */}
          <div 
            ref={containerRef}
            className="w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-500"
          >
            {getVisibleSolutions().map((solution) => (
              <div
                key={solution.id}
                className="group  hover:shadow-2xl transition-all duration-500 overflow-hidden"
              >
                {/* Image Section */}
                <div className="relative h-40 overflow-hidden bg-gray-100">
                  <img 
                    src={solution.image} 
                    alt={solution.title}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      const parent = e.currentTarget.parentElement;
                      if (parent) {
                        parent.className += ` bg-gradient-to-br ${solution.gradient}`;
                      }
                    }}
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Icon Badge on Image */}
                  {/* <div className="absolute top-4 left-6">
                    <div className={`w-10 h-10 ${solution.bg} flex items-center justify-center shadow-md`}>
                      <div className={solution.iconColor}>
                        {React.cloneElement(solution.icon, { className: "w-5 h-5" })}
                      </div>
                    </div>
                  </div> */}
                </div>

                {/* Content Section */}
                <div className="p-6">
                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-[#1E3A8A] transition-colors duration-300">
                    {solution.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 mb-2 text-sm leading-relaxed">
                    {solution.description}
                  </p>

                  {/* Learn More Button */}
                  <button className="group/btn inline-flex items-center gap-2 text-[#1E3A8A] font-semibold text-sm hover:text-[#3B82F6] transition-colors">
                    Learn More
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Dots */}
          {/* <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: Math.ceil(allSolutions.length / visibleCards) }).map((_, index) => {
              const startIndex = index * visibleCards;
              const isActive = currentIndex >= startIndex && currentIndex < startIndex + visibleCards;
              return (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(startIndex)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    isActive 
                      ? 'bg-[#1E3A8A] w-8' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to solutions group ${index + 1}`}
                />
              );
            })}
          </div> */}

          {/* Solution Counter - Updated to show continuous counting */}
          {/* <div className="text-center mt-6 text-gray-600">
            <span className="font-semibold text-[#1E3A8A]">
              {currentIndex + 1}-{currentIndex + visibleCards > allSolutions.length ? allSolutions.length : currentIndex + visibleCards}
            </span>
            <span className="mx-2">of</span>
            <span>{allSolutions.length} Solutions</span>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;