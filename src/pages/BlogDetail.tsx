import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { blogPosts } from '../data/blogPostsData';

gsap.registerPlugin(ScrollTrigger);


const BlogDetail = () => {
    const { slug } = useParams<{ slug: string }>();
    const navigate = useNavigate();
    const blogPost = blogPosts.find(post => post.slug === slug);

    // Filter out the current blog post and shuffle for "other posts"
    const otherBlogPosts = blogPosts
        .filter(post => post.slug !== slug)
        .sort(() => 0.5 - Math.random())
        .slice(0, 3); // Get up to 3 other posts

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

    if (!blogPost) {
        return null; // Or a loading spinner, or a "Not Found" message
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-[1440px] mx-auto py-4 mt-10 lg:mt-20">
                <button
                    onClick={() => navigate('/blogs')}
                    className="mb-8 flex items-center cursor-pointer text-[#1f423b] hover:text-[#fcd00d] transition-colors duration-300"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Back to Blog Page
                </button>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Main Blog Post Content */}
                    <div className="lg:col-span-2">
                        <div className="blog-detail-content bg-white rounded-2xl shadow-xl overflow-hidden">
                            <img
                                className="w-full h-96 object-cover"
                                src={blogPost.imageUrl}
                                alt={blogPost.title}
                            />
                            <div className="p-8">
                                <div className="flex items-center text-gray-600 text-sm mb-4">
                                    <span className="mr-3">•</span>
                                    <span className="mr-3">{blogPost.date}</span>
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
                    {/* Sidebar for other blog posts */}
                    <div className="lg:col-span-1">
                        <div className="blog-detail-sidebar bg-white rounded-2xl shadow-xl p-6 lg:sticky top-40">
                            <h2 className="text-2xl font-bold text-[#1f423b] mb-6">Other Blog Posts</h2>
                            <div className="space-y-6">
                                {otherBlogPosts.map(post => (
                                    <div key={post.id} className="flex items-center space-x-4">
                                        <img
                                            src={post.imageUrl}
                                            alt={post.title}
                                            className="w-20 h-20 object-cover rounded-lg flex-shrink-0"
                                        />
                                        <div>
                                            <h3 className="text-lg font-semibold text-[#1f423b] leading-tight hover:text-[#fcd00d] transition-colors duration-300 cursor-pointer"
                                                onClick={() => navigate(`/blogs/${post.slug}`)}>
                                                {post.title}
                                            </h3>
                                            <p className="text-sm text-gray-500 mt-1">{post.date}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogDetail;