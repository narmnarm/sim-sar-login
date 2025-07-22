import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

export const AccessForm = () => {
  const [password, setPassword] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Show access denied toast
    toast({
      title: "Access Denied",
      description: "Invalid access code. Please contact your administrator.",
      variant: "destructive",
    });
    
    // Clear the password field
    setPassword("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center gap-6 w-full max-w-sm mx-auto">
      <Input
        type="password"
        placeholder="Enter access code..."
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="text-center text-lg py-3 border-border focus:ring-ring bg-background"
        required
      />
      <Button 
        type="submit" 
        className="w-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
      >
        Submit
      </Button>
    </form>
  );
};