import React, { useState, useEffect } from 'react';
import { ArrowRight, MapPin, Calendar, ExternalLink, AlertCircle } from 'lucide-react';
import Button from "../common/items/Button"
import Loader from "../common/items/Loader"
import BrandName from "../common/items/BrnadName";
import API from "../../api";

const CommitmentCard = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // 🔥 Fetch Data From Backend API
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await API.get("/projects");
        setProjects(res.data);
      } catch (err) {
        setError("Failed to load projects");
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const handleProjectClick = (projectId) => {
    alert(`Redirecting to project ${projectId} detail page`);
  };

  const getCategoryColor = (category) => {
    const colors = {
      'Residential': 'bg-blue-500',
      'Driveway': 'bg-green-500',
      'Recreation': 'bg-purple-500',
      'Commercial': 'bg-orange-500',
      'Foundation': 'bg-red-500',
      'Infrastructure': 'bg-indigo-500'
    };
    return colors[category] || 'bg-gray-500';
  };

  const formatDate = (dateString) => {
    try {
      return new Date(dateString).toLocaleDateString();
    } catch {
      return 'Date unavailable';
    }
  };

  if (loading) return <Loader />;

  if (error) {
    return (
      <section className="bg-gradient-to-br from-slate-50 to-slate-100 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <AlertCircle className="w-12 h-12 text-red-500 mx-auto mb-4" />
          <p className="text-slate-600 text-lg mb-4">{error}</p>
          <Button onClick={() => window.location.reload()}>
            Try Again
          </Button>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-gradient-to-br from-slate-50 to-slate-100 min-h-screen">
      <BrandName />

      <div className="max-w-7xl mx-auto py-12 px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">
            Our Recent <span className="text-red-600">Projects</span>
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Explore our latest excavation and earthmoving projects across Colorado
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:-translate-y-2"
              onClick={() => handleProjectClick(project.id)}
            >
              <div className="relative overflow-hidden h-56">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                />
                <div className="absolute top-4 left-4 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg 
                ${getCategoryColor(project.category)}">
                  {project.category}
                </div>
              </div>

              <div className="p-6">
                <div className="flex justify-between text-sm text-slate-500 mb-3">
                  <div className="flex items-center space-x-1">
                    <MapPin className="w-4 h-4" />
                    <span>{project.location}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>{formatDate(project.date)}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-red-600 transition">
                  {project.title}
                </h3>

                <p className="text-slate-600 text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex justify-between items-center pt-4 border-t">
                  <span className="text-sm text-slate-500">{project.readTime}</span>
                  <Button>
                    <span>Read More</span>
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button>View All Projects</Button>
        </div>
      </div>
    </section>
  );
};

export default CommitmentCard;
