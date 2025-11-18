import React, { useState, useEffect } from 'react';
import { ChevronRight, Shield, Clock, DollarSign, CheckCircle, Phone, Mail, MapPin } from 'lucide-react';

const Financing = () => {
  const [financingOptions, setFinancingOptions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Simulated API call - replace with your actual API endpoint
  useEffect(() => {
    const fetchFinancingData = async () => {
      try {
        // Replace this URL with your actual API endpoint
        // const response = await fetch('/admin/createFinancing');
        // const data = await response.json();

        // Mock data for demonstration - replace with actual API call
        const mockData = [
          {
            id: 1,
            title: "0% Interest Financing",
            description: "Get your excavation project started with no interest for the first 12 months. Perfect for residential and commercial projects.",
            icon: "💰"
          },
          {
            id: 2,
            title: "Quick Approval Program",
            description: "Fast-track approval process with decisions in 24 hours. Minimal paperwork required for qualified applicants.",
            icon: "⚡"
          },
          {
            id: 3,
            title: "Equipment Lease Options",
            description: "Lease our premium excavating equipment with flexible terms. Includes maintenance and operator training.",
            icon: "🚜"
          },
          {
            id: 4,
            title: "Project-Based Financing",
            description: "Tailored financing solutions for large-scale excavation projects. Competitive rates and flexible payment schedules.",
            icon: "icon"
          }
        ];

        setTimeout(() => {
          setFinancingOptions(mockData);
          setLoading(false);
        }, 1000);

      } catch (err) {
        setError('Failed to load financing options', err);
        setLoading(false);
      }
    };

    fetchFinancingData();
  }, []);

  const benefits = [
    "Flexible payment terms",
    "Competitive interest rates",
    "Quick approval process",
    "No hidden fees",
    "Professional support"
  ];

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-orange-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-white text-lg">Loading financing options...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
        <div className="text-center text-white">
          <p className="text-xl mb-4">⚠️ {error}</p>
          <button
            onClick={() => window.location.reload()}
            className="bg-orange-500 hover:bg-orange-600 px-6 py-2 rounded-lg transition-colors"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-yellow-500/20 animate-pulse"></div>
        <div className="relative container mx-auto px-6 py-20">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text hover:text-transparent animate-slide-up">
              Financing Solutions
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed animate-slide-up animation-delay-200">
              Power your excavation projects with flexible financing options designed for contractors and businesses
            </p>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              { icon: DollarSign, value: "$2M+", label: "Financed Projects" },
              { icon: Clock, value: "24hr", label: "Quick Approval" },
              { icon: Shield, value: "100%", label: "Secure Process" }
            ].map((stat, index) => (
              <div key={index} className="text-center animate-scale-in" style={{ animationDelay: `${index * 200}ms` }}>
                <div className="bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-2xl border border-slate-600 hover:border-orange-500/50 transition-all duration-300 hover:transform hover:scale-105">
                  <stat.icon className="w-12 h-12 text-orange-400 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-slate-400">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Financing Options Grid */}
      <div className="container mx-auto px-6 py-16">
        <h2 className="text-4xl font-bold text-white text-center mb-12 animate-slide-up">
          Choose Your <span className="text-orange-400">Financing Plan</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
          {financingOptions.map((option, index) => (
            <div
              key={option.id}
              className="group bg-gradient-to-br from-slate-800 to-slate-700 rounded-2xl p-8 border border-slate-600 hover:border-orange-500/50 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/20 animate-slide-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="flex items-start space-x-4 mb-6">
                <div className="text-4xl bg-gradient-to-br from-orange-400 to-yellow-400 p-3 rounded-xl group-hover:scale-110 transition-transform duration-300">
                  {option.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-orange-400 transition-colors">
                    {option.title}
                  </h3>
                  <p className="text-slate-300 leading-relaxed mb-6">
                    {option.description}
                  </p>
                </div>
              </div>

              <button className="w-full bg-gradient-to-r from-orange-500 to-yellow-500 text-white font-semibold py-3 px-6 rounded-xl hover:from-orange-600 hover:to-yellow-600 transition-all duration-300 flex items-center justify-center space-x-2 group-hover:shadow-lg">
                <span>Learn More</span>
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 rounded-3xl p-12 border border-slate-600 mb-16 animate-fade-in">
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            Why Choose Our <span className="text-orange-400">Financing?</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-center space-x-3 animate-slide-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                <span className="text-slate-300 text-lg">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-orange-500 to-yellow-500 rounded-3xl p-12 animate-pulse-slow">
          <h3 className="text-3xl font-bold text-white mb-6">
            Ready to Get Started?
          </h3>
          <p className="text-white/90 text-xl mb-8 max-w-2xl mx-auto">
            Contact our financing specialists today for a personalized quote and quick approval
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-white text-orange-600 font-bold py-4 px-8 rounded-xl hover:bg-slate-100 transition-all duration-300 flex items-center space-x-2 hover:transform hover:scale-105">
              <Phone className="w-5 h-5" />
              <span>Call Now: (555) 123-4567</span>
            </button>
            <button className="bg-slate-800 text-white font-bold py-4 px-8 rounded-xl hover:bg-slate-700 transition-all duration-300 flex items-center space-x-2 hover:transform hover:scale-105">
              <Mail className="w-5 h-5" />
              <span>Get Quote Online</span>
            </button>
          </div>
        </div>
      </div>

      {/* Footer Contact */}
      <footer className="bg-slate-900 border-t border-slate-700 py-12">
        <div className="container mx-auto px-6 text-center">
          <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8 text-slate-400">
            <div className="flex items-center space-x-2">
              <MapPin className="w-5 h-5 text-orange-400" />
              <span>123 Construction Ave, Builder City, BC 12345</span>
            </div>
            <div className="flex items-center space-x-2">
              <Phone className="w-5 h-5 text-orange-400" />
              <span>(555) 123-4567</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="w-5 h-5 text-orange-400" />
              <span>financing@excavatingpro.com</span>
            </div>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes slide-in {
          from { opacity: 0; transform: translateX(-20px); }
          to { opacity: 1; transform: translateX(0); }
        }
        
        @keyframes scale-in {
          from { opacity: 0; transform: scale(0.8); }
          to { opacity: 1; transform: scale(1); }
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
        
        .animate-slide-up {
          animation: slide-up 0.8s ease-out;
        }
        
        .animate-slide-in {
          animation: slide-in 0.6s ease-out;
        }
        
        .animate-scale-in {
          animation: scale-in 0.6s ease-out;
        }
        
        .animate-pulse-slow {
          animation: pulse 3s ease-in-out infinite;
        }
        
        .animation-delay-200 {
          animation-delay: 200ms;
        }
      `}</style>
    </div>
  );
};

export default Financing;