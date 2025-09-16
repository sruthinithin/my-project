import { useState } from 'react';
import ProductCard from './ProductCard';

export default function ProductGrid() {
  const [filter, setFilter] = useState('all');

  const sampleProducts = [
    { 
      id: 1, 
      name: "Elegant Gold Necklace", 
      price: 15000, 
      originalPrice: 18000,
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=400&fit=crop",
      category: "necklaces",
      discount: 17,
      rating: 5,
      reviews: 32
    },
    { 
      id: 2, 
      name: "Diamond Solitaire Ring", 
      price: 22000, 
      image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&h=400&fit=crop",
      category: "rings",
      rating: 4,
      reviews: 18
    },
    { 
      id: 3, 
      name: "Silver Drop Earrings", 
      price: 5000, 
      originalPrice: 6500,
      image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&h=400&fit=crop",
      category: "earrings",
      discount: 23,
      rating: 4,
      reviews: 45
    },
    { 
      id: 4, 
      name: "Pearl Bracelet", 
      price: 8000, 
      image: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=400&h=400&fit=crop",
      category: "bracelets",
      rating: 5,
      reviews: 12
    },
    { 
      id: 5, 
      name: "Ruby Tennis Necklace", 
      price: 35000, 
      image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&h=400&fit=crop",
      category: "necklaces",
      rating: 5,
      reviews: 8
    },
    { 
      id: 6, 
      name: "Emerald Stud Earrings", 
      price: 12000, 
      image: "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=400&h=400&fit=crop",
      category: "earrings",
      rating: 4,
      reviews: 26
    }
  ];

  const categories = ['all', 'necklaces', 'rings', 'earrings', 'bracelets'];
  
  const filteredProducts = filter === 'all' 
    ? sampleProducts 
    : sampleProducts.filter(product => product.category === filter);

  return (
    <section className="px-6 py-16 bg-gradient-to-br from-gray-50 to-pink-50 min-h-screen">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-5xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent mb-4">
          Our Exclusive Collection
        </h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Discover timeless elegance with our carefully curated selection of premium jewelry pieces
        </p>
      </div>

      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setFilter(category)}
            className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
              filter === category
                ? 'bg-gradient-to-r from-pink-600 to-purple-600 text-white shadow-lg transform scale-105'
                : 'bg-white text-gray-600 hover:bg-pink-50 hover:text-pink-600 shadow-md'
            }`}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>

      {/* Products Grid */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* Call to Action */}
      <div className="text-center mt-16">
        <button className="bg-gradient-to-r from-pink-600 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-pink-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 shadow-lg">
          View All Products
        </button>
      </div>
    </section>
  );
}