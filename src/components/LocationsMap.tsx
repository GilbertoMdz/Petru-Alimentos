import { useState } from 'react';
import { MapPin, Phone, Clock, Navigation } from 'lucide-react';

const LocationsMap = () => {
  const locations = [

    {
      id: 1,
      name: "Petru Alimentos Reforma",
      address: "Av. Reforma, Oaxaca de Juárez, Oax.",
      phone: "+52 55 8765 4321",
      hours: "Lun-Dom: 10:00 AM - 8:00 PM",
      image: "https://tiendasdemascotas.com.mx/wp-content/uploads/Tienda-de-animales-Petru-Alimentos-Reforma-2.jpg",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d32896.517609543196!2d-96.73864233005132!3d17.06829885663565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85c723841ca05f29%3A0x166b7b803626995e!2sPetru%20Alimentos%20Reforma!5e1!3m2!1ses-419!2smx!4v1755724732058!5m2!1ses-419!2smx",
      directions: "https://maps.google.com/?q=Petru+Alimentos+Reforma"
    },
    {
      id: 2,
      name: "Petru Alimentos San Felipe",
      address: "San Felipe, Oaxaca de Juárez, Oax.",
      phone: "+52 55 1234 5678",
      hours: "Lun-Dom: 9:00 AM - 9:00 PM",
      image: "https://tiendasdemascotas.com.mx/wp-content/uploads/Tienda-de-animales-Petru-Alimentos-Reforma-2.jpg",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d32896.517609543196!2d-96.73864233005132!3d17.06829885663565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85c7212f094c8e0b%3A0x1be7a1f801e36290!2sPetru%20Alimentos%20San%20Felipe!5e1!3m2!1ses-419!2smx!4v1755725841246!5m2!1ses-419!2smx",

      directions: "https://maps.google.com/?q=Petru+Alimentos+San+Felipe"
    },
  ];

  const [activeId, setActiveId] = useState(locations[0].id);
  const active = locations.find(l => l.id === activeId);

  return (
    <section id="sucursales" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-4">
            Nuestras <span className="text-yellow-500">Sucursales</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Visítanos en nuestras ubicaciones en la Ciudad de Oaxaca
          </p>
        </div>

        {/* Map Container con iframes */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-12">
          {/* Tabs */}
          <div className="flex gap-3 p-4 border-b">
            {locations.map(loc => (
              <button
                key={loc.id}
                onClick={() => setActiveId(loc.id)}
                className={`px-4 py-2 rounded-lg font-medium transition ${activeId === loc.id
                    ? 'bg-yellow-500 text-black'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
              >
                {loc.name}
              </button>
            ))}
          </div>

          {/* Iframe responsivo */}
          <div className="relative w-full">
            <div className="aspect-video">
              <iframe
                src={active ? active.mapUrl : ""}
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
            </div>
          </div>
        </div>

        {/* Locations Grid (cards) */}
        <div className="grid md:grid-cols-2 gap-8">
          {locations.map((location) => (
            <div
              key={location.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
            >
              {/* Imagen */}
              <div className="relative h-48">
                <img
                  src={location.image}
                  alt={location.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-xl font-bold text-white">{location.name}</h3>
                </div>
              </div>

              {/* Info */}
              <div className="p-6 space-y-6">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-yellow-500 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-black">Dirección</p>
                    <p className="text-gray-600">{location.address}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-yellow-500 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-black">Teléfono</p>
                    <a
                      href={`tel:${location.phone}`}
                      className="text-gray-600 hover:text-yellow-600 transition-colors duration-200"
                    >
                      {location.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-yellow-500 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-black">Horarios</p>
                    <p className="text-gray-600">{location.hours}</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 pt-4">
                  <a
                    href={location.directions}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-yellow-500 text-black px-4 py-3 rounded-lg font-semibold hover:bg-yellow-600 transition-all duration-300 transform hover:scale-105"
                  >
                    <Navigation className="w-4 h-4" />
                    Cómo llegar
                  </a>

                  <a
                    href={`tel:${location.phone}`}
                    className="flex items-center justify-center gap-2 bg-black text-white px-4 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-all duration-300 transform hover:scale-105"
                  >
                    <Phone className="w-4 h-4" />
                    Llamar
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="bg-black rounded-2xl p-12 text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-4 right-4 w-24 h-24 bg-yellow-500 rounded-full"></div>
              <div className="absolute bottom-4 left-4 w-32 h-32 bg-yellow-500 rounded-full"></div>
            </div>
            <div className="relative z-10 max-w-3xl mx-auto">
              <h3 className="text-3xl font-bold mb-4">¿No puedes visitarnos?</h3>
              <p className="text-gray-300 mb-8 text-lg">
                También hacemos entregas a domicilio en toda la Oaxaca con envío gratuito en compras mayores a $500
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-yellow-500 text-black px-8 py-4 rounded-full font-semibold hover:bg-yellow-600 transform hover:scale-105 transition-all duration-300">
                  Comprar en línea
                </button>
                <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-black transition-all duration-300">
                  WhatsApp: +529515247345
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationsMap;
