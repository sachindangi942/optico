import React from "react";

const Loader = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated gradient background */}

      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/30 rounded-full animate-bounce"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          ></div>
        ))}
      </div>

      {/* Main loader container */}
      <div className="relative z-10 flex flex-col items-center space-y-8">
        {/* Outer ring */}
        <div className="relative">
          <div className="w-24 h-24 border-4 border-white/20 rounded-full animate-spin">
            <div className="absolute top-0 left-0 w-6 h-6 bg-gradient-to-r from-stone-400 to-red-500 rounded-full shadow-lg shadow-cyan-500/50"></div>
          </div>

          {/* Inner pulsing core */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-8 h-8 bg-gradient-to-r from-red-400 to-stone-500 rounded-full animate-pulse shadow-lg shadow-pink-500/50"></div>
          </div>
        </div>

        {/* Bouncing dots with glassmorphism */}
        <div className="flex space-x-3">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="w-4 h-4 rounded-full bg-white/80 backdrop-blur-sm animate-bounce shadow-lg"
              style={{
                animationDelay: `${i * 0.15}s`,
                background: `linear-gradient(45deg, 
          ${i === 0 ? '#78716c, #ef4444' : // stone-500 + red-500
                    i === 1 ? '#a8a29e, #b91c1c' : // stone-400 + red-700
                      '#1c1917, #7f1d1d'}`        // stone-900 + red-900
              }}
            ></div>
          ))}
        </div>


        {/* Loading text with typewriter effect */}
        <div className="text-black text-xl font-light tracking-widest flex items-center justify-center gap-2">
          <span className="inline-block animate-ping animation-delay-0">L</span>
          <span className="inline-block animate-ping animation-delay-100">O</span>
          <span className="inline-block animate-ping animation-delay-200">A</span>
          <span className="inline-block animate-ping animation-delay-300">D</span>
          <span className="inline-block animate-ping animation-delay-400">I</span>
          <span className="inline-block animate-ping animation-delay-500">N</span>
          <span className="inline-block animate-ping animation-delay-600">G</span>
          <span className="inline-block animate-bounce animation-delay-700 ml-2">.</span>
          <span className="inline-block animate-bounce animation-delay-800">.</span>
          <span className="inline-block animate-bounce animation-delay-900">.</span>
        </div>


        {/* Progress bar */}
        <div className="w-64 h-1 bg-white/20 rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-stone-400 via-red-500 to-stone-600 rounded-full transform origin-left animate-bounce"></div>
        </div>
      </div>

      {/* Subtle grid overlay */}
      <div className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }}>
      </div>
    </div>
  );
};

export default Loader;