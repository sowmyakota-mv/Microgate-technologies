import React from 'react';
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
  FaLink,
  FaCode,
  FaNetworkWired,
  FaBitcoin,
  FaDatabase as FaDatabaseIcon,
  FaProjectDiagram
} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const BlockchainPage: React.FC = () => {
  const navigate = useNavigate();

  // iTechnologies Data with navigation paths - Removed Blockchain from portfolio
  const iTechnologies = [
    {
      icon: <FaDatabaseIcon className="text-2xl text-[#0A6B7E]" />,
      title: "Microsoft Technologies",
      description: "Enterprise solutions using Microsoft's comprehensive technology stack",
      path: "/microsoft-technologies"
    },
    {
      icon: <FaCode className="text-2xl text-[#36B5A0]" />,
      title: "Oracle",
      description: "Database management and enterprise resource planning solutions",
      path: "/oracle"
    },
    {
      icon: <FaProjectDiagram className="text-2xl text-[#0A6B7E]" />,
      title: "SAP",
      description: "Enterprise resource planning and business process management",
      path: "/sap"
    },
    {
      icon: <FaCloud className="text-2xl text-[#36B5A0]" />,
      title: "Salesforce",
      description: "Customer relationship management and cloud computing solutions",
      path: "/salesforce"
    },
    {
      icon: <FaNetworkWired className="text-2xl text-[#0A6B7E]" />,
      title: "Middleware",
      description: "Integration solutions connecting different applications and systems",
      path: "/middleware"
    },
    {
      icon: <FaCogs className="text-2xl text-[#36B5A0]" />,
      title: "Application Development",
      description: "Custom software development for web and mobile platforms",
      path: "/application-development"
    }
    // Blockchain solution is the current page, so it's removed from portfolio
  ];

  // Blockchain Applications
  const blockchainApplications = [
    "Digital Currency & Cryptocurrency",
    "Smart Contracts & Automation",
    "Supply Chain Management",
    "Digital Identity Verification",
    "Content Distribution & Royalties"
  ];

  // Important Points for Blockchain
  const importantPoints = [
    {
      icon: <FaLink className="text-xl text-[#36B5A0]" />,
      title: "Distributed Ledger Technology",
      description: "Digital information that can be distributed but not copied, creating the backbone of a new type of internet infrastructure"
    },
    {
      icon: <FaBitcoin className="text-xl text-[#0A6B7E]" />,
      title: "Digital Currency Foundation",
      description: "Originally devised for Bitcoin, now evolving with total cryptocurrency value exceeding hundreds of billions globally"
    },
    {
      icon: <FaShieldAlt className="text-xl text-[#36B5A0]" />,
      title: "Decentralized Control",
      description: "Multiple parties can write entries into a record, with community-controlled updates - no single entity controls the information"
    },
    {
      icon: <FaDatabase className="text-xl text-[#0A6B7E]" />,
      title: "Content Blockchain Network",
      description: "Open source blockchain network tailored for content and media ecosystem with on-chain governance and native tokens"
    }
  ];

  // Blockchain Benefits
  const blockchainBenefits = [
    "Immutable record keeping and audit trails",
    "Enhanced security through cryptography",
    "Reduced intermediary costs and fraud",
    "Transparent and verifiable transactions",
    "Support for smart contracts and automation"
  ];

  // Function to handle technology click
  const handleTechnologyClick = (path: string) => {
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
              Revolutionizing Digital Trust & Transparency
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              Distributed Ledger Technology for Secure & Decentralized Solutions
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
              Blockchain <span className="text-[#0A6B7E]">Technology</span>
            </h2>
            
            {/* Single detailed paragraph - 5-6 lines */}
            <p className="text-med md:text-med text-gray-700 leading-relaxed">
              <span className="font-semibold text-[#07284C]">Our Microgate Technologies</span> recognizes blockchain as an undeniably ingenious invention that has evolved into something far greater than its original purpose. By allowing digital information to be distributed but not copied, blockchain technology created the backbone of a new type of internet infrastructure. Originally devised for Bitcoin, often called "digital gold," the technology now supports various applications beyond cryptocurrency. <span className="font-semibold text-[#07284C]">Our Content Blockchain Project operates as an open, non-profit initiative</span> providing foundational tools for a new content and media ecosystem, including chain-agnostic standards for content identification, smart licenses, and transaction models that enable decentralized control and community governance.
            </p>
          </div>

          {/* Modified Two Columns iTechnologies Section - Showing 6 technologies (excluding Blockchain) */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10 text-center">
              Our <span className="text-[#36B5A0]">iTechnologies</span> Portfolio
            </h2>
            
            {/* 3 Rows Grid Container - Now showing only 6 technologies (without Blockchain) */}
            <div className="space-y-6">
              {/* Row 1 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Technology 1 */}
                <div 
                  onClick={() => handleTechnologyClick(iTechnologies[0].path)}
                  className="bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-xl transition-all duration-300 hover:border-[#36B5A0]/50 cursor-pointer group"
                >
                  <div className="space-y-2">
                    {/* First Row: Title with Arrow */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <h3 className="text-xl font-semibold text-gray-800 group-hover:text-[#36B5A0] transition-colors duration-300">
                          {iTechnologies[0].title}
                        </h3>
                      </div>
                      <FaArrowRight className="text-[#36B5A0] group-hover:translate-x-2 transition-transform duration-300" />
                    </div>
                    
                    {/* Second Row: Description */}
                    <div className="pt-4 border-t border-gray-100">
                      <p className="text-gray-600">
                        {iTechnologies[0].description}
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Technology 2 */}
                <div 
                  onClick={() => handleTechnologyClick(iTechnologies[1].path)}
                  className="bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-xl transition-all duration-300 hover:border-[#0A6B7E]/50 cursor-pointer group"
                >
                  <div className="space-y-4">
                    {/* First Row: Title with Arrow */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <h3 className="text-xl font-semibold text-gray-800 group-hover:text-[#0A6B7E] transition-colors duration-300">
                          {iTechnologies[1].title}
                        </h3>
                      </div>
                      <FaArrowRight className="text-[#0A6B7E] group-hover:translate-x-2 transition-transform duration-300" />
                    </div>
                    
                    {/* Second Row: Description */}
                    <div className="pt-4 border-t border-gray-100">
                      <p className="text-gray-600">
                        {iTechnologies[1].description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Row 2 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Technology 3 */}
                <div 
                  onClick={() => handleTechnologyClick(iTechnologies[2].path)}
                  className="bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-xl transition-all duration-300 hover:border-[#36B5A0]/50 cursor-pointer group"
                >
                  <div className="space-y-4">
                    {/* First Row: Title with Arrow */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <h3 className="text-xl font-semibold text-gray-800 group-hover:text-[#36B5A0] transition-colors duration-300">
                          {iTechnologies[2].title}
                        </h3>
                      </div>
                      <FaArrowRight className="text-[#36B5A0] group-hover:translate-x-2 transition-transform duration-300" />
                    </div>
                    
                    {/* Second Row: Description */}
                    <div className="pt-4 border-t border-gray-100">
                      <p className="text-gray-600">
                        {iTechnologies[2].description}
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Technology 4 */}
                <div 
                  onClick={() => handleTechnologyClick(iTechnologies[3].path)}
                  className="bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-xl transition-all duration-300 hover:border-[#0A6B7E]/50 cursor-pointer group"
                >
                  <div className="space-y-4">
                    {/* First Row: Title with Arrow */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <h3 className="text-xl font-semibold text-gray-800 group-hover:text-[#0A6B7E] transition-colors duration-300">
                          {iTechnologies[3].title}
                        </h3>
                      </div>
                      <FaArrowRight className="text-[#0A6B7E] group-hover:translate-x-2 transition-transform duration-300" />
                    </div>
                    
                    {/* Second Row: Description */}
                    <div className="pt-4 border-t border-gray-100">
                      <p className="text-gray-600">
                        {iTechnologies[3].description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Row 3 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Technology 5 */}
                <div 
                  onClick={() => handleTechnologyClick(iTechnologies[4].path)}
                  className="bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-xl transition-all duration-300 hover:border-[#36B5A0]/50 cursor-pointer group"
                >
                  <div className="space-y-4">
                    {/* First Row: Title with Arrow */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <h3 className="text-xl font-semibold text-gray-800 group-hover:text-[#36B5A0] transition-colors duration-300">
                          {iTechnologies[4].title}
                        </h3>
                      </div>
                      <FaArrowRight className="text-[#36B5A0] group-hover:translate-x-2 transition-transform duration-300" />
                    </div>
                    
                    {/* Second Row: Description */}
                    <div className="pt-4 border-t border-gray-100">
                      <p className="text-gray-600">
                        {iTechnologies[4].description}
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Technology 6 */}
                <div 
                  onClick={() => handleTechnologyClick(iTechnologies[5].path)}
                  className="bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-xl transition-all duration-300 hover:border-[#0A6B7E]/50 cursor-pointer group"
                >
                  <div className="space-y-4">
                    {/* First Row: Title with Arrow */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <h3 className="text-xl font-semibold text-gray-800 group-hover:text-[#0A6B7E] transition-colors duration-300">
                          {iTechnologies[5].title}
                        </h3>
                      </div>
                      <FaArrowRight className="text-[#0A6B7E] group-hover:translate-x-2 transition-transform duration-300" />
                    </div>
                    
                    {/* Second Row: Description */}
                    <div className="pt-4 border-t border-gray-100">
                      <p className="text-gray-600">
                        {iTechnologies[5].description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Blockchain Applications Section */}
          <div className="bg-gradient-to-r from-[#36B5A0]/10 to-[#0A6B7E]/10 rounded-2xl p-8 mb-16">
            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">
              {/* Left side: Title, paragraph, and applications */}
              <div className="lg:w-1/2">
                <div className="mb-6">
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">
                    Blockchain <span className="text-[#0A6B7E]">Applications</span>
                  </h3>
                  <p className="text-gray-700 mb-6">
                    Our Content Blockchain Network operates as an open, non-profit initiative providing foundational tools and infrastructure for a new content and media ecosystem based on blockchain technology, supporting data streams, native tokens, and on-chain governance.
                  </p>
                </div>
                
                {/* Blockchain Applications */}
                <div className="space-y-4">
                  {blockchainApplications.map((item, index) => (
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
                      alt="Blockchain Technology Solutions"
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
                              <p class="text-[#07284C] font-semibold">Blockchain Technology</p>
                              <p class="text-gray-600 text-sm mt-2">Distributed ledger solutions for secure digital transactions</p>
                            </div>
                          </div>
                        `;
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Blockchain Benefits Section */}
            <div className="mt-12 bg-white rounded-xl p-6 shadow-md border-l-4 border-[#0A6B7E]">
              <div className="flex items-start">
                <FaLightbulb className="text-2xl text-[#0A6B7E] mr-4 mt-1" />
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Key Blockchain Benefits</h4>
                  <ul className="space-y-2">
                    {blockchainBenefits.map((benefit, index) => (
                      <li key={index} className="flex items-start">
                        <div className="w-1.5 h-1.5 bg-[#36B5A0] rounded-full mt-2 mr-3"></div>
                        <span className="text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Important Points Section */}
          <div className="">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
              Blockchain <span className="text-[#0A6B7E]">Technology</span> Features
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

export default BlockchainPage;