import { useState } from "react";
import { Flag, AlertTriangle, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const reportReasons = [
  "Fake or misleading listing",
  "Inappropriate content",
  "Scam or fraud",
  "User not responding",
  "Book condition misrepresented",
  "Other issue",
];

const Report = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    reason: "",
    bookOrUser: "",
    description: "",
    evidence: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Report Submitted",
      description: "Thank you for helping keep BookSwap safe. We'll review your report shortly.",
    });
    setFormData({ reason: "", bookOrUser: "", description: "", evidence: "" });
  };

  return (
    <div className="max-w-2xl animate-fade-in">
      <div className="mb-6">
        <h2 className="font-serif text-2xl font-bold text-foreground">Report an Issue</h2>
        <p className="text-muted-foreground">Help us keep BookSwap safe for everyone</p>
      </div>

      <div className="bg-card rounded-2xl p-6 card-elevated">
        {/* Warning Notice */}
        <div className="flex items-start gap-3 p-4 rounded-lg bg-muted border border-border mb-6">
          <AlertTriangle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
          <div className="text-sm">
            <p className="font-medium mb-1">Before reporting:</p>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              <li>Try to resolve the issue through chat first</li>
              <li>Make sure you have evidence to support your claim</li>
              <li>False reports may result in account suspension</li>
            </ul>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label>What are you reporting? *</Label>
            <Select
              value={formData.reason}
              onValueChange={(value) => setFormData({ ...formData, reason: value })}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select a reason" />
              </SelectTrigger>
              <SelectContent>
                {reportReasons.map((reason) => (
                  <SelectItem key={reason} value={reason}>
                    {reason}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="bookOrUser">Book Title or Username *</Label>
            <Input
              id="bookOrUser"
              value={formData.bookOrUser}
              onChange={(e) => setFormData({ ...formData, bookOrUser: e.target.value })}
              placeholder="Enter the book title or user you're reporting"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Describe the Issue *</Label>
            <Textarea
              id="description"
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              placeholder="Provide details about what happened..."
              rows={5}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="evidence">Evidence (Optional)</Label>
            <Input
              id="evidence"
              value={formData.evidence}
              onChange={(e) => setFormData({ ...formData, evidence: e.target.value })}
              placeholder="Links to screenshots, chat logs, etc."
            />
            <p className="text-xs text-muted-foreground">
              Providing evidence helps us investigate faster
            </p>
          </div>

          <Button type="submit" variant="hero" size="lg" className="w-full">
            <Send className="h-4 w-4 mr-2" />
            Submit Report
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Report;
