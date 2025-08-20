import React, { useState } from 'react';
import { Menu, X, ShoppingCart, User, Search } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-black">
              <span className="text-yellow-500">Petru</span> Alimentos
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#inicio" className="text-gray-700 hover:text-yellow-500 transition-colors duration-200">
              Inicio
            </a>
            <a href="#productos" className="text-gray-700 hover:text-yellow-500 transition-colors duration-200">
              Productos
            </a>
            <a href="#sobre-nosotros" className="text-gray-700 hover:text-yellow-500 transition-colors duration-200">
              Sobre Nosotros
            </a>
            <a href="#sucursales" className="text-gray-700 hover:text-yellow-500 transition-colors duration-200">
              Sucursales
            </a>
          </nav>

          {/* Search and Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Buscar productos..."
                className="pl-10 pr-4 py-2 border border-gray-200 rounded-full focus:outline-none focus:border-yellow-500 transition-colors duration-200"
              />
            </div>
            <button className="p-2 text-gray-700 hover:text-yellow-500 transition-colors duration-200">
              <User className="w-5 h-5" />
            </button>
            <button className="relative p-2 text-gray-700 hover:text-yellow-500 transition-colors duration-200">
              <ShoppingCart className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 bg-yellow-500 text-black text-xs rounded-full w-5 h-5 flex items-center justify-center">
                3
              </span>
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-700"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <div className="flex flex-col space-y-4">
              <a href="#inicio" className="text-gray-700 hover:text-yellow-500">Inicio</a>
              <a href="#productos" className="text-gray-700 hover:text-yellow-500">Productos</a>
              <a href="#sobre-nosotros" className="text-gray-700 hover:text-yellow-500">Sobre Nosotros</a>
              <a href="#sucursales" className="text-gray-700 hover:text-yellow-500">Sucursales</a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;