import { useState, useEffect } from 'react'
import './App.css'

// Types
interface Product {
  id: number
  title: string
  price: number
  category: string
  brand: string
  rating: number
  images: string[]
  description: string
}

interface ApiResponse {
  products: Product[]
  total: number
  skip: number
  limit: number
}

function App() {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('')
  const [favorites, setFavorites] = useState<Set<number>>(new Set())

  // TODO: Implement API fetch function
  const fetchProducts = async () => {
    // - Fetch products from `https://dummyjson.com/products?limit=100`
  }

  // TODO: Implement search and filter logic
  const filteredProducts = products.filter(product => {
  })

  // TODO: Implement category extraction
  const categories: string[] = []

  // TODO: Implement favorite toggle
  const toggleFavorite = (productId: number) => {
    // Candidate should implement this
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  return (
    <div className="app">
      <header className="header">
        <h1>Product Catalog</h1>
        <div className="controls">
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="category-select"
          >
            <option value="">All Categories</option>
            {categories.map(category => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
      </header>

      <main className="main">
        {loading && <div className="loading">Loading products...</div>}
        {error && <div className="error">Error: {error}</div>}
        
        <div className="stats">
          <p>Total Products: {products.length}</p>
          <p>Filtered Products: {filteredProducts.length}</p>
          <p>Favorites: {favorites.size}</p>
        </div>

        <div className="products-grid">
          {filteredProducts.map(product => (
            <div key={product.id} className="product-card">
              <img src={product.images[0]} alt={product.title} className="product-image" />
              <div className="product-info">
                <h3 className="product-title">{product.title}</h3>
                <p className="product-brand">{product.brand}</p>
                <p className="product-category">{product.category}</p>
                <p className="product-price">${product.price}</p>
                <p className="product-rating">Rating: {product.rating}/5</p>
                <button
                  onClick={() => toggleFavorite(product.id)}
                  className={`favorite-btn ${favorites.has(product.id) ? 'favorited' : ''}`}
                >
                  {favorites.has(product.id) ? '❤️' : '🤍'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}

export default App
