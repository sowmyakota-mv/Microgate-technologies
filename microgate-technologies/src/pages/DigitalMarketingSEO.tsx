import { motion } from "framer-motion";
import { BarChart3, Globe, Layers, Megaphone, Search, TrendingUp } from "lucide-react";
import ScrollAnimation from "../animation/ScrollAnimation";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { SiFigma, SiGoogleads, SiGoogleanalytics, SiGooglesearchconsole, SiGooglesheets, SiHotjar, SiMeta, SiSemrush } from "react-icons/si";

export default function DigitalMarketingSEO() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [animate, setAnimate] = useState(false);
  const navigate = useNavigate();

  const marketingTools = [
    { name: "Google Search Console", icon: <SiGooglesearchconsole className="text-red-500 w-10 h-10" /> },
    { name: "Google Analytics 4", icon: <SiGoogleanalytics className="text-orange-500 w-10 h-10" /> },
    { name: "Ahrefs / Semrush", icon: <SiSemrush className="text-blue-500 w-10 h-10" /> },
    { name: "Google Ads", icon: <SiGoogleads className="text-green-500 w-10 h-10" /> },
    { name: "Meta Ads Manager", icon: <SiMeta className="text-blue-700 w-10 h-10" /> },
    { name: "Hotjar / FullStory", icon: <SiHotjar className="text-red-600 w-10 h-10" /> },
    { name: "Figma (for creatives)", icon: <SiFigma className="text-pink-600 w-10 h-10" /> },
    { name: "Notion / Google Sheets", icon: <SiGooglesheets className="text-green-600 w-10 h-10" /> },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setAnimate(false);
            setTimeout(() => setAnimate(true), 50);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section
      id="/trainings/digital-marketing-seo"
      className="w-full min-h-screen bg-gradient-to-b from-sky-50 via-white to-sky-100 text-gray-800 overflow-hidden"
    >
      {/* ===== HERO SECTION ===== */}
      <div
        ref={sectionRef}
        className="relative w-full h-[70vh] flex flex-col justify-center items-center text-center overflow-hidden"
      >
        {/* 🎥 Background Video */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover z-[1]"
          src="/digital-hero.mp4"
          autoPlay
          loop
          muted
          playsInline
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50 z-[2]"></div>

        {/* Split Animated Title */}
        <div className="relative z-[3] px-6 mt-16">
          <h1
            className="text-4xl md:text-7xl font-bold text-white mb-6 tracking-wide flex flex-wrap justify-center"
            style={{ fontFamily: "'Inter', 'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif" }}
          >
            {"Digital Marketing".split("").map((letter, i) => (
              <span
                key={i}
                className="inline-block opacity-0"
                style={{
                  animation: animate ? `letterEnter 0.6s forwards` : "none",
                  animationDelay: animate ? `${i * 0.08}s` : "0s",
                }}
              >
                {letter === " " ? "\u00A0" : letter}
              </span>
            ))}
          </h1>

          <h1
            className="text-5xl md:text-7xl font-bold text-sky-300 mb-6 tracking-wide flex flex-wrap justify-center"
            style={{ fontFamily: "'Inter', 'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif"}}
          >
            {"& SEO".split("").map((letter, i) => (
              <span
                key={i}
                className="inline-block opacity-0"
                style={{
                  animation: animate ? `letterEnter 0.6s forwards` : "none",
                  animationDelay: animate ? `${i * 0.08 + 1.2}s` : "0s",
                }}
              >
                {letter === " " ? "\u00A0" : letter}
              </span>
            ))}
          </h1>
        </div>
      </div>

      {/* ===== SUBTITLE + CTA ===== */}
      <div className="text-center py-12 px-6 md:px-16">
        <ScrollAnimation delay={0}>
          <h1 className="text-4xl md:text-6xl font-extrabold text-sky-800 mb-4">
            Digital Marketing & SEO Mastery
          </h1>
        </ScrollAnimation>

        <ScrollAnimation delay={50}>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Learn proven SEO techniques, paid media strategies and analytics to
            grow organic traffic, increase conversions, and scale marketing
            performance.
          </p>
        </ScrollAnimation>

        <ScrollAnimation delay={100}>
          <div className="mt-8 flex justify-center gap-4">
            <button
              onClick={() => navigate("/connect")}
              className="bg-sky-700 hover:bg-sky-800 text-white px-8 py-3 text-lg rounded-full transition-all"
            >
              Apply Now
            </button>
          </div>
        </ScrollAnimation>
      </div>

      {/* WHAT YOU'LL LEARN */}
      <div className="py-12 px-6 md:px-20 bg-white">
        <ScrollAnimation delay={0}>
          <h2 className="text-3xl md:text-5xl font-bold text-center text-sky-800 mb-12">
            What You'll Learn
          </h2>
        </ScrollAnimation>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <Search className="w-10 h-10 text-sky-600" />,
              title: "SEO: From Keyword to Rankings",
              desc: "Master keyword research, on-page optimization and technical SEO that moves the needle."
            },
            {
              icon: <Megaphone className="w-10 h-10 text-sky-600" />,
              title: "Paid Media & Acquisition",
              desc: "Launch and optimize Google & social campaigns for predictable lead generation."
            },
            {
              icon: <TrendingUp className="w-10 h-10 text-sky-600" />,
              title: "Growth & Performance",
              desc: "Measure true impact with analytics, CRO and scalable growth playbooks."
            },
            {
              icon: <Layers className="w-10 h-10 text-sky-600" />,
              title: "Content Strategy",
              desc: "Build content ecosystems, topic clusters and editorial plans to earn organic authority."
            },
            {
              icon: <BarChart3 className="w-10 h-10 text-sky-600" />,
              title: "Data-Driven Decisions",
              desc: "Use GA4, UTM tracking and dashboards to optimize spend and ROI."
            },
            {
              icon: <Globe className="w-10 h-10 text-sky-600" />,
              title: "Local & International SEO",
              desc: "Tactics for local maps, multi-lingual sites and geo-targeted campaigns."
            }
          ].map((item, i) => (
            <ScrollAnimation key={i} delay={i * 30}>
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.25 }}
                className="h-full bg-sky-50 rounded-3xl shadow-lg p-8 text-center border border-sky-100 hover:shadow-xl"
              >
                <div className="flex justify-center mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold text-sky-800 mb-2">{item.title}</h3>
                <p className="text-gray-700 text-sm">{item.desc}</p>
              </motion.div>
            </ScrollAnimation>
          ))}
        </div>
      </div>

      {/* PROGRAM HIGHLIGHTS */}
      <div className="py-12 px-6 md:px-20 text-center">
        <ScrollAnimation delay={0}>
          <h2 className="text-3xl md:text-5xl font-bold text-sky-800 mb-12">Why This Program</h2>
        </ScrollAnimation>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              title: "Hands-on Campaigns",
              desc: "Practical projects  run live SEO & paid campaigns with mentor feedback."
            },
            {
              title: "Tools & Playbooks",
              desc: "Get templates, checklists and workflows that agencies use to scale."
            },
            {
              title: "Career & Freelance Ready",
              desc: "Build a measurable portfolio and client-ready case studies."
            }
          ].map((item, i) => (
            <ScrollAnimation key={i} delay={i * 50}>
              <div className="bg-white rounded-2xl shadow-md p-8 border border-sky-100">
                <h3 className="text-xl font-semibold text-sky-800 mb-3">{item.title}</h3>
                <p className="text-gray-700 leading-relaxed">{item.desc}</p>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>

      {/* TOOLS */}
      <div className="py-12 px-6 md:px-20">
        <ScrollAnimation delay={0}>
          <h3 className="text-2xl md:text-3xl font-bold text-sky-800 mb-6 text-center">
            Tools & Technologies
          </h3>
        </ScrollAnimation>

        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {marketingTools.map((t, i) => (
            <ScrollAnimation key={i} delay={i * 30}>
              <div
                className="p-6 text-center hover:shadow-md transition-all duration-300"
              >
                <div className="flex justify-center mb-3">{t.icon}</div>
                <p className="text-sm font-medium text-sky-900">{t.name}</p>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="py-12 bg-sky-200 text-center">
        <ScrollAnimation delay={0}>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to drive growth?</h2>
        </ScrollAnimation>

        <ScrollAnimation delay={50}>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 leading-relaxed">
            Join the Digital Marketing & SEO Mastery program  learn the strategies and tools to deliver measurable results.
          </p>
        </ScrollAnimation>

        <ScrollAnimation delay={100}>
          <div className="flex justify-center gap-4">
            <button onClick={() => navigate("/connect")} className="bg-white text-sky-700 hover:bg-white/90 text-lg px-8 py-4 rounded-full">
              Apply Now
            </button>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}