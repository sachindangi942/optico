import React, { useState, useEffect } from 'react';

const BrandName = () => {
    const [isHovered, setIsHovered] = useState(false);

    // Random floating animation for each word
    const getRandomFloat = () => ({
        x: Math.random() * 100 - 50, // -50 to 50
        y: Math.random() * 100 - 50, // -50 to 50
        rotation: Math.random() * 20 - 10, // -10 to 10 degrees
    });

    const [positions, setPositions] = useState({
        dirt: getRandomFloat(),
        dogs: getRandomFloat(),
        excavating: getRandomFloat()
    });

    // Update positions randomly
    useEffect(() => {
        const interval = setInterval(() => {
            setPositions({
                dirt: getRandomFloat(),
                dogs: getRandomFloat(),
                excavating: getRandomFloat()
            });
        }, isHovered ? 800 : 3000); // Faster on hover

        return () => clearInterval(interval);
    }, [isHovered]);

    return (
        <div className="relative overflow-hidden flex items-center justify-center">

            {/* Container Box */}
            <div
                className="relative w-full h-94  bg-black from-slate-800/20 to-slate-700/20 backdrop-blur-sm shadow-2xl transition-all duration-700"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >

                {/* Floating Dirt */}
                <div
                    className="absolute top-1/2 left-1/2 transition-all duration-1000 ease-in-out"
                    style={{
                        transform: `translate(-50%, -50%) translate(${positions.dogs.x}px, ${positions.dogs.y}px) rotate(${positions.dogs.rotation}deg)`,
                        transitionDuration: isHovered ? '600ms' : '2200ms'
                    }}
                >
                    <span className="text-5xl sm:text-6xl lg:text-8xl font-bold text-transparent bg-gradient-to-r from-emerald-500 via-emerald-600 to-emerald-700 bg-clip-text drop-shadow-2xl hover:scale-110 transition-transform duration-300 cursor-pointer select-none">
                        Dirt
                    </span>
                    <div className="absolute -inset-4 bg-gradient-to-r from-red-500/10 to-red-700/10 blur-xl rounded-lg opacity-60"></div>
                </div>

                {/* Floating Dogs */}
                <div
                    className="absolute top-1/2 left-1/2 transition-all duration-1000 ease-in-out"
                    style={{
                        transform: `translate(-50%, -50%) translate(${positions.dirt.x}px, ${positions.dirt.y}px) rotate(${positions.dirt.rotation}deg)`,
                        transitionDuration: isHovered ? '500ms' : '2000ms'
                    }}
                >
                    <span className="text-4xl sm:text-5xl lg:text-7xl font-bold text-transparent bg-gradient-to-r from-amber-400 via-orange-500 to-amber-600 bg-clip-text drop-shadow-2xl hover:scale-110 transition-transform duration-300 cursor-pointer select-none">
                        Dogs
                    </span>
                    <div className="absolute -inset-4 bg-gradient-to-r from-amber-400/10 to-orange-500/10 blur-xl rounded-lg opacity-60"></div>
                </div>


                {/* Floating Excavating */}
                <div
                    className="absolute top-1/2 left-1/2 transition-all duration-1000 ease-in-out"
                    style={{
                        transform: `translate(-50%, -50%) translate(${positions.excavating.x}px, ${positions.excavating.y}px) rotate(${positions.excavating.rotation}deg)`,
                        transitionDuration: isHovered ? '700ms' : '2400ms'
                    }}
                >
                    <span className="text-3xl sm:text-4xl lg:text-6xl font-bold text-transparent bg-gradient-to-r from-slate-300 via-slate-400 to-slate-500 bg-clip-text drop-shadow-2xl hover:scale-110 transition-transform duration-300 cursor-pointer select-none">
                        Excavating
                    </span>
                    <div className="absolute -inset-4 bg-gradient-to-r from-slate-400/10 to-slate-500/10 blur-xl rounded-lg opacity-60"></div>
                </div>

                {/* Random Floating Icons */}
                <div className="absolute inset-0 pointer-events-none">
                    {/* Shovel */}
                    <div
                        className="absolute transition-all duration-3000 ease-in-out text-3xl opacity-20"
                        style={{
                            top: '20%',
                            left: '80%',
                            transform: `translate(${Math.sin(Date.now() * 0.001) * 30}px, ${Math.cos(Date.now() * 0.0015) * 20}px) rotate(${Math.sin(Date.now() * 0.002) * 15}deg)`,
                            transitionDuration: isHovered ? '800ms' : '3000ms'
                        }}
                    >
                        ⛏️
                    </div>

                    {/* Paw */}
                    <div
                        className="absolute transition-all duration-3000 ease-in-out text-2xl opacity-20"
                        style={{
                            top: '70%',
                            left: '15%',
                            transform: `translate(${Math.cos(Date.now() * 0.0012) * 25}px, ${Math.sin(Date.now() * 0.0018) * 15}px) rotate(${Math.cos(Date.now() * 0.0025) * 10}deg)`,
                            transitionDuration: isHovered ? '600ms' : '2500ms'
                        }}
                    >
                        🐾
                    </div>

                    {/* Helmet */}
                    <div
                        className="absolute transition-all duration-3000 ease-in-out text-2xl opacity-20"
                        style={{
                            top: '30%',
                            left: '10%',
                            transform: `translate(${Math.sin(Date.now() * 0.0008) * 20}px, ${Math.cos(Date.now() * 0.002) * 25}px) rotate(${Math.sin(Date.now() * 0.0015) * 12}deg)`,
                            transitionDuration: isHovered ? '700ms' : '2800ms'
                        }}
                    >
                        ⛑️
                    </div>

                    {/* Truck */}
                    <div
                        className="absolute transition-all duration-3000 ease-in-out text-2xl opacity-20"
                        style={{
                            top: '60%',
                            left: '75%',
                            transform: `translate(${Math.cos(Date.now() * 0.0014) * 35}px, ${Math.sin(Date.now() * 0.001) * 18}px) rotate(${Math.cos(Date.now() * 0.0018) * 8}deg)`,
                            transitionDuration: isHovered ? '900ms' : '3200ms'
                        }}
                    >
                        🚛
                    </div>
                </div>

                {/* Hover instruction */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                    <p className="text-3xl sm:text-4xl lg:text-5xl font-bold text-transparent bg-gradient-to-r from-red-400 via-red-600 to-red-800 bg-clip-text drop-shadow-2xl hover:scale-110 transition-transform duration-300 cursor-pointer select-none">
                        {isHovered ? 'At a Reasonable Price' : 'Commitment to Quality'}
                    </p>
                </div>

                {/* Corner particles */}
                <div className="absolute top-4 left-4 w-2 h-2 bg-red-400/40 rounded-full animate-pulse"></div>
                <div className="absolute top-4 right-4 w-1.5 h-1.5 bg-blue-400/40 rounded-full animate-pulse delay-500"></div>
                <div className="absolute bottom-4 left-4 w-1.5 h-1.5 bg-yellow-400/40 rounded-full animate-pulse delay-1000"></div>
                <div className="absolute bottom-4 right-4 w-2 h-2 bg-green-400/40 rounded-full animate-pulse delay-300"></div>
            </div>

            {/* Background floating elements */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
                <div className="absolute top-1/4 left-1/6 w-32 h-32 bg-gradient-to-r from-red-500/3 to-orange-500/3 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-1/3 right-1/4 w-40 h-40 bg-gradient-to-r from-blue-500/3 to-purple-500/3 rounded-full blur-3xl animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 left-3/4 w-24 h-24 bg-gradient-to-r from-yellow-500/3 to-red-500/3 rounded-full blur-3xl animate-pulse delay-500"></div>
            </div>
        </div>
    );
};

export default BrandName;




// {/* Hero Banner */}
//       <div className="relative overflow-hidden bg-gradient-to-r from-stone-900 via-stone-700 to-stone-950">

//         <div className="relative text-white py-16 sm:py-20 lg:py-16 text-center px-4 sm:px-6 lg:px-8">
//           <div className="max-w-4xl mx-auto">
//             <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-white to-red-100 bg-clip-text text-transparent">
//               Commitment to Quality
//             </h1>
//             <p className="text-base sm:text-lg md:text-xl leading-relaxed max-w-3xl mx-auto text-red-50">
//               At Dirt Dogs Excavating our goal is to ensure that we satisfy our customers the first time, every time by delivering professional excavation and earth moving services at a reasonable price.
//             </p>
//           </div>

//           {/* Triangle Pointer */}
//           <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2">
//             <div className="w-0 h-0 border-l-[20px] sm:border-l-[30px] border-l-transparent border-r-[20px] sm:border-r-[30px] border-r-transparent border-t-[20px] sm:border-t-[30px] border-t-red-600 drop-shadow-lg"></div>
//           </div>
//         </div>
//       </div>