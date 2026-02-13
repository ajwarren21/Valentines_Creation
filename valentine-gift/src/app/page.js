// src/app/page.js
"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

export default function HomePage() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Floating hearts animation
    const hearts = [];
    const heartCount = 30;

    class Heart {
      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * canvas.width;
        this.y = canvas.height + 50;
        this.size = Math.random() * 20 + 15;
        this.speed = Math.random() * 1 + 0.5;
        this.opacity = Math.random() * 0.3 + 0.1;
        this.swing = Math.random() * 2;
        this.swingSpeed = Math.random() * 0.02 + 0.01;
      }

      update() {
        this.y -= this.speed;
        this.x += Math.sin(this.y * this.swingSpeed) * this.swing;
        
        if (this.y < -50) {
          this.reset();
        }
      }

      draw() {
        ctx.save();
        ctx.globalAlpha = this.opacity;
        ctx.fillStyle = "#FF69B4";
        ctx.beginPath();
        
        const x = this.x;
        const y = this.y;
        const size = this.size;
        
        // Draw heart shape
        ctx.moveTo(x, y + size / 4);
        ctx.bezierCurveTo(x, y, x - size / 2, y - size / 2, x - size / 2, y + size / 4);
        ctx.bezierCurveTo(x - size / 2, y + size / 2, x, y + size * 0.75, x, y + size);
        ctx.bezierCurveTo(x, y + size * 0.75, x + size / 2, y + size / 2, x + size / 2, y + size / 4);
        ctx.bezierCurveTo(x + size / 2, y - size / 2, x, y, x, y + size / 4);
        
        ctx.fill();
        ctx.restore();
      }
    }

    for (let i = 0; i < heartCount; i++) {
      hearts.push(new Heart());
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      hearts.forEach(heart => {
        heart.update();
        heart.draw();
      });
      
      requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-rose-50 via-pink-50 to-red-50">
      {/* Animated background canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
        style={{ opacity: 0.4 }}
      />

      {/* Decorative elements */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob" />
      <div className="absolute top-40 left-20 w-72 h-72 bg-rose-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000" />
      <div className="absolute -bottom-8 left-1/3 w-80 h-80 bg-red-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000" />

      {/* Main content */}
      <main className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 py-12">
        {/* Logo/Icon */}
        <div className="mb-8 animate-float">
          <div className="relative">
            <div className="text-8xl filter drop-shadow-2xl">💝</div>
            <div className="absolute inset-0 text-8xl blur-lg opacity-50">💝</div>
          </div>
        </div>

        {/* Headline */}
        <h1 className="text-center mb-6 animate-fade-in">
          <span className="block text-5xl md:text-7xl lg:text-8xl font-black bg-gradient-to-r from-pink-600 via-rose-600 to-red-600 bg-clip-text text-transparent leading-tight mb-2">
            Link Gift
          </span>
          <span className="block text-2xl md:text-3xl lg:text-4xl font-light text-gray-700 tracking-wide">
            Create unforgettable Valentine's moments
          </span>
        </h1>

        {/* Description */}
        <p className="text-center text-lg md:text-xl text-gray-600 max-w-2xl mb-12 leading-relaxed animate-fade-in-delay">
          Design a beautiful, personalized gift page for someone special.
          <br />
          <span className="text-pink-600 font-medium">Coffee, gift cards, chocolates, and more</span> — 
          wrapped in your own custom design.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-16 animate-fade-in-delay-2">
          <Link
            href="/create"
            className="group relative px-10 py-5 bg-gradient-to-r from-pink-500 via-rose-500 to-red-500 text-white text-lg font-bold rounded-full shadow-2xl hover:shadow-pink-500/50 transition-all duration-300 hover:scale-105 overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              Create Your Gift
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-pink-600 via-rose-600 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </Link>

          <Link
            href="/browse"
            className="px-10 py-5 bg-white/80 backdrop-blur-sm text-gray-800 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl border-2 border-pink-200 hover:border-pink-400 transition-all duration-300 hover:scale-105"
          >
            See Examples
          </Link>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl w-full animate-fade-in-delay-3">
          <FeatureCard
            icon="🎨"
            title="Fully Customizable"
            description="Choose colors, themes, patterns, and messages that match your style"
            delay="0"
          />
          <FeatureCard
            icon="⚡"
            title="Instant Delivery"
            description="Create and share your gift link in seconds—no waiting, no shipping"
            delay="100"
          />
          <FeatureCard
            icon="💖"
            title="Unforgettable"
            description="A personalized experience they'll remember long after Valentine's Day"
            delay="200"
          />
        </div>

        {/* Social Proof */}
        <div className="mt-16 text-center animate-fade-in-delay-4">
          <p className="text-sm text-gray-500 mb-4">Loved by gift-givers everywhere</p>
          <div className="flex items-center justify-center gap-2">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-6 h-6 text-pink-500" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <p className="text-xs text-gray-400 mt-2">Rated 5 stars by couples in love</p>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 text-center py-8 text-gray-500 text-sm">
        <p>Made with ❤️ for Valentine's Day 2026</p>
      </footer>

      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }

        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }

        .animate-fade-in-delay {
          animation: fade-in 0.8s ease-out 0.2s forwards;
          opacity: 0;
        }

        .animate-fade-in-delay-2 {
          animation: fade-in 0.8s ease-out 0.4s forwards;
          opacity: 0;
        }

        .animate-fade-in-delay-3 {
          animation: fade-in 0.8s ease-out 0.6s forwards;
          opacity: 0;
        }

        .animate-fade-in-delay-4 {
          animation: fade-in 0.8s ease-out 0.8s forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  );
}

function FeatureCard({ icon, title, description, delay }) {
  return (
    <div
      className="group bg-white/70 backdrop-blur-md p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-pink-100"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-gray-800 mb-3">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
}
