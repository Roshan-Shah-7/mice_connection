// import React, { useEffect, useRef, useState } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import { ourPresenceData } from '../data/ourPresenceData';

// gsap.registerPlugin(ScrollTrigger);

// const OurPresenceDetail: React.FC = () => {
//     const { slug } = useParams<{ slug: string }>();
//     const navigate = useNavigate();
//     const heroRef = useRef<HTMLDivElement>(null);
//     const [imageLoaded, setImageLoaded] = useState(false);

//     const presenceItem = ourPresenceData.find((item) => item.slug === slug);

//     useEffect(() => {
//         // Hero section animation
//         if (heroRef.current) {
//             gsap.fromTo(
//                 heroRef.current,
//                 { opacity: 0, scale: 1.1 },
//                 { opacity: 1, scale: 1, duration: 1.5, ease: 'power3.out' }
//             );
//         }
//     }, [presenceItem]);

//     useEffect(() => {
//         window.scrollTo(0, 0);
//     }, [slug]);

//     const handleImageLoad = () => {
//         setImageLoaded(true);
//     };

//     if (!presenceItem) {
//         return (
//             <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
//                 <div className="text-center p-12 bg-white/80 backdrop-blur-sm shadow-2xl rounded-2xl border border-white/20">
//                     <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-r from-[#10362e] to-[#fcd10b] rounded-full flex items-center justify-center">
//                         <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
//                         </svg>
//                     </div>
//                     <h2 className="text-4xl font-bold text-gray-800 mb-4">Presence Item Not Found</h2>
//                     <p className="text-gray-600 mb-8 text-lg max-w-md mx-auto">
//                         The item you're looking for doesn't exist or may have been moved.
//                     </p>
//                     <button
//                         onClick={() => navigate('/our-presence')}
//                         className="px-8 py-4 bg-gradient-to-r from-[#10362e] to-[#1a4d42] text-white font-semibold rounded-xl hover:from-[#fcd10b] hover:to-[#f8d947] hover:text-[#10362e] transition-all duration-500 transform hover:scale-105 shadow-lg hover:shadow-xl"
//                     >
//                         Browse All Presences
//                     </button>
//                 </div>
//             </div>
//         );
//     }

//     return (
//         <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
//             {/* Hero Section */}
//             <section className="relative w-full overflow-hidden bg-gray-100" ref={heroRef}>
//                 <div className="container mx-auto px-4 py-16 md:py-24 mt-10">
//                     <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

//                         {/* Content Column */}
//                         <div className="order-2 lg:order-1 z-20">
//                             <div className="max-w-2xl">
//                                 {/* Badge */}
//                                 <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-8 border border-white/20">
//                                     <span className="w-2 h-2 bg-[#fcd10b] rounded-full mr-2 animate-pulse"></span>
//                                     <span className="text-white/90 text-sm font-medium uppercase tracking-wider">
//                                         Our Global Presence
//                                     </span>
//                                 </div>

//                                 {/* Title */}
//                                 <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8">
//                                     {presenceItem.title}
//                                 </h1>

//                                 {/* Description */}
//                                 <p className="text-xl text-white/20 mb-10 leading-relaxed">
//                                     Expanding our reach across continents, bringing innovation and excellence to every corner of the globe.
//                                 </p>

//                                 {/* Stats & Info */}
//                                 <div className="flex flex-wrap gap-6 mb-12">
//                                     <div className="flex items-center bg-white/10 backdrop-blur-sm px-6 py-4 rounded-2xl border border-white/10">
//                                         <div className="w-12 h-12 bg-[#fcd10b]/20 rounded-full flex items-center justify-center mr-4">
//                                             <svg className="w-6 h-6 text-[#fcd10b]" fill="currentColor" viewBox="0 0 20 20">
//                                                 <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
//                                             </svg>
//                                         </div>
//                                         <div>
//                                             <p className="text-white/60 text-sm">Established</p>
//                                             <p className="text-white font-semibold text-lg">{presenceItem.year}</p>
//                                         </div>
//                                     </div>

//                                     <div className="flex items-center bg-white/10 backdrop-blur-sm px-6 py-4 rounded-2xl border border-white/10">
//                                         <div className="w-12 h-12 bg-[#fcd10b]/20 rounded-full flex items-center justify-center mr-4">
//                                             <svg className="w-6 h-6 text-[#fcd10b]" fill="currentColor" viewBox="0 0 20 20">
//                                                 <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
//                                             </svg>
//                                         </div>
//                                         <div>
//                                             <p className="text-white/60 text-sm">Locations</p>
//                                             <p className="text-white font-semibold text-lg">Global Network</p>
//                                         </div>
//                                     </div>
//                                 </div>

//                                 {/* CTA Buttons */}
//                                 <div className="flex flex-wrap gap-4">
//                                     <button className="px-8 py-4 bg-[#fcd10b] text-slate-900 font-semibold rounded-xl hover:bg-yellow-400 transition-all duration-300 transform hover:-translate-y-1 flex items-center">
//                                         Explore Locations
//                                         <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
//                                         </svg>
//                                     </button>
//                                     <button className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300">
//                                         Our Story
//                                     </button>
//                                 </div>
//                             </div>
//                         </div>

//                         {/* Image Column */}
//                         <div className="order-1 lg:order-2 relative">
//                             {/* Loading state for image */}
//                             {!imageLoaded && (
//                                 <div className="w-full h-80 md:h-[500px] lg:h-[600px] bg-gray-800 rounded-3xl flex items-center justify-center">
//                                     <div className="w-16 h-16 border-4 border-[#fcd10b] border-t-transparent rounded-full animate-spin"></div>
//                                 </div>
//                             )}

//                             {/* Image Container */}
//                             <div className={`relative rounded-3xl overflow-hidden shadow-2xl transform transition-all duration-1000 ${imageLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
//                                 <img
//                                     src={presenceItem.image}
//                                     alt={presenceItem.title}
//                                     className="w-full h-auto object-cover"
//                                     onLoad={handleImageLoad}
//                                 />
//                                 {/* Floating elements */}
//                                 <div className="absolute top-6 right-6 w-6 h-6 bg-[#fcd10b] rounded-full opacity-80 animate-pulse z-10"></div>
//                                 <div className="absolute bottom-6 left-6 w-8 h-8 bg-white/30 rounded-full opacity-60 animate-bounce z-10"></div>
//                             </div>

//                             {/* Background decorative elements */}
//                             <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#fcd10b]/10 rounded-full blur-3xl z-0"></div>
//                             <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-blue-500/10 rounded-full blur-3xl z-0"></div>
//                         </div>
//                     </div>

//                     {/* Scroll indicator - only show on larger screens */}
//                     <div className="hidden lg:flex justify-center mt-16 animate-bounce">
//                         <div className="flex flex-col items-center text-white/60">
//                             <span className="text-sm mb-2">Scroll to explore</span>
//                             <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center">
//                                 <div className="w-1 h-3 bg-white/60 rounded-full mt-2"></div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>

//             {/* Enhanced Presence Details Section */}
//             <section className="container mx-auto px-6 py-16 -mt-20 relative z-30">
//                 <div
//                     className="bg-white backdrop-blur-sm rounded-3xl shadow-2xl border border-white/20 overflow-hidden"
//                 >
//                     {/* Decorative header */}
//                     <div className="bg-gradient-to-r from-[#10362e] to-[#1a4d42] p-8">
//                         <div className="flex items-center justify-between flex-wrap gap-4">
//                             <h2 className="text-3xl font-bold text-white">Overview</h2>
//                             <div className="flex items-center space-x-2">
//                                 <div className="w-3 h-3 bg-[#fcd10b] rounded-full animate-pulse"></div>
//                                 <span className="text-white/80 font-medium">Active</span>
//                             </div>
//                         </div>
//                     </div>

//                     <div className="p-8 md:p-12 lg:p-16">
//                         <div className="prose prose-lg max-w-none">
//                             <p className="text-gray-700 leading-relaxed text-xl mb-12 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text">
//                                 {presenceItem.description}
//                             </p>

//                             {/* Additional content section */}
//                             <div className="bg-gradient-to-r from-[#fcd10b]/10 to-[#10362e]/10 p-8 rounded-2xl border border-[#fcd10b]/20 mb-12">
//                                 <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
//                                     <svg className="w-6 h-6 mr-3 text-[#fcd10b]" fill="currentColor" viewBox="0 0 20 20">
//                                         <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd" />
//                                     </svg>
//                                     Key Takeaways
//                                 </h3>
//                                 <p className="text-gray-600 leading-relaxed">
//                                     Our participation in this event was crucial for expanding our global reach and establishing key partnerships.
//                                     We successfully showcased our expertise and strengthened our position in the international market.
//                                 </p>
//                             </div>

//                             {/* Enhanced detail images section */}
//                             {presenceItem.detailImages && presenceItem.detailImages.length > 0 && (
//                                 <div className="space-y-16 mt-16">
//                                     <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">Gallery</h3>
//                                     {presenceItem.detailImages.map((detail, index) => (
//                                         <div
//                                             key={index}
//                                             className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
//                                                 } items-center gap-8 group`}
//                                         >
//                                             <div className="md:w-1/2">
//                                                 <div className="relative overflow-hidden rounded-2xl shadow-2xl transform group-hover:scale-105 transition-transform duration-500">
//                                                     <img
//                                                         src={detail.image}
//                                                         alt={`Presence detail ${index + 1}`}
//                                                         className="w-full h-auto object-cover"
//                                                     />
//                                                     <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//                                                 </div>
//                                             </div>
//                                             <div className="md:w-1/2">
//                                                 <div className="p-6 bg-white/50 backdrop-blur-sm rounded-2xl border border-gray-200/50">
//                                                     <p className="text-gray-700 text-lg leading-relaxed">
//                                                         {detail.text}
//                                                     </p>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     ))}
//                                 </div>
//                             )}

//                             {/* Action buttons */}
//                             <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-16 pt-8 border-t border-gray-200/50">
//                                 <button
//                                     onClick={() => navigate('/our-presence')}
//                                     className="px-10 py-4 bg-gradient-to-r from-[#10362e] to-[#1a4d42] text-white font-bold rounded-xl hover:from-[#fcd10b] hover:to-[#f8d947] hover:text-[#10362e] transition-all duration-500 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center group"
//                                 >
//                                     <svg className="w-5 h-5 mr-3 group-hover:rotate-180 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
//                                     </svg>
//                                     Back to Our Presence
//                                 </button>
//                                 <button
//                                     onClick={() => navigate('/contact')}
//                                     className="px-10 py-4 bg-gradient-to-r from-[#fcd10b] to-[#f8d947] text-[#10362e] font-bold rounded-xl hover:from-[#10362e] hover:to-[#1a4d42] hover:text-white transition-all duration-500 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center group"
//                                 >
//                                     Contact Us
//                                     <svg className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
//                                     </svg>
//                                 </button>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//         </div>
//     );
// };

// export default OurPresenceDetail;



import React, { useEffect, useRef, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ourPresenceData } from '../data/ourPresenceData';

gsap.registerPlugin(ScrollTrigger);

const OurPresenceDetail: React.FC = () => {
    const { slug } = useParams<{ slug: string }>();
    const navigate = useNavigate();
    const heroRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const imageRef = useRef<HTMLDivElement>(null);
    const [imageLoaded, setImageLoaded] = useState(false);

    const presenceItem = ourPresenceData.find((item) => item.slug === slug);

    useEffect(() => {
        // Hero section animation
        if (heroRef.current) {
            gsap.fromTo(
                heroRef.current,
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1.2,
                    ease: 'power3.out',
                    stagger: 0.2
                }
            );
        }

        // Content animations
        if (contentRef.current) {
            gsap.fromTo(
                contentRef.current.children,
                { opacity: 0, y: 30 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    stagger: 0.15,
                    scrollTrigger: {
                        trigger: contentRef.current,
                        start: 'top 80%',
                        end: 'bottom 20%',
                        toggleActions: 'play none none reverse'
                    }
                }
            );
        }

        // Image float animation
        if (imageRef.current) {
            gsap.to(imageRef.current, {
                y: -20,
                duration: 3,
                repeat: -1,
                yoyo: true,
                ease: 'sine.inOut'
            });
        }
    }, [presenceItem]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [slug]);

    const handleImageLoad = () => {
        setImageLoaded(true);
    };

    if (!presenceItem) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-slate-900 via-[#10362e] to-slate-800 flex items-center justify-center p-4">
                <div className="text-center p-12 bg-white/10 backdrop-blur-lg shadow-2xl rounded-3xl border border-white/20 max-w-md w-full">
                    <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-r from-[#fcd10b] to-[#f8d947] rounded-full flex items-center justify-center">
                        <svg className="w-12 h-12 text-slate-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
                        </svg>
                    </div>
                    <h2 className="text-3xl font-bold text-white mb-4">Presence Not Found</h2>
                    <p className="text-white/70 mb-8">
                        The presence you're looking for doesn't exist or may have been moved.
                    </p>
                    <button
                        onClick={() => navigate('/our-presence')}
                        className="px-8 py-4 bg-gradient-to-r from-[#fcd10b] to-[#f8d947] text-slate-900 font-bold rounded-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 w-full"
                    >
                        Browse All Locations
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20" ref={heroRef}>
                {/* Background Elements */}
                <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-[#10362e] to-slate-800"></div>
                <div className="absolute top-0 left-0 w-72 h-72 bg-[#fcd10b]/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#fcd10b]/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

                <div className="container mx-auto px-4 py-16 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                        {/* Enhanced Content Column */}
                        <div className="space-y-8">
                            {/* Title */}
                            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
                                {presenceItem.title.split(' ').map((word, index) => (
                                    <span
                                        key={index}
                                        className="inline-block mr-2 hover:text-[#fcd10b] transition-colors duration-300 cursor-default"
                                    >
                                        {word}
                                    </span>
                                ))}
                            </h1>

                            {/* Description */}
                            <p className="text-xl text-white/80 leading-relaxed max-w-2xl">
                                Expanding our reach across continents, bringing innovation and excellence to every corner of the globe through strategic partnerships and cutting-edge solutions.
                            </p>

                            {/* Enhanced Stats Grid */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-[#fcd10b]/30 transition-all duration-300 group">
                                    <div className="flex items-center mb-4">
                                        <div className="w-12 h-12 bg-[#fcd10b]/20 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                                            <svg className="w-6 h-6 text-[#fcd10b]" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="text-white/60 text-sm">Established</p>
                                            <p className="text-white font-bold text-xl">{presenceItem.year}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Enhanced Image Column */}
                        <div className="relative" ref={imageRef}>
                            {/* Loading state */}
                            {!imageLoaded && (
                                <div className="w-full h-96 lg:h-[500px] bg-slate-800 rounded-3xl flex items-center justify-center">
                                    <div className="text-center">
                                        <div className="w-16 h-16 border-4 border-[#fcd10b] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                                        <p className="text-white/60">Loading amazing content...</p>
                                    </div>
                                </div>
                            )}

                            {/* Main Image */}
                            <div className={`relative ${imageLoaded ? 'block' : 'hidden'}`}>
                                <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
                                    <img
                                        src={presenceItem.image}
                                        alt={presenceItem.title}
                                        className="w-full h-auto object-cover transform group-hover:scale-110 transition-transform duration-700"
                                        onLoad={handleImageLoad}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                                    {/* Floating Elements */}
                                    <div className="absolute top-6 right-6 w-8 h-8 bg-[#fcd10b] rounded-full opacity-80 animate-pulse shadow-lg"></div>
                                    <div className="absolute bottom-6 left-6 w-10 h-10 bg-white/20 rounded-full opacity-60 animate-bounce shadow-lg"></div>
                                </div>

                                {/* Decorative Elements */}
                                <div className="absolute -top-6 -right-6 w-32 h-32 bg-[#fcd10b]/20 rounded-full blur-xl"></div>
                                <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-[#10362e]/30 rounded-full blur-xl"></div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                    <div className="flex flex-col items-center text-white/60">
                        <span className="text-sm mb-2">Scroll to Discover</span>
                        <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center">
                            <div className="w-1 h-3 bg-white/60 rounded-full mt-2"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-20 px-4" ref={contentRef}>
                <div className="container mx-auto">
                    {/* Overview Card */}
                    <div className="bg-gradient-to-br from-white to-slate-50 rounded-3xl shadow-2xl border border-slate-200/60 overflow-hidden mb-16">
                        {/* Card Header */}
                        <div className="bg-gradient-to-r from-[#10362e] via-[#1a4d42] to-[#10362e] p-8 md:p-12 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-[#fcd10b]/10 rounded-full -translate-y-16 translate-x-16"></div>
                            <div className="relative z-10">
                                <h2 className="text-4xl font-bold text-white mb-4">Strategic Overview</h2>
                                <div className="flex items-center space-x-4">
                                    <div className="flex items-center space-x-2">
                                        <div className="w-3 h-3 bg-[#fcd10b] rounded-full animate-pulse"></div>
                                        <span className="text-white/80 font-medium">Active Presence</span>
                                    </div>
                                    <div className="w-1 h-1 bg-white/40 rounded-full"></div>
                                    <span className="text-white/60">Global Impact</span>
                                </div>
                            </div>
                        </div>

                        {/* Card Content */}
                        <div className="p-8 md:p-12 lg:p-16">
                            <div className="prose prose-lg max-w-none">
                                <p className="text-slate-700 leading-relaxed text-xl mb-8 bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text">
                                    {presenceItem.description}
                                </p>

                                {/* Key Highlights */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                                    <div className="bg-gradient-to-br from-[#fcd10b]/5 to-[#10362e]/5 p-6 rounded-2xl border border-[#fcd10b]/20">
                                        <h3 className="text-xl font-bold text-slate-800 mb-3 flex items-center">
                                            <svg className="w-5 h-5 mr-3 text-[#fcd10b]" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                            Strategic Impact
                                        </h3>
                                        <p className="text-slate-600">
                                            Strengthened global market position through innovative solutions and strategic partnerships.
                                        </p>
                                    </div>
                                    <div className="bg-gradient-to-br from-[#fcd10b]/5 to-[#10362e]/5 p-6 rounded-2xl border border-[#fcd10b]/20">
                                        <h3 className="text-xl font-bold text-slate-800 mb-3 flex items-center">
                                            <svg className="w-5 h-5 mr-3 text-[#fcd10b]" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                            Global Reach
                                        </h3>
                                        <p className="text-slate-600">
                                            Expanded our footprint across key international markets and established new collaborations.
                                        </p>
                                    </div>
                                </div>

                                {/* Gallery Section */}
                                {presenceItem.detailImages && presenceItem.detailImages.length > 0 && (
                                    <div className="space-y-16 mt-16">
                                        <h3 className="text-4xl font-bold text-center text-slate-800 mb-4">Visual Journey</h3>
                                        <p className="text-slate-600 text-center max-w-2xl mx-auto mb-12">
                                            Explore the moments that define our global presence and impact across different regions.
                                        </p>
                                        {presenceItem.detailImages.map((detail, index) => (
                                            <div
                                                key={index}
                                                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                                                    } items-center gap-8 group`}
                                            >
                                                <div className="lg:w-1/2 w-full">
                                                    <div className="relative overflow-hidden rounded-2xl shadow-2xl transform group-hover:scale-105 transition-transform duration-500">
                                                        <img
                                                            src={detail.image}
                                                            alt={`Presence detail ${index + 1}`}
                                                            className="w-full h-auto object-cover"
                                                        />
                                                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                                            <span className="text-white font-semibold">View Details →</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="lg:w-1/2 w-full">
                                                    <div className="p-8 bg-white/60 backdrop-blur-sm rounded-2xl border border-slate-200/50 shadow-lg">
                                                        <p className="text-slate-700 text-lg leading-relaxed">
                                                            {detail.text}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}

                                {/* Action Section */}
                                <div className="text-center mt-16 pt-12 border-t border-slate-200/50">
                                    <h3 className="text-3xl font-bold text-slate-800 mb-6">Ready to Explore More?</h3>
                                    <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
                                        Discover how our global presence can benefit your business and explore partnership opportunities.
                                    </p>
                                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                                        <button
                                            onClick={() => navigate('/our-presence')}
                                            className="px-10 py-4 cursor-pointer bg-[#0f332e] text-white font-bold rounded-xl hover:text-white transition-all duration-500 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center group"
                                        >
                                            <svg className="w-5 h-5 mr-3 group-hover:-translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                                            </svg>
                                            Back to Our Presence
                                        </button>
                                        <button
                                            onClick={() => navigate('/contact')}
                                            className="px-10 py-4 cursor-pointer bg-gradient-to-r from-[#fcd10b] to-[#f8d947] text-slate-900 font-bold rounded-xl transition-all duration-500 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center group"
                                        >
                                            Get In Touch
                                            <svg className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default OurPresenceDetail;