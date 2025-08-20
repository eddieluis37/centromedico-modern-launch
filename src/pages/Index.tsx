import { useState } from "react";
import { toast } from "@/hooks/use-toast";
import HeroSection from "@/components/HeroSection";
import ServicesGrid from "@/components/ServicesGrid";
import CartPreview from "@/components/CartPreview";

interface CartItem {
  id: string;
  title: string;
  price: number;
  quantity: number;
}

const SERVICES = [
  {
    id: "1",
    title: "Rehabilitación Integral",
    description: "Programa completo de rehabilitación física y funcional con tecnología de vanguardia y seguimiento personalizado.",
    price: 150000,
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop",
    category: "Fisioterapia",
    featured: true
  },
  {
    id: "2", 
    title: "Terapia Holística",
    description: "Enfoque integrador que combina medicina tradicional con terapias alternativas para tu bienestar total.",
    price: 120000,
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=400&h=300&fit=crop",
    category: "Bienestar",
    featured: true
  },
  {
    id: "3",
    title: "Programa Anti-Aging",
    description: "Tratamiento especializado para retrasar el envejecimiento y mejorar tu calidad de vida de forma natural.",
    price: 200000,
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
    category: "Especializado",
    featured: true
  },
  {
    id: "4",
    title: "Consulta Nutricional",
    description: "Evaluación completa y plan nutricional personalizado para optimizar tu salud y rendimiento.",
    price: 80000,
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=400&h=300&fit=crop",
    category: "Nutrición"
  },
  {
    id: "5",
    title: "Medicina Regenerativa",
    description: "Tratamientos avanzados para la regeneración celular y recuperación de tejidos dañados.",
    price: 300000,
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400&h=300&fit=crop",
    category: "Especializado"
  },
  {
    id: "6",
    title: "Terapia de Relajación",
    description: "Sesiones especializadas para el manejo del estrés y mejora del bienestar mental y emocional.",
    price: 90000,
    image: "https://images.unsplash.com/photo-1545389336-cf090694435e?w=400&h=300&fit=crop",
    category: "Bienestar"
  }
];

const Index = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const handleAddToCart = (service: { id: string; title: string; price: number }) => {
    setCartItems(prev => {
      const existingItem = prev.find(item => item.id === service.id);
      
      if (existingItem) {
        return prev.map(item =>
          item.id === service.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      
      return [...prev, { ...service, quantity: 1 }];
    });
    
    toast({
      title: "Servicio agregado",
      description: `${service.title} ha sido agregado a tu carrito.`,
    });
  };

  const handleUpdateQuantity = (id: string, quantity: number) => {
    if (quantity === 0) {
      handleRemoveItem(id);
      return;
    }
    
    setCartItems(prev =>
      prev.map(item =>
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  const handleRemoveItem = (id: string) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
    toast({
      title: "Servicio eliminado",
      description: "El servicio ha sido eliminado de tu carrito.",
    });
  };

  const handleCheckout = () => {
    toast({
      title: "¡Gracias por tu compra!",
      description: "Te contactaremos pronto para coordinar tus servicios.",
    });
    setCartItems([]);
  };

  return (
    <div className="min-h-screen">
      <HeroSection />
      <ServicesGrid services={SERVICES} onAddToCart={handleAddToCart} />
      <CartPreview
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onCheckout={handleCheckout}
      />
    </div>
  );
};

export default Index;