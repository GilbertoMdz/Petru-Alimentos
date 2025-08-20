import { useState } from 'react';
import { ShoppingCart, X, Plus, Minus, Trash2 } from 'lucide-react';

const FloatingCart = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Premium Dog Food",
      price: 899,
      quantity: 1,
      image: "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=100"
    },
    {
      id: 2,
      name: "Vitaminas para Gatos",
      price: 450,
      quantity: 2,
      image: "https://images.pexels.com/photos/4153123/pexels-photo-4153123.jpeg?auto=compress&cs=tinysrgb&w=100"
    }
  ]);

  const updateQuantity = (id: any, change: any) => {
    setCartItems(items =>
      items.map(item =>
        item.id === id
          ? { ...item, quantity: Math.max(0, item.quantity + change) }
          : item
      ).filter(item => item.quantity > 0)
    );
  };

  const removeItem = (id: any  ) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const getTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  return (
    <>
      {/* Floating Cart Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-40 bg-yellow-500 text-black w-16 h-16 rounded-full shadow-2xl hover:bg-yellow-600 transform hover:scale-110 transition-all duration-300 flex items-center justify-center group"
      >
        <ShoppingCart className="w-6 h-6" />
        {getTotalItems() > 0 && (
          <span className="absolute -top-2 -right-2 bg-black text-white text-sm rounded-full w-6 h-6 flex items-center justify-center font-bold animate-pulse">
            {getTotalItems()}
          </span>
        )}
      </button>

      {/* Cart Sidebar */}
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />

          {/* Cart Panel */}
          <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl">
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-200">
                <h2 className="text-xl font-bold text-black">
                  Carrito ({getTotalItems()})
                </h2>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
                >
                  <X className="w-5 h-5 text-gray-600" />
                </button>
              </div>

              {/* Cart Items */}
              <div className="flex-1 overflow-y-auto p-6">
                {cartItems.length === 0 ? (
                  <div className="text-center py-12">
                    <ShoppingCart className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                    <p className="text-gray-500 text-lg">Tu carrito está vacío</p>
                    <p className="text-gray-400 text-sm">Agrega algunos productos para comenzar</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {cartItems.map((item) => (
                      <div key={item.id} className="bg-gray-50 rounded-lg p-4">
                        <div className="flex items-center gap-4">
                          {/* Product Image */}
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-16 h-16 object-cover rounded-lg"
                          />

                          {/* Product Info */}
                          <div className="flex-1 min-w-0">
                            <h3 className="font-semibold text-black truncate">
                              {item.name}
                            </h3>
                            <p className="text-gray-600 font-medium">
                              ${item.price} c/u
                            </p>

                            {/* Quantity Controls */}
                            <div className="flex items-center gap-2 mt-2">
                              <button
                                onClick={() => updateQuantity(item.id, -1)}
                                className="w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center transition-colors duration-200"
                              >
                                <Minus className="w-4 h-4 text-gray-600" />
                              </button>
                              
                              <span className="font-semibold min-w-[2rem] text-center">
                                {item.quantity}
                              </span>
                              
                              <button
                                onClick={() => updateQuantity(item.id, 1)}
                                className="w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center transition-colors duration-200"
                              >
                                <Plus className="w-4 h-4 text-gray-600" />
                              </button>
                            </div>
                          </div>

                          {/* Price & Remove */}
                          <div className="text-right">
                            <p className="font-bold text-black mb-2">
                              ${item.price * item.quantity}
                            </p>
                            <button
                              onClick={() => removeItem(item.id)}
                              className="text-red-500 hover:text-red-700 transition-colors duration-200"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Footer */}
              {cartItems.length > 0 && (
                <div className="border-t border-gray-200 p-6 space-y-4">
                  {/* Subtotal */}
                  <div className="flex items-center justify-between text-lg font-bold">
                    <span className="text-black">Total:</span>
                    <span className="text-black">${getTotalPrice()}</span>
                  </div>

                  {/* Shipping Notice */}
                  <p className="text-sm text-gray-500 text-center">
                    Envío gratis en compras mayores a $500
                  </p>

                  {/* Checkout Buttons */}
                  <div className="space-y-3">
                    <button className="w-full bg-black text-white py-3 rounded-full font-semibold hover:bg-gray-800 transition-all duration-300 transform hover:scale-105">
                      Finalizar compra
                    </button>
                    
                    <button
                      onClick={() => setIsOpen(false)}
                      className="w-full bg-gray-100 text-black py-3 rounded-full font-semibold hover:bg-gray-200 transition-all duration-300"
                    >
                      Seguir comprando
                    </button>
                  </div>

                  {/* Payment Methods */}
                  <div className="text-center pt-2">
                    <p className="text-xs text-gray-500 mb-2">Aceptamos:</p>
                    <div className="flex justify-center gap-2">
                      <div className="w-8 h-5 bg-gray-200 rounded text-xs flex items-center justify-center">
                        VISA
                      </div>
                      <div className="w-8 h-5 bg-gray-200 rounded text-xs flex items-center justify-center">
                        MC
                      </div>
                      <div className="w-8 h-5 bg-gray-200 rounded text-xs flex items-center justify-center">
                        AMEX
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FloatingCart;