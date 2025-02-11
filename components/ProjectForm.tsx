"use client";
import { FC, FormEvent, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { DatePicker } from "./DatePicker";
import { Switch } from "./ui/switch";

interface FormData {
  phone: string;
  projectType: string;
  deadline: Date | undefined;
  isFlexible: boolean;
  details: string;
}

const ProjectForm: FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    phone: "",
    projectType: "",
    deadline: undefined,
    isFlexible: false,
    details: "",
  });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const formattedDate = formData.deadline 
        ? new Date(formData.deadline).toISOString().split('T')[0] // This will give us YYYY-MM-DD
        : null;

      const response = await fetch('/api/submit-project', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          deadline: formattedDate,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

      // Reset form
      setFormData({
        phone: "",
        projectType: "",
        deadline: undefined,
        isFlexible: false,
        details: "",
      });

      alert('Project submitted successfully!');
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Failed to submit project. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full mx-auto px-6 pb-20">
      <Card className="bg-gray-900/50 border-gray-800 z-40 max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle className="text-white text-2xl z-40">
            Halo bro, mau bantuin proyek apa nih?
          </CardTitle>
          <p className="text-gray-400 z-40">
            Kami menyediakan layanan proyek IT yang terjangkau, efisien, dan
            dapat diandalkan.
          </p>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6 z-40">
            <div>
              <h3 className="text-white mb-2 z-40">Detail Proyek</h3>
              <p className="text-sm text-gray-400 mb-1 z-40 mt-2">
                  No WhatsApp
                </p>
              <div>
                <Input 
                  type="text" 
                  placeholder="Masukkan nomor whatsapp mu" 
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                />
              </div>
              <div className="mt-2">
                <p className="text-sm text-gray-400 mb-1 z-40 mt-2">
                  Pilih tipe proyekmu
                </p>
                <Select 
                  value={formData.projectType}
                  onValueChange={(value) => setFormData({ ...formData, projectType: value })}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Pilih tipe proyek" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Website PHP">Website PHP</SelectItem>
                    <SelectItem value="Website Javascript">
                      Website Javascript
                    </SelectItem>
                    <SelectItem value="Aplikasi Mobile">
                      Aplikasi Mobile
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="mt-2">
                <p className="text-sm text-gray-400 mb-1 z-40 mt-2">
                  Masukkan deadline
                </p>
                <div className="w-full grid grid-cols-2 gap-4">
                  <DatePicker 
                    date={formData.deadline}
                    setDate={(date) => setFormData({ ...formData, deadline: date })}
                  />
                  <div className="flex items-center">
                    <Switch 
                      id="flexible" 
                      checked={formData.isFlexible}
                      onCheckedChange={(checked) => setFormData({ ...formData, isFlexible: checked })}
                    />
                    <label
                      htmlFor="flexible"
                      className="ml-2 text-sm text-gray-400"
                    >
                      Flexible
                    </label>
                  </div>
                </div>
              </div>
              <p className="text-sm text-gray-400 mb-1 z-40 mt-2">
                Boleh diceritakan tentang proyekmu
              </p>
              <Textarea
                name="details"
                placeholder="Masukkan detail proyek seperti fitur, fungsionalitas, dll"
                className="border-gray-700 text-white z-40"
                rows={6}
                value={formData.details}
                onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                required
              />
            </div>
            <div className="flex justify-end">
              <Button variant={"primary"} type="submit" disabled={isLoading}>
                {isLoading ? "Submitting..." : "Buat Proyek"}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProjectForm;
