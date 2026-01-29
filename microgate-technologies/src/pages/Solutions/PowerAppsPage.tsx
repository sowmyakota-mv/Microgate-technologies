import React from 'react';
import { 
  FaCheckCircle,
  FaUsers,
  FaCogs,
  FaCloud,
  FaDatabase,
  FaClipboardCheck,
  FaBriefcase,
  FaCogs as FaPowerApps,
  FaRobot,
  FaLaptopCode,
  FaConnectdevelop,
} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const PowerAppsPage: React.FC = () => {
  const navigate = useNavigate();

  // Solutions Data with navigation paths
  const solutions = [
    {
      icon: <FaUsers className="text-2xl text-[#0A6B7E]" />,
      title: "IT Outsourcing",
      description: "Comprehensive outsourcing solutions for enhanced operational efficiency",
      path: "/it-outsourcing"
    },
    {
      icon: <FaClipboardCheck className="text-2xl text-[#36B5A0]" />,
      title: "Testing & QA",
      description: "Quality assurance and testing services for flawless software delivery",
      path: "/testing-qa"
    },
    {
      icon: <FaBriefcase className="text-2xl text-[#0A6B7E]" />,
      title: "Mortgage Solutions",
      description: "Specialized technology solutions for the mortgage and banking industry",
      path: "/mortgage-solutions"
    },
    {
      icon: <FaCloud className="text-2xl text-[#0A6B7E]" />,
      title: "Cloud Solutions",
      description: "Cloud migration, implementation, and management services",
      path: "/cloud-solutions"
    },
    {
      icon: <FaDatabase className="text-2xl text-[#36B5A0]" />,
      title: "BI & Visualization",
      description: "Business intelligence and data visualization for informed decision-making",
      path: "/bi-visualization"
    },
    {
      icon: <FaCogs className="text-2xl text-[#0A6B7E]" />,
      title: "IT Consulting",
      description: "Strategic IT consulting services for business transformation",
      path: "/it-consulting"
    }
  ];

  // Power Apps Services
  const powerAppsServices = [
    "App in a Day Workshop",
    "RPA in a Day Workshop",
    "Battle Card – Product Comparison, TCO & ROI Analysis",
    "Design & Architecture on Power Apps & Power Automate",
    "Development & Deployment of solutions on Power Platform",
    "Citizen Developer – Strategy & Guidance",
    "App Administration, ALM & Governance"
  ];

  // Important Points for Power Apps
  const importantPoints = [
    {
      icon: <FaPowerApps className="text-xl text-[#36B5A0]" />,
      title: "Low-Code Development",
      description: "Rapidly build and deploy custom business applications without specialized technical knowledge"
    },
    {
      icon: <FaRobot className="text-xl text-[#0A6B7E]" />,
      title: "Power Automate Integration",
      description: "Automate repetitive work with low-code, drag-and-drop tools and 300+ connectors"
    },
    {
      icon: <FaLaptopCode className="text-xl text-[#36B5A0]" />,
      title: "Microsoft Gold Partner",
      description: "Expert guidance from Microsoft Gold Level Partner with deep Power Apps experience"
    },
    {
      icon: <FaConnectdevelop className="text-xl text-[#0A6B7E]" />,
      title: "Business Process Automation",
      description: "Promote workflow management, reporting, and data management with custom apps"
    }
  ];

  // Power Apps Benefits
//   const benefits = [
//     "Business process automation without coding",
//     "Workflow management and optimization",
//     "Reporting and data management solutions",
//     "Integration with 300+ applications via connectors",
//     "Rapid deployment of custom business applications"
//   ];

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
          <div className="text-left w-full">
            <h1 className="text-4xl md:text-5xl lg:text-4xl font-bold text-white mb-2">
              We Build Unique & Custom Solutions
            </h1>
            <p className="text-med md:text-xl text-white/90 mb-8">
              Functional & technology enabled solutions to solve business problems
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-16">
            {/* Title */}
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
              Microsoft <span className="text-[#0A6B7E]">Power Apps</span>
            </h2>
            
            {/* Content paragraph - Using the provided content */}
            <p className="text-med md:text-med text-gray-700 leading-relaxed">
  <span className="font-semibold text-[#07284C]">Microsoft Power Apps is a comprehensive suite of apps, connectors, services, and data platforms</span> that enables organizations to be more productive with their data by allowing rapid development and deployment of custom business applications without requiring specialized technical expertise. As a Microsoft Gold Level Partner, Microgate Technologies provides expert guidance to companies seeking to leverage PowerApps, utilizing our global talent pool of developers with deep experience in creating low-code solutions for business process automation, workflow management, and data integration. <span className="font-semibold text-[#07284C]">Power Automate empowers users to build automated processes</span> through intuitive drag-and-drop tools, templates, and connectors, eliminating manual repetitive work by connecting to over 300+ applications including Facebook, Gmail, Adobe, Slack, and Azure, enabling seamless interaction between diverse business systems for enhanced operational efficiency.
</p>
          </div>

          {/* Solutions Portfolio Section - Same layout */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10 text-center">
              Our <span className="text-[#36B5A0]">Solutions Portfolio</span>
            </h2>
            
            <div className="space-y-6">
              {/* Row 1 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Solution 1 */}
                <div 
                  onClick={() => handleSolutionClick(solutions[0].path)}
                  className="bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-xl transition-all duration-300 hover:border-[#36B5A0]/50 cursor-pointer group"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <h3 className="text-xl font-semibold text-gray-800 group-hover:text-[#36B5A0] transition-colors duration-300">
                          {solutions[0].title}
                        </h3>
                      </div>
                      <div className="group-hover:bg-[#36B5A0]/10 transition-colors duration-300">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-10 w-10 text-[#36B5A0] transform rotate-45 group-hover:rotate-90 transition-transform duration-300" 
          viewBox="0 0 20 20" 
          fill="currentColor"
        >
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
        </svg>
      </div></div>
                    
                    <div className="pt-4 border-t border-gray-100">
                      <p className="text-gray-600">
                        {solutions[0].description}
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Solution 2 */}
                <div 
                  onClick={() => handleSolutionClick(solutions[1].path)}
                  className="bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-xl transition-all duration-300 hover:border-[#0A6B7E]/50 cursor-pointer group"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <h3 className="text-xl font-semibold text-gray-800 group-hover:text-[#0A6B7E] transition-colors duration-300">
                          {solutions[1].title}
                        </h3>
                      </div>
                     <div className="group-hover:bg-[#36B5A0]/10 transition-colors duration-300">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-10 w-10 text-[#36B5A0] transform rotate-45 group-hover:rotate-90 transition-transform duration-300" 
          viewBox="0 0 20 20" 
          fill="currentColor"
        >
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
        </svg>
      </div> </div>
                    
                    <div className="pt-4 border-t border-gray-100">
                      <p className="text-gray-600">
                        {solutions[1].description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Row 2 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Solution 3 */}
                <div 
                  onClick={() => handleSolutionClick(solutions[2].path)}
                  className="bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-xl transition-all duration-300 hover:border-[#36B5A0]/50 cursor-pointer group"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <h3 className="text-xl font-semibold text-gray-800 group-hover:text-[#36B5A0] transition-colors duration-300">
                          {solutions[2].title}
                        </h3>
                      </div>
                     <div className="group-hover:bg-[#36B5A0]/10 transition-colors duration-300">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-10 w-10 text-[#36B5A0] transform rotate-45 group-hover:rotate-90 transition-transform duration-300" 
          viewBox="0 0 20 20" 
          fill="currentColor"
        >
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
        </svg>
      </div> </div>
                    
                    <div className="pt-4 border-t border-gray-100">
                      <p className="text-gray-600">
                        {solutions[2].description}
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Solution 4 */}
                <div 
                  onClick={() => handleSolutionClick(solutions[3].path)}
                  className="bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-xl transition-all duration-300 hover:border-[#0A6B7E]/50 cursor-pointer group"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <h3 className="text-xl font-semibold text-gray-800 group-hover:text-[#0A6B7E] transition-colors duration-300">
                          {solutions[3].title}
                        </h3>
                      </div>
                     <div className="group-hover:bg-[#36B5A0]/10 transition-colors duration-300">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-10 w-10 text-[#36B5A0] transform rotate-45 group-hover:rotate-90 transition-transform duration-300" 
          viewBox="0 0 20 20" 
          fill="currentColor"
        >
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
        </svg>
      </div> </div>
                    
                    <div className="pt-4 border-t border-gray-100">
                      <p className="text-gray-600">
                        {solutions[3].description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Row 3 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Solution 5 */}
                <div 
                  onClick={() => handleSolutionClick(solutions[4].path)}
                  className="bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-xl transition-all duration-300 hover:border-[#36B5A0]/50 cursor-pointer group"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <h3 className="text-xl font-semibold text-gray-800 group-hover:text-[#36B5A0] transition-colors duration-300">
                          {solutions[4].title}
                        </h3>
                      </div>
                    <div className="group-hover:bg-[#36B5A0]/10 transition-colors duration-300">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-10 w-10 text-[#36B5A0] transform rotate-45 group-hover:rotate-90 transition-transform duration-300" 
          viewBox="0 0 20 20" 
          fill="currentColor"
        >
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
        </svg>
      </div> </div>
                    
                    <div className="pt-4 border-t border-gray-100">
                      <p className="text-gray-600">
                        {solutions[4].description}
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Solution 6 */}
                <div 
                  onClick={() => handleSolutionClick(solutions[5].path)}
                  className="bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-xl transition-all duration-300 hover:border-[#0A6B7E]/50 cursor-pointer group"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <h3 className="text-xl font-semibold text-gray-800 group-hover:text-[#0A6B7E] transition-colors duration-300">
                          {solutions[5].title}
                        </h3>
                      </div>
                     <div className="group-hover:bg-[#36B5A0]/10 transition-colors duration-300">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-10 w-10 text-[#36B5A0] transform rotate-45 group-hover:rotate-90 transition-transform duration-300" 
          viewBox="0 0 20 20" 
          fill="currentColor"
        >
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
        </svg>
      </div></div>
                    
                    <div className="pt-4 border-t border-gray-100">
                      <p className="text-gray-600">
                        {solutions[5].description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Power Apps Services Section */}
          <div className="bg-gradient-to-r from-[#36B5A0]/10 to-[#0A6B7E]/10 rounded-2xl p-8 mb-16">
            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">
              {/* Left side: Title, paragraph, and services */}
              <div className="lg:w-1/2">
                <div className="mb-6">
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">
                    Our <span className="text-[#0A6B7E]">Power Apps</span> Services
                  </h3>
                  <p className="text-gray-700 mb-6">
                    Comprehensive Power Apps services tailored to automate your business processes with expert low-code solutions.
                  </p>
                </div>
                
                {/* Services list */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                  {powerAppsServices.map((item, index) => (
                                    <div key={index} className="flex items-start text-left bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-300">
                                      <FaCheckCircle className="text-[#36B5A0]  mr-3 mt-1 flex-shrink-0" />
                                      <span className="font-medium text-gray-800">{item}</span>
                                    </div>
                                  ))}
                                </div>
              </div>
              
              {/* Right side: Image */}
              <div className="lg:w-1/2">
                <div className="p-4 h-full flex items-center justify-center">
                  <div className="relative w-full h-full overflow-hidden">
                    <img 
                      src="/solutions-img.png" 
                      alt="Power Apps Solutions"
                      className="w-full h-full object-cover rounded-xl mt-12"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        e.currentTarget.parentElement!.innerHTML = `
                          <div class="absolute inset-0 bg-gradient-to-br from-[#36B5A0]/20 to-[#0A6B7E]/20 flex items-center justify-center">
                            <div class="text-center p-4">
                              <svg class="w-16 h-16 text-[#0A6B7E] mx-auto mb-4" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clip-rule="evenodd"/>
                              </svg>
                              <p class="text-[#07284C] font-semibold">Power Apps Solutions</p>
                              <p class="text-gray-600 text-sm mt-2">Low-code business applications for automation</p>
                            </div>
                          </div>
                        `;
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Important Points Section */}
          <div className="">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
              Key <span className="text-[#0A6B7E]">Advantages</span>
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

export default PowerAppsPage;