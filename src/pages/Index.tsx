import { useState } from "react";
import { Button } from "@/components/ui/button";
import { AccessForm } from "@/components/AccessForm";
import { ContactForm } from "@/components/ContactForm";
import Dashboard from "@/components/Dashboard";

const Index = () => {
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);
  const [showDashboard, setShowDashboard] = useState(false);

  if (showDashboard) {
    return <Dashboard />;
  }

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col justify-between p-6 animate-fade-in">
      {/* Header */}
      <div className="flex justify-center pt-16">
        <h1 className="text-6xl md:text-7xl font-instrument font-normal text-center">
          Simulate SAR
        </h1>
      </div>

      {/* Center Content */}
      <div className="flex-1 flex items-center justify-center px-4">
        <div className="space-y-4">
          <AccessForm />
          <Button 
            variant="outline" 
            onClick={() => setShowDashboard(true)}
            className="w-full"
          >
            View Dashboard Mockup
          </Button>
        </div>
      </div>

      {/* Bottom Right */}
      <div className="flex justify-end">
        <p className="text-sm text-muted-foreground">
          If you're not a registered team,{" "}
          <button
            onClick={() => setIsContactFormOpen(true)}
            className="underline hover:text-foreground transition-colors duration-200 font-medium"
          >
            register here
          </button>
          .
        </p>
      </div>

      <ContactForm 
        isOpen={isContactFormOpen} 
        onClose={() => setIsContactFormOpen(false)} 
      />
    </div>
  );
};

export default Index;
