import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PartsGrid } from "@/components/parts-grid";
import { Settings, Droplets, Wrench, Palette } from "lucide-react";
import { PARTS_DATA } from "@/lib/constants";

export default function PartsPage() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredParts = activeFilter === "all" 
    ? PARTS_DATA 
    : PARTS_DATA.filter(part => part.category === activeFilter);

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-dark mb-4">Pièces Détachées</h1>
          <p className="text-lg text-accent max-w-2xl mx-auto">
            Large gamme de pièces d'origine et compatibles pour maintenir vos équipements en parfait état
          </p>
        </div>
        
        {/* Parts Categories */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <Card 
            className={`cursor-pointer transition-all ${
              activeFilter === "engine" ? "bg-primary text-white" : "bg-neutral hover:shadow-lg"
            }`}
            onClick={() => setActiveFilter(activeFilter === "engine" ? "all" : "engine")}
          >
            <CardContent className="p-6 text-center">
              <div className={`w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 ${
                activeFilter === "engine" ? "bg-white/20" : "bg-primary"
              }`}>
                <Settings className={`h-6 w-6 ${activeFilter === "engine" ? "text-white" : "text-white"}`} />
              </div>
              <h3 className={`font-bold mb-2 ${activeFilter === "engine" ? "text-white" : "text-dark"}`}>
                Moteur
              </h3>
              <p className={`text-sm ${activeFilter === "engine" ? "text-white/80" : "text-accent"}`}>
                Pièces moteur et transmission
              </p>
            </CardContent>
          </Card>
          
          <Card 
            className={`cursor-pointer transition-all ${
              activeFilter === "hydraulic" ? "bg-secondary text-white" : "bg-neutral hover:shadow-lg"
            }`}
            onClick={() => setActiveFilter(activeFilter === "hydraulic" ? "all" : "hydraulic")}
          >
            <CardContent className="p-6 text-center">
              <div className={`w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 ${
                activeFilter === "hydraulic" ? "bg-white/20" : "bg-secondary"
              }`}>
                <Droplets className={`h-6 w-6 text-white`} />
              </div>
              <h3 className={`font-bold mb-2 ${activeFilter === "hydraulic" ? "text-white" : "text-dark"}`}>
                Hydraulique
              </h3>
              <p className={`text-sm ${activeFilter === "hydraulic" ? "text-white/80" : "text-accent"}`}>
                Pompes, vérins, flexibles
              </p>
            </CardContent>
          </Card>
          
          <Card 
            className={`cursor-pointer transition-all ${
              activeFilter === "chassis" ? "bg-support text-white" : "bg-neutral hover:shadow-lg"
            }`}
            onClick={() => setActiveFilter(activeFilter === "chassis" ? "all" : "chassis")}
          >
            <CardContent className="p-6 text-center">
              <div className={`w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 ${
                activeFilter === "chassis" ? "bg-white/20" : "bg-support"
              }`}>
                <Wrench className={`h-6 w-6 text-white`} />
              </div>
              <h3 className={`font-bold mb-2 ${activeFilter === "chassis" ? "text-white" : "text-dark"}`}>
                Châssis
              </h3>
              <p className={`text-sm ${activeFilter === "chassis" ? "text-white/80" : "text-accent"}`}>
                Chenilles, roues, essieux
              </p>
            </CardContent>
          </Card>
          
          <Card 
            className={`cursor-pointer transition-all ${
              activeFilter === "cabin" ? "bg-accent text-white" : "bg-neutral hover:shadow-lg"
            }`}
            onClick={() => setActiveFilter(activeFilter === "cabin" ? "all" : "cabin")}
          >
            <CardContent className="p-6 text-center">
              <div className={`w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 ${
                activeFilter === "cabin" ? "bg-white/20" : "bg-accent"
              }`}>
                <Palette className={`h-6 w-6 text-white`} />
              </div>
              <h3 className={`font-bold mb-2 ${activeFilter === "cabin" ? "text-white" : "text-dark"}`}>
                Cabine
              </h3>
              <p className={`text-sm ${activeFilter === "cabin" ? "text-white/80" : "text-accent"}`}>
                Sièges, vitres, climatisation
              </p>
            </CardContent>
          </Card>
        </div>
        
        {/* Featured Parts */}
        <PartsGrid parts={filteredParts} />
        
        {filteredParts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-lg text-accent">Aucune pièce trouvée pour cette catégorie.</p>
          </div>
        )}
        
        <div className="text-center mt-12">
          <Button className="bg-primary hover:bg-blue-800 text-white font-bold py-3 px-8 rounded-lg">
            Catalogue complet des pièces
          </Button>
        </div>
      </div>
    </div>
  );
}
