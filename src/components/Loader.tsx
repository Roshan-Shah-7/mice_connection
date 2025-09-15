import React, { useState, useEffect } from 'react';
import { useLottie } from 'lottie-react';
import planeAnimation from '../model/plane.json';
import bottomArrow from '../model/arrow.json';
import travel from '../model/travel.json';

interface LoaderProps {
    onLoaded: () => void;
    onAnimationComplete: () => void;
}

const bootMessages = [
    "Checking your travel itineraries...",
    "Validating your passport...",
    "Mapping scenic routes...",
    "Preparing cultural insights...",
    "Finalizing adventure details...",
    "Ensuring sustainable travel practices...",
    "Ready to explore!",
];

const Loader: React.FC<LoaderProps> = ({ onLoaded, onAnimationComplete }) => {
    const [completedMessages, setCompletedMessages] = useState<number[]>([]);
    const [show, setShow] = useState(true);
    const [progress, setProgress] = useState(0);
    const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
    const [slideOut, setSlideOut] = useState(false);

    const lottieOptions = {
        animationData: planeAnimation,
        loop: true,
        autoplay: true,
    };
    const { View: LottieView } = useLottie(lottieOptions);

    const arrowLottieOptions = {
        animationData: bottomArrow,
        loop: true,
        autoplay: true,
    };
    const { View: ArrowLottieView } = useLottie(arrowLottieOptions);

    const travelLottieOptions = {
        animationData: travel,
        loop: true,
        autoplay: true,
    };
    const { View: TravelLottieView } = useLottie(travelLottieOptions);

    useEffect(() => {
        const intervals: number[] = [];
        bootMessages.forEach((_, index) => {
            const timer = setTimeout(() => {
                setCompletedMessages(prev => [...prev, index]);
                setProgress(((index + 1) / bootMessages.length) * 100);
                setCurrentMessageIndex(index);
                if (index === bootMessages.length - 1) {
                    setTimeout(() => {
                        setSlideOut(true); // Start slide-out animation
                        setTimeout(() => {
                            setShow(false);
                            onLoaded();
                            onAnimationComplete();
                        }, 700); // Match slide animation duration
                    }, 1000);
                }
            }, 600 + (index * 700));
            intervals.push(timer);
        });
        return () => intervals.forEach(timer => clearTimeout(timer));
    }, [onLoaded, onAnimationComplete]);

    return (
        <div
            className={`fixed inset-0 z-[100] flex items-center justify-center gap-6 bg-gradient-to-br from-sky-100 via-blue-50 to-emerald-50 transition-all duration-700 ease-in-out 
                ${show ? (slideOut ? '-translate-x-full opacity-0' : 'translate-x-0 opacity-100') : 'opacity-0 pointer-events-none'}`}
            aria-label="Preparing your adventure"
            role="status"
        >
            {/* Rest of the loader content remains the same */}
            <div className="hidden lg:block">
                {TravelLottieView}
            </div>

            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/4 right-1/4 w-8 h-8 bg-yellow-400 rounded-full animate-pulse opacity-20"></div>
                <div className="absolute bottom-1/3 left-1/4 w-6 h-6 bg-green-400 rounded-full animate-pulse opacity-20"></div>
            </div>

            {/* Arrow Animation at Bottom */}
            <div className="bottomAni absolute bottom-0 left-1/2 -translate-x-1/2 opacity-30">
                {ArrowLottieView}
            </div>

            <div className="relative w-full max-w-md p-6">
                {/* Large Logo */}
                <div className="flex justify-center mb-6">
                    <div className="relative">
                        <img src="/logo.webp" alt="Nepal Nomad Logo" className="w-24 h-24 object-contain lg:w-32 xl:w-48" />
                        <div className="absolute bottom-0 -right-8 w-8 h-8 bg-[#fcd00e] rounded-full flex items-center justify-center shadow-md">
                            <svg className="w-4 h-4 text-[#143a31]" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                            </svg>
                        </div>
                    </div>
                </div>

                {/* Plane Animation */}
                <div className="flex justify-center -z-10 mb-8 absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2">
                    <div className="w-40 h-40 lg:w-56 lg:h-56 opacity-90">
                        {LottieView}
                    </div>
                </div>

                {/* Adventure Progress Container */}
                <div className="rounded-xl p-5 shadow-lg border border-gray-100 mb-6 bg-white/80 backdrop-blur-sm relative overflow-hidden">
                    {/* Map pattern overlay */}
                    <div className="absolute inset-0 opacity-5">
                        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                            <pattern id="mapPattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                                <path d="M0,20 L40,20 M20,0 L20,40" stroke="#143a31" strokeWidth="1" fill="none" />
                            </pattern>
                            <rect x="0" y="0" width="100%" height="100%" fill="url(#mapPattern)" />
                        </svg>
                    </div>

                    {/* Animated Progress Bar */}
                    <div className="mb-6 relative z-10">
                        <div className="flex justify-between text-xs mb-2">
                            <span className="font-medium text-gray-600">Mapping your journey</span>
                            <span className="font-semibold text-[#143a31]">{Math.round(progress)}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden shadow-inner">
                            <div
                                className="bg-gradient-to-r from-[#143a31] to-[#0f2821] h-2.5 rounded-full transition-all duration-700 ease-out shadow-sm"
                                style={{ width: `${progress}%` }}
                            ></div>
                        </div>
                    </div>

                    {/* Enhanced Checklist */}
                    <div className="space-y-4 z-10 relative">
                        {bootMessages.map((message, index) => (
                            <div
                                key={index}
                                className={`flex items-start transition-all duration-500 ${completedMessages.includes(index)
                                    ? 'transform translate-x-1'
                                    : 'opacity-70'}`}
                            >
                                <div className="w-6 h-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                                    {completedMessages.includes(index) ? (
                                        <div className="w-5 h-5 bg-gradient-to-br from-[#143a31] to-[#0f2821] rounded-full flex items-center justify-center shadow-sm">
                                            <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                    ) : (
                                        <div className={`w-5 h-5 border-2 ${index === currentMessageIndex ? 'border-[#fcd00e]' : 'border-gray-300'} rounded-full`}></div>
                                    )}
                                </div>
                                <div className={`text-sm ${completedMessages.includes(index) ? 'text-[#143a31] font-semibold' : 'text-gray-600'}`}>
                                    {message}
                                    {index === currentMessageIndex && completedMessages.length < bootMessages.length && (
                                        <span className="ml-1 inline-block w-3 h-5 bg-gradient-to-b from-[#fcd00e] to-[#e0b800] animate-pulse rounded-sm"></span>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Updated Quote */}
                <div className="text-center bg-white/80 backdrop-blur-sm py-3 px-4 rounded-lg border border-gray-100">
                    <p className="text-sm text-[#143a31] italic font-medium">"Adventure is worthwhile in itself."</p>
                    <p className="text-xs text-gray-500 mt-2">Creating unforgettable experiences since 2024</p>
                </div>
            </div>

            {/* Compass Element */}
            <div className="absolute top-6 right-6 w-12 h-12 lg:w-20 xl:w-30">
                <img src="/compass.webp" alt="" className='rounded-full'/>
            </div>
        </div>
    );
};

export default Loader;