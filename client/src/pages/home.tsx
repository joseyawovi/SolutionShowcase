import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { HeroSection } from "@/components/hero-section";
import { EquipmentCard } from "@/components/equipment-card";
import { ProductModal } from "@/components/product-modal";
import { Tractor, HardHat, Factory } from "lucide-react";
import { EQUIPMENT_DATA } from "@/lib/constants";
import { Equipment } from "@/lib/types";

export default function Home() {
  const [selectedEquipment, setSelectedEquipment] = useState<Equipment | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleViewDetails = (equipment: Equipment) => {
    setSelectedEquipment(equipment);
    setIsModalOpen(true);
  };

  const featuredEquipment = EQUIPMENT_DATA.filter(eq => eq.featured);

  return (
    <div className="min-h-screen bg-neutral">
      <HeroSection />

      {/* Services Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-dark mb-4">Nos Domaines d'Expertise</h2>
            <p className="text-lg text-accent max-w-2xl mx-auto">
              Nous proposons des solutions complètes pour tous vos besoins en équipements professionnels
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-neutral hover:shadow-lg transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-support rounded-full flex items-center justify-center mx-auto mb-4">
                  <Tractor className="text-white h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-dark mb-3">Agriculture</h3>
                <p className="text-accent mb-4">
                  Tracteurs, moissonneuses, équipements d'élevage et pièces agricoles de qualité professionnelle.
                </p>
                <Link href="/equipment?category=agriculture" className="text-support hover:text-green-700 font-medium">
                  En savoir plus →
                </Link>
              </CardContent>
            </Card>
            
            <Card className="bg-neutral hover:shadow-lg transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <HardHat className="text-white h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-dark mb-3">BTP</h3>
                <p className="text-accent mb-4">
                  Pelles, bulldozers, grues, camions et tout l'équipement pour vos chantiers de construction.
                </p>
                <Link href="/equipment?category=construction" className="text-secondary hover:text-orange-700 font-medium">
                  En savoir plus →
                </Link>
              </CardContent>
            </Card>
            
            <Card className="bg-neutral hover:shadow-lg transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Factory className="text-white h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-dark mb-3">Industrie</h3>
                <p className="text-accent mb-4">
                  Chariots élévateurs, convoyeurs, machines-outils et équipements industriels spécialisés.
                </p>
                <Link href="/equipment?category=industry" className="text-primary hover:text-blue-800 font-medium">
                  En savoir plus →
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Equipment */}
      <section className="py-16 bg-neutral">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-dark mb-4">Équipements en Vedette</h2>
            <p className="text-lg text-accent">Découvrez notre sélection d'équipements professionnels</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {featuredEquipment.map((equipment) => (
              <EquipmentCard
                key={equipment.id}
                equipment={equipment}
                onViewDetails={handleViewDetails}
              />
            ))}
          </div>
          
          <div className="text-center">
            <Link href="/equipment">
              <Button className="bg-secondary hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-lg">
                Voir tous les équipements
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <ProductModal
        equipment={selectedEquipment}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}
