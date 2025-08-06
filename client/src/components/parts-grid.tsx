import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Part } from "@/lib/types";

interface PartsGridProps {
  parts: Part[];
}

export function PartsGrid({ parts }: PartsGridProps) {
  const getAvailabilityColor = (availability: string) => {
    switch (availability) {
      case 'in_stock':
        return 'text-primary';
      case 'on_order':
        return 'text-secondary';
      default:
        return 'text-accent';
    }
  };

  const getAvailabilityText = (availability: string) => {
    switch (availability) {
      case 'in_stock':
        return 'En stock';
      case 'on_order':
        return 'Sur commande';
      default:
        return 'Rupture';
    }
  };

  return (
    <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
      {parts.map((part) => (
        <Card key={part.id} className="overflow-hidden shadow-md hover:shadow-lg transition-shadow">
          <img
            src={part.images[0]}
            alt={part.name}
            className="w-full h-32 object-cover"
          />
          <CardContent className="p-4">
            <h4 className="font-bold text-dark mb-2">{part.name}</h4>
            <p className="text-sm text-accent mb-2">Ref: {part.reference}</p>
            <p className="text-xs text-accent mb-3">
              Compatible: {part.compatibility.join(', ')}
            </p>
            <div className="flex justify-between items-center">
              <span className={`font-bold ${getAvailabilityColor(part.availability)}`}>
                {getAvailabilityText(part.availability)}
              </span>
              <Button className="bg-secondary hover:bg-orange-600 text-white px-3 py-1 rounded text-sm">
                Devis
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
