import React, { useState } from 'react';
import { Play, Users, Heart, Award, ArrowRight } from 'lucide-react';

const AboutPetru = () => {
  const [activeTab, setActiveTab] = useState('historia');

  const teamImages = [
    "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400",
    "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=400",
    "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400"
  ];

  const tabs = [
    { id: 'historia', label: 'Nuestra Historia', icon: Heart },
    { id: 'equipo', label: 'Nuestro Equipo', icon: Users },
    { id: 'mision', label: 'Misión y Visión', icon: Award }
  ];

  return (
    <section id="sobre-nosotros" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-4">
            Conoce <span className="text-yellow-500">Petru</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Somos mucho más que una tienda de mascotas. Somos una familia dedicada al bienestar de tu mejor amigo
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Visual Content */}
          <div className="space-y-8">
            {/* Video/Image Container */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
              <img
                src="https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Petru Store"
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button className="bg-white/20 backdrop-blur-sm rounded-full p-4 hover:bg-white/30 transition-all duration-200">
                  <Play className="w-8 h-8 text-white ml-1" />
                </button>
              </div>
              <div className="absolute bottom-4 left-4 right-4">
                <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4">
                  <p className="font-semibold text-black">Sucursal Reforma</p>
                  <p className="text-sm text-gray-600">Donde todo comenzó hace 5 años</p>
                </div>
              </div>
            </div>

            {/* Team Images */}
            <div className="grid grid-cols-3 gap-4">
              {teamImages.map((image, index) => (
                <div key={index} className="relative rounded-xl overflow-hidden shadow-lg group">
                  <img
                    src={image}
                    alt={`Team member ${index + 1}`}
                    className="w-full h-32 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="space-y-8">
            {/* Tab Navigation */}
            <div className="flex flex-wrap gap-2 border-b border-gray-200">
              {tabs.map((tab) => {
                const IconComponent = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-2 px-6 py-3 rounded-t-lg font-medium transition-all duration-200 ${
                      activeTab === tab.id
                        ? 'bg-yellow-500 text-black border-b-2 border-yellow-500'
                        : 'text-gray-600 hover:text-black hover:bg-gray-50'
                    }`}
                  >
                    <IconComponent className="w-4 h-4" />
                    {tab.label}
                  </button>
                );
              })}
            </div>

            {/* Tab Content */}
            <div className="space-y-6">
              {activeTab === 'historia' && (
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-black">
                    Una historia de amor por las mascotas
                  </h3>
                  <div className="space-y-4 text-gray-600 leading-relaxed">
                    <p>
                      Todo comenzó en 2019 cuando nuestros fundadores, amantes incondicionales de los animales, 
                      notaron la falta de productos realmente premium y asesoría especializada en el mercado mexicano.
                    </p>
                    <p>
                      Con la visión de cambiar la forma en que cuidamos a nuestras mascotas, abrimos nuestra primera 
                      sucursal en Reforma, enfocándonos no solo en vender productos, sino en crear una experiencia 
                      integral de cuidado.
                    </p>
                    <p>
                      Hoy, con más de 10,000 mascotas atendidas y dos sucursales, seguimos creciendo con el mismo 
                      compromiso: ser el aliado número uno en el bienestar de tu mejor amigo.
                    </p>
                  </div>
                </div>
              )}

              {activeTab === 'equipo' && (
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-black">
                    Un equipo apasionado y profesional
                  </h3>
                  <div className="space-y-4 text-gray-600 leading-relaxed">
                    <p>
                      Nuestro equipo está formado por veterinarios certificados, especialistas en nutrición animal 
                      y amantes de las mascotas con años de experiencia.
                    </p>
                    <p>
                      Cada miembro del equipo Petru comparte la misma pasión: brindar el mejor cuidado posible 
                      a cada mascota que llega a nuestras tiendas. Nos capacitamos constantemente para estar 
                      al día con las últimas innovaciones en cuidado animal.
                    </p>
                  </div>
                  
                  {/* Team Stats */}
                  <div className="grid grid-cols-2 gap-6 pt-4">
                    <div className="bg-gray-50 rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold text-black mb-1">15+</div>
                      <div className="text-sm text-gray-600">Especialistas</div>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold text-black mb-1">3</div>
                      <div className="text-sm text-gray-600">Veterinarios</div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'mision' && (
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-black">
                    Nuestra razón de ser
                  </h3>
                  <div className="space-y-6">
                    <div className="bg-yellow-50 rounded-lg p-6">
                      <h4 className="font-bold text-black mb-3">Misión</h4>
                      <p className="text-gray-600 leading-relaxed">
                        Proporcionar productos premium y asesoría especializada que mejoren la calidad de vida 
                        de las mascotas, fortaleciendo el vínculo entre las familias y sus compañeros de cuatro patas.
                      </p>
                    </div>
                    
                    <div className="bg-gray-50 rounded-lg p-6">
                      <h4 className="font-bold text-black mb-3">Visión</h4>
                      <p className="text-gray-600 leading-relaxed">
                        Ser la cadena de tiendas para mascotas más confiable y querida de México, reconocida por 
                        nuestra excelencia en productos, servicio personalizado y compromiso genuino con el bienestar animal.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* CTA Button */}
            <div className="pt-6">
              <button className="group bg-black text-white px-8 py-4 rounded-full font-semibold hover:bg-gray-800 transform hover:scale-105 transition-all duration-300 flex items-center gap-3">
                Visita nuestras sucursales
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mt-20 bg-gray-50 rounded-2xl p-12">
          <h3 className="text-3xl font-bold text-black text-center mb-12">
            Nuestros <span className="text-yellow-500">Valores</span>
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto">
                <Heart className="w-8 h-8 text-black" />
              </div>
              <h4 className="font-bold text-black">Amor por los animales</h4>
              <p className="text-gray-600">
                Cada decisión que tomamos está guiada por nuestro amor genuino hacia las mascotas.
              </p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto">
                <Award className="w-8 h-8 text-black" />
              </div>
              <h4 className="font-bold text-black">Excelencia</h4>
              <p className="text-gray-600">
                Solo ofrecemos productos de la más alta calidad y brindamos un servicio excepcional.
              </p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto">
                <Users className="w-8 h-8 text-black" />
              </div>
              <h4 className="font-bold text-black">Comunidad</h4>
              <p className="text-gray-600">
                Construimos relaciones duraderas con nuestros clientes y sus mascotas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPetru;