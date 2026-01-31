import React from 'react';
import { 
  FaArrowRight,
  FaCheckCircle,
  FaChartLine,
  FaShieldAlt,
  FaSearch,
  FaMicrochip,
  FaNetworkWired,
  FaCog
} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const DesignVerificationPage: React.FC = () => {
  const navigate = useNavigate();

  // Core Technologies Data - Removed Design Verification (current page)
  const coreTechnologies = [
    {
      icon: <FaMicrochip className="text-2xl text-[#0A6B7E]" />,
      title: "Embedded Systems",
      description: "Specialized solutions for automotive, consumer electronics, and aerospace applications",
      path: "/embedded-systems"
    },
    {
      icon: <FaNetworkWired className="text-2xl text-[#36B5A0]" />,
      title: "Networking",
      description: "Protocol stack implementations and system software solutions",
      path: "/networking"
    },
    {
      icon: <FaCog className="text-2xl text-[#0A6B7E]" />,
      title: "VLSI Design",
      description: "Leading chip solutions across automotive, server, graphics and mobile platforms",
      path: "/vlsi-design"
    }
    // Design Verification is the current page, so it's removed from portfolio
  ];

  // Design Verification Services
  const dvServices = [
    "Feature Extraction & Property Specification",
    "HW/SW Co-Verification",
    "Functional Coverage & Sign-off",
    "Performance & Power Analysis",
    "FPGA Emulation & Prototyping"
  ];

  // Important Points for Design Verification
  const importantPoints = [
    {
      icon: <FaMicrochip className="text-xl text-[#36B5A0]" />,
      title: "Silicon Success",
      description: "First-time silicon success through comprehensive design verification methodologies and expert execution"
    },
    {
      icon: <FaSearch className="text-xl text-[#0A6B7E]" />,
      title: "Design For Test & Debug",
      description: "Engineering chip anatomy with testability and debugging capabilities during micro-architectural phase"
    },
    {
      icon: <FaChartLine className="text-xl text-[#36B5A0]" />,
      title: "Physical Design Excellence",
      description: "Experienced team handling low power, high performance and area critical designs with multiple successful tape-outs"
    },
    {
      icon: <FaShieldAlt className="text-xl text-[#0A6B7E]" />,
      title: "Analog & Mixed Signal Design",
      description: "High-quality design for automotive, communication, consumer, medical, and IoT applications from 350nm to 7nm"
    }
  ];

  // Core Technology Domains
  const technologyDomains = [
    {
      title: "FPGA Emulation & Post-SI Validation",
      description: "Full-service spectrum covering FPGA design, prototyping, emulation flows, and pre-silicon validation"
    },
    {
      title: "Protocols & System Software",
      description: "Re-engineered protocol stacks with efficient lookup routines and hardware-assisted packet processing"
    },
    {
      title: "System Modeling & Verification",
      description: "Expert verification architects handling optimal trade-offs in HW/SW co-verification"
    }
  ];

  // Function to handle solution click
  const handleSolutionClick = (path: string) => {
    navigate(path);
  };

  return (
    <div className="min-h-screen bg-gray-50">
        
      {/* Hero Section with Video Background */}
      <section className="pt-48 pb-20 relative overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/solutions-bg.mp4" type="video/mp4" />
            {/* Fallback background if video doesn't load */}
            <div className="absolute inset-0" style={{
              background: 'linear-gradient(135deg, #36B5A0 0%, #0A6B7E 50%, #07284C 100%)'
            }}></div>
          </video>
          {/* Gradient overlay */}
          <div className="absolute inset-0" style={{
            background: 'linear-gradient(to bottom, rgba(7, 40, 76, 0.7) 0%, rgba(10, 107, 126, 0.5) 50%, rgba(54, 181, 160, 0.3) 100%)'
          }}></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold text-white mb-6">
              Silicon Success Through Precision Verification
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              Comprehensive Design Verification Solutions for First-Time Silicon Success
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-16">
            {/* Title added */}
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
              Design <span className="text-[#0A6B7E]">Verification</span>
            </h2>
            
            {/* Single detailed paragraph - 4-5 lines */}
            <p className="text-med md:text-med text-gray-700 leading-relaxed">
              <span className="font-semibold text-[#07284C]">Design Verification (DV) clicks when the right methodology is complemented by the right team.</span> First-time silicon success isn't easy, but that's what our DV engineers bring to you at Microgate Technologies. Extensive knowledge and experience enable them to comprehend tasks and execute flawlessly, from feature extraction and property specification to comprehensive sign-off checklists covering functional aspects, codes, performance, and power. Our verification architects expertly handle optimal trade-offs in system modeling and HW/SW co-verification, ensuring robust and reliable silicon outcomes.
            </p>
          </div>

          {/* Core Technologies Portfolio - Showing 3 technologies (excluding Design Verification) */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10 text-center">
              Our <span className="text-[#36B5A0]">Core Technologies</span>
            </h2>
            
            {/* Grid Container - Now showing only 3 technologies */}
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Technology 1 */}
                <div 
                  onClick={() => handleSolutionClick(coreTechnologies[0].path)}
                  className="bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-xl transition-all duration-300 hover:border-[#36B5A0]/50 cursor-pointer group"
                >
                  <div className="space-y-2">
                    {/* First Row: Title with Arrow */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <h3 className="text-xl font-semibold text-gray-800 group-hover:text-[#36B5A0] transition-colors duration-300">
                          {coreTechnologies[0].title}
                        </h3>
                      </div>
                      <FaArrowRight className="text-[#36B5A0] group-hover:translate-x-2 transition-transform duration-300" />
                    </div>
                    
                    {/* Second Row: Description */}
                    <div className="pt-4 border-t border-gray-100">
                      <p className="text-gray-600">
                        {coreTechnologies[0].description}
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Technology 2 */}
                <div 
                  onClick={() => handleSolutionClick(coreTechnologies[1].path)}
                  className="bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-xl transition-all duration-300 hover:border-[#0A6B7E]/50 cursor-pointer group"
                >
                  <div className="space-y-4">
                    {/* First Row: Title with Arrow */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <h3 className="text-xl font-semibold text-gray-800 group-hover:text-[#0A6B7E] transition-colors duration-300">
                          {coreTechnologies[1].title}
                        </h3>
                      </div>
                      <FaArrowRight className="text-[#0A6B7E] group-hover:translate-x-2 transition-transform duration-300" />
                    </div>
                    
                    {/* Second Row: Description */}
                    <div className="pt-4 border-t border-gray-100">
                      <p className="text-gray-600">
                        {coreTechnologies[1].description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Technology 3 */}
                <div 
                  onClick={() => handleSolutionClick(coreTechnologies[2].path)}
                  className="bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-xl transition-all duration-300 hover:border-[#36B5A0]/50 cursor-pointer group"
                >
                  <div className="space-y-4">
                    {/* First Row: Title with Arrow */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <h3 className="text-xl font-semibold text-gray-800 group-hover:text-[#36B5A0] transition-colors duration-300">
                          {coreTechnologies[2].title}
                        </h3>
                      </div>
                      <FaArrowRight className="text-[#36B5A0] group-hover:translate-x-2 transition-transform duration-300" />
                    </div>
                    
                    {/* Second Row: Description */}
                    <div className="pt-4 border-t border-gray-100">
                      <p className="text-gray-600">
                        {coreTechnologies[2].description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Design Verification Services Section */}
          <div className="bg-gradient-to-r from-[#36B5A0]/10 to-[#0A6B7E]/10 rounded-2xl p-8 mb-16">
            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">
              {/* Left side: Title, paragraph, and services */}
              <div className="lg:w-1/2">
                <div className="mb-6">
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">
                    Our <span className="text-[#0A6B7E]">Design Verification</span> Services
                  </h3>
                  <p className="text-gray-700 mb-6">
                    We provide comprehensive design verification solutions that ensure first-time silicon success through expert methodology, extensive experience, and flawless execution across all verification stages.
                  </p>
                </div>
                
                {/* DV Services */}
                <div className="space-y-4">
                  {dvServices.map((item, index) => (
                    <div key={index} className="flex items-start bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-300">
                      <FaCheckCircle className="text-[#36B5A0] mr-3 mt-1 flex-shrink-0" />
                      <span className="font-medium text-gray-800">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Right side: Image */}
              <div className="lg:w-1/2">
                <div className="p-4 h-full flex items-center justify-center">
                  {/* Actual image from public folder */}
                  <div className="relative w-full h-full overflow-hidden">
                    <img 
                      src="/solutions-img.png" 
                      alt="Design Verification Solutions"
                      className="w-full h-full object-cover rounded-xl mt-12"
                      onError={(e) => {
                        // Fallback if image doesn't load
                        e.currentTarget.style.display = 'none';
                        e.currentTarget.parentElement!.innerHTML = `
                          <div class="absolute inset-0 bg-gradient-to-br from-[#36B5A0]/20 to-[#0A6B7E]/20 flex items-center justify-center">
                            <div class="text-center p-4">
                              <svg class="w-16 h-16 text-[#0A6B7E] mx-auto mb-4" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clip-rule="evenodd"/>
                              </svg>
                              <p class="text-[#07284C] font-semibold">Design Verification Solutions</p>
                              <p class="text-gray-600 text-sm mt-2">Ensuring silicon success through precision verification</p>
                            </div>
                          </div>
                        `;
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Technology Domains Section */}
            <div className="mt-12">
              <h4 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Additional <span className="text-[#0A6B7E]">Technology Domains</span>
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {technologyDomains.map((tech, index) => (
                  <div key={index} className="bg-white rounded-xl p-6 shadow-md border border-gray-200 hover:border-[#36B5A0] transition-all duration-300">
                    <div className="flex flex-col h-full">
                      <h5 className="text-xl font-semibold text-gray-800 mb-3">{tech.title}</h5>
                      <p className="text-gray-600 flex-1">{tech.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Important Points Section */}
          <div className="">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
              Our <span className="text-[#0A6B7E]">Expertise</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {importantPoints.map((point, index) => (
                <div key={index} className="bg-white p-6 hover:border hover:rounded-xl hover:border-[#36B5A0] transition-all duration-300 hover:shadow-lg">
                  <div className="flex flex-col h-full">
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">{point.title}</h3>
                    <p className="text-gray-600 flex-1">{point.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DesignVerificationPage;