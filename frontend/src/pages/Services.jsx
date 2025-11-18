// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { Link } from "react-router-dom";
// import { fetchServices } from "../features/servicesProvide"; 

// //  ServiceCard Component
// const ServiceCard = ({ title, image, slug }) => (
//   <div className="w-full sm:w-1/2 md:w-1/3 p-4">
//     <Link
//       to={`/services/${slug}`}
//       className="block bg-white shadow-md hover:shadow-lg transition-shadow duration-300"
//     >
//       <img
//         src={image}
//         alt={title}
//         className="w-full h-48 object-cover rounded-t"
//       />
//       <div className="p-4 text-center bg-gray-100 rounded-b">
//         <h3 className="text-red-600 text-lg font-bold">{title}</h3>
//       </div>
//     </Link>
//   </div>
// );

// //  Services Page
// const Services = () => {
//   const dispatch = useDispatch();

//   //  Get data from Redux
//   const { items: services = [], loading, error } = useSelector(
//     (state) => state.service
//   );

//   //  Fetch services on mount
//   useEffect(() => {
//     dispatch(fetchServices());
//   }, [dispatch]);

//   //  Loading state
//   if (loading) {
//     return <div>
//       {/* <Loader/> */}
//       <p className="text-center py-10">Loading services...</p>
//     </div>
//   }

//   //  Error state
//   if (error) {
//     return (
//       <p className="text-center py-10 text-red-600">
//         Error loading services: {error}
//       </p>
//     );
//   }

//   //  Empty state
//   if (!services.length) {
//     return (
//       <div className="container mx-auto p-4 text-center">
//         <h2 className="text-xl text-gray-600 mb-4">
//           No services available right now.
//         </h2>
//         <p className="text-gray-500">
//           Please check back later or contact us for more information.
//         </p>
//       </div>
//     );
//   }

//   //  Render service grid
//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-2xl text-red-600 font-bold text-center mb-4">
//         Services - We can help!
//       </h1>
//       <p className="text-center text-gray-600 mb-6">
//         Listed below is only a partial list of excavation and earth moving
//         services we provide. If you don’t see the specific earth moving service
//         you are looking for, contact us anyway.
//       </p>

//       <div className="flex flex-wrap -m-4">
//         {services.map((service) => (
//           <ServiceCard
//             key={service._id}
//             title={service.title}
//             image={service.image}
//             slug={service.slug || service._id}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Services;




//---------------------------------------------------------------------------


import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchServices } from "../features/servicesProvide";
import Loader from "../components/common/items/Loader";

// ServiceCard Component
const ServiceCard = ({ title, image, id }) => (
  <div className="w-full sm:w-1/2 md:w-1/3 p-4">
    <Link
      to={`/services/${id}`}
      className="block bg-white shadow-md hover:shadow-lg transition-shadow duration-300"
    >
      <img
        src={image || "/placeholder.jpg"} // Use local fallback image
        alt={title}
        className="w-full h-48 object-cover rounded-t"
      // onError={(e) => (e.target.src = "/placeholder.jpg")} // Optional: Keep for additional safety
      />
      <div className="p-4 text-center bg-gray-100 rounded-b">
        <h3 className="text-red-600 text-lg font-bold">{title}</h3>
      </div>
    </Link>
  </div>
);

// Services Page
const Services = () => {
  const dispatch = useDispatch();
  const { items: services = [], loading, error } = useSelector(
    (state) => state.service
  );

  useEffect(() => {
    dispatch(fetchServices());
  }, [dispatch]);

  if (loading) {
    return <Loader />
  }

  if (error) {
    return (
      <p className="text-center py-10 text-red-600">
        Error loading services: {error}
      </p>
    );
  }

  if (!services.length) {
    return (
      <div className="container mx-auto p-4 text-center">
        <h2 className="text-xl text-gray-600 mb-4">
          No services available right now.
        </h2>
        <p className="text-gray-500">
          Please check back later or contact us for more information.
        </p>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl text-red-600 font-bold text-center mb-4">
        Services - We can help!
      </h1>
      <p className="text-center text-gray-600 mb-6">
        Listed below is only a partial list of excavation and earth moving
        services we provide. If you don’t see the specific earth moving service
        you are looking for, contact us anyway.
      </p>

      <div className="flex flex-wrap -m-4">
        {services.map((service) => (
          <ServiceCard
            key={service._id}
            title={service.title}
            image={service.banners?.[0]} // Only use the first banner image
            id={service._id}
          />
        ))}
      </div>
    </div>
  );
};

export default Services;