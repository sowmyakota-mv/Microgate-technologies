import React from 'react';
import { 
  FaArrowRight,
  FaCheckCircle,
  FaUsers,
  FaCogs,
  FaMobileAlt,
  FaShieldAlt,
  FaClipboardCheck,
  FaBriefcase,
  FaMoneyBillWave,
  FaChartBar,
  FaBuilding
} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const FinancialServicesPage: React.FC = () => {
  const navigate = useNavigate();

  // Industries Data with navigation paths - Removed Financial Services
  const industries = [
    {
      icon: <FaCogs className="text-2xl text-[#0A6B7E]" />,
      title: "Technology",
      description: "Technology solutions and consulting services for digital transformation",
      path: "/technology"
    },
    {
      icon: <FaUsers className="text-2xl text-[#36B5A0]" />,
      title: "Consumer Goods",
      description: "Retail and consumer goods industry solutions and services",
      path: "/consumer-goods"
    },
    {
      icon: <FaShieldAlt className="text-2xl text-[#0A6B7E]" />,
      title: "Insurance",
      description: "Specialized solutions for the insurance and risk management industry",
      path: "/insurance"
    },
    {
      icon: <FaClipboardCheck className="text-2xl text-[#36B5A0]" />,
      title: "Health Care",
      description: "Healthcare technology solutions and medical services consulting",
      path: "/health-care"
    },
    {
      icon: <FaMobileAlt className="text-2xl text-[#0A6B7E]" />,
      title: "Telecommunication",
      description: "Telecom solutions and communication technology services",
      path: "/telecommunication"
    },
    {
      icon: <FaBriefcase className="text-2xl text-[#36B5A0]" />,
      title: "Hospitality",
      description: "Hospitality industry solutions and service optimization",
      path: "/hospitality"
    }
  ];

  // Financial Services Practice Areas
  const practiceAreas = [
    "Customer Experience Management",
    "Risk and Compliance Solutions",
    "Alternate Application Support & Maintenance",
    "Claims and Management Systems",
    "Policy Administration Systems"
  ];

  // Important Points for Financial Services
  const importantPoints = [
    {
      icon: <FaMoneyBillWave className="text-xl text-[#36B5A0]" />,
      title: "Regulatory Compliance",
      description: "Addressing the most regulated industry with solutions that comply with global financial regulations"
    },
    {
      icon: <FaChartBar className="text-xl text-[#0A6B7E]" />,
      title: "Capital Markets Expertise",
      description: "Deep understanding of banking and capital markets with comprehensive business solutions"
    },
    {
      icon: <FaShieldAlt className="text-xl text-[#36B5A0]" />,
      title: "Rapid Response",
      description: "Ability to respond quickly and comprehensively to customer needs using industry best practices"
    },
    {
      icon: <FaBuilding className="text-xl text-[#0A6B7E]" />,
      title: "Scalable Infrastructure",
      description: "Solutions addressing foundational needs like scalability, latency and throughput requirements"
    }
  ];

  // Financial Services Focus Areas
  const focusAreas = [
    "Customer Experience Management",
    "Risk and Compliance",
    "Alternate Application Support & Maintenance (ASM)",
    "Claims and Management",
    "Policy Administration Systems",
    "Wealth and Investment Management",
    "Trade Processing & Back-office Functions"
  ];

  // Function to handle industry click
  const handleIndustryClick = (path: string) => {
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
              Banking & Financial Services Solutions
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              Technology solutions for one of the world's most regulated industries
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
              Financial <span className="text-[#0A6B7E]">Services</span>
            </h2>
            
            {/* Single detailed paragraph - 4-5 lines */}
            <p className="text-med md:text-med text-gray-700 leading-relaxed">
              <span className="font-semibold text-[#07284C]">Our Microgate Technologies</span> Banking and Financial practice is structured to adapt to changing and expanding pressures in the industry including global consolidation, increased regulation and a constantly changing administrative environment. Beyond technology, our Banking and Financial Services practice is versed in deep business processes that support various aspects of banking and capital markets. We build and support technology that keeps pace with change in one of the most regulated industries worldwide, utilizing industry best practices in development strategy and demonstrating deep understanding of critical software and hardware infrastructures.
            </p>
          </div>

          {/* Modified Two Columns Industries Section - Showing 6 industries (excluding Financial Services) */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10 text-center">
              Our <span className="text-[#36B5A0]">Industries Portfolio</span>
            </h2>
            
            {/* 3 Rows Grid Container - Now showing only 6 industries (without Financial Services) */}
            <div className="space-y-6">
              {/* Row 1 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Industry 1 */}
                <div 
                  onClick={() => handleIndustryClick(industries[0].path)}
                  className="bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-xl transition-all duration-300 hover:border-[#36B5A0]/50 cursor-pointer group"
                >
                  <div className="space-y-2">
                    {/* First Row: Title with Arrow */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <h3 className="text-xl font-semibold text-gray-800 group-hover:text-[#36B5A0] transition-colors duration-300">
                          {industries[0].title}
                        </h3>
                      </div>
                      <FaArrowRight className="text-[#36B5A0] group-hover:translate-x-2 transition-transform duration-300" />
                    </div>
                    
                    {/* Second Row: Description */}
                    <div className="pt-4 border-t border-gray-100">
                      <p className="text-gray-600">
                        {industries[0].description}
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Industry 2 */}
                <div 
                  onClick={() => handleIndustryClick(industries[1].path)}
                  className="bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-xl transition-all duration-300 hover:border-[#0A6B7E]/50 cursor-pointer group"
                >
                  <div className="space-y-4">
                    {/* First Row: Title with Arrow */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <h3 className="text-xl font-semibold text-gray-800 group-hover:text-[#0A6B7E] transition-colors duration-300">
                          {industries[1].title}
                        </h3>
                      </div>
                      <FaArrowRight className="text-[#0A6B7E] group-hover:translate-x-2 transition-transform duration-300" />
                    </div>
                    
                    {/* Second Row: Description */}
                    <div className="pt-4 border-t border-gray-100">
                      <p className="text-gray-600">
                        {industries[1].description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Row 2 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Industry 3 */}
                <div 
                  onClick={() => handleIndustryClick(industries[2].path)}
                  className="bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-xl transition-all duration-300 hover:border-[#36B5A0]/50 cursor-pointer group"
                >
                  <div className="space-y-4">
                    {/* First Row: Title with Arrow */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <h3 className="text-xl font-semibold text-gray-800 group-hover:text-[#36B5A0] transition-colors duration-300">
                          {industries[2].title}
                        </h3>
                      </div>
                      <FaArrowRight className="text-[#36B5A0] group-hover:translate-x-2 transition-transform duration-300" />
                    </div>
                    
                    {/* Second Row: Description */}
                    <div className="pt-4 border-t border-gray-100">
                      <p className="text-gray-600">
                        {industries[2].description}
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Industry 4 */}
                <div 
                  onClick={() => handleIndustryClick(industries[3].path)}
                  className="bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-xl transition-all duration-300 hover:border-[#0A6B7E]/50 cursor-pointer group"
                >
                  <div className="space-y-4">
                    {/* First Row: Title with Arrow */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <h3 className="text-xl font-semibold text-gray-800 group-hover:text-[#0A6B7E] transition-colors duration-300">
                          {industries[3].title}
                        </h3>
                      </div>
                      <FaArrowRight className="text-[#0A6B7E] group-hover:translate-x-2 transition-transform duration-300" />
                    </div>
                    
                    {/* Second Row: Description */}
                    <div className="pt-4 border-t border-gray-100">
                      <p className="text-gray-600">
                        {industries[3].description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Row 3 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Industry 5 */}
                <div 
                  onClick={() => handleIndustryClick(industries[4].path)}
                  className="bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-xl transition-all duration-300 hover:border-[#36B5A0]/50 cursor-pointer group"
                >
                  <div className="space-y-4">
                    {/* First Row: Title with Arrow */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <h3 className="text-xl font-semibold text-gray-800 group-hover:text-[#36B5A0] transition-colors duration-300">
                          {industries[4].title}
                        </h3>
                      </div>
                      <FaArrowRight className="text-[#36B5A0] group-hover:translate-x-2 transition-transform duration-300" />
                    </div>
                    
                    {/* Second Row: Description */}
                    <div className="pt-4 border-t border-gray-100">
                      <p className="text-gray-600">
                        {industries[4].description}
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Industry 6 */}
                <div 
                  onClick={() => handleIndustryClick(industries[5].path)}
                  className="bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-xl transition-all duration-300 hover:border-[#0A6B7E]/50 cursor-pointer group"
                >
                  <div className="space-y-4">
                    {/* First Row: Title with Arrow */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <h3 className="text-xl font-semibold text-gray-800 group-hover:text-[#0A6B7E] transition-colors duration-300">
                          {industries[5].title}
                        </h3>
                      </div>
                      <FaArrowRight className="text-[#0A6B7E] group-hover:translate-x-2 transition-transform duration-300" />
                    </div>
                    
                    {/* Second Row: Description */}
                    <div className="pt-4 border-t border-gray-100">
                      <p className="text-gray-600">
                        {industries[5].description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Financial Services Practice Section */}
          <div className="bg-gradient-to-r from-[#36B5A0]/10 to-[#0A6B7E]/10 rounded-2xl p-8 mb-16">
            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">
              {/* Left side: Title, paragraph, and practice areas */}
              <div className="lg:w-1/2">
                <div className="mb-6">
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">
                    Our <span className="text-[#0A6B7E]">Financial Services</span> Practice
                  </h3>
                  <p className="text-gray-700 mb-6">
                    We offer services to banking, capital markets and insurance industries in applications, IT system administration and business operations. Our unique strength is our ability to respond both quickly and comprehensively to customer needs using industry best practices in development strategy.
                  </p>
                </div>
                
                {/* Practice Areas */}
                <div className="space-y-4">
                  {practiceAreas.map((item, index) => (
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
                      alt="Financial Services Solutions"
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
                              <p class="text-[#07284C] font-semibold">Financial Services Solutions</p>
                              <p class="text-gray-600 text-sm mt-2">Banking, capital markets and insurance technology solutions</p>
                            </div>
                          </div>
                        `;
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Focus Areas Section */}
            <div className="mt-12">
              <h4 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Practice <span className="text-[#0A6B7E]">Focus Areas</span>
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {focusAreas.map((area, index) => (
                  <div key={index} className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-300">
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-[#36B5A0] rounded-full mr-3"></div>
                      <span className="font-medium text-gray-800">{area}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Important Points Section */}
          <div className="">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
              Key <span className="text-[#0A6B7E]">Strengths</span>
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

export default FinancialServicesPage;