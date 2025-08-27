import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

const TermsOfServicePage = () => {
    const pageRef = useRef<HTMLDivElement>(null);
    const sectionsRef = useRef<(HTMLDivElement | null)[]>([]);
    const [expandedSections, setExpandedSections] = useState<boolean[]>([true, false, false, false, false, false, false, false, false]);
    const [activeSection, setActiveSection] = useState<string>('introduction');

    // Section data for Terms of Service
    const sections = [
        {
            id: 'introduction',
            title: 'Introduction',
            icon: '📋',
            content: (
                <>
                    <p className="text-gray-700 mb-4">
                        Welcome to The MICE Connection! These Terms of Service ("Terms") govern your use of the <a href="https://www.themiceconnection.com" target="_blank" rel="noopener noreferrer" className="text-[#143a31] hover:underline">www.themiceconnection.com</a> website ("Site") and all services provided by The MICE Connection ("we," "us," or "our").
                    </p>
                    <p className="text-gray-700 mb-4">
                        By accessing or using our Site, you agree to be bound by these Terms. If you do not agree to these Terms, please do not use our Site or services.
                    </p>
                    <p className="text-gray-700">
                        We reserve the right to update or modify these Terms at any time without prior notice. Your continued use of the Site after any such changes constitutes your acceptance of the new Terms.
                    </p>
                </>
            ),
        },
        {
            id: 'services',
            title: 'Services Description',
            icon: '🌐',
            content: (
                <>
                    <p className="text-gray-700 mb-4">
                        The MICE Connection provides a platform for organizing and managing corporate events, conferences, and travel arrangements. Our services include:
                    </p>
                    <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                        <li>Event planning and coordination</li>
                        <li>Conference and meeting management</li>
                        <li>Corporate travel arrangements</li>
                        <li>Venue sourcing and booking</li>
                        <li>Accommodation and transportation services</li>
                        <li>Event technology solutions</li>
                    </ul>
                    <p className="text-gray-700">
                        We reserve the right to modify, suspend, or discontinue any part of our services at any time without notice. We will not be liable to you or any third party for any modification, suspension, or discontinuation of our services.
                    </p>
                </>
            ),
        },
        {
            id: 'user-accounts',
            title: 'User Accounts',
            icon: '👤',
            content: (
                <>
                    <p className="text-gray-700 mb-4">
                        To access certain features of our Site, you may be required to create an account. You agree to provide accurate, current, and complete information during the registration process and to update such information to keep it accurate, current, and complete.
                    </p>
                    <p className="text-gray-700 mb-4">
                        You are responsible for safeguarding your account information and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account or any other breach of security.
                    </p>
                    <p className="text-gray-700">
                        We reserve the right to refuse service, terminate accounts, or remove or edit content at our sole discretion.
                    </p>
                </>
            ),
        },
        {
            id: 'user-conduct',
            title: 'User Conduct',
            icon: '⚖️',
            content: (
                <>
                    <p className="text-gray-700 mb-4">
                        You agree to use our Site and services only for lawful purposes and in accordance with these Terms. You agree not to:
                    </p>
                    <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                        <li>Use our services in any way that violates any applicable federal, state, local, or international law or regulation</li>
                        <li>Engage in any conduct that restricts or inhibits anyone's use or enjoyment of the Site</li>
                        <li>Impersonate any person or entity or falsely state or otherwise misrepresent your affiliation with a person or entity</li>
                        <li>Upload or transmit viruses or any other type of malicious code</li>
                        <li>Collect or harvest any personally identifiable information from the Site</li>
                        <li>Interfere with or disrupt the Site or servers or networks connected to the Site</li>
                    </ul>
                    <p className="text-gray-700">
                        We reserve the right to investigate and take appropriate legal action against anyone who violates these provisions.
                    </p>
                </>
            ),
        },
        {
            id: 'intellectual-property',
            title: 'Intellectual Property',
            icon: '💡',
            content: (
                <>
                    <p className="text-gray-700 mb-4">
                        All content on the Site, including but not limited to text, graphics, logos, images, and software, is the property of The MICE Connection or its content suppliers and is protected by international copyright laws.
                    </p>
                    <p className="text-gray-700 mb-4">
                        You may not modify, reproduce, distribute, create derivative works of, publicly display, publicly perform, republish, download, store, or transmit any of the material on our Site without our prior written consent.
                    </p>
                    <p className="text-gray-700">
                        The MICE Connection and its licensors retain all right, title, and interest in and to the Site and all services, including all intellectual property rights therein.
                    </p>
                </>
            ),
        },
        {
            id: 'payment-terms',
            title: 'Payment Terms',
            icon: '💳',
            content: (
                <>
                    <p className="text-gray-700 mb-4">
                        Certain services offered by The MICE Connection require payment. You agree to provide current, complete, and accurate purchase and account information for all purchases made through the Site.
                    </p>
                    <p className="text-gray-700 mb-4">
                        You agree to pay all fees at the prices in effect when you incur them. We reserve the right to change our prices at any time. All payments are non-refundable unless otherwise stated.
                    </p>
                    <p className="text-gray-700 mb-4">
                        We use third-party payment processors to handle payment transactions. By providing your payment information, you agree to their terms and conditions.
                    </p>
                    <p className="text-gray-700">
                        We reserve the right to refuse any order you place with us. We may, in our sole discretion, limit or cancel quantities purchased per person, per household, or per order.
                    </p>
                </>
            ),
        },
        {
            id: 'disclaimer',
            title: 'Disclaimer',
            icon: '⚠️',
            content: (
                <>
                    <p className="text-gray-700 mb-4">
                        The Site and services are provided on an "as is" and "as available" basis, without any warranties of any kind, either express or implied. The MICE Connection disclaims all warranties, express or implied, including but not limited to implied warranties of merchantability, fitness for a particular purpose, and non-infringement.
                    </p>
                    <p className="text-gray-700 mb-4">
                        We do not warrant that the Site will be uninterrupted, timely, secure, or error-free. We make no warranties about the accuracy, reliability, completeness, or timeliness of the content, services, software, text, graphics, and links.
                    </p>
                    <p className="text-gray-700">
                        Your use of the Site and services is at your sole risk. Any material downloaded or otherwise obtained through the use of the Site is done at your own discretion and risk.
                    </p>
                </>
            ),
        },
        {
            id: 'limitation-of-liability',
            title: 'Limitation of Liability',
            icon: '🛡️',
            content: (
                <>
                    <p className="text-gray-700 mb-4">
                        In no event shall The MICE Connection, its directors, employees, or affiliates be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from:
                    </p>
                    <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                        <li>Your use or inability to use the Site or services</li>
                        <li>Unauthorized access to or use of our servers and/or any personal information stored therein</li>
                        <li>Interruption or cessation of transmission to or from the Site</li>
                        <li>Any bugs, viruses, trojan horses, or the like that may be transmitted to or through the Site</li>
                        <li>Any errors or omissions in any content or for any loss or damage incurred as a result of the use of any content posted, emailed, transmitted, or otherwise made available through the Site</li>
                    </ul>
                    <p className="text-gray-700">
                        In no event shall The MICE Connection's total liability to you for all damages, losses, and causes of action exceed the amount paid by you, if any, for accessing the Site during the twelve (12) months prior to the event giving rise to liability.
                    </p>
                </>
            ),
        },
        {
            id: 'indemnification',
            title: 'Indemnification',
            icon: '🤝',
            content: (
                <>
                    <p className="text-gray-700 mb-4">
                        You agree to indemnify, defend, and hold harmless The MICE Connection, its officers, directors, employees, and agents from and against any and all claims, damages, obligations, losses, liabilities, costs, or debt, and expenses (including but not limited to attorney's fees) arising from:
                    </p>
                    <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                        <li>Your use of and access to the Site</li>
                        <li>Your violation of any term of these Terms</li>
                        <li>Your violation of any third-party right, including without limitation any copyright, property, or privacy right</li>
                        <li>Any claim that your content caused damage to a third party</li>
                    </ul>
                    <p className="text-gray-700">
                        This defense and indemnification obligation will survive these Terms and your use of the Site.
                    </p>
                </>
            ),
        },
    ];

    // Toggle section expansion
    const toggleSection = (index: number) => {
        setExpandedSections(prev => {
            const newExpanded = [...prev];
            newExpanded[index] = !newExpanded[index];
            return newExpanded;
        });
    };

    // Scroll to section
    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            setActiveSection(id);
        }
    };

    // Update active section on scroll
    useEffect(() => {
        const handleScroll = () => {
            const sectionElements = sectionsRef.current.filter(Boolean);
            const scrollPosition = window.scrollY + 150;

            for (let i = sectionElements.length - 1; i >= 0; i--) {
                const section = sectionElements[i];
                if (section && section.offsetTop <= scrollPosition) {
                    setActiveSection(sections[i].id);
                    break;
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Animation effects
    useEffect(() => {
        // Animate page entrance
        if (pageRef.current) {
            gsap.fromTo(pageRef.current,
                { opacity: 0, y: 30 },
                { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
            );
        }

        // Animate sections on scroll
        sectionsRef.current.forEach((section, index) => {
            if (section) {
                gsap.fromTo(section,
                    { opacity: 0, y: 50 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.8,
                        delay: index * 0.1,
                        scrollTrigger: {
                            trigger: section,
                            start: "top 85%",
                            end: "bottom 15%",
                            toggleActions: "play none none reverse"
                        }
                    }
                );
            }
        });

        // Clean up animations on unmount
        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    return (
        <div ref={pageRef} className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
            {/* Hero Section */}
            <div className="relative bg-gradient-to-r from-[#143a31] to-[#0f2821] py-20 md:py-28 overflow-hidden">
                <div className="absolute inset-0 bg-black opacity-10"></div>
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#fcd00e] rounded-full filter blur-3xl opacity-10 transform translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#fcd00e] rounded-full filter blur-3xl opacity-10 transform -translate-x-1/2 translate-y-1/2"></div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center justify-center p-3 bg-[#fcd00e]/20 rounded-full mb-6">
                            <svg className="w-8 h-8 text-[#fcd00e]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V7a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Terms of Service</h1>
                        <p className="text-xl text-gray-200 max-w-2xl mx-auto mb-8">
                            Please read these terms carefully before using our services. Your use of The MICE Connection constitutes agreement to these terms.
                        </p>
                        <div className="mt-8">
                            <Link
                                to="/"
                                className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-lg hover:bg-white/20 transition-all duration-300"
                            >
                                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                                </svg>
                                Back to Home
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="container mx-auto px-6 py-16">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                        {/* Table of Contents */}
                        <div className="lg:col-span-1">
                            <div className="sticky top-24 bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
                                <div className="bg-gradient-to-r from-[#143a31] to-[#0f2821] p-5">
                                    <h3 className="text-xl font-bold text-white flex items-center">
                                        <svg className="w-5 h-5 mr-2 text-[#fcd00e]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                        </svg>
                                        Table of Contents
                                    </h3>
                                </div>
                                <nav className="p-4">
                                    <ul className="space-y-1">
                                        {sections.map((section) => (
                                            <li key={section.id}>
                                                <button
                                                    onClick={() => scrollToSection(section.id)}
                                                    className={`flex items-center w-full text-left p-3 rounded-xl transition-all duration-300 ${activeSection === section.id
                                                        ? 'bg-[#fcd00e]/20 text-[#143a31] font-medium shadow-sm'
                                                        : 'text-gray-700 hover:bg-gray-100'
                                                        }`}
                                                >
                                                    <span className="mr-3 text-lg">{section.icon}</span>
                                                    <span className="text-sm font-medium">{section.title}</span>
                                                </button>
                                            </li>
                                        ))}
                                    </ul>
                                </nav>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="lg:col-span-3">
                            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
                                <div className="p-8">
                                    <div className="mb-10 text-center">
                                        <div className="inline-flex items-center justify-center p-3 bg-[#fcd00e]/10 rounded-full mb-4">
                                            <svg className="w-8 h-8 text-[#143a31]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                            </svg>
                                        </div>
                                        <h2 className="text-2xl font-bold text-[#143a31] mb-2">Our Service Agreement</h2>
                                        <p className="text-gray-600 max-w-2xl mx-auto">
                                            These terms outline the rules and regulations for the use of The MICE Connection's website and services.
                                        </p>
                                    </div>

                                    {sections.map((section, index) => (
                                        <div
                                            key={section.id}
                                            id={section.id}
                                            ref={el => { sectionsRef.current[index] = el; }}
                                            className="mb-8 last:mb-0"
                                        >
                                            <div className="group">
                                                <button
                                                    onClick={() => toggleSection(index)}
                                                    className="w-full flex items-center justify-between p-5 bg-gradient-to-r from-[#f9f9f9] to-white border border-gray-200 rounded-xl hover:border-[#fcd00e]/50 transition-all duration-300 group-hover:shadow-md"
                                                >
                                                    <div className="flex items-center">
                                                        <span className="mr-4 text-2xl">{section.icon}</span>
                                                        <h2 className="text-xl font-bold text-[#143a31]">{section.title}</h2>
                                                    </div>
                                                    <span className="text-2xl text-[#143a31] transform transition-transform duration-300 group-hover:rotate-12">
                                                        {expandedSections[index] ? (
                                                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                                                            </svg>
                                                        ) : (
                                                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                                            </svg>
                                                        )}
                                                    </span>
                                                </button>

                                                {expandedSections[index] && (
                                                    <div className="mt-4 p-6 bg-gray-50 border border-gray-200 rounded-xl shadow-sm animate-fadeIn">
                                                        <div className="prose max-w-none">
                                                            {section.content}
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    ))}

                                    <div className="mt-12 pt-8 border-t border-gray-200">
                                        <div className="text-center">
                                            <h3 className="text-lg font-semibold text-[#143a31] mb-2">Questions About Our Terms?</h3>
                                            <p className="text-gray-600 mb-4">
                                                If you have any questions about these Terms of Service, please contact us.
                                            </p>
                                            <Link
                                                to="/contact"
                                                className="inline-flex items-center px-6 py-3 bg-[#143a31] text-white rounded-lg hover:bg-[#0f2821] transition-colors"
                                            >
                                                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                                </svg>
                                                Contact Us
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TermsOfServicePage;