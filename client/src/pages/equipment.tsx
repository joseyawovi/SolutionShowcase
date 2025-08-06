import { useState } from "react";
import { Button } from "@/components/ui/button";
import { EquipmentCard } from "@/components/equipment-card";
import { ProductModal } from "@/components/product-modal";
import { EQUIPMENT_DATA } from "@/lib/constants";
import { Equipment } from "@/lib/types";

export default function EquipmentPage() {
  const [selectedEquipment, setSelectedEquipment] = useState<Equipment | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState("all");

  const handleViewDetails = (equipment: Equipment) => {
    setSelectedEquipment(equipment);
    setIsModalOpen(true);
  };

  const filteredEquipment = activeFilter === "all" 
    ? EQUIPMENT_DATA 
    : EQUIPMENT_DATA.filter(eq => eq.category === activeFilter);

  return (
    <div className="min-h-screen bg-neutral">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-dark mb-4">Catalogue des Engins</h1>
            <p className="text-lg text-accent">Découvrez notre sélection d'équipements professionnels</p>
          </div>
          
          {/* Filters */}
          <div className="flex flex-wrap gap-2 mt-4 md:mt-0">
            <Button
              onClick={() => setActiveFilter("all")}
              variant={activeFilter === "all" ? "default" : "outline"}
              className="px-4 py-2 rounded-lg font-medium"
            >
              Tous
            </Button>
            <Button
              onClick={() => setActiveFilter("agriculture")}
              variant={activeFilter === "agriculture" ? "default" : "outline"}
              className={`px-4 py-2 rounded-lg font-medium ${
                activeFilter === "agriculture" 
                  ? "bg-support text-white" 
                  : "bg-white text-dark hover:bg-support hover:text-white"
              }`}
            >
              Agriculture
            </Button>
            <Button
              onClick={() => setActiveFilter("construction")}
              variant={activeFilter === "construction" ? "default" : "outline"}
              className={`px-4 py-2 rounded-lg font-medium ${
                activeFilter === "construction" 
                  ? "bg-secondary text-white" 
                  : "bg-white text-dark hover:bg-secondary hover:text-white"
              }`}
            >
              BTP
            </Button>
            <Button
              onClick={() => setActiveFilter("industry")}
              variant={activeFilter === "industry" ? "default" : "outline"}
              className={`px-4 py-2 rounded-lg font-medium ${
                activeFilter === "industry" 
                  ? "bg-primary text-white" 
                  : "bg-white text-dark hover:bg-primary hover:text-white"
              }`}
            >
              Industrie
            </Button>
          </div>
        </div>
        
        {/* Equipment Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEquipment.map((equipment) => (
            <EquipmentCard
              key={equipment.id}
              equipment={equipment}
              onViewDetails={handleViewDetails}
            />
          ))}
        </div>

        {filteredEquipment.length === 0 && (
          <div className="text-center py-12">
            <p className="text-lg text-accent">Aucun équipement trouvé pour cette catégorie.</p>
          </div>
        )}
      </div>

      <ProductModal
        equipment={selectedEquipment}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}
