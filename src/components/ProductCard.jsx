import { useState } from "react";
import { Heart, ShoppingCart, Star, Eye, X } from "lucide-react";

export default function ProductCard({ product }) {
  const [isLiked, setIsLiked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showBuyForm, setShowBuyForm] = useState(false);

  return (
    <>
      {/* Product Card */}
      <div
        className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Image Container */}
        <div className="relative overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

          {/* Floating Action Buttons */}
          <div
            className={`absolute top-4 right-4 flex flex-col gap-2 transition-all duration-300 ${
              isHovered ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
            }`}
          >
            <button
              onClick={() => setIsLiked(!isLiked)}
              className={`p-2 rounded-full backdrop-blur-md transition-all duration-200 ${
                isLiked
                  ? "bg-red-500/90 text-white"
                  : "bg-white/90 text-gray-600 hover:bg-red-500/90 hover:text-white"
              }`}
            >
              <Heart size={16} className={isLiked ? "fill-current" : ""} />
            </button>
            <button
              onClick={() => setShowModal(true)}
              className="p-2 bg-white/90 text-gray-600 rounded-full backdrop-blur-md hover:bg-pink-500/90 hover:text-white transition-all duration-200"
            >
              <Eye size={16} />
            </button>
          </div>

          {/* Sale Badge */}
          {product.discount && (
            <div className="absolute top-4 left-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
              -{product.discount}%
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="flex items-center gap-1 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={14}
                className={`${
                  i < (product.rating || 4)
                    ? "text-yellow-400 fill-current"
                    : "text-gray-300"
                }`}
              />
            ))}
            <span className="text-sm text-gray-500 ml-1">
              ({product.reviews || 24})
            </span>
          </div>

          <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-pink-600 transition-colors duration-200">
            {product.name}
          </h3>

          <div className="flex items-center gap-2 mb-4">
            {product.originalPrice && (
              <span className="text-gray-400 line-through text-lg">
                ₹{product.originalPrice}
              </span>
            )}
            <span className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
              ₹{product.price}
            </span>
          </div>

          {/* Buttons */}
          <div className="flex gap-3">
            <button className="flex-1 bg-gradient-to-r from-pink-600 to-purple-600 text-white py-3 rounded-xl font-semibold hover:from-pink-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 flex items-center justify-center gap-2">
              <ShoppingCart size={18} />
              Add to Cart
            </button>
            <button
              onClick={() => setShowModal(true)}
              className="flex-1 border border-pink-600 text-pink-600 py-3 rounded-xl font-semibold hover:bg-pink-50 transition-all duration-200"
            >
              View Product
            </button>
          </div>
        </div>
      </div>

      {/* Product Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl shadow-xl p-6 w-full max-w-lg relative">
            {/* Close Button */}
            <button
              onClick={() => {
                setShowModal(false);
                setShowBuyForm(false);
              }}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
            >
              <X size={20} />
            </button>

            {!showBuyForm ? (
              <>
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover rounded-xl mb-4"
                />
                <h2 className="text-2xl font-bold mb-2">{product.name}</h2>
                <p className="text-lg text-pink-600 font-semibold mb-2">
                  ₹{product.price}{" "}
                  {product.originalPrice && (
                    <span className="text-gray-400 line-through ml-2">
                      ₹{product.originalPrice}
                    </span>
                  )}
                </p>
                <p className="text-sm text-gray-600 mb-2">
                  {product.available ? "In Stock" : "Out of Stock"}
                </p>
                <p className="text-sm text-gray-700 mb-6">
                  {product.description || "This is a beautiful piece of jewelry."}
                </p>

                <div className="flex gap-4">
                  <button className="flex-1 bg-gradient-to-r from-pink-600 to-purple-600 text-white py-3 rounded-xl font-semibold hover:from-pink-700 hover:to-purple-700 transition-all duration-200">
                    Add to Cart
                  </button>
                  <button
                    onClick={() => setShowBuyForm(true)}
                    className="flex-1 border border-pink-600 text-pink-600 py-3 rounded-xl font-semibold hover:bg-pink-50 transition-all duration-200"
                  >
                    Buy Now
                  </button>
                </div>
              </>
            ) : (
              <>
                <h2 className="text-xl font-bold mb-4">Buy Now</h2>
                <form className="flex flex-col gap-4">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="border rounded-lg px-4 py-2"
                  />
                  <input
                    type="tel"
                    placeholder="Enter your phone number"
                    className="border rounded-lg px-4 py-2"
                  />
                  <button className="bg-gradient-to-r from-pink-600 to-purple-600 text-white py-3 rounded-xl font-semibold hover:from-pink-700 hover:to-purple-700 transition-all duration-200">
                    Submit
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}
