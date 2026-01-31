import React from 'react';
import { BiChip } from 'react-icons/bi';
import { 
  FaArrowRight,
  FaCheckCircle,
  FaChartLine,
  FaUsers,
  FaCogs,
  FaCloud,
  FaDatabase,
  FaMobileAlt,
  FaShieldAlt,
  FaLightbulb,
  FaHandshake,
  FaRocket,
  FaSearch,
  FaClipboardCheck,
  FaBriefcase,
  FaClock,
  FaNetworkWired,
  FaMicrochip,
  FaServer
} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const NetworkingPage: React.FC = () => {
  const navigate = useNavigate();

  // Core Technologies Data - Showing only 3 technologies (excluding Networking which is current page)
  const coreTechnologies = [
    {
      icon: <FaMicrochip className="text-2xl text-[#0A6B7E]" />,
      title: "Embedded Systems",
      description: "Comprehensive embedded solutions for automotive, consumer electronics, and aerospace applications",
      path: "/embedded-systems"
    },
    {
      icon: <BiChip className="text-2xl text-[#36B5A0]" />,
      title: "VLSI Design",
      description: "Leading chip solutions provider across automotive, server, graphics and mobile platforms",
      path: "/vlsi-design"
    },
    {
      icon: <FaCheckCircle className="text-2xl text-[#0A6B7E]" />,
      title: "Design Verification",
      description: "Comprehensive design verification with right methodology for first-time silicon success",
      path: "/design-verification"
    }
    // Networking solution is the current page, so it's removed from portfolio
  ];

  // Networking Services
  const networkingServices = [
    "Network Processors & Merchant Silicon Solutions",
    "MicroCode Design & Development for Multi-core Processors",
    "L2/L3/MPLS Software Integration",
    "Data Plane Development & Optimization",
    "Protocol Stack Implementation"
  ];

  // Important Points for Networking
  const importantPoints = [
    {
      icon: <FaNetworkWired className="text-xl text-[#36B5A0]" />,
      title: "Data Plane Excellence",
      description: "The heart of any networking solution - ensuring accuracy, conservativeness and effectiveness in data forwarding"
    },
    {
      icon: <BiChip className="text-xl text-[#0A6B7E]" />,
      title: "Silicon Integration",
      description: "Expert integration with silicon from Broadcom, Marvell, Cavium and other leading manufacturers"
    },
    {
      icon: <FaServer className="text-xl text-[#36B5A0]" />,
      title: "Protocol Expertise",
      description: "Deep expertise in L3 routing protocols, MPLS technologies, L2 protocols and multicast technologies"
    },
    {
      icon: <FaShieldAlt className="text-xl text-[#0A6B7E]" />,
      title: "Design for Test & Debug",
      description: "Engineering chip anatomy with testability and debugging for robust networking solutions"
    }
  ];

  // Networking Domains
  const networkingDomains = [
    {
      title: "L3 Routing Protocols",
      items: ["OSPF", "BGP", "IS-IS", "L3 VPN"]
    },
    {
      title: "MPLS Technologies",
      items: ["PWE3", "L2 VPN", "L3 VPN", "VPLS"]
    },
    {
      title: "L2 Protocols",
      items: ["Eth OAM", "LACP", "STP", "QinQ"]
    },
    {
      title: "Service Plane",
      items: ["Firewall", "NAT", "IPSec", "Quality of Service"]
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
              Advanced Networking Solutions
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              Network Processors, Merchant Silicon & Data Plane Development
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
              <span className="text-[#0A6B7E]">Networking</span> Technology
            </h2>
            
            {/* Single detailed paragraph - 4-5 lines */}
            <p className="text-med md:text-med text-gray-700 leading-relaxed">
              <span className="font-semibold text-[#07284C]">Our Microgate Technologies</span> specializes in Network Processors and Merchant Silicon Solutions, providing comprehensive MicroCode design and development for multi-core network processors with integration of L2/L3 and MPLS software with silicon from Broadcom, Marvell, Cavium and other leading manufacturers. We focus on the Data Plane - the heart of any networking solution - ensuring accuracy, conservativeness and effectiveness in packet forwarding. Our expertise covers the complete networking ecosystem with deep knowledge in L3 routing protocols, MPLS technologies, L2 protocols, multicast technologies, and service plane applications.
            </p>
          </div>

          {/* Core Technologies Portfolio - Showing 3 technologies */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10 text-center">
              Core <span className="text-[#36B5A0]">Technologies</span>
            </h2>
            
            {/* 1 Row Grid Container - Showing only 3 technologies (without Networking) */}
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

          {/* Networking Services Section */}
          <div className="bg-gradient-to-r from-[#36B5A0]/10 to-[#0A6B7E]/10 rounded-2xl p-8 mb-16">
            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">
              {/* Left side: Title, paragraph, and services */}
              <div className="lg:w-1/2">
                <div className="mb-6">
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">
                    Our <span className="text-[#0A6B7E]">Networking</span> Services
                  </h3>
                  <p className="text-gray-700 mb-6">
                    We specialize in complete design and development services for a wide variety of Switching Silicon Merchants and Network Processors, with expertise spanning the entire networking ecosystem from silicon integration to protocol implementation.
                  </p>
                </div>
                
                {/* Networking Services */}
                <div className="space-y-4">
                  {networkingServices.map((item, index) => (
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
                      alt="Networking Technology Solutions"
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
                              <p class="text-[#07284C] font-semibold">Networking Solutions</p>
                              <p class="text-gray-600 text-sm mt-2">Advanced network processors and silicon integration</p>
                            </div>
                          </div>
                        `;
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Networking Domains Section */}
            <div className="mt-12">
              <h4 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Networking <span className="text-[#0A6B7E]">Expertise</span> Domains
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {networkingDomains.map((domain, index) => (
                  <div key={index} className="bg-white rounded-xl p-6 shadow-md border border-gray-200 hover:border-[#36B5A0] transition-all duration-300">
                    <div className="flex flex-col h-full">
                      <h5 className="text-lg font-semibold text-gray-800 mb-4">{domain.title}</h5>
                      <ul className="space-y-2 flex-1">
                        {domain.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start">
                            <div className="w-1.5 h-1.5 bg-[#36B5A0] rounded-full mt-2 mr-3"></div>
                            <span className="text-gray-700 text-sm">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Important Points Section */}
          <div className="">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
              Key <span className="text-[#0A6B7E]">Capabilities</span>
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

export default NetworkingPage;