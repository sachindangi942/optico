import { motion } from "framer-motion";
import {
    Globe2,
    Image,
    Handshake,
    DollarSign,
} from "lucide-react";
import { useEffect, useState } from "react";
import API from "../../api";

const cards = [
    {
        title: "SERVICES",
        icon: <Globe2 size={48} />,
        color: "bg-red-900",
        btn: "Learn More",
    },
    {
        title: "GALLERY",
        icon: <Image size={48} />,
        color: "bg-red-700",
        btn: "View Now",
    },
    {
        title: "GIVING BACK",
        icon: <Handshake size={48} />,
        color: "bg-red-600",
        btn: "Learn More",
    },
    {
        title: "QUOTES",
        icon: <DollarSign size={48} />,
        color: "bg-red-500",
        btn: "Request Now!",
    },
];

export default function ServicesTestimonials() {
    const [testimonials, setTestimonials] = useState([]);

    useEffect(() => {
        const getTestimonials = async () => {
            try {
                const res = await API.get("/testimonials"); 
                setTestimonials(res.data);
            } catch (err) {
                console.error("Error fetching testimonials", err);
            }
        };
        getTestimonials();
    }, []);

    return (
        <section className="w-full">
            <div className="grid md:grid-cols-4 grid-cols-2 w-full">
                {cards.map((card, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.2 }}
                        className={`text-white py-26 px-4 flex flex-col items-center text-center ${card.color}`}
                    >
                        {card.icon}
                        <h3 className="text-lg font-bold mt-10">{card.title}</h3>
                        <hr className="w-8 border-white mt-2 mb-6" />

                        <button className="bg-gray-900 text-white px-4 py-2 rounded">
                            {card.btn}
                        </button>
                    </motion.div>
                ))}
            </div>

            {/* Testimonials */}
            <div className="text-center py-16 px-4 ">
                <h2 className="text-4xl font-semibold mb-10">Testimonials</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.3 }}
                            className={`p-8 rounded shadow-md ${testimonial.color} text-gray-50`}
                        >
                            <blockquote className="text-m italic mb-4">
                                “{testimonial.quote}”
                            </blockquote>
                            <p className="font-semibold text-xl">{testimonial.name}</p>
                            {testimonial.role && (
                                <p className="text text-gray-50">{testimonial.role}</p>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}







// import { motion } from "framer-motion";
// import {
//     Globe2,
//     Image,
//     Handshake,
//     DollarSign,
// } from "lucide-react";
// import { useEffect, useState } from "react";
// import API from "../../api";

// const cards = [
//     {
//         title: "SERVICES",
//         icon: <Globe2 size={48} />,
//         color: "bg-red-900",
//         btn: "Learn More",
//     },
//     {
//         title: "GALLERY",
//         icon: <Image size={48} />,
//         color: "bg-red-700",
//         btn: "View Now",
//     },
//     {
//         title: "GIVING BACK",
//         icon: <Handshake size={48} />,
//         color: "bg-red-600",
//         btn: "Learn More",
//     },
//     {
//         title: "QUOTES",
//         icon: <DollarSign size={48} />,
//         color: "bg-red-500",
//         btn: "Request Now!",
//     },
// ];

// export default function ServicesTestimonials() {
//     const [testimonials, setTestimonials] = useState([]);
//     const [services, setServices] = useState([]);   
//     const [about, setAbout] = useState({});        

//     useEffect(() => {
//         const getTestimonials = async () => {
//             try {
//                 const res = await API.get("/testimonials");
//                 setTestimonials(res.data);
//             } catch (err) {
//                 console.error("Error fetching testimonials", err);
//             }
//         };
//         getTestimonials();
//     }, []);

//     // SERVICES API
//     useEffect(() => {
//         const getServices = async () => {
//             try {
//                 const res = await API.get("/getServices");
//                 setServices(res.data);
//             } catch (err) {
//                 console.error("Error fetching services", err);
//             }
//         };
//         getServices();
//     }, []);

//     // ABOUT API
//     useEffect(() => {
//         const getAbout = async () => {
//             try {
//                 const res = await API.get("/about");
//                 setAbout(res.data);
//             } catch (err) {
//                 console.error("Error fetching about section", err);
//             }
//         };
//         getAbout();
//     }, []);

//     return (
//         <section className="w-full">
//             <div className="grid md:grid-cols-4 grid-cols-2 w-full">
//                 {cards.map((card, idx) => (
//                     <motion.div
//                         key={idx}
//                         initial={{ opacity: 0, y: 50 }}
//                         whileInView={{ opacity: 1, y: 0 }}
//                         transition={{ delay: idx * 0.2 }}
//                         className={`text-white py-26 px-4 flex flex-col items-center text-center ${card.color}`}
//                     >
//                         {card.icon}
//                         <h3 className="text-lg font-bold mt-10">{card.title}</h3>
//                         <hr className="w-8 border-white mt-2 mb-6" />

//                         <button className="bg-gray-900 text-white px-4 py-2 rounded">
//                             {card.btn}
//                         </button>
//                     </motion.div>
//                 ))}
//             </div>

//             {/* ABOUT SECTION FROM API */}
//             <div className="text-center py-12 px-4">
//                 <h2 className="text-4xl font-semibold mb-4">About Us</h2>
//                 <p className="text-lg max-w-3xl mx-auto text-gray-700">
//                     {about.description}
//                 </p>
//             </div>

//             {/* SERVICES SECTION FROM API */}
//             <div className="text-center py-16 px-4">
//                 <h2 className="text-4xl font-semibold mb-10">Our Services</h2>

//                 <div className="grid md:grid-cols-3 gap-8">
//                     {services.map((s, i) => (
//                         <div
//                             key={i}
//                             className="p-6 bg-gray-100 rounded-xl shadow"
//                         >
//                             <h3 className="text-xl font-bold">{s.title}</h3>
//                             <p className="text-gray-600 mt-2">{s.description}</p>
//                         </div>
//                     ))}
//                 </div>
//             </div>

//             {/* TESTIMONIALS */}
//             <div className="text-center py-16 px-4 ">
//                 <h2 className="text-4xl font-semibold mb-10">Testimonials</h2>
//                 <div className="grid md:grid-cols-3 gap-8">
//                     {testimonials.map((testimonial, i) => (
//                         <motion.div
//                             key={i}
//                             initial={{ opacity: 0, y: 50 }}
//                             whileInView={{ opacity: 1, y: 0 }}
//                             transition={{ delay: i * 0.3 }}
//                             className={`p-8 rounded shadow-md ${testimonial.color} text-gray-50`}
//                         >
//                             <blockquote className="text-m italic mb-4">
//                                 “{testimonial.quote}”
//                             </blockquote>
//                             <p className="font-semibold text-xl">{testimonial.name}</p>
//                             {testimonial.role && (
//                                 <p className="text text-gray-50">{testimonial.role}</p>
//                             )}
//                         </motion.div>
//                     ))}
//                 </div>
//             </div>
//         </section>
//     );
// }
