import React, { useEffect, useRef, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { blogPosts } from '../data/blogPostsData';

gsap.registerPlugin(ScrollTrigger);


const BlogDetail = () => {
    const { slug } = useParams<{ slug: string }>();
    const navigate = useNavigate();
    const blogPost = blogPosts.find(post => post.slug === slug);

    const [email, setEmail] = useState<string>('');
    const [subscribed, setSubscribed] = useState<boolean>(false);

    const newsletterRef = useRef<HTMLDivElement>(null);

    // If blog post not found, navigate to a 404 page or back to blog list
    useEffect(() => {
        if (!blogPost) {
            navigate('/blogs'); // or a dedicated 404 page
        }
    }, [blogPost, navigate]);

    // Animation effects (only for the detail page)
    useEffect(() => {
        if (blogPost) {
            gsap.fromTo(".blog-detail-content",
                {
                    opacity: 0,
                    y: 50
                },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    ease: "power3.out"
                }
            );

            gsap.fromTo(".blog-detail-sidebar",
                {
                    opacity: 0,
                    x: 50
                },
                {
                    opacity: 1,
                    x: 0,
                    duration: 1,
                    delay: 0.3,
                    ease: "power3.out"
                }
            );
        }

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, [blogPost]);

    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top of the page on route change
    }, [location.pathname]); // Trigger on route path change



    // Handle newsletter subscription
    const handleSubscribe = (e: React.FormEvent) => {
        e.preventDefault();
        if (email && email.includes('@')) {
            // In a real app, you would send this to your backend
            console.log('Subscribed with email:', email);
            setSubscribed(true);
            setEmail('');

            // Reset subscription status after 5 seconds
            setTimeout(() => {
                setSubscribed(false);
            }, 5000);
        }
    };

    if (!blogPost) {
        return null; // Or a loading spinner, or a "Not Found" message
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto py-4">
                {/* Blog Post Content */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    <div className="lg:col-span-2">
                        <div className="blog-detail-content bg-white rounded-2xl shadow-xl overflow-hidden">
                            <img
                                className="w-full h-96 object-cover"
                                src={blogPost.imageUrl}
                                alt={blogPost.title}
                            />
                            <div className="p-8">
                                <div className="flex items-center text-gray-600 text-sm mb-4">
                                    <span className="mr-3">{blogPost.date}</span>
                                    <span className="mr-3">•</span>
                                    <span className="mr-3">{blogPost.author}</span>
                                    <span className="mr-3">•</span>
                                    <span className="px-3 py-1 bg-[#fcd00d]/20 text-[#1f423b] font-semibold rounded-full text-xs">
                                        {blogPost.category}
                                    </span>
                                </div>
                                <h1 className="text-4xl md:text-5xl font-extrabold text-[#1f423b] mb-6 leading-tight">
                                    {blogPost.title}
                                </h1>
                                <div
                                    className="prose prose-lg max-w-none text-gray-700 leading-relaxed"
                                    dangerouslySetInnerHTML={{ __html: blogPost.content }}
                                />
                                {blogPost.tags && blogPost.tags.length > 0 && (
                                    <div className="mt-8 pt-6 border-t border-gray-200">
                                        <h3 className="text-xl font-bold text-[#1f423b] mb-3">Tags:</h3>
                                        <div className="flex flex-wrap gap-2">
                                            {blogPost.tags.map((tag, index) => (
                                                <span
                                                    key={index}
                                                    className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
                                                >
                                                    #{tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="lg:col-span-1 space-y-8">
                        {/* Example: Author Card */}
                        <div className="blog-detail-sidebar bg-white rounded-xl shadow-lg p-6 text-center">
                            <img
                                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-4 border-[#fcd00d]"
                                src={`https://ui-avatars.com/api/?name=${blogPost.author.replace(/\s+/g, '+')}&background=1f423b&color=fcd00d&size=128`}
                                alt={blogPost.author}
                            />
                            <h3 className="text-xl font-bold text-[#1f423b] mb-2">{blogPost.author}</h3>
                            <p className="text-gray-600 text-sm">Travel Enthusiast & Writer</p>
                            <p className="text-gray-500 text-sm mt-3">
                                Passionate about exploring hidden destinations and sharing unique travel experiences.
                            </p>
                            <div className="flex justify-center space-x-4 mt-4">
                                <a href="#" className="text-[#1f423b] hover:text-[#fcd00d] transition-colors">
                                    <i className="fab fa-twitter"></i>
                                </a>
                                <a href="#" className="text-[#1f423b] hover:text-[#fcd00d] transition-colors">
                                    <i className="fab fa-linkedin"></i>
                                </a>
                                <a href="#" className="text-[#1f423b] hover:text-[#fcd00d] transition-colors">
                                    <i className="fab fa-instagram"></i>
                                </a>
                            </div>
                        </div>


                        {/* Example: Newsletter Subscription */}
                        <div ref={newsletterRef} className="bg-gradient-to-br from-[#1f423b] to-[#2d5f55] rounded-xl shadow-lg p-6 text-white">
                            <h3 className="text-xl font-bold mb-4 flex items-center">
                                <svg className="w-5 h-5 mr-2 text-[#fcd00d]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                </svg>
                                Subscribe to Our Newsletter
                            </h3>
                            <p className="mb-4 text-gray-200">
                                Get the latest travel tips, destination guides, and exclusive offers delivered to your inbox.
                            </p>
                            {subscribed ? (
                                <div className="bg-green-500 text-white py-3 px-4 rounded-lg text-center">
                                    Thank you for subscribing!
                                </div>
                            ) : (
                                <form onSubmit={handleSubscribe} className="space-y-3">
                                    <input
                                        type="email"
                                        placeholder="Your email address"
                                        className="w-full px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#fcd00d]"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />
                                    <button
                                        type="submit"
                                        className="w-full bg-[#fcd00d] text-[#1f423b] font-bold py-3 rounded-lg hover:bg-opacity-90 transition duration-300"
                                    >
                                        Subscribe
                                    </button>
                                </form>
                            )}
                            <p className="text-xs text-gray-300 mt-3">
                                We respect your privacy. Unsubscribe at any time.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogDetail;