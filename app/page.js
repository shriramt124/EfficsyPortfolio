
"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Home() {
  const heroRef = useRef(null);
  const statsRef = useRef(null);
  const cardsRef = useRef(null);

  useEffect(() => {
    // Animate hero content on load
    const ctx = gsap.context(() => {
      gsap.from(".hero-title", {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out",
      });

      gsap.from(".hero-subtitle", {
        opacity: 0,
        y: 30,
        duration: 1,
        delay: 0.2,
        ease: "power3.out",
      });

      gsap.from(".hero-button", {
        opacity: 0,
        scale: 0.8,
        duration: 0.8,
        delay: 0.4,
        ease: "back.out(1.7)",
      });

      gsap.from(".stat-item", {
        opacity: 0,
        y: 20,
        duration: 0.8,
        stagger: 0.1,
        delay: 0.6,
        ease: "power2.out",
      });

      gsap.from(".service-card", {
        opacity: 0,
        y: 40,
        duration: 0.8,
        stagger: 0.15,
        delay: 0.8,
        ease: "power2.out",
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const services = [
    {
      title: "Business Planning",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      icon: "📊",
      color: "from-green-500/20 to-emerald-500/20",
      border: "border-green-500/30",
    },
    {
      title: "Financial Planning",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      icon: "💰",
      color: "from-green-400/20 to-teal-500/20",
      border: "border-green-400/30",
    },
    {
      title: "Digital Marketing",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      icon: "📢",
      color: "from-emerald-500/20 to-green-600/20",
      border: "border-emerald-500/30",
    },
    {
      title: "Agile Development",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      icon: "⚡",
      color: "from-teal-500/20 to-green-500/20",
      border: "border-teal-500/30",
    },
  ];

  return (
    <div ref={heroRef} className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Navigation */}
      <nav className="relative z-10 flex items-center justify-between px-8 py-6 max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
            Eficsy
          </span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm">
          <a href="#" className="hover:text-green-400 transition-colors">Home</a>
          <a href="#" className="hover:text-green-400 transition-colors">Service</a>
          <a href="#" className="hover:text-green-400 transition-colors">Portfolio</a>
          <a href="#" className="hover:text-green-400 transition-colors">How we works</a>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="relative z-10 max-w-7xl mx-auto px-8 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <h1 className="hero-title text-5xl md:text-6xl font-bold leading-tight">
              BUILD BETTER SOLUTIONS WITH{" "}
              <span className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
                EFICSY
              </span>
            </h1>

            <p className="hero-subtitle text-gray-300 text-lg max-w-lg">
              Grow your business to the next level to improve your business performance to stay competitive
            </p>

            <button className="hero-button bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 px-8 py-4 rounded-lg font-semibold transition-all duration-300 shadow-lg shadow-green-500/30 hover:shadow-green-500/50 hover:scale-105">
              Let's Discuss
            </button>

            {/* Stats */}
            <div ref={statsRef} className="flex gap-12 pt-8">
              <div className="stat-item">
                <div className="text-4xl font-bold text-green-400">10+</div>
                <div className="text-sm text-gray-400">Years Experience</div>
              </div>
              <div className="stat-item">
                <div className="text-4xl font-bold text-green-400">15+</div>
                <div className="text-sm text-gray-400">Teams</div>
              </div>
              <div className="stat-item">
                <div className="text-4xl font-bold text-green-400">98%</div>
                <div className="text-sm text-gray-400">Business Partners</div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative flex items-center justify-center">
            <div className="relative w-full max-w-md aspect-square">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-blue-500/20 rounded-full blur-2xl"></div>
              <div className="relative bg-gradient-to-br from-blue-500/10 to-green-500/10 rounded-3xl p-8 backdrop-blur-sm border border-green-500/20">
                <Image
                  src="/attached_assets/img2-3 (1)_1761124746473.png"
                  alt="Professional avatar"
                  width={400}
                  height={400}
                  className="w-full h-auto"
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        {/* Service Cards */}
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {services.map((service, index) => (
            <div
              key={index}
              className={`service-card group relative bg-gradient-to-br ${service.color} backdrop-blur-sm p-6 rounded-2xl border ${service.border} hover:border-green-400/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-green-500/20`}
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">
                {service.title}
              </h3>
              <p className="text-gray-300 text-sm">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
