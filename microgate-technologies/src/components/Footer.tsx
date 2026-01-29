// src/components/Footer.tsx
import React, { useState } from "react";
import {
  FaLinkedin,
  FaTwitter,
  FaFacebook,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";
import ScrollAnimation from "../animation/ScrollAnimation";
import microgateLogo from "/microgate-logo.jpeg";

const Footersection: React.FC = () => {
  const [showMore, setShowMore] = useState(false);

  const expertise = [
    "IT Consulting",
    "IT Outsourcing",
    "Testing & QA",
    "Mortgage Solutions",
    "Power Apps",
    "Cloud Solutions",
    "BI & Visualization",
    "Microsoft Technologies",
    "Oracle",
    "SAP",
    "Block Chain",
    "Salesforce",
    "Middleware",
    "Application Development",
    "Embedded Systems",
    "Networking",
    "VLSI Design",
    "Design Verification"
  ];

  return (
    <footer className="bg-[#0B1A2A] text-gray-300 mt-16">
      {/* Top Section */}
      <ScrollAnimation>
        <div className="max-w-7xl mx-auto px-8 py-12 grid grid-cols-1 md:grid-cols-3 gap-12 border-b border-gray-900">
          {/* Column 1: Company Info */}
          <div>
            <h3 className="text-3xl font-bold text-white mb-4">Microgate Technologies Private Limited</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Microgate Technologies empowers organizations through innovative digital
              solutions, driving growth, efficiency, and sustainability in an
              ever-evolving business landscape.
            </p>
            {/* <p className="mt-4 text-xs text-gray-500">
              CIN No: 12345UK2025PTC98765
            </p> */}
          </div>

          {/* Column 2: Important Links */}
          <div>
            <h4 className="text-xl font-semibold text-white mb-4 text-left">
              Important Links
            </h4>
            <ul className="grid grid-cols-2 gap-2 text-gray-400 text-sm text-left">
              <li><a href="/" className="hover:text-white">Home</a></li>
              <li><a href="/abouttransform" className="hover:text-white">About Us</a></li>
              <li><a href="/expertise/digital-transformation" className="hover:text-white">Our Services</a></li>
              <li><a href="expertise/digital-transformation" className="hover:text-white">Expertise</a></li>
              <li><a href="/sustainability" className="hover:text-white">Careers</a></li>
              <li><a href="/innovation/ai" className="hover:text-white">Innovation Lab</a></li>
              <li><a href="/contact" className="hover:text-white">Contact</a></li>
              <li><a href="/csr" className="hover:text-white">CSR</a></li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div className="border border-dashed border-blue-400 rounded-xl p-5">
            <h4 className="text-xl font-semibold text-white mb-4 text-left">Contact</h4>
            <div className="space-y-3 text-gray-400 text-sm">
              <p className="flex items-start gap-3 text-left">
                <FaMapMarkerAlt className="text-blue-400 text-lg mt-1 " />
                Microgate Technologies , <br />
                MIG: 648, KPHB Phase 2 <br/>
Kukatpally, Hyderabad-72.
              </p>
              <p className="flex items-center gap-3">
                <FaEnvelope className="text-blue-400 text-lg" />
                info@microgatetechnologies.com
              </p>
              <p className="flex items-center gap-3">
                <FaPhone className="text-blue-400 text-lg" />
                +91 1234 567890
              </p>
            </div>
          </div>
        </div>
      </ScrollAnimation>

      {/* Areas of Expertise */}
<div className="max-w-7xl mx-auto px-8 py-8 border-b border-gray-700 -mt-16">
  <div className="flex items-center gap-4 mb-4">
    <h4 className="text-xl font-semibold text-white whitespace-nowrap">
      Areas of Expertise
    </h4>
    <div className="flex-1 border-t border-gray-600"></div>
  </div>

  <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 text-gray-400 text-sm text-left">
    {(showMore ? expertise : expertise.slice(0, 9)).map((item, i) => (
      <li key={i} className="list-disc list-inside">
        {item}
      </li>
    ))}
  </ul>

  <button
    onClick={() => setShowMore(!showMore)}
    className="mt-3 text-blue-300 hover:text-white text-sm"
  >
    {showMore ? "Show Less ↑" : "Show More ↓"}
  </button>
</div>

      {/* Bottom Section with Logo beside Statement */}
      <div className="max-w-full mx-auto px-6 py-4 border-b border-gray-700">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
          <img
            src={microgateLogo}
            alt="Innovic Solutions Logo"
            className="w-40 h-auto md:mt-1"
          />
          <p className="text-gray-400 text-sm md:text-2xlg leading-relaxed max-w-5xl text-left">
            Microgate Technologies is a premier IT services and technology solutions provider
             specializing in digital transformation, enterprise software development, and cloud 
             computing. We partner with businesses worldwide to deliver innovative solutions that 
             drive growth, enhance efficiency, and create sustainable competitive advantages in today's 
             rapidly evolving digital landscape.{" "}
            <a
              className="text-blue-300 hover:text-white font-semibold"
            >
              Know More →
            </a>
          </p>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="bg-[#081524] py-2 px-6 text-gray-400 text-sm">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Left */}
          <div className="text-xs md:text-sm text-gray-500 text-center md:text-left">
            © {new Date().getFullYear()} Microgate Technologies Private Limited. All Rights Reserved.
          </div>

          {/* Middle */}
          <div className="flex flex-wrap justify-center space-x-2 text-xs md:text-sm text-gray-400">
            <a href="/privacy-policy" className="hover:text-gray-200">Privacy Policy</a>
            <span>|</span>
            <a href="/terms" className="hover:text-gray-200">Terms of Use</a>
            <span>|</span>
            <a href="/cookie-policy" className="hover:text-gray-200">Cookie Policy</a>
          </div>

          {/* Right: Social Icons */}
          <div className="flex space-x-4">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-blue-400 hover:text-white w-6 md:w-8 h-auto" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="text-blue-400 hover:text-white w-6 md:w-8 h-auto" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="text-blue-400 hover:text-white w-6 md:w-8 h-auto" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footersection;
