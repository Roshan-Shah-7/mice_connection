import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

const PrivacyPage = () => {
    const pageRef = useRef<HTMLDivElement>(null);
    const sectionsRef = useRef<(HTMLDivElement | null)[]>([]);
    const sections = [
        {
            id: 'introduction',
            title: 'Introduction',
            icon: '📄', // Example icon
            content: (
                <>
                    <p className="text-gray-700 mb-4">
                        Welcome to The MICE Connection! This Privacy Policy outlines how The MICE Connection ("we," "us," or "our") collects, uses, maintains, and discloses information collected from users (each, a "User") of the <a href="https://www.themiceconnection.com" target="_blank" rel="noopener noreferrer" className="text-[#143a31] hover:underline">www.themiceconnection.com</a> website ("Site"). This privacy policy applies to the Site and all products and services offered by The MICE Connection.
                    </p>
                    <p className="text-gray-700">
                        We are committed to protecting your privacy and ensuring that your personal information is handled in a safe and responsible manner. By using our Site, you consent to the data practices described in this policy.
                    </p>
                </>
            ),
        },
        {
            id: 'personal-identification-information',
            title: 'Personal Identification Information',
            icon: '👤',
            content: (
                <>
                    <p className="text-gray-700 mb-4">
                        We may collect personal identification information from Users in a variety of ways, including, but not limited to, when Users visit our site, register on the site, place an order, subscribe to the newsletter, respond to a survey, fill out a form, and in connection with other activities, services, features or resources we make available on our Site. Users may be asked for, as appropriate, name, email address, mailing address, phone number. Users may, however, visit our Site anonymously. We will collect personal identification information from Users only if they voluntarily submit such information to us. Users can always refuse to supply personally identification information, except that it may prevent them from engaging in certain Site related activities.
                    </p>
                </>
            ),
        },
        {
            id: 'non-personal-identification-information',
            title: 'Non-Personal Identification Information',
            icon: '💻',
            content: (
                <>
                    <p className="text-gray-700 mb-4">
                        We may collect non-personal identification information about Users whenever they interact with our Site. Non-personal identification information may include the browser name, the type of computer and technical information about Users means of connection to our Site, such as the operating system and the Internet service providers utilized and other similar information.
                    </p>
                </>
            ),
        },
        {
            id: 'web-browser-cookies',
            title: 'Web Browser Cookies',
            icon: '🍪',
            content: (
                <>
                    <p className="text-gray-700 mb-4">
                        Our Site may use "cookies" to enhance User experience. User's web browser places cookies on their hard drive for record-keeping purposes and sometimes to track information about them. User may choose to set their web browser to refuse cookies, or to alert you when cookies are being sent. If they do so, note that some parts of the Site may not function properly.
                    </p>
                </>
            ),
        },
        {
            id: 'how-we-use-collected-information',
            title: 'How We Use Collected Information',
            icon: '💡',
            content: (
                <>
                    <p className="text-gray-700 mb-4">
                        The MICE Connection may collect and use Users personal information for the following purposes:
                    </p>
                    <ul className="list-disc list-inside text-gray-700 mb-4">
                        <li>
                            <span className="font-semibold">To improve customer service:</span> Information you provide helps us respond to your customer service requests and support needs more efficiently.
                        </li>
                        <li>
                            <span className="font-semibold">To personalize user experience:</span> We may use information in the aggregate to understand how our Users as a group use the services and resources provided on our Site.
                        </li>
                        <li>
                            <span className="font-semibold">To improve our Site:</span> We may use feedback you provide to improve our products and services.
                        </li>
                        <li>
                            <span className="font-semibold">To process payments:</span> We may use the information Users provide about themselves when placing an order only to provide service to that order. We do not share this information with outside parties except to the extent necessary to provide the service.
                        </li>
                        <li>
                            <span className="font-semibold">To send periodic emails:</span> We may use the email address to send User information and updates pertaining to their order. It may also be used to respond to their inquiries, questions, and/or other requests. If User decides to opt-in to our mailing list, they will receive emails that may include company news, updates, related product or service information, etc. If at any time the User would like to unsubscribe from receiving future emails, we include detailed unsubscribe instructions at the bottom of each email or User may contact us via our Site.
                        </li>
                    </ul>
                </>
            ),
        },
        {
            id: 'how-we-protect-your-information',
            title: 'How We Protect Your Information',
            icon: '🔒',
            content: (
                <>
                    <p className="text-gray-700 mb-4">
                        We adopt appropriate data collection, storage and processing practices and security measures to protect against unauthorized access, alteration, disclosure or destruction of your personal information, username, password, transaction information and data stored on our Site.
                    </p>
                </>
            ),
        },
        {
            id: 'sharing-your-personal-information',
            title: 'Sharing Your Personal Information',
            icon: '🤝',
            content: (
                <>
                    <p className="text-gray-700 mb-4">
                        We do not sell, trade, or rent Users personal identification information to others. We may share generic aggregated demographic information not linked to any personal identification information regarding visitors and users with our business partners, trusted affiliates and advertisers for the purposes outlined above. We may use third party service providers to help us operate our business and the Site or administer activities on our behalf, such as sending out newsletters or surveys. We may share your information with these third parties for those limited purposes provided that you have given us your permission.
                    </p>
                </>
            ),
        },
        {
            id: 'third-party-websites',
            title: 'Third Party Websites',
            icon: '🔗',
            content: (
                <>
                    <p className="text-gray-700 mb-4">
                        Users may find advertising or other content on our Site that link to the sites and services of our partners, suppliers, advertisers, sponsors, licensors and other third parties. We do not control the content or links that appear on these sites and are not responsible for the practices employed by websites linked to or from our Site. In addition, these sites or services, including their content and links, may be constantly changing. These sites and services may have their own privacy policies and customer service policies. Browsing and interaction on any other website, including websites which have a link to our Site, is subject to that website's own terms and policies.
                    </p>
                </>
            ),
        },
        {
            id: 'changes-to-this-privacy-policy',
            title: 'Changes to This Privacy Policy',
            icon: '🔄',
            content: (
                <>
                    <p className="text-gray-700 mb-4">
                        The MICE Connection has the discretion to update this privacy policy at any time. When we do, we will revise the updated date at the bottom of this page. We encourage Users to frequently check this page for any changes to stay informed about how we are helping to protect the personal information we collect. You acknowledge and agree that it is your responsibility to review this privacy policy periodically and become aware of modifications.
                    </p>
                </>
            ),
        },
        {
            id: 'your-acceptance-of-these-terms',
            title: 'Your Acceptance of These Terms',
            icon: '✅',
            content: (
                <>
                    <p className="text-gray-700 mb-4">
                        By using this Site, you signify your acceptance of this policy and <a href="/terms-and-conditions" className="text-[#143a31] hover:underline">terms of service</a>. If you do not agree to this policy, please do not use our Site. Your continued use of the Site following the posting of changes to this policy will be deemed your acceptance of those changes.
                    </p>
                </>
            ),
        },
        {
            id: 'contacting-us',
            title: 'Contacting Us',
            icon: '📧',
            content: (
                <>
                    <p className="text-gray-700 mb-4">
                        If you have any questions about this Privacy Policy, the practices of this site, or your dealings with this site, please contact us at:
                    </p>
                    <p className="text-gray-700 mb-2">
                        The MICE Connection
                    </p>
                    <p className="text-gray-700 mb-2">
                        [Your Company Address Here]
                    </p>
                    <p className="text-gray-700 mb-2">
                        [Your Company Phone Number Here]
                    </p>
                    <p className="text-gray-700">
                        Email: <a href="mailto:info@themiceconnection.com" className="text-[#143a31] hover:underline">info@themiceconnection.com</a>
                    </p>
                </>
            ),
        },
    ];
    const [expandedSections, setExpandedSections] = useState<boolean[]>(Array(sections.length).fill(false).map((_, i) => i === 0));
    const [activeSection, setActiveSection] = useState<string>('introduction');

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
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                            </svg>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Privacy Policy</h1>
                        <p className="text-xl text-gray-200 max-w-2xl mx-auto mb-8">
                            Your privacy is important to us. This policy explains how we collect, use, and protect your personal information.
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
                                        <h2 className="text-2xl font-bold text-[#143a31] mb-2">Our Commitment to Privacy</h2>
                                        <p className="text-gray-600 max-w-2xl mx-auto">
                                            We value your trust and are committed to protecting your personal information. This policy details how we handle your data with transparency and integrity.
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
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default PrivacyPage;