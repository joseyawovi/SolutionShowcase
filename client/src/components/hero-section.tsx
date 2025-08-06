import { Button } from "@/components/ui/button";
import { Search, Phone } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative bg-industrial-dark">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-80"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')`
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-industrial-dark/90 to-industrial-gray/80"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Spécialistes en Équipements Industriels
          </h1>
          <p className="text-xl text-gray-100 mb-8 max-w-3xl mx-auto">
            Solution 88 vous accompagne dans vos projets avec une large gamme
            d'engins et pièces détachées pour l'agriculture, le BTP et l'industrie.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-secondary hover:bg-orange-500 text-industrial-dark font-bold py-4 px-8 rounded-lg shadow-lg">
              <Search className="mr-2 h-5 w-5" />
              Découvrir nos Équipements
            </Button>
            <Button 
              variant="outline" 
              className="border-2 border-secondary text-secondary hover:bg-secondary hover:text-industrial-dark font-bold py-4 px-8 rounded-lg shadow-lg"
            >
              <Phone className="mr-2 h-5 w-5" />
              Demander un Devis
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
