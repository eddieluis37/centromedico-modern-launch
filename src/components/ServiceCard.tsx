import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ServiceCardProps {
  id: string;
  title: string;
  description: string;
  price: number;
  image: string;
  category: string;
  featured?: boolean;
  onAddToCart: (service: any) => void;
}

const ServiceCard = ({ 
  id, 
  title, 
  description, 
  price, 
  image, 
  category, 
  featured = false,
  onAddToCart 
}: ServiceCardProps) => {
  const handleAddToCart = () => {
    onAddToCart({ id, title, price });
  };

  return (
    <Card className={`group relative overflow-hidden transition-smooth hover:shadow-wellness ${featured ? 'border-wellness-primary border-2' : ''}`}>
      {featured && (
        <Badge className="absolute top-4 right-4 z-10 bg-wellness-primary text-primary-foreground">
          Destacado
        </Badge>
      )}
      
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-smooth group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-smooth" />
      </div>
      
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between mb-2">
          <Badge variant="secondary" className="text-xs">
            {category}
          </Badge>
          <span className="text-2xl font-bold text-wellness-primary">
            ${price.toLocaleString()}
          </span>
        </div>
        <CardTitle className="text-xl group-hover:text-wellness-primary transition-smooth">
          {title}
        </CardTitle>
      </CardHeader>
      
      <CardContent className="pb-4">
        <CardDescription className="text-base leading-relaxed">
          {description}
        </CardDescription>
      </CardContent>
      
      <CardFooter className="pt-0">
        <Button 
          variant="wellness" 
          className="w-full transition-bounce"
          onClick={handleAddToCart}
        >
          Agregar al Carrito
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ServiceCard;