import React from 'react';
import { 
  FaArrowRight,
  FaCheckCircle,
  FaChartLine,
  FaCogs,
  FaCloud,
  FaDatabase,
  FaMobileAlt,
  FaServer,
  FaLaptopCode,
  FaNetworkWired,
  FaMicrosoft
} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const OraclePage: React.FC = () => {
  const navigate = useNavigate();

  // Technologies Data with navigation paths - Removed Oracle from portfolio
  const technologies = [
    {
      icon: <FaMicrosoft className="text-2xl text-[#0A6B7E]" />,
      title: "Microsoft Technologies",
      description: "Comprehensive Microsoft solutions for enterprise productivity and development",
      path: "/microsoft-technologies"
    },
    {
      icon: <FaServer className="text-2xl text-[#36B5A0]" />,
      title: "SAP",
      description: "Enterprise resource planning and business process management solutions",
      path: "/sap"
    },
    {
      icon: <FaLaptopCode className="text-2xl text-[#0A6B7E]" />,
      title: "Block Chain",
      description: "Decentralized ledger technology solutions for secure transactions",
      path: "/blockchain"
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
      description: "Integration and connectivity solutions for enterprise systems",
      path: "/middleware"
    },
    {
      icon: <FaMobileAlt className="text-2xl text-[#36B5A0]" />,
      title: "Application Development",
      description: "Custom software development for business applications",
      path: "/application-development"
    }
    // Oracle is the current page, so it's removed from portfolio
  ];

  // Oracle Services
  const oracleServices = [
    "Oracle Database Implementation",
    "Oracle E-Business Suite",
    "Oracle Fusion Applications",
    "Oracle Performance Tuning",
    "Oracle Cloud Migration"
  ];

  // Important Points for Oracle
  const importantPoints = [
    {
      icon: <FaDatabase className="text-xl text-[#36B5A0]" />,
      title: "Full Scope Oracle Services",
      description: "Comprehensive Oracle services designed for today's large and independent enterprises, delivered by experienced Oracle experts"
    },
    {
      icon: <FaServer className="text-xl text-[#0A6B7E]" />,
      title: "Multi-Platform Expertise",
      description: "Oracle runs on virtually any operating system - Linux, Unix, or Windows - with our Oracle expertise tailored to your environment"
    },
    {
      icon: <FaCogs className="text-xl text-[#36B5A0]" />,
      title: "Applications Specialization",
      description: "Expertise extends beyond Oracle database to e-Business Suite, Application Server, Portal, Forms, Reports, and Enterprise Manager"
    },
    {
      icon: <FaChartLine className="text-xl text-[#0A6B7E]" />,
      title: "Center of Excellence",
      description: "Oracle COE provides consulting services with proven tools, methodologies, and templates for faster rollouts and reliable production support"
    }
  ];

  // Oracle Products
  const oracleProducts = [
    {
      category: "Enterprise Applications",
      items: ["Oracle E-Business Suite", "PeopleSoft Enterprise", "Siebel", "JD Edwards", "Hyperion"]
    },
    {
      category: "Business Modules",
      items: ["Customer Relationship Management", "Financial Management", "Human Capital Management", "Master Data Management"]
    },
    {
      category: "Cloud Services",
      items: ["Oracle Content & Experience Cloud", "Oracle Cloud Infrastructure", "Oracle SaaS Applications", "Oracle PaaS Solutions"]
    }
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
              Comprehensive Oracle Solutions for Enterprise Excellence
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              Expert Oracle services, implementation, and support for business transformation
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
              Oracle <span className="text-[#0A6B7E]">Enterprise Solutions</span>
            </h2>
            
            {/* Single detailed paragraph - 4-5 lines */}
            <p className="text-med md:text-med text-gray-700 leading-relaxed">
              <span className="font-semibold text-[#07284C]">Our Microgate Technologies</span> offers a full scope of Oracle services designed to address the needs of today's large and independent enterprises. Delivered by our experienced staff of Oracle experts, these services include Oracle installation and configuration, upgrades and patches, database design, performance tuning, backup and recovery, and much more. We merge specialized and industry-leading practices to deliver powerful business solutions and ensure accelerated return on investment for your Oracle applications. Our Oracle Center of Excellence provides consulting services with proven tools, methodologies, and templates for reliable implementations and faster rollouts.
            </p>
          </div>

          {/* Modified Two Columns Technologies Section - Showing 6 technologies (excluding Oracle) */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10 text-center">
              Our <span className="text-[#36B5A0]">Technologies Portfolio</span>
            </h2>
            
            {/* 3 Rows Grid Container - Now showing only 6 technologies (without Oracle) */}
            <div className="space-y-6">
              {/* Row 1 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Technology 1 */}
                <div 
                  onClick={() => handleTechnologyClick(technologies[0].path)}
                  className="bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-xl transition-all duration-300 hover:border-[#36B5A0]/50 cursor-pointer group"
                >
                  <div className="space-y-2">
                    {/* First Row: Title with Arrow */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <h3 className="text-xl font-semibold text-gray-800 group-hover:text-[#36B5A0] transition-colors duration-300">
                          {technologies[0].title}
                        </h3>
                      </div>
                      <FaArrowRight className="text-[#36B5A0] group-hover:translate-x-2 transition-transform duration-300" />
                    </div>
                    
                    {/* Second Row: Description */}
                    <div className="pt-4 border-t border-gray-100">
                      <p className="text-gray-600">
                        {technologies[0].description}
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Technology 2 */}
                <div 
                  onClick={() => handleTechnologyClick(technologies[1].path)}
                  className="bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-xl transition-all duration-300 hover:border-[#0A6B7E]/50 cursor-pointer group"
                >
                  <div className="space-y-4">
                    {/* First Row: Title with Arrow */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <h3 className="text-xl font-semibold text-gray-800 group-hover:text-[#0A6B7E] transition-colors duration-300">
                          {technologies[1].title}
                        </h3>
                      </div>
                      <FaArrowRight className="text-[#0A6B7E] group-hover:translate-x-2 transition-transform duration-300" />
                    </div>
                    
                    {/* Second Row: Description */}
                    <div className="pt-4 border-t border-gray-100">
                      <p className="text-gray-600">
                        {technologies[1].description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Row 2 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Technology 3 */}
                <div 
                  onClick={() => handleTechnologyClick(technologies[2].path)}
                  className="bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-xl transition-all duration-300 hover:border-[#36B5A0]/50 cursor-pointer group"
                >
                  <div className="space-y-4">
                    {/* First Row: Title with Arrow */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <h3 className="text-xl font-semibold text-gray-800 group-hover:text-[#36B5A0] transition-colors duration-300">
                          {technologies[2].title}
                        </h3>
                      </div>
                      <FaArrowRight className="text-[#36B5A0] group-hover:translate-x-2 transition-transform duration-300" />
                    </div>
                    
                    {/* Second Row: Description */}
                    <div className="pt-4 border-t border-gray-100">
                      <p className="text-gray-600">
                        {technologies[2].description}
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Technology 4 */}
                <div 
                  onClick={() => handleTechnologyClick(technologies[3].path)}
                  className="bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-xl transition-all duration-300 hover:border-[#0A6B7E]/50 cursor-pointer group"
                >
                  <div className="space-y-4">
                    {/* First Row: Title with Arrow */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <h3 className="text-xl font-semibold text-gray-800 group-hover:text-[#0A6B7E] transition-colors duration-300">
                          {technologies[3].title}
                        </h3>
                      </div>
                      <FaArrowRight className="text-[#0A6B7E] group-hover:translate-x-2 transition-transform duration-300" />
                    </div>
                    
                    {/* Second Row: Description */}
                    <div className="pt-4 border-t border-gray-100">
                      <p className="text-gray-600">
                        {technologies[3].description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Row 3 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Technology 5 */}
                <div 
                  onClick={() => handleTechnologyClick(technologies[4].path)}
                  className="bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-xl transition-all duration-300 hover:border-[#36B5A0]/50 cursor-pointer group"
                >
                  <div className="space-y-4">
                    {/* First Row: Title with Arrow */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <h3 className="text-xl font-semibold text-gray-800 group-hover:text-[#36B5A0] transition-colors duration-300">
                          {technologies[4].title}
                        </h3>
                      </div>
                      <FaArrowRight className="text-[#36B5A0] group-hover:translate-x-2 transition-transform duration-300" />
                    </div>
                    
                    {/* Second Row: Description */}
                    <div className="pt-4 border-t border-gray-100">
                      <p className="text-gray-600">
                        {technologies[4].description}
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Technology 6 */}
                <div 
                  onClick={() => handleTechnologyClick(technologies[5].path)}
                  className="bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-xl transition-all duration-300 hover:border-[#0A6B7E]/50 cursor-pointer group"
                >
                  <div className="space-y-4">
                    {/* First Row: Title with Arrow */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <h3 className="text-xl font-semibold text-gray-800 group-hover:text-[#0A6B7E] transition-colors duration-300">
                          {technologies[5].title}
                        </h3>
                      </div>
                      <FaArrowRight className="text-[#0A6B7E] group-hover:translate-x-2 transition-transform duration-300" />
                    </div>
                    
                    {/* Second Row: Description */}
                    <div className="pt-4 border-t border-gray-100">
                      <p className="text-gray-600">
                        {technologies[5].description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Oracle Services Section */}
          <div className="bg-gradient-to-r from-[#36B5A0]/10 to-[#0A6B7E]/10 rounded-2xl p-8 mb-16">
            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">
              {/* Left side: Title, paragraph, and services */}
              <div className="lg:w-1/2">
                <div className="mb-6">
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">
                    Our <span className="text-[#0A6B7E]">Oracle</span> Services
                  </h3>
                  <p className="text-gray-700 mb-6">
                    We offer diverse engagement and implementation models to address varied needs of clients worldwide, working according to your requirements in time-bound, project-based engagement. Our expertise extends beyond Oracle database technology to include Oracle e-Business Suite, Application Server, Portal, Forms and Reports, and Enterprise Manager.
                  </p>
                </div>
                
                {/* Oracle Services */}
                <div className="space-y-4">
                  {oracleServices.map((item, index) => (
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
                      alt="Oracle Enterprise Solutions"
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
                              <p class="text-[#07284C] font-semibold">Oracle Enterprise Solutions</p>
                              <p class="text-gray-600 text-sm mt-2">Comprehensive Oracle services for business transformation</p>
                            </div>
                          </div>
                        `;
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Oracle Products Section */}
            <div className="mt-12">
              <h4 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Oracle <span className="text-[#0A6B7E]">Product Portfolio</span>
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {oracleProducts.map((product, index) => (
                  <div key={index} className="bg-white rounded-xl p-6 shadow-md border border-gray-200 hover:border-[#36B5A0] transition-all duration-300">
                    <div className="flex flex-col h-full">
                      <h5 className="text-xl font-semibold text-gray-800 mb-4 pb-2 border-b border-gray-100">
                        {product.category}
                      </h5>
                      <ul className="space-y-2 flex-1">
                        {product.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start">
                            <div className="w-1.5 h-1.5 bg-[#36B5A0] rounded-full mt-2 mr-3"></div>
                            <span className="text-gray-700">{item}</span>
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
              Oracle <span className="text-[#0A6B7E]">Expertise</span>
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

export default OraclePage;