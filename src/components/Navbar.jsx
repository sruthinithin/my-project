import { ShoppingCart } from "lucide-react"

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-6 py-4 shadow-md bg-white">
      {/* Logo */}
      <h1 className="text-2xl font-bold text-pink-600">Forest Jewelry</h1>

      {/* Links */}
      <div className="hidden md:flex space-x-6">
        <a href="#" className="hover:text-pink-600">Home</a>
        <a href="#" className="hover:text-pink-600">Shop</a>
        <a href="#" className="hover:text-pink-600">About</a>
        <a href="#" className="hover:text-pink-600">Contact</a>
      </div>

      {/* Cart */}
      <div className="flex items-center space-x-2">
        <ShoppingCart className="w-6 h-6 text-pink-600" />
        <span className="text-sm">0</span>
      </div>
    </nav>
  )
}
