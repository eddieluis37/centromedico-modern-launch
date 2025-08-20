import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ShoppingCart, X, Plus, Minus } from "lucide-react";

interface CartItem {
  id: string;
  title: string;
  price: number;
  quantity: number;
}

interface CartPreviewProps {
  items: CartItem[];
  onUpdateQuantity: (id: string, quantity: number) => void;
  onRemoveItem: (id: string) => void;
  onCheckout: () => void;
}

const CartPreview = ({ items, onUpdateQuantity, onRemoveItem, onCheckout }: CartPreviewProps) => {
  const [isOpen, setIsOpen] = useState(false);
  
  const total = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);

  if (items.length === 0) return null;

  return (
    <>
      {/* Floating Cart Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          variant="cart"
          size="lg"
          className="rounded-full h-14 w-14 shadow-wellness"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="relative">
            <ShoppingCart className="h-6 w-6" />
            {itemCount > 0 && (
              <Badge 
                className="absolute -top-2 -right-2 h-5 w-5 p-0 flex items-center justify-center bg-wellness-primary text-primary-foreground text-xs"
              >
                {itemCount}
              </Badge>
            )}
          </div>
        </Button>
      </div>

      {/* Cart Overlay */}
      {isOpen && (
        <>
          <div 
            className="fixed inset-0 bg-black/20 z-40 transition-opacity"
            onClick={() => setIsOpen(false)}
          />
          
          {/* Cart Panel */}
          <div className="fixed bottom-24 right-6 z-50 w-96 max-w-[calc(100vw-3rem)]">
            <Card className="shadow-wellness border-wellness-primary/20">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg flex items-center gap-2">
                    <ShoppingCart className="h-5 w-5 text-wellness-primary" />
                    Tu Carrito ({itemCount})
                  </CardTitle>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setIsOpen(false)}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-3 max-h-80 overflow-y-auto">
                {items.map((item) => (
                  <div key={item.id} className="flex items-center justify-between p-3 bg-gradient-card rounded-lg">
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-sm truncate">{item.title}</h4>
                      <p className="text-wellness-primary font-semibold">
                        ${item.price.toLocaleString()}
                      </p>
                    </div>
                    
                    <div className="flex items-center gap-2 ml-3">
                      <Button
                        variant="outline"
                        size="sm"
                        className="h-7 w-7 p-0"
                        onClick={() => onUpdateQuantity(item.id, Math.max(0, item.quantity - 1))}
                      >
                        <Minus className="h-3 w-3" />
                      </Button>
                      
                      <span className="w-8 text-center text-sm font-medium">
                        {item.quantity}
                      </span>
                      
                      <Button
                        variant="outline"
                        size="sm"
                        className="h-7 w-7 p-0"
                        onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                      >
                        <Plus className="h-3 w-3" />
                      </Button>
                      
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-7 w-7 p-0 text-destructive hover:text-destructive"
                        onClick={() => onRemoveItem(item.id)}
                      >
                        <X className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                ))}
                
                <Separator />
                
                <div className="flex justify-between items-center font-semibold text-lg">
                  <span>Total:</span>
                  <span className="text-wellness-primary">
                    ${total.toLocaleString()}
                  </span>
                </div>
                
                <Button 
                  variant="hero" 
                  className="w-full"
                  onClick={onCheckout}
                >
                  Proceder al Pago
                </Button>
              </CardContent>
            </Card>
          </div>
        </>
      )}
    </>
  );
};

export default CartPreview;