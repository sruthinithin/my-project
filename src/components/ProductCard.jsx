export default function ProductCard({ product }) {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition">
      <img src={product.image} alt={product.name} className="w-full h-56 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{product.name}</h3>
        <p className="text-pink-600 font-bold mt-2">₹{product.price}</p>
        <button className="mt-3 w-full bg-pink-600 text-white py-2 rounded-lg hover:bg-pink-700">
          Add to Cart
        </button>
      </div>
    </div>
  )
}
