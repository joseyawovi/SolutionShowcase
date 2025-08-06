import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FileText, Phone, MessageSquare } from "lucide-react";
import { Equipment } from "@/lib/types";

interface ProductModalProps {
  equipment: Equipment | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ProductModal({ equipment, isOpen, onClose }: ProductModalProps) {
  if (!equipment) return null;

  const specs = JSON.parse(equipment.specifications);
  
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

  const openWhatsApp = () => {
    const phoneNumber = '+33612345678';
    const message = `Bonjour, je souhaite obtenir des informations sur le ${equipment.name}.`;
    const whatsappUrl = `https://wa.me/${phoneNumber.replace(/\+/g, '')}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-dark mb-2">
            {equipment.name}
          </DialogTitle>
          <div className="flex items-center gap-4">
            <Badge className={`${getCategoryColor(equipment.category)} px-3 py-1 rounded-full text-sm font-medium`}>
              {equipment.category === 'agriculture' ? 'Agriculture' : 
               equipment.category === 'construction' ? 'BTP' : 'Industrie'}
            </Badge>
            <span className={`font-bold ${getConditionColor(equipment.condition)}`}>
              {equipment.condition === 'new' ? 'Neuf' : 'Occasion'} - Excellent état
            </span>
          </div>
        </DialogHeader>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div>
            <img
              src={equipment.images[0]}
              alt={equipment.name}
              className="w-full h-64 object-cover rounded-lg shadow-lg mb-4"
            />
            <div className="grid grid-cols-3 gap-2">
              {equipment.images.slice(1, 4).map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`${equipment.name} vue ${index + 2}`}
                  className="h-20 object-cover rounded cursor-pointer"
                />
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-dark mb-4">Caractéristiques techniques</h3>
            <div className="space-y-3">
              {Object.entries(specs).map(([key, value]) => (
                <div key={key} className="flex justify-between items-center border-b border-gray-200 pb-2">
                  <span className="text-accent capitalize">{key.replace('_', ' ')}</span>
                  <span className="font-medium text-dark">{value as string}</span>
                </div>
              ))}
              {equipment.year && (
                <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                  <span className="text-accent">Année</span>
                  <span className="font-medium text-dark">{equipment.year}</span>
                </div>
              )}
              {equipment.hours && (
                <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                  <span className="text-accent">Heures de fonctionnement</span>
                  <span className="font-medium text-dark">{equipment.hours.toLocaleString()} h</span>
                </div>
              )}
              <div className="flex justify-between items-center">
                <span className="text-accent">Disponibilité</span>
                <span className="font-bold text-support">Immédiate</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-bold text-dark mb-4">Description</h3>
          <p className="text-accent leading-relaxed">
            {equipment.description} Machine révisée et contrôlée par nos techniciens certifiés. 
            Garantie 6 mois pièces et main d'œuvre. Parfait état d'entretien et prête à l'emploi.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <Button className="bg-secondary hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-lg flex-1">
            <FileText className="mr-2 h-5 w-5" />
            Demander un Devis
          </Button>
          <Button
            onClick={openWhatsApp}
            className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-lg flex-1"
          >
            <MessageSquare className="mr-2 h-5 w-5" />
            Contact WhatsApp
          </Button>
          <Button
            variant="outline"
            className="border-2 border-primary text-primary hover:bg-primary hover:text-white font-bold py-3 px-8 rounded-lg flex-1"
          >
            <Phone className="mr-2 h-5 w-5" />
            Appeler
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
