import ProductCard from "./ProductCard"

const sampleProducts = [
  { id: 1, name: "Gold Necklace", price: 15000, image: "/images/necklace.jpg" },
  { id: 2, name: "Diamond Ring", price: 22000, image: "/images/ring.jpg" },
  { id: 3, name: "Silver Earrings", price: 5000, image: "/images/earrings.jpg" },
]

export default function ProductGrid() {
  return (
    <section className="px-6 py-12">
      <h2 className="text-2xl font-bold text-center mb-8">Our Collection</h2>
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {sampleProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  )
}
