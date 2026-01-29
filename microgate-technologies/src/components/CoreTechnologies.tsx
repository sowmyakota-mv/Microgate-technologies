import React, { useState, useEffect, useRef } from "react";
import { 
  Cpu, 
  Microchip, 
  Code, 
  CheckSquare, 
  ArrowRight, 
} from "lucide-react";

const CoreTechnologies: React.FC = () => {
  const [activeTechId, setActiveTechId] = useState<number>(1);
  const [isHovering, setIsHovering] = useState<boolean>(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const technologies = [
    {
      id: 1,
      icon: <Cpu className="w-10 h-10" />,
      title: "Embedded Systems",
      description: "Considering the vast scope of this field, ranging from the automobile to consumer electronics and aerospace, the demand for this technology for product development and applications will also continue to grow over time.",
      gradient: "from-blue-500 to-blue-700",
      bg: "bg-gradient-to-br from-blue-50/80 via-white to-blue-50/30",
      border: "border border-blue-100",
      color: "text-blue-600",
      stat: "15+ Years Experience",
      image: "/embedded-core.png",
      features: [
        "Automotive Electronics",
        "Consumer Electronics",
        "Aerospace Systems",
        "IoT Device Development"
      ]
    },
    {
      id: 2,
      icon: <Microchip className="w-10 h-10" />,
      title: "VLSI Design",
      description: "Today, we are poised to be the leading chip solutions provider across verticals – Automotive, Server, Graphics and mobile platforms, to name a few.",
      gradient: "from-purple-500 to-purple-700",
      bg: "bg-gradient-to-br from-purple-50/80 via-white to-purple-50/30",
      border: "border border-purple-100",
      color: "text-purple-600",
      stat: "Chip Solutions Expert",
      image: "/vlsi-core.png",
      features: [
        "Chip Design Solutions",
        "Low Power Design",
        "Cross-platform Integration",
        "Full-cycle Development"
      ]
    },
    {
      id: 3,
      icon: <Code className="w-10 h-10" />,
      title: "Protocols & System Softwares",
      description: "Protocol stack implementations are being re-engineered to include separated slow path and fast path, efficient look up routines, flow caching, hardware assisted packet processing.",
      gradient: "from-green-500 to-green-700",
      bg: "bg-gradient-to-br from-green-50/80 via-white to-green-50/30",
      border: "border border-green-100",
      color: "text-green-600",
      stat: "Multi-core Processing",
      image: "/protocol-core.png",
      features: [
        "Protocol Stack Implementation",
        "Multi-core Processing",
        "Hardware Acceleration",
        "System Optimization"
      ]
    },
    {
      id: 4,
      icon: <CheckSquare className="w-10 h-10" />,
      title: "Design Verification",
      description: "Design Verification (DV) clicks when the right methodology is complemented by the right team. First tie silicon success isn't easy but that's what our DV engineers bring to you.",
      gradient: "from-amber-500 to-amber-700",
      bg: "bg-gradient-to-br from-amber-50/80 via-white to-amber-50/30",
      border: "border border-amber-100",
      color: "text-amber-600",
      stat: "First Tie Success",
      image: "/design-core.png",
      features: [
        "First Tie Silicon Success",
        "Feature Extraction",
        "Sign-off Checklist",
        "Flawless Execution"
      ]
    }
  ];

  // Auto-scroll effect based on active card
  useEffect(() => {
    if (!isHovering) {
      const interval = setInterval(() => {
        setActiveTechId(prev => prev === 4 ? 1 : prev + 1);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isHovering]);

  const handleCardHover = (techId: number) => {
    setIsHovering(true);
    setActiveTechId(techId);
  };

  const handleCardLeave = () => {
    setIsHovering(false);
  };

  const activeTech = technologies.find(tech => tech.id === activeTechId) || technologies[0];

  return (
    <section className="py-16 md:py-12 bg-gradient-to-b from-gray-50/50 to-white relative overflow-hidden" ref={sectionRef}>
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="w-full lg:w-screen mx-auto px-4 md:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200 shadow-sm text-[#1E3A8A] text-sm font-semibold mb-4">
            <div className="w-2 h-2 bg-gradient-to-r from-[#1E3A8A] to-[#3B82F6] rounded-full"></div>
            <span>CORE TECHNOLOGIES</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            Advanced <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1E3A8A] via-[#3B82F6] to-[#1E3A8A] bg-[length:200%] animate-gradient">Technical</span> Expertise
          </h1>
          <p className="text-med text-gray-600">
            Cutting-edge technology solutions that power innovation and drive digital transformation across industries.
          </p>
        </div>

        {/* Main Layout: Left Images Stack, Right 4 Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Stacked Images with Scrolling */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <div className="relative  overflow-hidden">
                <div className="aspect-[3/4] relative">
                  {/* All Images Stacked */}
                  {technologies.map((tech) => (
                    <div
                      key={tech.id}
                      className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                        activeTechId === tech.id 
                          ? 'opacity-100 scale-105 z-10' 
                          : 'opacity-0 scale-100 z-0'
                      }`}
                    >
                      <img 
                        src={tech.image}
                        alt={tech.title}
                        className="w-full h-[80vh] object-contain"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                          const placeholder = document.createElement('div');
                          placeholder.className = `w-full h-full flex items-center justify-center bg-gradient-to-br ${tech.gradient}`;
                          placeholder.innerHTML = `
                            <div class="text-center p-8 text-white">
                              ${tech.icon.props.className.includes('Cpu') ? '<Cpu class="w-20 h-20 mx-auto mb-4" />' : ''}
                              ${tech.icon.props.className.includes('Microchip') ? '<Microchip class="w-20 h-20 mx-auto mb-4" />' : ''}
                              ${tech.icon.props.className.includes('Code') ? '<Code class="w-20 h-20 mx-auto mb-4" />' : ''}
                              ${tech.icon.props.className.includes('CheckSquare') ? '<CheckSquare class="w-20 h-20 mx-auto mb-4" />' : ''}
                              <h3 class="text-2xl font-bold">${tech.title}</h3>
                              <p class="text-white/80 mt-2">${tech.stat}</p>
                            </div>
                          `;
                          e.currentTarget.parentElement?.appendChild(placeholder);
                        }}
                      />
                      
                      {/* Overlay for active image */}
                      {/* <div className={`absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent transition-opacity duration-500 ${
                        activeTechId === tech.id ? 'opacity-100' : 'opacity-0'
                      }`}></div> */}
                      
                      {/* Content for active image */}
                      {/* <div className={`absolute bottom-0 left-0 right-0 p-6 text-white transition-all duration-500 ${
                        activeTechId === tech.id ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                      }`}>
                        <div className={`bg-gradient-to-r ${tech.gradient}/90 backdrop-blur-sm rounded-xl p-4`}>
                          <div className="flex items-center gap-3 mb-2">
                            <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                              {React.cloneElement(tech.icon, { className: "w-6 h-6 text-white" })}
                            </div>
                            <div>
                              <h3 className="text-lg font-bold">{tech.title}</h3>
                              <p className="text-white/80 text-sm">{tech.stat}</p>
                            </div>
                          </div>
                        </div>
                      </div> */}
                    </div>
                  ))}
                  
                  {/* Image Navigation Dots */}
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
                    {technologies.map((tech) => (
                      <button
                        key={tech.id}
                        onClick={() => {
                          setActiveTechId(tech.id);
                          setIsHovering(true);
                          setTimeout(() => setIsHovering(false), 1000);
                        }}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          activeTechId === tech.id 
                            ? `w-6 bg-white` 
                            : 'bg-white/60 hover:bg-white/80'
                        }`}
                        aria-label={`Show ${tech.title} image`}
                      />
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Active Image Indicator */}
              {/* <div className="mt-4 flex items-center justify-center">
                <div className={`px-4 py-2 rounded-full ${activeTech.color}/20 ${activeTech.color} text-sm font-medium transition-all duration-500`}>
                  {activeTech.title}
                </div>
              </div> */}
            </div>
          </div>

          {/* Right Column - 4 Technology Cards */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {technologies.map((tech) => (
                <div
                  key={tech.id}
                  className={`${tech.bg} ${tech.border} rounded-2xl p-8 group hover:shadow-2xl transition-all duration-500 relative overflow-hidden ${
                    activeTechId === tech.id 
                      ? 'scale-105 shadow-xl ring-2 ring-offset-2 ring-opacity-30' 
                      : 'hover:-translate-y-2'
                  }`}
                  style={activeTechId === tech.id ? { 
                    transform: 'scale(1.05)',
                    boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
                    borderColor: activeTech.color.replace('text-', '')
                  } : {}}
                  onMouseEnter={() => handleCardHover(tech.id)}
                  onMouseLeave={handleCardLeave}
                  onFocus={() => handleCardHover(tech.id)}
                  onBlur={handleCardLeave}
                >
                  {/* Active Glow Effect */}
                  <div 
                    className={`absolute inset-0 bg-gradient-to-br ${tech.gradient} transition-opacity duration-500 ${
                      activeTechId === tech.id ? 'opacity-10' : 'opacity-0 group-hover:opacity-5'
                    }`}
                  ></div>
                  
                  {/* Active Border Glow */}
                  <div 
                    className={`absolute inset-0 rounded-2xl transition-all duration-500 ${
                      activeTechId === tech.id ? `ring-2 ring-offset-0 ring-${tech.color.split('-')[1]}-400` : ''
                    }`}
                  ></div>
                  
                  {/* Content */}
                  <div className="relative">
                    {/* <div className="flex items-start justify-between mb-6">
                      <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${tech.gradient} flex items-center justify-center shadow-lg transition-transform duration-300 ${
                        activeTechId === tech.id ? 'scale-110' : ''
                      }`}>
                        <div className="text-white">
                          {tech.icon}
                        </div>
                      </div>
                      <span className={`px-3 py-1 rounded-full ${tech.color}/20 text-xs font-medium ${tech.color} transition-all duration-300 ${
                        activeTechId === tech.id ? 'scale-110' : ''
                      }`}>
                        {tech.stat}
                      </span>
                    </div> */}

                    <h3 className="text-xl font-bold text-gray-900 mb-4 transition-colors duration-300">
                      {tech.title}
                    </h3>

                    <p className="text-gray-600 text-left mb-6 text-sm leading-relaxed">
                      {tech.description}
                    </p>

                    <div className="flex items-center justify-between pt-6 border-t border-gray-100/50">
                      <button className={`flex items-center gap-2 font-semibold ${tech.color} text-sm hover:gap-3 transition-all ${
                        activeTechId === tech.id ? 'gap-3' : ''
                      }`}>
                        <span>Learn More</span>
                        <ArrowRight className="w-4 h-4 transition-transform duration-300" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreTechnologies;