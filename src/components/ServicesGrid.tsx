import ServiceCard from "./ServiceCard";

interface Service {
  id: string;
  title: string;
  description: string;
  price: number;
  image: string;
  category: string;
  featured?: boolean;
}

interface ServicesGridProps {
  services: Service[];
  onAddToCart: (service: any) => void;
}

const ServicesGrid = ({ services, onAddToCart }: ServicesGridProps) => {
  return (
    <section className="py-20 bg-gradient-accent">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Nuestros{" "}
            <span className="text-transparent bg-gradient-hero bg-clip-text">
              Servicios
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ofrecemos una amplia gama de servicios especializados para cuidar 
            tu salud de manera integral y personalizada.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              {...service}
              onAddToCart={onAddToCart}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;