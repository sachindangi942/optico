import React, { useEffect, useState } from "react";
import { FaHome } from "react-icons/fa";
import { motion } from "framer-motion";
import API from "../api";

const Gallery = () => {
  const [categories, setCategories] = useState([]);
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchGallery = async () => {
    try {
      const res = await API.get("/getGallery");
      setCategories(res.data.categories);
      setImages(res.data.images);
    } catch (error) {
      console.log("Error loading gallery");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchGallery();
  }, []);

  if (loading) return <p className="text-center py-10">Loading...</p>;

  return (
    <div className="w-full min-h-screen bg-white">

      {/* Subnav */}
      <div className="bg-black text-white py-6 px-4 flex justify-between items-center">
        <h1 className="text-2xl sm:text-3xl font-semibold">Gallery</h1>
        <div className="flex items-center space-x-2">
          <button className="flex items-center space-x-1 border border-white px-3 py-1 rounded-md hover:bg-white hover:text-black transition">
            <FaHome />
            <span>Home</span>
          </button>
          <span className="text-sm bg-white text-red-600 px-3 py-1 rounded-md">Gallery</span>
        </div>
      </div>

      {/* Page heading */}
      <div className="text-center px-4 mt-10">
        <motion.h2
          className="text-xl sm:text-3xl font-medium text-gray-700"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Providing Expert Excavation, Grading and Earth Moving services since 2005!
        </motion.h2>
        <motion.p
          className="mt-2 text-gray-500 italic"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Below are some photos of our work.
        </motion.p>
      </div>

      {/* Filter buttons */}
      <motion.div
        className="mt-10 flex flex-wrap justify-center gap-4 px-4"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.05 },
          },
        }}
      >
        {categories.map((cat, idx) => (
          <motion.button
            key={idx}
            className="px-4 py-2 border border-gray-400 text-gray-700 rounded-md text-sm hover:bg-red-100 transition"
            whileHover={{ scale: 1.05 }}
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            {cat}
          </motion.button>
        ))}
      </motion.div>

      {/* Gallery Images */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-4 pb-10">
        {images.map((img, idx) => (
          <motion.img
            key={idx}
            src={img.url}
            alt="Gallery"
            className="w-full h-64 object-cover rounded-lg shadow-md"
            whileHover={{ scale: 1.03 }}
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
