import React from 'react';

const InternationalToursOverview: React.FC = () => {
    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-extrabold text-brand-dark mb-3">Explore the World with Us</h2>
                    <p className="text-lg text-neutral-600 max-w-3xl mx-auto">We are excited to announce our new international tour packages. Discover amazing destinations around the globe.</p>
                </div>
                {/* Placeholder for international tour packages */}
                <div className="text-center">
                    <p className="text-lg text-neutral-600">International tour packages coming soon!</p>
                </div>
            </div>
        </section>
    );
};

export default InternationalToursOverview;