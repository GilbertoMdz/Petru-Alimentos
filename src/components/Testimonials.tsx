import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "María González",
      petName: "Luna",
      petImage: "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=300",
      rating: 5,
      text: "Petru ha transformado la alimentación de Luna. Desde que cambiamos a sus productos premium, está más activa y saludable. ¡Recomiendo totalmente!",
      location: "Sucursal Reforma"
    },
    {
      id: 2,
      name: "Carlos Mendez",
      petName: "Max",
      petImage: "https://images.pexels.com/photos/1805164/pexels-photo-1805164.jpeg?auto=compress&cs=tinysrgb&w=300",
      rating: 5,
      text: "El servicio es excepcional. Los veterinarios me ayudaron a elegir el mejor plan nutricional para Max. Los resultados son increíbles.",
      location: "Sucursal Xochimilco"
    },
    {
      id: 3,
      name: "Ana Rodríguez",
      petName: "Mimi",
      petImage: "https://images.pexels.com/photos/156934/pexels-photo-156934.jpeg?auto=compress&cs=tinysrgb&w=300",
      rating: 5,
      text: "La variedad de productos es impresionante. Mimi ama sus nuevos juguetes y los suplementos han mejorado mucho su pelaje.",
      location: "Cliente Online"
    },
    {
      id: 4,
      name: "Roberto Silva",
      petName: "Rocky",
      petImage: "https://images.pexels.com/photos/1254140/pexels-photo-1254140.jpeg?auto=compress&cs=tinysrgb&w=300",
      rating: 5,
      text: "Envío rápido y productos de calidad. Rocky está más feliz que nunca con su nueva alimentación. Petru es confianza asegurada.",
      location: "Sucursal Reforma"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-20 bg-yellow-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-4">
            Lo que dicen nuestros <span className="text-yellow-500">clientes</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Miles de mascotas felices y familias satisfechas respaldan nuestra calidad y servicio
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-4xl mx-auto">
          {/* Oculta solo horizontalmente para no cortar vertical */}
          <div className="overflow-x-hidden overflow-y-visible rounded-2xl">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {testimonials.map((t) => (
                <div key={t.id} className="w-full flex-shrink-0 px-4">
                  {/* MÁS padding arriba para que el icono tenga espacio */}
                  <div className="bg-white rounded-2xl p-8 pt-16 shadow-lg relative">
                    {/* Quote Icon – SIEMPRE dentro del card */}
                    <div className="absolute top-6 left-6 z-10 pointer-events-none">
                      <div className="bg-yellow-500 rounded-full p-3 shadow-md ring-4 ring-white">
                        <Quote className="w-6 h-6 text-black" />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 items-center">
                      {/* Pet Image */}
                      <div className="text-center">
                        <div className="relative inline-block">
                          <img
                            src={t.petImage}
                            alt={t.petName}
                            className="w-32 h-32 rounded-full object-cover border-4 border-yellow-500"
                          />
                          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-semibold">
                            {t.petName}
                          </div>
                        </div>
                      </div>

                      {/* Testimonial Content */}
                      <div className="md:col-span-2 space-y-6">
                        <div className="flex items-center gap-2" aria-hidden>
                          {[...Array(t.rating)].map((_, i) => (
                            <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                          ))}
                        </div>

                        <p className="text-gray-700 text-lg leading-relaxed italic">
                          "{t.text}"
                        </p>

                        <div className="border-t border-gray-200 pt-6">
                          <div className="flex items-center justify-between">
                            <div>
                              <h4 className="font-bold text-black">{t.name}</h4>
                              <p className="text-yellow-600 font-medium">
                                Dueño de {t.petName}
                              </p>
                            </div>
                            <div className="text-right">
                              <p className="text-sm text-gray-500">{t.location}</p>
                            </div>
                          </div>
                        </div>
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
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-200 group"
            aria-label="Anterior"
          >
            <ChevronLeft className="w-6 h-6 text-black group-hover:text-yellow-500 transition-colors duration-200" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-200 group"
            aria-label="Siguiente"
          >
            <ChevronRight className="w-6 h-6 text-black group-hover:text-yellow-500 transition-colors duration-200" />
          </button>

          {/* Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-3 rounded-full transition-all duration-200 ${
                  currentSlide === index ? 'bg-yellow-500 w-8' : 'bg-gray-300 w-3'
                }`}
                aria-label={`Ir al testimonio ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
