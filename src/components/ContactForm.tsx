import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

interface ContactFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactForm = ({ isOpen, onClose }: ContactFormProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = "Registration Request - Simulate SAR";
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
    
    window.location.href = `mailto:nayelr03@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md animate-fade-in">
        <DialogHeader>
          <DialogTitle className="text-xl font-instrument">Register for Access</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            placeholder="Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
            className="border-border focus:ring-ring"
          />
          <Input
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
            className="border-border focus:ring-ring"
          />
          <Textarea
            placeholder="Tell us about your team and why you need access..."
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            required
            className="min-h-[100px] border-border focus:ring-ring"
          />
          <div className="flex gap-2 justify-end">
            <Button type="button" variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit" className="bg-primary text-primary-foreground hover:bg-primary/90">
              Send Request
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};