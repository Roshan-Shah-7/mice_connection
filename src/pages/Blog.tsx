import type { Category, Tag } from '../data/blogPostsData';
import { blogPosts } from '../data/blogPostsData';
import { useEffect, useRef, useState } from 'react';
import { formatDate } from '../utils/dateFormatter';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);


import { useNavigate } from 'react-router-dom';

const BlogPage = () => {
    const navigate = useNavigate();
    const [selectedCategory, setSelectedCategory] = useState<string>('all');
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [subscribed, setSubscribed] = useState<boolean>(false);
    const blogContainerRef = useRef<HTMLDivElement>(null);
    const blogCardRefs = useRef<(HTMLDivElement | null)[]>([]);
    const featuredPostRef = useRef<HTMLDivElement>(null);
    const recentPostsRef = useRef<HTMLDivElement>(null);
    const popularPostsRef = useRef<HTMLDivElement>(null);
    const newsletterRef = useRef<HTMLDivElement>(null);
    const tagsCloudRef = useRef<HTMLDivElement>(null);

    // Categories data
    const categories: Category[] = [
        { id: 'all', name: 'All Posts', count: blogPosts.length },
        ...Array.from(new Set(blogPosts.map(post => post.category))).map(categoryName => ({
            id: categoryName,
            name: categoryName,
            count: blogPosts.filter(post => post.category === categoryName).length
        }))
    ];

    // Extract all tags from blog posts
    const allTags = blogPosts.reduce<Tag[]>((acc, post) => {
        if (post.tags) {
            post.tags.forEach(tag => {
                const existingTag = acc.find(t => t.name === tag);
                if (existingTag) {
                    existingTag.count++;
                } else {
                    acc.push({ id: tag.toLowerCase().replace(/\s+/g, '-'), name: tag, count: 1 });
                }
            });
        }
        return acc;
    }, []);

    // Sort blog posts by date (newest first)
    const sortedByDate = [...blogPosts].sort((a, b) => {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
    });

    // Get recent posts (excluding featured post)
    const recentPosts = sortedByDate.slice(0, 3);

    // Filtered and sorted blog posts for the main grid
    const mainBlogPosts = blogPosts
        .filter(post => {
            const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
            const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
            return matchesCategory && matchesSearch;
        })
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()); // Sort by date, newest first

    // Sort blog posts by views (highest first)
    const sortedByViews = [...blogPosts].sort((a, b) => {
        return (b.views || 0) - (a.views || 0);
    });

    // Get popular posts (excluding featured post)
    const popularPosts = sortedByViews.filter(post => !post.featured).slice(0, 3);

    // Filtered and sorted blog posts for the main grid
    const filteredBlogPosts = mainBlogPosts.filter(post => {
        const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
        const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    // Featured post
    const featuredPost = blogPosts.find(post => post.featured);

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

    // Animation effects
    useEffect(() => {
        // Animate featured post
        if (featuredPostRef.current) {
            gsap.fromTo(featuredPostRef.current,
                {
                    opacity: 0,
                    y: 30
                },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    ease: "power3.out"
                }
            );
        }

        // Animate recent posts section
        if (recentPostsRef.current) {
            gsap.fromTo(recentPostsRef.current,
                {
                    opacity: 0,
                    y: 30
                },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    delay: 0.2,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: recentPostsRef.current,
                        start: "top 85%",
                        end: "bottom 15%",
                        toggleActions: "play none none reverse"
                    }
                }
            );
        }

        // Animate popular posts section
        if (popularPostsRef.current) {
            gsap.fromTo(popularPostsRef.current,
                {
                    opacity: 0,
                    y: 30
                },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    delay: 0.4,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: popularPostsRef.current,
                        start: "top 85%",
                        end: "bottom 15%",
                        toggleActions: "play none none reverse"
                    }
                }
            );
        }

        // Animate newsletter section
        if (newsletterRef.current) {
            gsap.fromTo(newsletterRef.current,
                {
                    opacity: 0,
                    y: 30
                },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    delay: 0.6,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: newsletterRef.current,
                        start: "top 85%",
                        end: "bottom 15%",
                        toggleActions: "play none none reverse"
                    }
                }
            );
        }

        // Animate tags cloud section
        if (tagsCloudRef.current) {
            gsap.fromTo(tagsCloudRef.current,
                {
                    opacity: 0,
                    y: 30
                },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    delay: 0.8,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: tagsCloudRef.current,
                        start: "top 85%",
                        end: "bottom 15%",
                        toggleActions: "play none none reverse"
                    }
                }
            );
        }

        // Animate blog cards on scroll
        blogCardRefs.current.forEach((card, index) => {
            if (card) {
                gsap.fromTo(card,
                    {
                        opacity: 0,
                        y: 50
                    },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.8,
                        delay: index * 0.1,
                        scrollTrigger: {
                            trigger: card,
                            start: "top 80%",
                            end: "bottom 20%",
                            toggleActions: "play none none reverse"
                        }
                    }
                );
            }
        });

        // Animate category buttons
        gsap.fromTo(".category-btn",
            {
                opacity: 0,
                scale: 0.9
            },
            {
                opacity: 1,
                scale: 1,
                duration: 0.5,
                stagger: 0.05,
                ease: "back.out(1.2)"
            }
        );

        // Clean up animations on unmount
        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, [filteredBlogPosts]);

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto py-4 mt-10 lg:mt-20">
                {/* Page Title */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-[#1f423b] mb-6">Travel Insights & Stories</h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Discover travel tips, destination guides, and inspiring stories from our adventures around the world.
                    </p>
                </div>

                {/* Search Bar */}
                <div className="mb-16 max-w-2xl mx-auto">
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Search blog posts..."
                            className="w-full px-6 py-4 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#fcd00d] focus:border-transparent shadow-sm"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                        <svg
                            className="absolute right-4 top-1/2 transform -translate-y-1/2 h-6 w-6 text-gray-400"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </div>
                </div>

                {/* Featured Post */}
                {featuredPost && (
                    <div
                        ref={featuredPostRef}
                        className="mb-20 rounded-2xl overflow-hidden shadow-xl bg-white relative cursor-pointer"
                        onClick={() => navigate(`/blogs/${featuredPost.slug}`)}
                    >
                        <div className="absolute top-6 right-6 bg-[#fcd00d] text-[#1f423b] font-bold py-1 px-4 rounded-full z-10">
                            FEATURED
                        </div>
                        <div className="md:flex">
                            <div className="md:flex-shrink-0 md:w-1/2">
                                <img
                                    className="h-64 w-full object-cover md:h-full"
                                    src={featuredPost.imageUrl}
                                    alt={featuredPost.title}
                                />
                            </div>
                            <div className="p-8 md:w-1/2 flex flex-col justify-between">
                                <div>
                                    <div className="uppercase tracking-wide text-sm text-[#1f423b] font-semibold">
                                        {featuredPost.category}
                                    </div>
                                    <h2 className="mt-2 text-2xl md:text-3xl font-bold text-[#1f423b]">
                                        {featuredPost.title}
                                    </h2>
                                    <p className="mt-4 text-gray-600">
                                        {featuredPost.excerpt}
                                    </p>
                                </div>
                                <div className="mt-6 flex items-center justify-between">
                                    <div className="flex items-center">
                                        <div className="ml-3">
                                            <div className="flex space-x-1 text-sm text-gray-500">
                                                <span>{formatDate(featuredPost.date)}</span>
                                                <span>•</span>
                                                <span>{featuredPost.views} views</span>
                                            </div>
                                        </div>
                                    </div>
                                    {/* The button itself will not navigate, the entire div is clickable */}
                                    <button
                                        className="px-6 py-3 bg-[#1f423b] text-white font-medium rounded-lg hover:bg-opacity-90 transition duration-300 flex items-center"
                                        onClick={(e) => { e.stopPropagation(); navigate(`/blogs/${featuredPost.slug}`); }}
                                    >
                                        Read Full Article
                                        <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Additional Sections Container */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
                    {/* Recently Added Blogs */}
                    <div ref={recentPostsRef} className="bg-white rounded-xl shadow-lg p-6">
                        <h3 className="text-xl font-bold text-[#1f423b] mb-4 flex items-center">
                            <svg className="w-5 h-5 mr-2 text-[#fcd00d]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                            </svg>
                            Recently Added
                        </h3>
                        <div className="space-y-4">
                            {recentPosts.map((post) => (
                                <div key={post.id} className="flex items-start space-x-3 pb-4 border-b border-gray-100 last:border-0 last:pb-0">
                                    <img
                                        className="w-16 h-16 rounded-lg object-cover flex-shrink-0"
                                        src={post.imageUrl}
                                        alt={post.title}
                                    />
                                    <div>
                                        <h4 className="font-medium text-[#1f423b] hover:text-[#fcd00d] transition-colors duration-300 cursor-pointer">
                                            {post.title}
                                        </h4>
                                        <p className="text-sm text-gray-500 mt-1">{formatDate(post.date)}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Popular Posts */}
                    <div ref={popularPostsRef} className="bg-white rounded-xl shadow-lg p-6">
                        <h3 className="text-xl font-bold text-[#1f423b] mb-4 flex items-center">
                            <svg className="w-5 h-5 mr-2 text-[#fcd00d]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                            Popular Posts
                        </h3>
                        <div className="space-y-4">
                            {popularPosts.map((post, index) => (
                                <div key={post.id} className="flex items-start space-x-3 pb-4 border-b border-gray-100 last:border-0 last:pb-0">
                                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#fcd00d]/20 flex items-center justify-center text-[#1f423b] font-bold">
                                        {index + 1}
                                    </div>
                                    <div>
                                        <h4 className="font-medium text-[#1f423b] hover:text-[#fcd00d] transition-colors duration-300 cursor-pointer">
                                            {post.title}
                                        </h4>
                                        <p className="text-sm text-gray-500 mt-1">{post.views} views</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Newsletter Subscription */}
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

                {/* Tags Cloud */}
                <div ref={tagsCloudRef} className="mb-16 bg-white rounded-xl shadow-lg p-6">
                    <h3 className="text-xl font-bold text-[#1f423b] mb-4">Popular Tags</h3>
                    <div className="flex flex-wrap gap-2">
                        {allTags.map((tag) => (
                            <a
                                key={tag.id}
                                href="#"
                                className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-300 hover:bg-[#fcd00d] hover:text-[#1f423b] ${tag.count > 2
                                    ? 'bg-[#1f423b] text-white'
                                    : 'bg-gray-100 text-gray-700'
                                    }`}
                            >
                                #{tag.name} ({tag.count})
                            </a>
                        ))}
                    </div>
                </div>

                {/* Category Filter */}
                <div className="mb-16">
                    <h2 className="text-2xl font-bold text-[#1f423b] mb-6">Browse by Category</h2>
                    <div className="flex flex-wrap gap-3">
                        {categories.map((category) => (
                            <button
                                key={category.id}
                                className={`category-btn px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${selectedCategory === category.id
                                    ? 'bg-[#1f423b] text-white shadow-md'
                                    : 'bg-white text-[#1f423b] hover:bg-[#fcd00d]/20 shadow-sm'
                                    }`}
                                onClick={() => setSelectedCategory(category.id)}
                            >
                                {category.name} ({category.count})
                            </button>
                        ))}
                    </div>
                </div>

                {/* Blog Posts Grid */}
                <div ref={blogContainerRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredBlogPosts.map((post, index) => (
                        <div
                            key={post.id}
                            ref={el => { blogCardRefs.current[index] = el; }}
                            className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer"
                            onClick={() => navigate(`/blogs/${post.slug}`)}
                        >
                            <div className="h-48 overflow-hidden relative">
                                <img
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    src={post.imageUrl}
                                    alt={post.title}
                                />
                                <div className="absolute top-4 left-4">
                                    <span className="inline-block px-3 py-1 text-xs font-semibold text-white bg-[#1f423b]/80 backdrop-blur-sm rounded-full">
                                        {post.category}
                                    </span>
                                </div>
                                {post.featured && (
                                    <div className="absolute top-4 right-4 bg-[#fcd00d] text-[#1f423b] font-bold text-xs py-1 px-2 rounded-full">
                                        FEATURED
                                    </div>
                                )}
                            </div>
                            <div className="p-6">
                                <div className="flex justify-between items-center mb-2">
                                    <span className="text-sm text-gray-500">{formatDate(post.date)}</span>
                                    {post.views && (
                                        <div className="flex items-center text-sm text-gray-500">
                                            <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                                                <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                                            </svg>
                                            {post.views}
                                        </div>
                                    )}
                                </div>
                                <h3 className="text-xl font-bold text-[#1f423b] mb-2 group-hover:text-[#fcd00d] transition-colors duration-300">{post.title}</h3>
                                <p className="text-gray-600 mb-4">{post.excerpt}</p>

                                {/* Tags */}
                                {post.tags && post.tags.length > 0 && (
                                    <div className="flex flex-wrap gap-1 mb-4">
                                        {post.tags.map((tag, index) => (
                                            <span key={index} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                                                #{tag}
                                            </span>
                                        ))}
                                    </div>
                                )}

                                <div className="flex items-center justify-between">
                                    <button
                                        onClick={() => navigate(`/blogs/${post.slug}`)}
                                        className="text-[#1f423b] hover:text-[#fcd00d] font-medium text-sm flex items-center transition-colors duration-300"
                                    >
                                        Read more
                                        <svg className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* No results message */}
                {filteredBlogPosts.length === 0 && (
                    <div className="text-center py-12">
                        <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <h3 className="mt-2 text-lg font-medium text-gray-900">No blog posts found</h3>
                        <p className="mt-1 text-gray-500">Try adjusting your search or filter criteria.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default BlogPage;