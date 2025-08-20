import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-cemtir.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Brand Logo */}
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-4">
              <span className="text-wellness-primary">CEMTIR</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-light">
              Centro Médico Holístico, Terapias Integrales y Rehabilitación
            </p>
          </div>
          
          {/* Main Slogan */}
          <div className="mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              Sé el dueño de tu{" "}
              <span className="text-transparent bg-gradient-hero bg-clip-text">
                salud
              </span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Descubre un enfoque integral para tu bienestar. Combinamos medicina tradicional 
              con terapias alternativas para ofrecerte el mejor cuidado personalizado.
            </p>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              variant="hero" 
              size="lg"
              className="text-lg px-8 py-6 min-w-[200px]"
            >
              Reservar Cita
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="text-lg px-8 py-6 min-w-[200px] border-wellness-primary text-wellness-primary hover:bg-wellness-primary hover:text-primary-foreground"
            >
              Ver Servicios
            </Button>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-wellness-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-wellness-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;