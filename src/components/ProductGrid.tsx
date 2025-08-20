import { useState } from 'react';
import { Grid, List, Search, Star } from 'lucide-react';

const ProductGrid = () => {
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [viewMode, setViewMode] = useState('grid');
  const [sortBy, setSortBy] = useState('popular');

  const categories = ['Todos', 'Alimento', 'Suplementos', 'Juguetes', 'Accesorios', 'Premios'];

  const products = [
    {
      id: 1,
      name: "Premium Dog Food Adulto",
      category: "Alimento",
      price: 899,
      originalPrice: 999,
      rating: 4.8,
      reviews: 245,
      image: "https://images.pexels.com/photos/6568942/pexels-photo-6568942.jpeg",
      badge: "Oferta",
      inStock: true
    },
    {
      id: 2,
      name: "Multivitamínico para Gatos",
      category: "Suplementos",
      price: 450,
      rating: 4.9,
      reviews: 128,
      image: "https://cloudinary.images-iherb.com/image/upload/f_auto,q_auto:eco/images/peh/peh72853/y/2.jpg",
      badge: "Nuevo",
      inStock: true
    },
    {
      id: 3,
      name: "Pelota Interactiva LED",
      category: "Juguetes",
      price: 299,
      rating: 4.7,
      reviews: 89,
      image: "https://m.media-amazon.com/images/I/61rr+GzzSKL._UF894,1000_QL80_.jpg",
      badge: "Popular",
      inStock: false
    },
    {
      id: 4,
      name: "Collar Antipulgas Natural",
      category: "Accesorios",
      price: 199,
      rating: 4.6,
      reviews: 156,
      image: "https://m.media-amazon.com/images/I/71yh4cJw76L._UF1000,1000_QL80_.jpg",
      inStock: true
    },
    {
      id: 5,
      name: "Snacks Dentales Premium",
      category: "Premios",
      price: 249,
      rating: 4.8,
      reviews: 203,
      image: "https://www.krakvet.pl/img/480/178dcb/22J4h6l8k0O0q1P79308H0h5X490X2a7.jpg",
      badge: "Orgánico",
      inStock: true
    },
    {
      id: 6,
      name: "Cama Ortopédica Deluxe",
      category: "Accesorios",
      price: 1299,
      originalPrice: 1499,
      rating: 4.9,
      reviews: 67,
      image: "https://m.media-amazon.com/images/I/61+8Jigl0YL.jpg",
      badge: "Premium",
      inStock: true
    }
  ];

  const filteredProducts = selectedCategory === 'Todos' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  const getBadgeColor = (badge : any) => {
    switch(badge) {
      case 'Oferta': return 'bg-red-500';
      case 'Nuevo': return 'bg-green-500';
      case 'Popular': return 'bg-blue-500';
      case 'Premium': return 'bg-purple-500';
      case 'Orgánico': return 'bg-emerald-500';
      default: return 'bg-yellow-500';
    }
  };

  return (
    <section id="productos" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-4">
            Nuestra <span className="text-yellow-500">Tienda</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Explora nuestro catálogo completo de productos premium para el cuidado y bienestar de tu mascota
          </p>
        </div>

        {/* Filters and Controls */}
        <div className="bg-gray-50 rounded-2xl p-6 mb-12">
          <div className="flex flex-wrap items-center justify-between gap-6">
            {/* Categories */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full font-medium transition-all duration-200 ${
                    selectedCategory === category
                      ? 'bg-yellow-500 text-black'
                      : 'bg-white text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Controls */}
            <div className="flex items-center gap-4">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Buscar..."
                  className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-yellow-500"
                />
              </div>

              {/* Sort */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-yellow-500"
              >
                <option value="popular">Más popular</option>
                <option value="price-low">Precio: menor a mayor</option>
                <option value="price-high">Precio: mayor a menor</option>
                <option value="rating">Mejor valorados</option>
              </select>

              {/* View Mode */}
              <div className="flex border border-gray-200 rounded-lg overflow-hidden">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 ${viewMode === 'grid' ? 'bg-yellow-500 text-black' : 'bg-white text-gray-600'}`}
                >
                  <Grid className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 ${viewMode === 'list' ? 'bg-yellow-500 text-black' : 'bg-white text-gray-600'}`}
                >
                  <List className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className={`grid gap-8 ${
          viewMode === 'grid' 
            ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
            : 'grid-cols-1'
        }`}>
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
            >
              {/* Product Image */}
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                
                {/* Badge */}
                {product.badge && (
                  <div className={`absolute top-4 left-4 ${getBadgeColor(product.badge)} text-white px-3 py-1 rounded-full text-sm font-semibold`}>
                    {product.badge}
                  </div>
                )}

                {/* Stock Status */}
                {!product.inStock && (
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                    <span className="bg-white text-black px-4 py-2 rounded-full font-semibold">
                      Agotado
                    </span>
                  </div>
                )}
              </div>

              {/* Product Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-black mb-2 group-hover:text-yellow-600 transition-colors duration-200">
                  {product.name}
                </h3>
                
                <p className="text-gray-500 text-sm mb-3">{product.category}</p>

                {/* Rating */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(product.rating) 
                            ? 'text-yellow-400 fill-current' 
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-gray-600 text-sm">
                    {product.rating} ({product.reviews})
                  </span>
                </div>

                {/* Price */}
                <div className="flex items-center gap-2 mb-6">
                  <span className="text-2xl font-bold text-black">
                    ${product.price}
                  </span>
                  {product.originalPrice && (
                    <span className="text-gray-500 line-through">
                      ${product.originalPrice}
                    </span>
                  )}
                </div>

                {/* Add to Cart Button */}
                <button
                  disabled={!product.inStock}
                  className={`w-full py-3 rounded-full font-semibold transition-all duration-300 ${
                    product.inStock
                      ? 'bg-black text-white hover:bg-gray-800 transform hover:scale-105'
                      : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  }`}
                >
                  {product.inStock ? 'Agregar al carrito' : 'No disponible'}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-16">
          <button className="bg-yellow-500 text-black px-8 py-3 rounded-full font-semibold hover:bg-yellow-600 transform hover:scale-105 transition-all duration-300">
            Cargar más productos
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;