import { 
  Facebook, 
  Instagram, 
  Twitter, 
  Youtube, 
  Mail, 
  Phone, 
  MapPin, 
} from 'lucide-react';

const Footer = () => {
  const footerLinks = {
    'Tienda': [
      'Todos los productos',
      'Alimento para perros',
      'Alimento para gatos',
      'Suplementos',
      'Juguetes',
      'Accesorios'
    ],
    'Servicio': [
      'Asesoría veterinaria',
      'Entrega a domicilio',
      'Membresías',
      'Devoluciones',
      'Garantías',
      'Preguntas frecuentes'
    ],
    'Empresa': [
      'Sobre Petru',
      'Nuestro equipo',
      'Sucursales',
      'Trabajar con nosotros',
      'Sustentabilidad',
      'Alianzas'
    ],
    'Legal': [
      'Términos de servicio',
      'Política de privacidad',
      'Política de cookies',
      'Aviso de privacidad',
      'Condiciones de compra',
      'Derechos del consumidor'
    ]
  };

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook', color: 'hover:text-blue-600' },
    { icon: Instagram, href: '#', label: 'Instagram', color: 'hover:text-pink-600' },
    { icon: Twitter, href: '#', label: 'Twitter', color: 'hover:text-blue-400' },
    { icon: Youtube, href: '#', label: 'YouTube', color: 'hover:text-red-600' }
  ];

  return (
    <footer className="bg-black text-white">


      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-6 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h2 className="text-3xl font-bold">
                <span className="text-yellow-500">Petru</span> Alimentos
              </h2>
              <p className="text-gray-400 mt-4 leading-relaxed">
                Tu aliado de confianza en el cuidado y bienestar de tu mascota. 
                Productos premium, asesoría especializada y amor genuino por los animales.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-yellow-500 flex-shrink-0" />
                <span className="text-gray-400">+52 55 1234 5678</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-yellow-500 flex-shrink-0" />
                <span className="text-gray-400">hola@petru.mx</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-1" />
                <div className="text-gray-400">
                  <p>Av. Paseo de la Reforma 123</p>
                  <p>Cuauhtémoc, CDMX 06500</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-8">
              <p className="text-gray-400 mb-4 font-medium">Síguenos en:</p>
              <div className="flex gap-4">
                {socialLinks.map(({ icon: Icon, href, label, color }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className={`w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center text-gray-400 hover:bg-gray-800 ${color} transition-all duration-300 transform hover:scale-110`}
                  >
                    <Icon className="w-6 h-6" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-bold text-white mb-6">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-yellow-500 transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-400 text-center md:text-left">
              © 2024 Petru Alimentos. Todos los derechos reservados. EnginCode
            </p>
     

            <div className="flex items-center gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors duration-200">
                Política de privacidad
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors duration-200">
                Términos de uso
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;