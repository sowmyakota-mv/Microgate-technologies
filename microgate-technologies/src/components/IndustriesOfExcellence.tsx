import React from "react";

const IndustriesOfExcellence: React.FC = () => {
  const industries = [
    {
      id: "technology",
      title: "Technology",
      iconPath: "/technology-industry.png", // Icon from public folder
      description: `We partner with technology companies to drive digital transformation through cutting-edge AI solutions that optimize digital infrastructure, accelerate innovation cycles, and enhance user experiences. Our expertise spans AI-driven automation for development pipelines, intelligent cloud-native architectures, and advanced analytics for product optimization, helping firms reduce time-to-market while improving code quality through AI-assisted development.`,
      count: "120+ Projects",
      gradient: "from-blue-600 to-blue-700"
    },
    {
      id: "financial-services",
      title: "Financial Services",
      iconPath: "/financial-services.png", // Icon from public folder
      description: `We deliver secure, compliant AI solutions that transform banking, insurance, and fintech operations through sophisticated fraud detection systems, automated trading platforms, and intelligent risk assessment models. Our implementations reduce false positives by up to 70% while ensuring regulatory compliance through automated monitoring systems that adapt to evolving financial regulations.`,
      count: "85+ Projects",
      gradient: "from-green-600 to-emerald-700"
    },
    {
      id: "healthcare",
      title: "Healthcare",
      iconPath: "/healthcare.png", // Icon from public folder
      description: `We advance patient care and medical research through AI solutions including medical imaging systems that enhance diagnostic accuracy, predictive models for patient outcomes, and personalized treatment planning. Our drug discovery platforms accelerate pharmaceutical research while operational AI systems optimize resource allocation, reducing patient wait times by 40%.`,
      count: "65+ Projects",
      gradient: "from-purple-600 to-pink-700"
    },
    {
      id: "telecom",
      title: "Telecommunications",
      iconPath: "/telecommunication.png", // Icon from public folder
      description: `We transform telecom infrastructure through intelligent AI solutions that optimize network performance, enhance service delivery, and improve customer experiences. Our systems use predictive analytics to reduce downtime by 60%, implement AI-powered customer support, and develop churn prediction models for targeted retention strategies while ensuring network security.`,
      count: "45+ Projects",
      gradient: "from-amber-600 to-orange-700"
    }
  ];

  return (
    <section className="py-16 md:py-12 bg-gradient-to-b from-gray-900 to-gray-950 text-white">
      <div className="w-full lg:w-screen mx-auto px-4 md:px-8">
        {/* Header Section */}
        <div className="text-center mb-6">
          <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold mb-2 leading-tight">
            Innovate with{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500">
              Confidence
            </span>
          </h1>
          <p className="text-med text-gray-300 max-w-3xl mx-auto">
            A systematic approach to AI implementation that ensures tangible business value, 
            scalable solutions, and robust governance across your organization.
          </p>
        </div>

        {/* Industries Section - 2x2 Grid in One Column */}
        <div className="mb-2">
          {/* 2x2 Grid Container - Single Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-1 gap-8">
            {/* First Row: 2 industries */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
              {industries.slice(0, 2).map((industry) => (
                <div
                  key={industry.id}
                  className="md:p-8 p-2 hover:border-gray-600 transition-all duration-300 group hover:scale-[1.02]"
                >
                  <div className="flex items-start gap-2 md:gap-6">
                    {/* Icon from public folder - INCREASED SIZE */}
                    <div className={`w-12 md:w-20 h-12  md:h-20 rounded-xl bg-gradient-to-br ${industry.gradient} flex items-center justify-center flex-shrink-0`}>
                      <div className="text-white w-12 md:w-16 h-12 md:h-16"> {/* Increased from w-10 h-10 */}
                        <img 
                          src={industry.iconPath} 
                          alt={`${industry.title} icon`}
                          className="w-full h-full object-contain p-2" 
                          onError={(e) => {
                            e.currentTarget.style.display = 'none';
                            const fallback = document.createElement('div');
                            fallback.className = "text-3xl font-bold"; 
                            fallback.textContent = industry.title.charAt(0);
                            e.currentTarget.parentElement?.appendChild(fallback);
                          }}
                        />
                      </div>
                    </div>
                    
                    {/* Title and Description */}
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-2xl font-bold text-white">
                          {industry.title}
                        </h3>
                      </div>
                      
                      <p className="text-gray-300 mb-6 leading-relaxed text-left text-sm md:text-base">
                        {industry.description}
                      </p>
                      
                      {/* <button className="group/btn inline-flex items-center gap-2 text-blue-400 font-semibold text-sm hover:text-cyan-400 transition-colors">
                        View Case Studies
                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </button> */}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Second Row: 2 industries */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-8">
              {industries.slice(2, 4).map((industry) => (
                <div
                  key={industry.id}
                  className="p-2 md:p-8 hover:border-gray-600 transition-all duration-300 group hover:scale-[1.02]"
                >
                  <div className="flex items-start gap-2 md:gap-6">
                    {/* Icon from public folder - INCREASED SIZE */}
                    <div className={`w-12 md:w-20 h-12 md:h-20 rounded-xl bg-gradient-to-br ${industry.gradient} flex items-center justify-center flex-shrink-0`}>
                      <div className="text-white w-12 md:w-16 h-12 md:h-16"> {/* Increased from w-10 h-10 */}
                        <img 
                          src={industry.iconPath} 
                          alt={`${industry.title} icon`}
                          className="w-full h-full object-contain p-2" 
                          onError={(e) => {
                            e.currentTarget.style.display = 'none';
                            const fallback = document.createElement('div');
                            fallback.className = "text-3xl font-bold"; {/* Increased from text-2xl */}
                            fallback.textContent = industry.title.charAt(0);
                            e.currentTarget.parentElement?.appendChild(fallback);
                          }}
                        />
                      </div>
                    </div>
                    
                    {/* Title and Description */}
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-2xl font-bold text-white">
                          {industry.title}
                        </h3>
                      </div>
                      
                      <p className="text-gray-300 mb-6 leading-relaxed text-left text-sm md:text-base">
                        {industry.description}
                      </p>
                      
                      {/* <button className="group/btn inline-flex items-center gap-2 text-blue-400 font-semibold text-sm hover:text-cyan-400 transition-colors">
                        View Case Studies
                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </button> */}
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

export default IndustriesOfExcellence;