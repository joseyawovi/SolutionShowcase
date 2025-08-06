import { useParams, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, FileText, Phone, MessageSquare } from "lucide-react";
import { EQUIPMENT_DATA } from "@/lib/constants";

export default function ProductDetailPage() {
  const params = useParams();
  const [, navigate] = useLocation();
  
  const productId = params.id;
  const equipment = EQUIPMENT_DATA.find(eq => eq.id === productId);

  if (!equipment) {
    return (
      <div className="min-h-screen bg-neutral flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-dark mb-4">Produit non trouvé</h1>
          <Button onClick={() => navigate("/equipment")}>
            Retour au catalogue
          </Button>
        </div>
      </div>
    );
  }

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
    <div className="min-h-screen bg-neutral">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Button
          variant="outline"
          onClick={() => navigate("/equipment")}
          className="mb-6"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Retour au catalogue
        </Button>

        <div className="bg-white rounded-xl p-6 mb-8">
          <div className="flex flex-col md:flex-row justify-between items-start mb-6">
            <div>
              <h1 className="text-3xl font-bold text-dark mb-4">{equipment.name}</h1>
              <div className="flex items-center gap-4">
                <Badge className={`${getCategoryColor(equipment.category)} px-3 py-1 rounded-full text-sm font-medium`}>
                  {equipment.category === 'agriculture' ? 'Agriculture' : 
                   equipment.category === 'construction' ? 'BTP' : 'Industrie'}
                </Badge>
                <span className={`font-bold ${getConditionColor(equipment.condition)}`}>
                  {equipment.condition === 'new' ? 'Neuf' : 'Occasion'} - Excellent état
                </span>
              </div>
            </div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Image Gallery */}
            <div>
              <img
                src={equipment.images[0]}
                alt={equipment.name}
                className="w-full h-96 object-cover rounded-lg shadow-lg mb-4"
              />
              <div className="grid grid-cols-3 gap-2">
                {equipment.images.slice(1, 4).map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`${equipment.name} vue ${index + 2}`}
                    className="h-20 object-cover rounded cursor-pointer hover:opacity-80"
                  />
                ))}
              </div>
            </div>
            
            {/* Specifications */}
            <div>
              <h2 className="text-2xl font-bold text-dark mb-6">Caractéristiques techniques</h2>
              <div className="space-y-4">
                {Object.entries(specs).map(([key, value]) => (
                  <div key={key} className="flex justify-between items-center border-b border-gray-200 pb-3">
                    <span className="text-accent capitalize font-medium">{key.replace('_', ' ')}</span>
                    <span className="font-bold text-dark">{value as string}</span>
                  </div>
                ))}
                {equipment.year && (
                  <div className="flex justify-between items-center border-b border-gray-200 pb-3">
                    <span className="text-accent font-medium">Année</span>
                    <span className="font-bold text-dark">{equipment.year}</span>
                  </div>
                )}
                {equipment.hours && (
                  <div className="flex justify-between items-center border-b border-gray-200 pb-3">
                    <span className="text-accent font-medium">Heures de fonctionnement</span>
                    <span className="font-bold text-dark">{equipment.hours.toLocaleString()} h</span>
                  </div>
                )}
                <div className="flex justify-between items-center">
                  <span className="text-accent font-medium">Disponibilité</span>
                  <span className="font-bold text-support">Immédiate</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="bg-white rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-bold text-dark mb-4">Description détaillée</h2>
          <p className="text-accent leading-relaxed text-lg">
            {equipment.description} Cette machine a été entièrement révisée et contrôlée par nos techniciens certifiés. 
            Elle bénéficie d'une garantie de 6 mois pièces et main d'œuvre. L'équipement est en parfait état d'entretien, 
            prêt à l'emploi et livré avec tous les documents nécessaires (certificats, manuels, historique d'entretien).
            Nos équipes techniques restent à votre disposition pour toute question ou formation à l'utilisation.
          </p>
        </div>
        
        {/* Action Buttons */}
        <div className="bg-white rounded-xl p-6">
          <h2 className="text-2xl font-bold text-dark mb-6">Intéressé par cet équipement ?</h2>
          <div className="flex flex-col md:flex-row gap-4">
            <Button className="bg-secondary hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-lg flex-1">
              <FileText className="mr-2 h-5 w-5" />
              Demander un Devis Détaillé
            </Button>
            <Button
              onClick={openWhatsApp}
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-lg flex-1"
            >
              <MessageSquare className="mr-2 h-5 w-5" />
              Contact WhatsApp
            </Button>
            <Button
              variant="outline"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-white font-bold py-4 px-8 rounded-lg flex-1"
            >
              <Phone className="mr-2 h-5 w-5" />
              Appeler maintenant
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
