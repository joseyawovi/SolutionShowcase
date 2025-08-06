import { Button } from "@/components/ui/button";
import { useState } from "react";

export function LanguageSwitcher() {
  const [language, setLanguage] = useState("FR");

  const toggleLanguage = () => {
    setLanguage(language === "FR" ? "EN" : "FR");
  };

  return (
    <div className="flex items-center space-x-2">
      <Button
        variant={language === "FR" ? "default" : "outline"}
        size="sm"
        onClick={toggleLanguage}
        className="text-sm px-3 py-1"
      >
        FR
      </Button>
      <Button
        variant={language === "EN" ? "default" : "outline"}
        size="sm"
        onClick={toggleLanguage}
        className="text-sm px-3 py-1"
      >
        EN
      </Button>
    </div>
  );
}
