import { ContactForm } from "@/components/contact-form";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock, MessageSquare } from "lucide-react";

export default function ContactPage() {
  const openWhatsApp = () => {
    const phoneNumber = '+33612345678';
    const message = 'Bonjour, je souhaite obtenir des informations sur vos équipements.';
    const whatsappUrl = `https://wa.me/${phoneNumber.replace(/\+/g, '')}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-white mb-4">Contactez-nous</h1>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto">
            Notre équipe d'experts est à votre disposition pour vous accompagner dans vos projets
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <ContactForm />
          
          {/* Contact Information */}
          <div className="text-white">
            <Card className="bg-white/10 backdrop-blur-sm mb-8">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-6 text-white">Informations de Contact</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <MapPin className="text-white h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-2 text-white">Adresse</h3>
                      <p className="text-gray-200">
                        Zone Industrielle Solution 88<br />
                        Avenue de l'Industrie, 12345 Ville<br />
                        France
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <Phone className="text-white h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-2 text-white">Téléphone</h3>
                      <p className="text-gray-200">+33 1 23 45 67 89</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <MessageSquare className="text-white h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-2 text-white">WhatsApp</h3>
                      <p className="text-gray-200 mb-2">+33 6 12 34 56 78</p>
                      <Button
                        onClick={openWhatsApp}
                        className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg"
                      >
                        <MessageSquare className="mr-2 h-4 w-4" />
                        Contacter
                      </Button>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <Mail className="text-white h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-2 text-white">Email</h3>
                      <p className="text-gray-200">
                        contact@solution88.fr<br />
                        commercial@solution88.fr
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <Clock className="text-white h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-2 text-white">Horaires d'ouverture</h3>
                      <p className="text-gray-200">
                        Lun-Ven: 8h00 - 18h00<br />
                        Sam: 8h00 - 12h00<br />
                        Dim: Fermé
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Map Placeholder */}
            <Card className="bg-white/10 backdrop-blur-sm">
              <CardContent className="p-4">
                <div className="bg-accent/20 h-64 rounded-lg flex items-center justify-center">
                  <div className="text-center text-white">
                    <MapPin className="h-12 w-12 mx-auto mb-4" />
                    <p className="text-sm">Carte de localisation</p>
                    <p className="text-xs mt-2 text-gray-300">
                      Intégration Google Maps à venir
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
