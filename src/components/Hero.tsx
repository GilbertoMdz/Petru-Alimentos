import { ArrowRight, Play, Dog } from 'lucide-react';

const Hero = () => {
  return (
    <section id="inicio" className="min-h-screen relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-yellow-400 via-yellow-500 to-orange-400">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 bg-black rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-32 w-24 h-24 bg-white rounded-full animate-bounce"></div>
        <div className="absolute bottom-32 left-1/3 w-20 h-20 bg-black rounded-full animate-ping"></div>
        <div className="absolute bottom-20 right-20 w-28 h-28 bg-white rounded-full animate-pulse"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-black/10 backdrop-blur-sm text-black font-semibold mb-8 animate-fade-in">
            <span className="w-2 h-2 bg-green-400 rounded-full mr-3 animate-pulse"></span>
            En cada bolsa de alimento, va un poco de amor y mucha vida.          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-black mb-6 leading-tight">
            Todo lo que tu
            <span className="block text-white drop-shadow-lg">mascota necesita</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-black/80 mb-12 max-w-3xl mx-auto leading-relaxed">
            Descubre nuestra amplia gama de alimentos premium, suplementos y accesorios
            diseñados para el bienestar de tu mejor amigo
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="group bg-black text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-800 transform hover:scale-105 transition-all duration-300 flex items-center gap-3 shadow-2xl">
              Comprar ahora
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>

            <button className="group bg-white/20 backdrop-blur-sm text-black px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/30 transform hover:scale-105 transition-all duration-300 flex items-center gap-3 border border-black/20">
              <Play className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              Ver historia
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-black">+50</div>
              <div className="text-black/70 font-medium">Productos</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-black">2</div>
              <div className="text-black/70 font-medium">Sucursales</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-black">Calidad</div>
              <div className="text-black/70 font-medium">Productos Premium</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}

      {/* Scroll Indicator con ícono */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Dog className="w-10 h-10 text-black" />
      </div>

    </section>
  );
};

export default Hero;