import React from 'react';
import { useNavigate } from 'react-router-dom';

interface CategoryCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
    image: string;
    path: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ icon, title, description, image, path }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(path);
    };

    return (
        <div
            className="category-card group relative p-4 rounded-xl overflow-hidden bg-white shadow-md border border-gray-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer"
            onClick={handleClick}
        >
            <div
                className="absolute inset-0 bg-cover bg-center transition-opacity duration-300 opacity-0 group-hover:opacity-20"
                style={{ backgroundImage: `url(${image})` }}
            />
            <div className="relative z-10">
                <div className="flex items-start justify-between">
                    <div className="space-y-1">
                        <h3 className="font-bold text-gray-800">{title}</h3>
                        <p className="text-sm text-gray-500">{description}</p>
                    </div>
                    {icon}
                </div>
            </div>
        </div>
    );
};

export default CategoryCard;
