import { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

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
                        Welcome to The MICE Connection! These Terms of Service ("Terms") govern your use of the <a href="https://www.themiceconnection.com" target="_blank" rel="noopener noreferrer" className="text-[#143a31] hover:underline font-medium">www.themiceconnection.com</a> website ("Site") and all services provided by The MICE Connection ("we," "us," or "our").
                    </p>
                    <p className="text-gray-700 mb-4">
                        By accessing or using our Site, you agree to be bound by these Terms. If you do not agree to these Terms, please do not use our Site or services.
                    </p>
                    <p className="text-gray-700 mb-4">
                        We reserve the right to update or modify these Terms at any time without prior notice. Your continued use of the Site after any such changes constitutes your acceptance of the new Terms.
                    </p>
                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-100 mt-6">
                        <p className="text-blue-700 flex items-start">
                            <span className="text-lg mr-2">💡</span>
                            <span><strong>Tip:</strong> We recommend checking this page periodically for any updates. The "Last Updated" date at the top of this page indicates when these Terms were last revised.</span>
                        </p>
                    </div>
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
                        The MICE Connection provides a comprehensive platform for organizing and managing corporate events, conferences, and travel arrangements. Our services include but are not limited to:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                        <div className="bg-gray-50 p-4 rounded-lg">
                            <h4 className="font-semibold text-[#143a31] mb-2 flex items-center">
                                <span className="mr-2">🎯</span> Event Services
                            </h4>
                            <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
                                <li>Event planning and coordination</li>
                                <li>Conference and meeting management</li>
                                <li>Venue sourcing and booking</li>
                                <li>Exhibition and trade show organization</li>
                            </ul>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg">
                            <h4 className="font-semibold text-[#143a31] mb-2 flex items-center">
                                <span className="mr-2">✈️</span> Travel Services
                            </h4>
                            <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
                                <li>Corporate travel arrangements</li>
                                <li>Accommodation booking</li>
                                <li>Transportation services</li>
                                <li>Group travel management</li>
                            </ul>
                        </div>
                    </div>
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
                    
                    <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-100 mb-4">
                        <h4 className="font-semibold text-yellow-800 mb-2 flex items-center">
                            <span className="mr-2">🔒</span> Account Security
                        </h4>
                        <p className="text-yellow-700">
                            You are responsible for safeguarding your account information and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account or any other breach of security.
                        </p>
                    </div>
                    
                    <p className="text-gray-700">
                        We reserve the right to refuse service, terminate accounts, or remove or edit content at our sole discretion. Accounts that are inactive for a period of 12 months may be deactivated or deleted.
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
                    
                    <div className="bg-red-50 p-4 rounded-lg border border-red-100 mb-4">
                        <ul className="list-disc list-inside text-red-700 space-y-2">
                            <li>Use our services in any way that violates any applicable federal, state, local, or international law or regulation</li>
                            <li>Engage in any conduct that restricts or inhibits anyone's use or enjoyment of the Site</li>
                            <li>Impersonate any person or entity or falsely state or otherwise misrepresent your affiliation with a person or entity</li>
                            <li>Upload or transmit viruses or any other type of malicious code</li>
                            <li>Collect or harvest any personally identifiable information from the Site</li>
                            <li>Interfere with or disrupt the Site or servers or networks connected to the Site</li>
                        </ul>
                    </div>
                    
                    <p className="text-gray-700">
                        We reserve the right to investigate and take appropriate legal action against anyone who violates these provisions, which may include terminating your account and reporting you to law enforcement authorities.
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
                    
                    <div className="bg-purple-50 p-4 rounded-lg border border-purple-100 mb-4">
                        <h4 className="font-semibold text-purple-800 mb-2 flex items-center">
                            <span className="mr-2">📝</span> Permissions and Restrictions
                        </h4>
                        <p className="text-purple-700">
                            You may not modify, reproduce, distribute, create derivative works of, publicly display, publicly perform, republish, download, store, or transmit any of the material on our Site without our prior written consent.
                        </p>
                    </div>
                    
                    <p className="text-gray-700">
                        The MICE Connection and its licensors retain all right, title, and interest in and to the Site and all services, including all intellectual property rights therein. Any use of our trademarks without express authorization is strictly prohibited.
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
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                        <div className="bg-green-50 p-4 rounded-lg">
                            <h4 className="font-semibold text-green-800 mb-2 flex items-center">
                                <span className="mr-2">💰</span> Payment Information
                            </h4>
                            <ul className="list-disc list-inside text-green-700 space-y-1 text-sm">
                                <li>You agree to pay all fees at the prices in effect when you incur them</li>
                                <li>We reserve the right to change our prices at any time</li>
                                <li>All payments are non-refundable unless otherwise stated</li>
                            </ul>
                        </div>
                        <div className="bg-blue-50 p-4 rounded-lg">
                            <h4 className="font-semibold text-blue-800 mb-2 flex items-center">
                                <span className="mr-2">🔐</span> Payment Processing
                            </h4>
                            <ul className="list-disc list-inside text-blue-700 space-y-1 text-sm">
                                <li>We use third-party payment processors</li>
                                <li>By providing payment information, you agree to their terms</li>
                                <li>All transactions are secured with encryption</li>
                            </ul>
                        </div>
                    </div>
                    
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
                    
                    <div className="bg-orange-50 p-4 rounded-lg border border-orange-100 mb-4">
                        <h4 className="font-semibold text-orange-800 mb-2 flex items-center">
                            <span className="mr-2">📢</span> Important Limitations
                        </h4>
                        <ul className="list-disc list-inside text-orange-700 space-y-2">
                            <li>We do not warrant that the Site will be uninterrupted, timely, secure, or error-free</li>
                            <li>We make no warranties about the accuracy, reliability, completeness, or timeliness of the content</li>
                            <li>Your use of the Site and services is at your sole risk</li>
                        </ul>
                    </div>
                    
                    <p className="text-gray-700">
                        Any material downloaded or otherwise obtained through the use of the Site is done at your own discretion and risk. You will be solely responsible for any damage to your computer system or loss of data that results from the download of any such material.
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
                    
                    <div className="bg-red-50 p-4 rounded-lg border border-red-100 mb-4">
                        <ul className="list-disc list-inside text-red-700 space-y-2">
                            <li>Your use or inability to use the Site or services</li>
                            <li>Unauthorized access to or use of our servers and/or any personal information stored therein</li>
                            <li>Interruption or cessation of transmission to or from the Site</li>
                            <li>Any bugs, viruses, trojan horses, or the like that may be transmitted to or through the Site</li>
                            <li>Any errors or omissions in any content or for any loss or damage incurred as a result of the use of any content</li>
                        </ul>
                    </div>
                    
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
                    
                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-100 mb-4">
                        <ul className="list-disc list-inside text-blue-700 space-y-2">
                            <li>Your use of and access to the Site</li>
                            <li>Your violation of any term of these Terms</li>
                            <li>Your violation of any third-party right, including without limitation any copyright, property, or privacy right</li>
                            <li>Any claim that your content caused damage to a third party</li>
                        </ul>
                    </div>
                    
                    <p className="text-gray-700">
                        This defense and indemnification obligation will survive these Terms and your use of the Site. We reserve the right to assume the exclusive defense and control of any matter otherwise subject to indemnification by you, in which event you will assist and cooperate with us in asserting any available defenses.
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

    // Set up intersection observer to update active section
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { threshold: 0.5 }
        );

        sectionsRef.current.forEach((section) => {
            if (section) {
                observer.observe(section);
            }
        });

        return () => {
            sectionsRef.current.forEach((section) => {
                if (section) {
                    observer.unobserve(section);
                }
            });
        };
    }, []);

    return (
        <div ref={pageRef} className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
            {/* Hero Section */}
            <div className="relative mt-10 bg-gradient-to-r from-[#143a31] to-[#0f2821] py-20 md:py-28 overflow-hidden">
                <div className="absolute inset-0 bg-black opacity-10"></div>
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#fcd00e] rounded-full filter blur-3xl opacity-10 transform translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#fcd00e] rounded-full filter blur-3xl opacity-10 transform -translate-x-1/2 translate-y-1/2"></div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-7xl mx-auto text-center">
                        <div className="inline-flex items-center justify-center p-3 bg-[#fcd00e]/20 rounded-full mb-6">
                            <svg className="w-8 h-8 text-[#fcd00e]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V7a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Terms of Service</h1>
                        <p className="text-xl text-gray-200 max-w-2xl mx-auto mb-6">
                            Please read these terms carefully before using our services. Your use of The MICE Connection constitutes agreement to these terms.
                        </p>
                        <div className="bg-black/20 inline-flex items-center px-4 py-2 rounded-full mb-8">
                            <svg className="w-5 h-5 text-[#fcd00e] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span className="text-gray-200 text-sm">Last Updated: 2025</span>
                        </div>
                        <div className="mt-8">
                            <Link
                                to="/"
                                className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-lg hover:bg-white/20 transition-all duration-300 mr-4"
                            >
                                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                                </svg>
                                Back to Home
                            </Link>
                            <button 
                                onClick={() => scrollToSection('acceptance')}
                                className="inline-flex items-center px-6 py-3 bg-[#fcd00e] text-[#143a31] rounded-lg hover:bg-[#e6b800] transition-colors"
                            >
                                Quick Acceptance
                                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="container mx-auto px-6 py-16">
                <div className="max-w-7xl mx-auto">
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
                                    <ul className="space-y-2">
                                        {sections.map((section) => (
                                            <li key={section.id}>
                                                <button
                                                    onClick={() => scrollToSection(section.id)}
                                                    className={`flex items-center w-full text-left p-3 rounded-xl transition-all duration-300 ${activeSection === section.id
                                                        ? 'bg-[#fcd00e]/20 text-[#143a31] font-medium shadow-sm border border-[#fcd00e]/30'
                                                        : 'text-gray-700 hover:bg-gray-100'
                                                        }`}
                                                >
                                                    <span className="mr-3 text-lg">{section.icon}</span>
                                                    <span className="text-sm font-medium">{section.title}</span>
                                                    {activeSection === section.id && (
                                                        <span className="ml-auto w-2 h-2 bg-[#fcd00e] rounded-full"></span>
                                                    )}
                                                </button>
                                            </li>
                                        ))}
                                    </ul>
                                </nav>
                                <div className="p-4 border-t border-gray-200">
                                    <div className="bg-blue-50 p-3 rounded-lg">
                                        <p className="text-blue-700 text-sm flex items-start">
                                            <span className="text-lg mr-2">⏱️</span>
                                            <span><strong>Reading Time:</strong> Approximately 10-15 minutes</span>
                                        </p>
                                    </div>
                                </div>
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
                                            These terms outline the rules and regulations for the use of The MICE Connection's website and services. By accessing this website, you accept these terms in full.
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

                                    <div className="mt-12 pt-8 border-t border-gray-200" id="acceptance">
                                        <div className="text-center">
                                            <h3 className="text-lg font-semibold text-[#143a31] mb-2">Acceptance of Terms</h3>
                                            <p className="text-gray-600 mb-6">
                                                By using our website and services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
                                            </p>
                                            <div className="flex flex-col sm:flex-row justify-center gap-4">
                                                <Link
                                                    to="/contact"
                                                    className="inline-flex items-center px-6 py-3 bg-[#143a31] text-white rounded-lg hover:bg-[#0f2821] transition-colors"
                                                >
                                                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                                    </svg>
                                                    Contact Us
                                                </Link>
                                                <button className="inline-flex items-center px-6 py-3 bg-[#fcd00e] text-[#143a31] rounded-lg hover:bg-[#e6b800] transition-colors">
                                                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                    </svg>
                                                    I Accept These Terms
                                                </button>
                                            </div>
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