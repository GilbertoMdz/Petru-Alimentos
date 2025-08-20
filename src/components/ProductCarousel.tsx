import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const ProductCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const featuredProducts = [
    {
      id: 1,
      name: "Premium Dog Food",
      category: "Alimento Premium",
      price: "$899",
      rating: 4.8,
      image: "https://images.pexels.com/photos/6568942/pexels-photo-6568942.jpeg",
      badge: "Más vendido"
    },
    {
      id: 2,
      name: "Vitaminas para Gatos",
      category: "Suplementos",
      price: "$450",
      rating: 4.9,
      image: "https://images.pexels.com/photos/3683041/pexels-photo-3683041.jpeg",
      badge: "Nuevo"
    },
    {
      id: 3,
      name: "Juguete Interactivo",
      category: "Juguetes",
      price: "$299",
      rating: 4.7,
      image: "https://cdn.redcanina.es/wp-content/uploads/2020/11/02213225/puzzle--1024x683.jpg",
      badge: "Popular"
    },
    {
      id: 4,
      name: "Snacks Naturales",
      category: "Premios",
      price: "$199",
      rating: 4.8,
      image: "https://cdn0.expertoanimal.com/es/posts/0/4/8/tipos_de_snacks_naturales_para_perros_25840_2_600.jpg",
      badge: "Orgánico"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredProducts.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [featuredProducts.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % featuredProducts.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + featuredProducts.length) % featuredProducts.length);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-4">
            Productos <span className="text-yellow-500">Destacados</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Descubre nuestros productos más populares, cuidadosamente seleccionados para el bienestar de tu mascota
          </p>
        </div>

        <div className="relative">
          {/* Carousel Container */}
          <div className="overflow-hidden rounded-2xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {featuredProducts.map((product) => (
                <div key={product.id} className="w-full flex-shrink-0">
                  <div className="bg-white rounded-2xl p-8 mx-4 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                      {/* Product Image */}
                      <div className="relative">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-80 object-cover rounded-xl"
                        />
                        <div className="absolute top-4 left-4">
                          <span className="bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-semibold">
                            {product.badge}
                          </span>
                        </div>
                      </div>

                      {/* Product Info */}
                      <div className="space-y-6">
                        <div>
                          <p className="text-yellow-500 font-semibold text-sm uppercase tracking-wide">
                            {product.category}
                          </p>
                          <h3 className="text-3xl font-bold text-black mt-2">
                            {product.name}
                          </h3>
                        </div>

                        {/* Rating */}
                        <div className="flex items-center gap-2">
                          <div className="flex items-center">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`w-5 h-5 ${
                                  i < Math.floor(product.rating) 
                                    ? 'text-yellow-400 fill-current' 
                                    : 'text-gray-300'
                                }`}
                              />
                            ))}
                          </div>
                          <span className="text-gray-600 font-medium">
                            {product.rating} (245 reseñas)
                          </span>
                        </div>

                        {/* Price */}
                        <div className="text-4xl font-bold text-black">
                          {product.price}
                          <span className="text-lg text-gray-500 font-normal"> MXN</span>
                        </div>

                        {/* CTA Button */}
                        <button className="bg-black text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-800 transform hover:scale-105 transition-all duration-300 w-full md:w-auto">
                          Agregar al carrito
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg hover:bg-white transition-all duration-200 group"
          >
            <ChevronLeft className="w-6 h-6 text-black group-hover:text-yellow-500 transition-colors duration-200" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg hover:bg-white transition-all duration-200 group"
          >
            <ChevronRight className="w-6 h-6 text-black group-hover:text-yellow-500 transition-colors duration-200" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {featuredProducts.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  currentSlide === index ? 'bg-yellow-500 w-8' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductCarousel;