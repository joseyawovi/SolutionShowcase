import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Weight, Zap } from "lucide-react";
import { Equipment } from "@/lib/types";

interface EquipmentCardProps {
  equipment: Equipment;
  onViewDetails: (equipment: Equipment) => void;
}

export function EquipmentCard({ equipment, onViewDetails }: EquipmentCardProps) {
  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'agriculture':
        return 'bg-support text-white';
      case 'construction':
        return 'bg-secondary text-white';
      case 'industry':
        return 'bg-primary text-white';
      default:
        return 'bg-accent text-white';
    }
  };

  const getConditionColor = (condition: string) => {
    return condition === 'new' ? 'text-primary' : 'text-support';
  };

  const specs = JSON.parse(equipment.specifications);

  return (
    <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
      <img
        src={equipment.images[0]}
        alt={equipment.name}
        className="w-full h-48 object-cover"
      />
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-2">
          <Badge className={`${getCategoryColor(equipment.category)} px-3 py-1 rounded-full text-sm font-medium`}>
            {equipment.category === 'agriculture' ? 'Agriculture' : 
             equipment.category === 'construction' ? 'BTP' : 'Industrie'}
          </Badge>
          <span className={`font-bold ${getConditionColor(equipment.condition)}`}>
            {equipment.condition === 'new' ? 'Neuf' : 'Occasion'}
          </span>
        </div>
        <h3 className="text-xl font-bold text-dark mb-2">{equipment.name}</h3>
        <p className="text-accent mb-4">{equipment.description}</p>
        <div className="flex items-center justify-between">
          <div className="text-sm text-accent">
            {equipment.weight && (
              <p className="flex items-center">
                <Weight className="mr-2 h-4 w-4" />
                {equipment.weight >= 1000 ? `${equipment.weight / 1000} tonnes` : `${equipment.weight} kg`}
              </p>
            )}
            {equipment.power && (
              <p className="flex items-center">
                <Zap className="mr-2 h-4 w-4" />
                {equipment.power} HP
              </p>
            )}
          </div>
          <Button
            onClick={() => onViewDetails(equipment)}
            className="bg-primary hover:bg-blue-800 text-white px-6 py-2 rounded-lg font-medium"
          >
            Voir détails
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
