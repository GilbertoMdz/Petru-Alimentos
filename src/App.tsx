import Header from './components/Header';
import Hero from './components/Hero';
import ProductCarousel from './components/ProductCarousel';
import ProductGrid from './components/ProductGrid';
import WhyPetru from './components/WhyPetru';
import AboutPetru from './components/AboutPetru';
import LocationsMap from './components/LocationsMap';
import Footer from './components/Footer';
import FloatingCart from './components/FloatingCart';
import Testimonials from './components/Testimonials';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <ProductCarousel />
      <ProductGrid />
      <WhyPetru />
      <Testimonials/>
      <AboutPetru />
      <LocationsMap />
      
      <Footer />
      <FloatingCart />
    </div>
  );
}

export default App;