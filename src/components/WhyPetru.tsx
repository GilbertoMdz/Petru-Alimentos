import { useEffect, useRef, useState } from 'react';
import { Award, Clock, Heart, Users, Truck, Shield } from 'lucide-react';

const WhyPetru = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const features = [
    {
      icon: Award,
      title: "Productos Premium",
      description: "Solo marcas reconocidas y productos de la más alta calidad para tu mascota",
      color: "text-yellow-500",
      bgColor: "bg-yellow-100"
    },
    {
      icon: Truck,
      title: "Envíos Rápidos y Gratis",
      description: "Entrega gratuita en 24-48 horas en el área metropolitana",
      color: "text-green-500",
      bgColor: "bg-green-100"
    },
    {
      icon: Heart,
      title: "Asesoría Personalizada",
      description: "Nuestros veterinarios te guían para elegir lo mejor para tu mascota",
      color: "text-red-500",
      bgColor: "bg-red-100"
    },
    {
      icon: Users,
      title: "Membresías Exclusivas",
      description: "Únete a nuestro programa de lealtad y obtén descuentos especiales",
      color: "text-blue-500",
      bgColor: "bg-blue-100"
    },
    {
      icon: Shield,
      title: "Garantía de Satisfacción",
      description: "30 días para devolver cualquier producto si no estás completamente satisfecho",
      color: "text-purple-500",
      bgColor: "bg-purple-100"
    },
    {
      icon: Clock,
      title: "Soporte 24/7",
      description: "Estamos aquí para ti y tu mascota las 24 horas del día, los 7 días de la semana",
      color: "text-indigo-500",
      bgColor: "bg-indigo-100"
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-4">
            ¿Por qué elegir <span className="text-yellow-500">Petru</span>?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Somos más que una tienda de mascotas. Somos tu aliado en el cuidado y bienestar de tu mejor amigo
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={feature.title}
                className={`group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 ${
                  isVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-8'
                }`}
                style={{
                  transitionDelay: `${index * 100}ms`
                }}
              >
                {/* Icon Container */}
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl ${feature.bgColor} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className={`w-8 h-8 ${feature.color}`} />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-black mb-4 group-hover:text-yellow-600 transition-colors duration-300">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>

                {/* Hover Accent */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-yellow-200 transition-all duration-300"></div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-black rounded-2xl p-12 text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-4 left-4 w-20 h-20 bg-yellow-500 rounded-full"></div>
              <div className="absolute bottom-4 right-4 w-32 h-32 bg-yellow-500 rounded-full"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-yellow-500 rounded-full"></div>
            </div>
            
            {/* Content */}
            <div className="relative z-10 max-w-3xl mx-auto">
              <h3 className="text-3xl font-bold mb-4">
                ¿Listo para darle lo mejor a tu mascota?
              </h3>
              <p className="text-gray-300 mb-8 text-lg">
                Cada día son más los hogares que eligen Petru para llenar de amor y bienestar a sus peludos.
              </p>
              <button className="bg-yellow-500 text-black px-8 py-4 rounded-full font-semibold text-lg hover:bg-yellow-600 transform hover:scale-105 transition-all duration-300">
                Comenzar ahora
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyPetru;